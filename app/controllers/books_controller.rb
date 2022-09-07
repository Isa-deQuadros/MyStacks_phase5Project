class BooksController < ApplicationController

#  when a new book is created 
    #  it is attached to the logged in user
    #  creates a new book title, creates a new book author, creates a new book genre, creates a new book location, creates a new book trope
    #  filtres through authors, if exists selects that one, if not creates a new one
    #  filters through genres if exists selects that if not creates a new one
    #  filters through tropes if exsts selects that if not creates a new one
    #  filters through locations if exists selects that if not creates new one 
    # rails create_or_findby method (already exists)

    
    def index
        render json: Book.all
    end


    def create
        current_user = User.find_by_id(session[:user_id])
        if current_user
            new_book= current_user.books.create(creating_new_books_params)
            byebug
            new_or_existing_genre= Genre.find_or_create_by(params[:genre])
            BookGenre.create(book_id: new_book.id, genre_id:new_or_existing_genre)

            render json: new_book, serializer: BookCreateSerializer
        end

    end


    def destroy 
        find_book = Book.find_by_id(params[:id])
        if find_book
            find_book.destroy
            head :no_content
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
