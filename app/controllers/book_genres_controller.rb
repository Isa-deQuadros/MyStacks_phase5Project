class BookGenresController < ApplicationController

    def index
        render json: BookGenre.all
    end
end
