import "./signin.style.css";

function Signin() {
  return (
    <>
      <div className="login-container">
        <div className="login-logo">
          <img src="https://via.placeholder.com/150" alt="Logo" />
        </div>

        <h2>BLUESTOCK</h2>

        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-container">
              <input type="password" placeholder="********" />
              <span className="password-toggle">👁️</span>
            </div>
            <a href="/#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <div className="form-group captcha-container">
            <input type="checkbox" checked />
            <label>I’m not a robot</label>

            <div className="recaptcha">reCAPTCHA</div>
          </div>
          <div className="form-group">
            <input type="checkbox" checked />
            <label>Keep me signed in</label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="divider"><span style={{ backgroundColor: '#F4F5F7', padding: "10px 20px", color: "gray"}}>or sign in with</span></div>
        
        <button className="google-btn">Continue with Google</button>
        
        <a href="/#" className="create-account">
          Create an account
        </a>
      </div>
    </>
  );
}

export default Signin;
