class Github {
    constructor(){
       this.client_id = '';
       this.client_secret ='';
       this.repos_count = 5;
       this.repos_sort = 'created: asc';
       
    }
    async getUser(user) {
        
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);//for users, after ? there is a query string and after & also another query string

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);//for users, after ? there is a query string and after & also another query string

        const profile = await profileResponse.json();//for getting users repository details

        const repos = await repoResponse.json();

        return{
            profile,//after es6 we can written like this
            repos
        }


    }
}