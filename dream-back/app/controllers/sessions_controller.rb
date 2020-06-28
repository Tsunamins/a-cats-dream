class SessionsController < ApplicationController

    def new
    end
 
    def create
    @user = User.find_by(email: params[:user][:email])
    if @user
        session[:user_id] = @user.id 
    end 
            
    end
    
    def destroy
        session.clear
        render json: {
            notice: "successfully logged out"
          }, status: :ok

    end
    
 


end
