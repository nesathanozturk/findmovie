import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col text-white">
      <h1 className="text-3xl">
        We couldn&apos;t find the movie you looking for!
      </h1>
      <Link to="/" className="underline mt-4 text-xl">
        Go back to the home page
      </Link>
    </main>
  );
}

export default NotFound;
