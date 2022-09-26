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

    private

    def u_params
        params.permit("username", "name", "password", "image_url")
    end


end
