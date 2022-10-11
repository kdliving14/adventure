class UserstoriesController < ApplicationController
    def index
        render json: @current_user.userstories
    end

    def show
        userstory = Userstory.find(params[:id])
        render json: userstory       
    end

    def create
        story = Userstory.create!(us_params)
        render json: story
    end

    def destroy
        userstory = Userstory.find(params[:id])
        userstory.destroy
        head :no_content
    end

    def choose
        userstory = Userstory.find(params[:user_id])
        userstory.update!(c_param)
        render json: @current_user
    end

    private

    def us_params
        params.permit("user_id","story_id")
    end

    def c_param
        params.permit(:left_off)
    end

end
