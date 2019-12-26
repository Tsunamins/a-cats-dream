class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        render json: @user, status: 200
    end

    def index
        @users = User.all
        render json: @users, status: 200 
    end 

    def create 
        @user = User.new(user_params)
      
      if @user.valid?
        @user.save
        #if using sessions
        #session[:user_id] = @user.id
        
      #else
      render json: @user, status: 200
      end
    end

    def update
        #if using sessions and passwords, this below or something similar
        #@user = current_user   
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: @user, status: 200
         
    end

    def destroy
        @user = User.find(params[:id])
        @user.delete
        render json: {userId: @user.id} #do not want to pass back all info, just the reference to what was deleted
    end

    private
        def user_params
            params.require(:user).permit(:email) #for now
        end 

    
end
