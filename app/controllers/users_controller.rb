class UsersController < ApplicationController

    before_action :user_find_method, except[ :index, :create ]


    def index
        render json:User.all
    end

    def show 
        if user_find_method 
            render json: user_find_method
        else
            render json:{error:"User Not Found"}
        end
    end

    def create 
        new_user= User.create( new_user_params )

        if new_user.valid?
            new_user.save
            render json: new_user
        else 
            render json:{errors: new_user.errors.full_messages}
        end
    end

    def update 
        if user_find_method
            if user_find_method.update ( update_user_params)
                render json:user_find_method
            else
            render json: {errors: user_find_method.errors.full_messages}
            end
        else
            render json:{error:"User Not Found"}
        end
    end


    def destory
        if user_find_method
            destorying_user = user_find_method

            user_find_method.destory
            render json: destorying_user.id
        else
            render json:{error:"User Not Found"}
        end 
    end

    private 

    def new_user_params
        params.permit(:first_name, :last_name, :user_name, :email, :password)
    end

    def update_user_params
        params.permit(:first_name, :last_name, :user_name, :email, :password)
    end

    def user_find_method
        user_to_find = User.find_by(id: params[:id])
    end


end
