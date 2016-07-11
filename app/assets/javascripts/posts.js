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

});
