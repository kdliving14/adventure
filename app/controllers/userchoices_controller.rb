class UserchoicesController < ApplicationController
    def index
        render json: Userchoice.all 
    end

    def show
        userchoice = Userchoice.find(params[:id])
        render json: userchoice        
    end
end
