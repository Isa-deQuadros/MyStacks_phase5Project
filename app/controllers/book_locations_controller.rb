class BookLocationsController < ApplicationController

    def index
        render json: BookLocation.all
    end
end
