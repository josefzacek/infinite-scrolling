class PostsController < ApplicationController
  def index
    @posts = Post.paginate(page: params[:page],
                           per_page: 12).order('created_at DESC')
  end

  def show
  end
end
