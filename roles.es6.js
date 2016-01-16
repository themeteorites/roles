_getUser = function (userId) {
  if (arguments.length === 0) {
    userId = getUserId.apply(this)
  }
  return userId && Meteor.users.findOne(userId)
}

isAdmin = function (userId) {
  let user = _getUser.apply(this, arguments)
  return user && user.admin
}

hasRole = function (userId, roleId) {
  if (arguments.length < 2) {
    roleId = userId
    userId = getUserId.apply(this)
  }
  let user = _getUser.apply(this, [userId])
  return user && user[roleId] === true
}

getUserId = function () {
  return this.userId !== undefined ? this.userId : Meteor.userId()
}
