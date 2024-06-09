const getUserRole = (role) => {
  if (role === 'admin') {
    return 'Administrator';
  }

  if (role === 'user') {
    return 'Utilizator';
  }
};

export default getUserRole;
