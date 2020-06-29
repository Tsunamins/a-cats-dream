class User < ApplicationRecord
    has_secure_password
    #has_many :games, foreign_key: "user_id", class_name: "Game"
    has_many :games

    validates :email, presence: true
    validates :email, uniqueness: true
end
