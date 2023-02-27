import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer className="h-52 flex flex-col justify-center items-center text-center text-white">
      <div className="flex justify-center items-center text-4xl lg:text-5xl gap-2 mb-2">
        <a
          href="https://github.com/nesathanozturk"
          className="hover:text-purple-700"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://instagram.com/nesathanozturk"
          className="hover:text-red-400"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/nesathanozturk"
          className="hover:text-blue-600"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p className="text-lg lg:text-xl">
        Copyright &copy; 2023, Neşathan Öztürk - All right reserved.
      </p>
    </footer>
  );
}

export default Footer;
