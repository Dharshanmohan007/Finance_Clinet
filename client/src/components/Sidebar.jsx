import { useEffect, useState } from "react";
import {
  Home,
  User,
  MessageCircle,
  Settings,
  HelpCircle,
  Unlock,
  Lock,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import "./side.css";
import logo from "../assets/logo.svg";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [collapsed, setCollapsed] = useState(
    window.innerWidth < 768, // lg breakpoint
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true); // mobile + tablet
      } else {
        setCollapsed(false); // desktop
      }
    };

    handleResize(); // run once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { title: "Home", icon: Home },
    { title: "Profile", icon: User },
    { title: "Messages", icon: MessageCircle },
    { title: "Settings", icon: Settings },
    { title: "Help", icon: HelpCircle },
    { title: "Password", icon: Unlock },
  ];

  return (
    <>
      {/* Toggle
      <div
        className={`toogle ${collapsed ? "active" : ""}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <X size={22} /> : <Menu size={22} />}
      </div> */}

      {/* Sidebar */}
      <div className={`navigation ${collapsed ? "responsive" : ""}`}>
        {/* <div className="flex items-center  justify-center h-20 w-full">
          <img src={logo} alt="Logo" className=" object-contain" />
        </div> */}
        <ul>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className={`list ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* 🔴 Required for curve */}
                <b></b>
                <b></b>

                <a href="#">
                  <span className="icon">
                    <Icon size={20} />
                  </span>
                  <span className="title">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
