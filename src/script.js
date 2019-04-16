function storeMyPassword (passwordString, mySecrete){
    let password = passwordString;
    let secrete = mySecrete;

    return function (passInput) {
        if (passInput === password) {
            console.log(`secrete is : ${secrete}`)
        } else {
            console.log(`Wrong`);
        }
    }
}

let myPassword = storeMyPassword('bananarama', 'I sleep with my socks on!');