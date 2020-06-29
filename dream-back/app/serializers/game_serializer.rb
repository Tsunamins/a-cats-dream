class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :playerX, :playerY, :fireflies_collected, :enemies_defeated
end
