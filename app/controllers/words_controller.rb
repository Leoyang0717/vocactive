# frozen_string_literal: true

# This shiny device polishes bared foos
class WordsController < ApplicationController

  def index
    @word = Word.all
    @chinese = @word.pluck(:chinese)
    @korean = @word.pluck(:korean)
  end

  def new
    @word = Word.new
  end

  def create
    @word = Word.new(clean_params)
    return redirect_to words_path, notice: '新增單字成功' if @word.save

    render :new
  end

  def show
  end

  def update
  end

  def destroy
  end

  def clean_params
    params.require(:word).permit(:chinese, :korean)
  end
end
