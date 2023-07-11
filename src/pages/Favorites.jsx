import FavoriteItems from "../components/FavoriteItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
