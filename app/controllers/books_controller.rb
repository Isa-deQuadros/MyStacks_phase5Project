class BooksController < ApplicationController

    
    def index
        render json: Book.all
    end


    def create
        current_user = User.find_by_id(session[:user_id])
        # its putting the new books inside the user_id space
        if current_user
            new_book= current_user.books.create(creating_new_books_params)
            # new_or_existing_author= Author.find_or_create_by_first_name_or_last_name(params[:first_name], params[:last_name])
            # new_bookAuthor = BookAuthor.create(book_id: new_book.id, author_id: new_or_existing_author)
            # byebug

            # new_or_existing_genre= Genre.find_or_create_by(params[:name])
            # new_bookGenre= BookGenre.create(book_id: new_book.id, genre_id: new_or_existing_genre.id)
            
            # new_or_existing_trope = Trope.find_or_create_by(params[:name])
            # BookTrope.create(book_id: new_book.id, trope_id:new_or_existing_trope)
            
            # new_or_existing_location = Location.find_or_create_by(params[:name])
            # BookLocation.create(book_id: new_book.id, location_id:new_or_existing_location)

            # render json: new_book, serializer: BookCreateSerializer
            render json: new_book
        end

    end


    def destroy 
        find_book = Book.find_by_id(params[:id])
        if find_book
            find_book.destroy
            render json: {}
        end
    end

private 

    def find_books_belonging_to_user
        find_books = Book.find_by(user_id: params[:user_id])
    end

    def creating_new_books_params 
        params.permit(:title, :price, :comment, :user_id)
    end

end
