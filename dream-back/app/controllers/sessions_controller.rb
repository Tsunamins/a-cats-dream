class SessionsController < ApplicationController

    def new
    end

    def create
    end
    
    def index
        @session = User.all
        render json: @session, status: 200 
    end


end
