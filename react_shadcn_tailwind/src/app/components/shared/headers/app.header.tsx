import { Sun } from "lucide-react";
import { FC } from "react";
import { useTheme } from "@configs/theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AppHeader: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="border-b p-2 bg-card">
      <div className="flex items-center justify-between">
        <strong>LOGO</strong>
        <div className="flex gap-2 items-center">
          <Button onClick={toggleTheme} variant={"ghost"} size={"icon"}>
            <Sun />
          </Button>

          <Button asChild className="p-0">
            <Avatar className="size-[34px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>UG</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
