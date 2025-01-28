const LoginPage = () => {
  return (
    <>
    <h1>Sign in</h1>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <button>Login</button>
    <label htmlFor="remember-me">Remember me</label>
    <input type="checkbox" id="remember-me" />
    <a href="#">Forgot Password</a>
    
    </>
    
  )
}

export default LoginPage;