class User < ApplicationRecord
    has_many :games, foreign_key: "user_id", class_name: "Game"
  

    validates :email, presence: true
    validates :email, uniqueness: true
end
