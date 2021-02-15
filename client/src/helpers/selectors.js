import { useState, useEffect } from "react";
import axios from "axios";

export function getUser(email, password) {
    Promise.all([
      axios.get("/api/users"),
    ]).then((all) => {
      const users = all[0].data.users
      console.log(users)
      const filteredUser = users.filter(filteredUser => filteredUser.email === email)[0]
      if (!filteredUser) {
        console.log("wrong username")
        return;
      }
  if (filteredUser.password === password) {
    console.log(filteredUser)
    return filteredUser;
  } else if (filteredUser) {
    console.log("wrong password")
    return null
  }
    })
  return null;
}

export function registerUser(email, password) {
  Promise.all([
    axios.get("/api/users"),
    console.log("hhhhhhhhhhassas")
  ]).then((all) => {
    const users = all[0].data.users
    console.log(users)
    const filteredUser = users.filter(filteredUser => filteredUser.email === email)[0]
    console.log(filteredUser)
if (filteredUser.password === password) {
  console.log("YAAHAHAJSH")
  return filteredUser;
} else if (filteredUser) {
  console.log("hhhhhhhhhhhasdasdasda")
  return null
}
  })
return null;
}
