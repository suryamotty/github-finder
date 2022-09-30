// initializing github
const github = new Github;

//initializing UI class
const ui = new UI;

//search for input in the input field
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value;//get input text
    
    if(userText !== ''){
    //make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not found'){
        //show alert
        ui.showAlert('User not found', 'alert alert-danger');//(message, classname)
      }else{
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
    }else{
        //clear the profile
        ui.clearProfile();
    }
});