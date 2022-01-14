const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// destructuring database
const {users, friends, college} = database;

// returns user object for given user id
const searchUserById = id => {
  const foundUser = users.find( user => {
    return user.id === id;
  })
  return foundUser;
}

// returns user object for given user first name
const searchUserByName = name => {
  const foundUser = users.find( user => {
    return user.firstName === name;
  })
  return foundUser;
}

// returns college object for given college id
const searchCollegeById = id => {
  const foundCollege = college.find( col => {
    return col.id === id;
  })
  return foundCollege;
}

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {
  const filtered = users.filter( user => {
    return user.favPet === pet;
  })
  return filtered;
}
console.log(usersByPet('dog'))
console.log(usersByPet('cat'))

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  const collegeId = searchUserByName(user).collegeId
  const collegeResult = searchCollegeById(collegeId)
  return [collegeResult.name, collegeResult.color];
}
console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
const oppositesAttract = friends.filter( pair => {
  return searchUserById(pair.id1)["favPet"] != searchUserById(pair.id2)["favPet"]
})
console.log(oppositesAttract)

// define local as a list of users who live in the same state as they go to school.
const local = users.filter( user => {
  // console.log(college[user.collegeId]["state"]);
  return user.state === searchCollegeById(user.collegeId)["state"];
})
console.log(local)

// define collegeFriends as a list of friend objects that go to the same college
const collegeFriends = friends.filter ( pair => {
  return searchUserById(pair.id1)["collegeId"] === searchUserById(pair.id2)["collegeId"]
})
console.log(collegeFriends)

