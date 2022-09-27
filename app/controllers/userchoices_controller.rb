class UserchoicesController < ApplicationController
    def index
        render json: @current_user.userchoices
    end

    def show
        userchoice = Userchoice.find(params[:id])
        render json: userchoice        
    end
end
