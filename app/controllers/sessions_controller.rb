class SessionsController < ApplicationController
include ActionController::Cookies

  def create
    # byebug
    #  the command is reaching the byebug from the front end
    find_user_login = User.find_by(user_name: params[:user_name])
    if find_user_login 
      if find_user_login.authenticate(params[:password])
        session[:user_id] = find_user_login.id
        render json: find_user_login
      else
          render json:{error:"This password/username does not match/exist"}
      end
    else
        render json: {error: "Invalid Username and/or Password"}
    end
  end

  def destory 
    session.delete(:user_id) 
    render json: {}
  end


  def get_current_user 
    current_user = User.find_by(id: session[:user_id])
    render json: current_user, status: :ok
  end

end
