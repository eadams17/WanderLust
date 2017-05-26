class Api::PhotosController < ApplicationController

  def index
    if params[:user_id]
      @photos = User.find(params[:user_id]).photos
    elsif params[:current_user]
      @photos = current_user.photos
    elsif params[:tag_id]
      @tag = Tag.find(params[:tag_id])
      @photos = @tag.photos
    else
      @photos = Photo.all
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params.except(:tagArray))
    @photo.user_id = current_user.id

    if @photo.save
      photo_params[:tagArray].each do |tag_name|
        tag_id = Tag.find_by_tag_name(tag_name).id
        PhotoTag.create(tag_id: tag_id, photo_id: @photo.id)
      end
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(
      :caption,
      :img_url,
      :user_id,
      :album_id,
      :tagArray => []
    )
  end
end
