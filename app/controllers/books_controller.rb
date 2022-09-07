class BooksController < ApplicationController

#  when a new book is created 
    #  it is attached to the logged in user
    #  creates a new book title, creates a new book author, creates a new book genre, creates a new book location, creates a new book trope
    #  filtres through authors, if exists selects that one, if not creates a new one
    #  filters through genres if exists selects that if not creates a new one
    #  filters through tropes if exsts selects that if not creates a new one
    #  filters through locations if exists selects that if not creates new one 
    # rails create_or_findby method (already exists)

    # def index 
    #     find_user = User.find_by(id: params[:id])
    #     find_books_belonging_to_user = Book.find_by(user_id: params[:user_id])
    #     if find_user.id === find_book_user.id
    #         render json: 

    #     end
    # end





end
