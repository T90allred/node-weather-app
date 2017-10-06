let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Derek'
    };
    setTimeout( () => {
        callback(user);
    }, 2000)
}

getUser(23, (userObj) => {
    console.log(userObj)
});