class GamesController < ApplicationController

    def index
        @user = User.find_by(id: params[:id])
        #@games = Game.all
        if params[:user_id]
            @user = User.find_by(id: params[:user_id])
            @games = @user.games
      
        else 
            @games = Game.all 
        end
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
            params.require(:game).permit(:user_id, :playerX, :playerY, :fireflies_collected, :enemies_defeated)
        end


end
