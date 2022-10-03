class InventoriesController < ApplicationController
    def index
        render json: @current_user.inventories       
    end

    def create
        inventory = Inventory.create!(i_params)
        render json: inventory
    end

    private

    def i_params
        params.permit(:userstory_id, :item_id)
    end
end
