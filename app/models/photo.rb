class Photo < ApplicationRecord
  validates :img_url, :user, presence: true
  belongs_to :user
  belongs_to :album
  has_many :comments, dependent: :destroy
end
