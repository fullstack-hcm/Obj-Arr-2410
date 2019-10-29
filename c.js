let user = { // object owner
    fullname: 'hello',
    getInfo: function(fullname) {
        console.log(`hello ${fullname}`, this);
        
    }
}

user.getInfo();