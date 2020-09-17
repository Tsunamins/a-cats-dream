class UsersController < ApplicationController
    skip_before_action :require_login, only: [:create]

    def show
        @user = User.find(params[:id])
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
            payload = {user_id: user.id}
            token = encode_token(payload)
            puts token
            render json: {UserSerializer.new(@user), status: :created, jwt: token}
            #render json: UserSerializer.new(@user), status: :created
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
      
        # Only allow a trusted parameter "white list" through.
        def user_params
            params.require(:user).permit(:email, :name, :password)
        end 

    
end
