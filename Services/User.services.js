const fs = require('fs');


const FAKE_DATA = './FakeData/UserData.json';

function loadUserData () {
    try {
        const data = fs.readFileSync(FAKE_DATA,'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file:',error);
        return [];
    }
}

function saveUserData(users){
    fs.writeFile(FAKE_DATA,JSON.stringify(users,null,2),(err)=>{
        if(err){
            console.error('Error Writing file: ',err)
        }
    })
}

exports.getARandomUser = () => {
    const users = loadUserData();
    return users[Math.floor(Math.random() * users.length)];
};

exports.getAllUsers = () => {
    loadUserData();
}

exports.saveAUser = (newUser) => {
    const users = loadUserData();
    users.push(newUser);
    saveUserData(users);
    return newUser;
};

exports.updateAUser = (userId, updatedUserData) => {
    const users = loadUserData();
    const index = users.findIndex(user => (parseInt(user.Id) === userId));
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUserData };
      saveUserData(users);
      return users[index];
    } else {
      return null;
    }
};

exports.deleteAUser = (userId) => {
    const users = loadUserData();
    const index = users.findIndex(user => parseInt(user.Id) === userId);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      saveUserData(users);
      return deletedUser;
    } else {
      return null;
    }
};