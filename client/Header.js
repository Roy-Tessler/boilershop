import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        Already a member?
        <div>
          <form action="/api/auth/login" method="put">
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" name="login" value="login" />
          </form>
        </div>
      </nav>
      <div>
        New? Click{" "}
        <Link to="/signup" className="links">
          here
        </Link>{" "}
        to signup.
      </div>
      <main>
        <div id="main-links">
          <NavLink exact activeClassName="active" className="links" to="/">
            Home Page
          </NavLink>
          <NavLink activeClassName="active" to="/allProducts" className="links">
            Shop All
          </NavLink>
          <NavLink activeClassName="active" to="/weather" className="links">
            Check The Weather
          </NavLink>
          <NavLink activeClassName="active" to="/facts" className="links">
            Interesting Facts
          </NavLink>
          <NavLink activeClassName="active" to="/fails" className="links">
            Watch Fails
          </NavLink>
          <NavLink activeClassName="active" to="/chuckNorris" className="links">
            Chuck Norris!
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Header;
