class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :name, :games
  has_many :games, serializer: GameSerializer
end
