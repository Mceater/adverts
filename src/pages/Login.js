

export default function Login (){
    return (
        <div className="container">
            
            <form className="form">
                <img src="/images/avatar.png" alt="avatar"/>
                <h2>Login</h2>
                <div className="input-group">
                    <input type="text" name="username" required/>
                    <label>User Name</label>
                </div>
                <div className="input-group">
                    <input type="password" name="password" required/>
                    <label>Password</label>
                </div>
                <input className="submit-btn" type="submit" value="Login"/>
                <a href='#'>Forgot Password?</a>
            </form>

            <div className="forgot-pw">
                <form className="form">
                    <a href='#' className="close">&times;</a>
                    <h2>Reset Password</h2>
                    <div className="input-group">
                        <input type="text" name="email" required/>
                        <label for="email">Enter your email</label>
                    </div>
                    <input className="submit-btn" type="submit" value="Submit"/>
                </form>
            </div>

            <div className="footer">
                <ul className="footer-containts">
                    <li><a href="About-Us">About Us</a></li>
                    <li><a href="Services">Services</a></li>
                    <li><a href="Price">Price</a></li>
                </ul>
            </div>
        </div>
    )
}
