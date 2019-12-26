class GamesController < ApplicationController

    def index
        @games = Game.all
        render json: @games, status: 200 
    end

    def show
        @game = Game.find(params[:id])
        render json: @game, status: 200
    end

    def create
       
        @game = Game.create(game_params)
        render json: @game, status: 200
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
            params.require(:game).permit(:game_save, :user_id) #for now
        end


end
