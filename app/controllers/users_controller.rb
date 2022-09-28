class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: :create

    def index
        render json: User.all 
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create!(u_params)
        render json: user
    end

    def update
        @current_user.update!(u_params)
        render json: @current_user
    end

    def choose
        user = @current_user
        user.update!(c_param)
        render json: @current_user
    end

    private

    def u_params
        params.permit("username", "name", "password", "image_url")
    end

    def c_param
        params.permit("left_off")
    end

end
