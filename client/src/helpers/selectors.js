export function getUser(users, email, password) {
  const result = undefined;
  const filteredUser = users.filter(filteredUser => filteredUser.email === email)
  if (filteredUser.password === password) {
    return filteredUser;
  } else if (filteredUser) {
    return null
  }

  return null;
}


