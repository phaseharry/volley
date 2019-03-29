const faker = require('faker')

//utility function used to generate fake users 
const generateUsers = () => {
  const users = []
  for(let i = 0; i < 100; i++){
    users.push({
      id: i + 1,
      firstName: faker.name.firstName(), 
      lastName: faker.name.lastName(), 
      avatar: faker.image.avatar(),
      challenging: false, 
    })
  }
  return users;
}

generateUsers()