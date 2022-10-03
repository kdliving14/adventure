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

    private

    def us_params
        params.permit("user_id","story_id")
    end

end
