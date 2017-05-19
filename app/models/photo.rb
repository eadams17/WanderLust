class Photo < ApplicationRecord
  validates :img_url, :user, presence: true
  belongs_to :user
end