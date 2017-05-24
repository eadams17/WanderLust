class Api::CommentsController < ApplicationController

  def index
    if params[:photo_id]
      @comments = Comment.find(params[:photo_id])
    else
      @comments = Comment.all
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :photo_id, :body)
  end
end
