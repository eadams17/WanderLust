class Api::PhotosTagsController < ApplicationController
  def index
    @photos_tags = Photo.find(params[:id]).tags
  end

  def create
    @photos_tags = PhotoTag.new({tag_id: photos_tags_params[:tag_id], photos_id: photos_tags_params[:photo_id]})
    if @photos_tags.save
      render json: @photos_tags
    else
      render json: {errors: @photos_tags.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    @photos_tags = PhotoTag.find(params[:id])
    @photos_tags.destroy
    render json: @photos_tags
  end

  private
  def photos_tags_params
    params.require(:photos_tags).permit(:tag_id, :photo_id)
  end
end
