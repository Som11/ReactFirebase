const User = ({ handleLogout }) => {
  return (
    <nav>
      <h2>Welcome</h2>
      <button onclick={handleLogout}>Logout</button>
    </nav>
  );
};

export default User;
