require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };

  for (const usernameArray of args) {
    combinedObject.users = [...combinedObject.users, ...usernameArray];
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;