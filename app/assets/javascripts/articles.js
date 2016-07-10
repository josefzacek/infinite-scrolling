$(document).ready(function () {

 //load more articles on click of button
  if ($('#paginate-holder-with-button').size() > 0) {
    $('.pagination').hide()
    loading_articles = false

    $('#load-more-articles').show().click(function() {
    if (!loading_articles) {
      loading_articles = true;
      more_articles_url = $('.pagination .next_page a').attr('href');
      $this = $(this);
      $this.html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..." />').addClass('disabled');
      $.getScript(more_articles_url, function() {
        if ($this) {
          $this.text('More articles').removeClass('disabled');
        }
        return loading_articles = false;
        });
      }
    });

  };

});

