class Api::PhotoTagsController < ApplicationController
  def index
    @photo_tags = Photo.find(params[:id]).tags
    render json: @photo_tags
  end

  def create
    @photo_tags = PhotoTag.new({tag_id: photo_tags_params[:tag_id], photo_id: photo_tags_params[:photo_id]})
    if @photo_tags.save
      render json: @photo_tags
    else
      render json: {errors: @photo_tags.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    @photo_tags = PhotoTag.find(params[:id])
    @photo_tags.destroy
    render json: @photo_tags
  end

  private
  def photo_tags_params
    params.require(:photo_tags).permit(:tag_id, :photo_id)
  end
end
