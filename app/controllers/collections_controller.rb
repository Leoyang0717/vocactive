# frozen_string_literal: true

# This shiny device polishes bared foos
class CollectionsController < ApplicationController
  def index
    @collections = Collection.all
  end

  def new
    @collection = Collection.new
  end

  def create
    byebug
    @collection = Collection.new(clean_params)
    return redirect_to collections_path, notice: '新增學習集成功' if @collection.save

    render :new
  end

  def show
    @collection = Collection.find(params[:id])
    @words = @collection.words
  end

  def edit; end

  def update; end

  def destroy; end

  private

  def clean_params
    params.require(:collection).permit(:title, :description, words_attributes:%i[id chinese korean _destroy])
  end
end
