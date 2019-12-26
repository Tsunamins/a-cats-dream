class StatsController < ApplicationController
    def index
        @stats = Stat.all
        render json: @stats, status: 200 
    end

    def show
        @stat = Stat.find(params[:id])
        render json: @stat, status: 200
    end

    def create
       
        @stat = Stat.create(stat_params)
        render json: @stat, status: 200
    end

    def update
       
        @stat = Stat.find(params[:id])
        @stat.update(stat_params)
        render json: @stat, status: 200
    end

    def destroy
        @stat = Stat.find(params[:id])
        @stat.delete
        render json: {statId: @stat.id} 
    end

    private
        def stat_params
            params.require(:stat).permit(:fireflies_collected, :enemies_defeated, :hit_by_enemy, :strategy_score, :game_id) #for now
        end
end
