class ArticlesController < ApplicationController
  def index
    @articles = Article.paginate(page: params[:page],
                                 per_page: 12).order('created_at DESC')
    
    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @article = Article.find(params[:id])
  end
end
