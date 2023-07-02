import starwars from "../assets/star-wars.svg";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const { setShowSignInModal } = useContext(AuthContext);
  const handleSignUpClick = () => {
    setShowSignInModal(true);
  };

  return (
    <header>
      <img className="brand" src={starwars} alt="brand" />
      <div className="userAuth">
        {location.pathname !== "/starships" && (
          <>
            <button className="loginSignin">LOG IN</button>
            //
            <button className="loginSignin" onClick={handleSignUpClick}>
              SIGN UP
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
