class PostsController < ApplicationController
  def index
  end

  def infinite_scrolling
    @posts = Post.paginate(page: params[:page],
                           per_page: 12).order('created_at DESC')

    respond_to do |format|
      format.html
      format.js
    end
  end

  def load_more_button
    @posts = Post.paginate(page: params[:page],
                           per_page: 42).order('created_at DESC')

    respond_to do |format|
      format.html
      format.js
    end
  end

  def paginate
    @posts = Post.paginate(page: params[:page],
                           per_page: 12).order('created_at DESC')
  end

  def show
    @post = Post.find(params[:id])
  end
end
