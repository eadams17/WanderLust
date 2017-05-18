class User < ApplicationRecord
  validates :email, :username, :firstname, :lastname, :password_digest,
            :session_token, presence: true
  validates :email, :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :photos

  attr_reader :password

  def self.find_by_credentials(email, password)
    @user = User.find_by_email(email)
    return @user if @user && @user.valid_password?(password)
    nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
