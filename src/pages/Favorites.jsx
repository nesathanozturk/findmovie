import Navbar from "../components/Navbar";
import FavoriteItems from "../components/FavoriteItems";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Favorites() {
  return (
    <>
      <Navbar />
      <FavoriteItems />
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Favorites;
