class User < ApplicationRecord
    has_many :games
    has_many :stats, through: :games

    validates :email, presence: true
    validates :email, uniqueness: true
end
