class BookTropesController < ApplicationController

    def index
        render json: BookTrope.all
    end
end
