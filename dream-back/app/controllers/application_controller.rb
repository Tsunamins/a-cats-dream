class ApplicationController < ActionController::API
      before_action :user_not_logged_in
      
  
  
      def current_user
     
        User.find_by(id: session[:user_id])
      end
    
      def logged_in?
        !!current_user
      end

      def user_not_logged_in
        puts "Not Logged In" if !logged_in?
    end
end
