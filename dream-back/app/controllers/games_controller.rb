class GamesController < ApplicationController
    before_action :user_not_logged_in
    def index
        @user = User.find_by(id: params[:id])
        #@games = Game.all
        if params[:user_id]
            @user = User.find_by(id: params[:user_id])
            @games = @user.games
            
        else 
            @games = Game.all 
            
        end
        #render json: @games, status: 200 
        games_json = GameSerializer.new(@games)
        render json: games_json
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
