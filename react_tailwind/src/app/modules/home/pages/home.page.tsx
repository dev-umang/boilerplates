import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => (
  <div>
    <div>HomePage</div>
    <Link className="text-sky-600 font-bold" to={"/"}>
      Go to Splash
    </Link>
  </div>
);

export default HomePage;
