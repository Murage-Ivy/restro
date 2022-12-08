import { useContext } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import LoginForm from "./Components/Login/LoginForm";
import RestaurantContainer from "./Components/RestaurantContainer/RestaurantContainer";
import { RestaurantContext } from "./Components/RestaurantContext";
import RestaurantPage from "./Components/RestaurantPage/RestaurantPage";
import ReviewContainer from "./Components/ReviewFolder/ReviewContainer";
import SignUp from "./Components/Signup/Signup";
import "./index.css";

function App() {
  const { user, setUser } = useContext(RestaurantContext);

  useEffect(() => {
    // auto-login
    fetch("https://restro-backend-production.up.railway.app/me").then((r) => {
      if (r.ok) {
        r.json().then((loggedUser) => setUser(loggedUser));
      }
    });
  }, [setUser]);
  // console.log(userId);
  return (
    <>
      <div className="App">
        <Header loggedUser={user} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <h3 id="bookList-heading"> Popular Restaurants </h3>
                <RestaurantContainer />
              </>
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurants/:id" element={<RestaurantPage />} />
          <Route path="/restaurants/:id" element={<ReviewContainer />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
