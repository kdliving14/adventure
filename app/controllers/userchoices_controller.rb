class UserchoicesController < ApplicationController
    def index
        render json: @current_user.userchoices
    end

    def show
        userchoice = Userchoice.find(params[:id])
        render json: userchoice        
    end

    def create
        choices = Userchoice.create!(us_params)
        render json: choices
    end

    private

    def us_params
        params.permit("user_id","event_id", "choice_id")
    end
end
