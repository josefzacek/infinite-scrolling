$( document ).ready(function() {

  //infinite scrolling
  if ($('#paginate-infinite-scrolling').size() > 0) {
    $(window).on('scroll', function() {
      more_posts_url = $('#paginate-infinite-scrolling .pagination .next_page a').attr('href');
      if (more_posts_url && ($(window).scrollTop() > $(document).height() - $(window).height() - 60)) {
        $('#paginate-infinite-scrolling .pagination').html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..." />');
        $.getScript(more_posts_url);
      }
    });
  };


  //load more posts on click of button
  if ($('#paginate-load-more-button').size() > 0) {
    $('#paginate-load-more-button .pagination').hide()

    $('#load-more-posts').show().click(function() {
      more_posts_url = $('#paginate-load-more-button .pagination .next_page a').attr('href');
      $this = $(this);
      $this.html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..." />').addClass('disabled');
      $.getScript(more_posts_url, function() {
        if ($this) {
          $this.text('Load more posts').removeClass('disabled');
        }
      });
    });
  };

});

