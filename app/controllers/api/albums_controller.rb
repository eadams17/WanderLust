class Api::AlbumsController < ApplicationController
  def index
    if params[:user_id]
      @albums = User.find(params[:user_id]).albums
    elsif params[:current_user]
      @albums = current_user.albums
    else
      @albums = Album.all
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy!
    render :show
  end

  private

  def album_params
    params.require(:album).permit(
      :user_id,
      :title,
      :description,
      :thumbnail_url
    )
  end
end
