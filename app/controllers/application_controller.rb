class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authenticate_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable

    private
    def current_user 
        @current_user ||= User.find_by_id(session[:user_id])
    end 

    def authenticate_user 
        render json: { errors: {User: "Not Authorized"} }, status: :unauthorized unless current_user
    end

    def not_found(e)
        render json: {error: "#{e.model} not found"}, status: :not_found
    end

    def unprocessable(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

end
