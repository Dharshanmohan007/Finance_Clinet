import { useState } from "react";
import {
  Home,
  User,
  MessageCircle,
  Settings,
  HelpCircle,
  Unlock,
  Lock
} from "lucide-react";
import "./side.css";

const menuItems = [
  { icon: Home },
  { icon: User },
  { icon: MessageCircle },
  { icon: Settings },
  { icon: HelpCircle },
  { icon: Unlock },
  { icon: Lock }
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="navigation small">
      <ul>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className={`list ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* 🔥 Required for curve */}
              <b></b>
              <b></b>

              <a href="#">
                <span className="icon">
                  <Icon size={22} />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}