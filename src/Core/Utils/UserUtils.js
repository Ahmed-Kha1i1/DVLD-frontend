export function generateDefaultUser(userToEdit) {
  const { userId: editId, isActive, username } = userToEdit;

  if (!editId) return {};
  const defaultUser = {
    isActive,
    username,
  };

  return { editId, defaultUser };
}

export function generateNewUser(user, personId) {
  const newUser = {
    personID: personId,
    username: user.username.trim(),
    isActive: user.isActive === "true" ? true : false,
  };

  if (user?.password) {
    newUser.password = user.password.trim();
  }
  return newUser;
}
