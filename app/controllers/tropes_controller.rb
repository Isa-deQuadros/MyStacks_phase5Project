class TropesController < ApplicationController

    def index
        render json: Trope.all
    end


end
