
function getProfilesPromise(id){
    setTimeout(() => {  
        return new Promise((resolve, reject) => {
            resolve({name : "Naughty"});
           });
    }, 2000);    
}

module.exports = getProfilesPromise;