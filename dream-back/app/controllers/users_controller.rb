class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    def show
        user_json = UserSerializer.new(@user).serialized_json
        render json: user_json
    end

    def index
        @users = User.all
        users_json = UserSerializer.new(@users).serialized_json
        render json: users_json
    end 

    def create 
        @user = User.new(user_params)
        # binding.pry
        if @user.save
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user), status: :created
        else
            resp = {
                error: @user.errors.full_messages.to_sentence
            }
            render json: resp, status: :unprocessable_entity
        end
     end

    def update
        if @user.update(user_params)
            render json: @user
          else
            render json: @user.errors, status: :unprocessable_entity
          end         
    end

    def destroy
        @user.delete
        render json: {userId: @user.id} 
    end

    private
        # Use callbacks to share common setup or constraints between actions.
        def set_user
            @user = User.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def user_params
            params.require(:user).permit(:email, :name, :password)
        end 

    
end
