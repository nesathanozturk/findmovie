import Navbar from "../components/Navbar";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Home() {
  return (
    <>
      <Navbar />
      <Movies />
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

export default Home;
