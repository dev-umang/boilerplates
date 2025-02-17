import { Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => (
  <Card>
    <div>HomePage</div>
    <Link className="text-sky-600 font-bold" to={"/"}>
      Go to Splash
    </Link>
  </Card>
);

export default HomePage;
