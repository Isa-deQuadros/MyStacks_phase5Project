class BooksController < ApplicationController

    
    def index
        render json: Book.all
    end


    def create
        current_user = User.find_by_id(session[:user_id])

        if current_user
            new_book= current_user.books.create(creating_new_books_params)

            new_or_existing_author= Author.find_or_create_by(first_name: params[:first_name], last_name: params[:last_name])
            new_bookAuthor = BookAuthor.create(book_id: new_book.id, author_id: new_or_existing_author.id)

            new_or_existing_genre= Genre.find_or_create_by(name: params[:name])
            new_bookGenre= BookGenre.create(book_id: new_book.id, genre_id: new_or_existing_genre.id)
            
            new_or_existing_trope = Trope.find_or_create_by(name: params[:name])
            BookTrope.create(book_id: new_book.id, trope_id:new_or_existing_trope.id)
            
            new_or_existing_location = Location.find_or_create_by( name: params[:name])
            BookLocation.create(book_id: new_book.id, location_id:new_or_existing_location.id)

            render json: new_book, serializer: BookCreateSerializer
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


    def creating_new_books_params 
        params.permit(:title, :price, :comment, :user_id)
    end

end
