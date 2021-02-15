import axios from "axios";

export function registerUser(user) {
  axios.post('/api/users', {
      email: user.email,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname
  }).then(result => {

    // window.location = "/builder"
    console.log(result)
  }
  )
  .catch(function (error) {
    console.log(error);
  });
}
