;(function(w, $){

  // Expecting
  new GitHubUser('ideabile')
    .getUserInformations()
    .done(function ( informations ){
    this.user = informations;
      return this.getRepos();
    }).done(function( repos ){
      this.repos = repos;
      Render(this.render());
    });

})(window, jQuery);
