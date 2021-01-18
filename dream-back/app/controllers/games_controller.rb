class GamesController < ApplicationController
    include Secured ## <- our Secured Concern.
    def index
        @games = Game.all
        render json: GameSerializer.new(@games)

    end

    def show
        render json: @game
    end

    def create
        
    
        @game = current_user.games.build(game_params)

        if @game.save
        render json:  GameSerializer.new(@game), status: :created
        else
        error_resp = {
            error: @game.errors.full_messages.to_sentence
        }
        render json: error_resp, status: :unprocessable_entity
        end


    end

    def update
       
        @game = Game.find(params[:id])
        @game.update(game_params)
        render json: @game, status: 200
    end

    def destroy
        @game = Game.find(params[:id])
        @game.delete
        render json: {gameId: @game.id} 
    end

    private
        def game_params
            params.require(:game).permit(:playerX, :playerY, :fireflies_collected, :enemies_defeated)
        end


end
