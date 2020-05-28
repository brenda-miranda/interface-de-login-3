// Show password
jQuery(document).ready(function($) {
  
    $('#show_password').hover(function(e) {
      e.preventDefault();
      if ( $('#password').attr('type') == 'password' ) {
        $('#password').attr('type', 'text');
        $('#show_password').attr('class', 'bi bi-eye');
      } else {
          $('#password').attr('type', 'password');
          $('#show_password').attr('class', 'bi bi-eye');
      }
    });
  });