import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent>
        <SheetTitle>Menu</SheetTitle>
        <div className="flex flex-col justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
