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

    def destroy
        userchoice = Userchoice.find(params[:id])
        userchoice.destroy!
        head :no_content
    end

    private

    def us_params
        params.permit("userstory_id","event_id", "choice_id")
    end
end
