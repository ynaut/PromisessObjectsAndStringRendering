// The goal is render a github informations on a page with:
// Promises, Map and Reduce.

function GitHubUser (username) {
    // Fill this
}

GitHubUser.prototype.getUserInformation = function () {
    // Fill this
};

GitHubUser.prototype.getRepos = function () {
    // Fill this
}

GitHubUser.prototype.render = function () {
    // Here return a string, be fancy and use map && reduce
}

function Render($element, html){
    // Fill this
}


// Expecting
let gitUser = new GitHubUser('ideabile');

gitUser
    .getUserInformations()
    .then(function(informations){
        this.user = informations;
        return this.getRepos();
    })
    .then(function(repos) {
        this.repos = repos;
        Render('.githubView', this.render());
    });
