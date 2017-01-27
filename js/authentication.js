/* Elements with class name `signed-in` and `signed-out` are hidden by default.
 *
 * When a user has an active session, elements with the `signed-in` class name
 * are displayed. When a user does not have an active session, elements with the
 * `signed-out` class name are displayed.
 *
 * NOTE: Do not use this to hide sensitive elements - the source for these elements
 * will still be available to the user despite the session state.
 * */

(function(){
  function displayAuthenticationElements(){
    $('.signed-in, .signed-out, .members-checkout, .public-checkout').hide();

    bowtie.user.info(function(user){
      if(user){
        $('.signed-in').show();
        $('#donation-spinner').hide();
        $('.members-checkout').show("fast");
      }else{
        $('.signed-out').show();
        $('#donation-spinner').hide();
        $('.public-checkout').show("fast");
      }
    });
  }

  $(displayAuthenticationElements);
})();
