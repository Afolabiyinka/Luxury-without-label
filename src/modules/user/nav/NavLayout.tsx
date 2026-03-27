import { useIsMobile } from "@/shared/hooks/useMobile";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
const NavLayout = () => {
  const isMobile = useIsMobile(667);
  return (
    <div className="h-full">
      <DesktopNav />

      {isMobile && <MobileNav />}
    </div>
  );
};

export default NavLayout;
