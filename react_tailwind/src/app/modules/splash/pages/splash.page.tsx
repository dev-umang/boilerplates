import { FC, useEffect } from "react";
import { useNav } from "@common/hooks";
import { AppSpinner } from "@components/shared";

const SplashPage: FC = () => {
  const nav = useNav();

  useEffect(() => {
    setTimeout(() => {
      nav("/home");
    }, 1500);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <AppSpinner />
    </div>
  );
};

export default SplashPage;
