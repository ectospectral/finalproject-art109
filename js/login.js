
//if you can see this, you're cheating, but that's fine.

let correctPassword = 'kraken';

function enterPassword(){
    if(document.querySelector('#ishmael').value != correctPassword){
        alert('Incorrect Password');
        return false;
    }
    else if(document.querySelector('#ishmael').value === correctPassword){
        alert('Welcome back.');
        return true;
    }
}