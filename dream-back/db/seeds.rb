# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
{email: 'user1@user1.com'},])

# Game.create([
# {game_save: 'datagame1', user_id: 1},])

Stat.create([
{fireflies_collected: 5, enemies_defeated: 10, hit_by_enemy: 100, strategy_score: 10, game_id: 1},])

