import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

type BrandingProps = {
  setIsMenuExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Branding = ({ setIsMenuExpanded }: BrandingProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-neutral-800 font-semibold tracking-tighter hover:cursor-pointer">
        <Link href="/">BSTCon Admin</Link>
      </div>
      <Button
        className="p-0 sm:hidden"
        variant="ghost"
        onClick={() => setIsMenuExpanded((prev) => !prev)}
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Branding;
