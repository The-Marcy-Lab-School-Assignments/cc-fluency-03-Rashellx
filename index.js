// Array of users
const users = [
  {
    name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  {
    name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  {
    name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  {
    name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  {
    name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]


// Question 1
const logAllNames = (users) => {
  users.forEach((user) => console.log(user.name))
}
logAllNames(users)


// Question 2 -----------------------------------------------------
const getAllTags = (users) => {
  users.forEach((user) => console.log(`Hey my name is ${user.name} and my tag is ${user.username}`))
}
getAllTags(users)

// or destructure
// const getAllTags = (users) => {
//   users.forEach(({ name, username }) => console.log(`Hey my name is ${name} and my tag is ${username}`))
// }
// getAllTags(users)


// Question 3 ------------------------------------------------------
const sumAllFollowers = (users) => {
  return users.reduce((total, currentUser) => total + currentUser.followers, 0)
}

console.log(sumAllFollowers(users))

// Destructure format:
/*const sumAllFollowers = (users) => {
return users.reduce((total,{followers}) => total + followers, 0)
}
*/

// Question 4 ------------------------------------------------------
const searchUsername = (users, searchTerm) => {
  return users.filter((user) => {
    if (user.username === searchTerm) {
      return user
    }
  })
}
console.log(searchUsername(users, "@passaic_papi"))

// Question 5 -------------------------------------------------------
const longWinded = (users) => {
  return
}