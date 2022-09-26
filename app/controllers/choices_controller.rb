class ChoicesController < ApplicationController
    def index
        render json: Choice.all
    end

    def show
        choice = Choice.find(params[:id])
        render json: choice 
    end
end
