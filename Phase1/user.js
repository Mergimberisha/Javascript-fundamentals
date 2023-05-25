class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getIntroduction() {
      return `Hi, my name is ${this.name}`;
    }
  }
  
  module.exports = User;
  
  const mergim = new User("Mergim");
  console.log(mergim.getName());
  console.log(mergim.name);
  console.log(mergim.getIntroduction());
  
  const users = [new User("Uma"), new User("Josh"), new User("Ollie")];
  
  class UserBase {
    constructor(users) {
      this.users = users;
    }
  
    count() {
      return this.users.length;
    }
  
    getNames() {
      console.log(this.users.map((element) => element.getName()));
    }
  
    getIntroductions() {
      this.users.forEach((element) =>
        console.log(`Hi, my name is ${element.name}`)
      );
    }
  };
  
  const usersObject = new UserBase(users);
  console.log(usersObject.count());
  console.log(usersObject.getNames());
  console.log(usersObject.getIntroductions());