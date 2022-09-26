class InventoriesController < ApplicationController
    def show
        render json: @current_user.inventories       
    end
end
