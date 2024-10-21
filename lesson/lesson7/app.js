const user = {
    name:"islam",
    password:"password",
    nickname:"nickname",
    email:"email@email.com",
    folower:{
        count:200
    },
    photo:{
        photo_1:"photo.png",
    },
    data:Date()
};


for (let key in user) {
    if (typeof user[key] === 'object') {
        for (let subKey in user[key]) {
            console.log(`------------> in object ${key} <------------`)
            console.log(`${subKey}: ${user[key][subKey]}`);
        }
    }
    else {
        console.log(user[key]);
    }
}  