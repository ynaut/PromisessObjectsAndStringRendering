// The goal is render a github informations on a page with:
// Promises, Map and Reduce.
const API_GIT_USERS = 'https://api.github.com/users/'

class GitHubUser {
    constructor(username) {
        this.username = username;
    }
    getUserInformation() {
        return new Promise((resolve, reject) =>  {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.github.com/users/${this.username}`, true);
        xhr.onload = function (e) {
                resolve( JSON.parse(xhr.responseText) )
          };
          xhr.onerror = function (e) {
            reject(xhr.statusText);
          };
          xhr.send();
      });
    }
    getRepos() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `https://api.github.com/users/${this.username}/repos`, true);
            xhr.onload = function (e) {
                    resolve(JSON.parse(xhr.responseText))
              };
              xhr.onerror = function (e) {
                reject(xhr.statusText);
              };
              xhr.send();
          });
    }
    render () {
        let html = ''
        const userView = `
            <div>
                <h1>${this.user.login}</h1>
                <img src="${this.user.avatar_url}">
            </div>`
        
        html += userView
        html += this.repos
        .map( repo => repo.name)
        .reduce( (x,y) =>  {
            return x + `<li>${y}</li>`
        },'')
        return html
    }
}

function Render($element, html){
    document.getElementById($element).innerHTML = html
}


// Expecting
let gitUser = new GitHubUser('ideabile');
gitUser
    .getUserInformation()
    .then((informations) => {
        gitUser.user = informations;
        return gitUser.getRepos();
    })
    .then(function(res) {
        gitUser.repos = res;
        Render('githubView', gitUser.render());
    });
