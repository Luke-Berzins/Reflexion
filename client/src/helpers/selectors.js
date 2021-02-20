import axios from "axios";

export function registerUser(user) {
  axios.post('/api/users', {
      email: user.email,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname
  }
  ).then( () => {
    let email = user.email;
    let password = user.password;
    Promise.all([
      axios.get("/api/users"),
    ]).then((all) => {
      const users = all[0].data.users
      const filteredUser = users.filter(filteredUser => filteredUser.email === email)[0]
      if (!filteredUser) {
        console.log("wrong username")
        return;
      }
    if (filteredUser.password === password) {
    console.log(filteredUser, "in")

    window.location = "/builder"
    return filteredUser;
  } else if (filteredUser && filteredUser.password !== password) {
    console.log("wrong password")
    return null
  }
  return null;
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  )
  .catch(function (error) {
    console.log(error);
  });
}
