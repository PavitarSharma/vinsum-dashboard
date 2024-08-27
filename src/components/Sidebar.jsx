import useSidebarStore from "@/stores/sidebar-store";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });


  return isDesktop ? <DesktopSidebar /> : <MobileSidebar />;
};

export default Sidebar;

const DesktopSidebar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  // const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div
      className={`w-72 fixed top-0 left-0 bottom-0 h-screen bg-white border-r z-50 ${
        isDesktop ? "block" : "hidden"
      }`}
    >
      Sidebar
    </div>
  );
};

const MobileSidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const onClose = useSidebarStore(state => state.onClose);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={sidebarRef} className={`fixed inset-0 bg-black/30 z-50 ${isOpen ? "block": "hidden"}`}>
      <div
      onClick={event => event.stopPropagation()}
        className={`w-72 fixed top-0 left-0 bottom-0 h-screen bg-white border-r`}
      >
        Sidebar
        <button onClick={onClose} className="absolute top-2 right-4">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
