class Api::PhotoTagsController < ApplicationController
  def index
    @photo_tags = PhotoTag.all
    render json: @photo_tags
  end

  def create
    @photo_tags = PhotoTag.new(photo_tags_params)
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
