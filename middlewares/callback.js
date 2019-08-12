

function getProfiles(id, callback){
    setTimeout(() => {        
        callback({id : 1, name : "Astha Padhi"});
    }, 2000);    
}

module.exports = getProfiles;