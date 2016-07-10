class Article < ActiveRecord::Base
  def timestamp
    created_at.strftime('%d %B %Y %H:%M:%S')
  end
end
