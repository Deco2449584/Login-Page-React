const SignIn = () => {
  return (
    <main>
      <h3>SignIn</h3>
      <div className="card">
        <form autoComplete="off" action="">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoFocus
            />
            <p className="error">Valid email is required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            <p className="error">Password is required</p>
          </fieldset>
          <button className="submit">Login</button>
          <div className="forgot">Forgot Password</div>
        </form>
      </div>
      <p>
        Don&apos;t have an account? <span>Sign Up!</span>
      </p>
    </main>
  );
};

export default SignIn;
