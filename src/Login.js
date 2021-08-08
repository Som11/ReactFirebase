const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="errorMessage">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="errorMessage">{passwordError}</p>

        <div className="buttonContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}> Sign In</button>
              <p>
                Don't have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up!</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}> Sign Up</button>
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In!</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
