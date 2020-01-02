class User < ApplicationRecord
    has_many :games, foreign_key: "user_id", class_name: "Game"
    has_many :stats, through: :games

    validates :email, presence: true
    validates :email, uniqueness: true
end
