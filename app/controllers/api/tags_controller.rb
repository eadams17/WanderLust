class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      @phototag = PhotoTag.new(@tag.id, tag_params[:photo_id])
      if @phototag.save
        render :show
      end  
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render :show
  end

  private

  def tag_params
    params.require(:tag).permit(:tag_name, :photo_id)
  end
end
