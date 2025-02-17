import { FC } from "react";
import { Link } from "react-router-dom";

const _404Page: FC = () => (
  <div className="h-screen flex flex-col items-center justify-center">
   <div className="text-4xl text-white font-black my-10"> 404! Not Found!</div>
    <Link className="underline text-sky-600" to={"/home"}>
      Go to Home!
    </Link>
  </div>
);

export default _404Page;
