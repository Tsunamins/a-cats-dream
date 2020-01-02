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
        @user = User.find_or_create_by(email: user_params[:email])

      render json: @user, status: 200
      
    end

    def update
       
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: @user, status: 200
         
    end

    def destroy
        @user = User.find(params[:id])
        @user.delete
        render json: {userId: @user.id} 
    end

    private
        def user_params
            params.require(:user).permit(:id, :email) #for now
        end 

    
end
