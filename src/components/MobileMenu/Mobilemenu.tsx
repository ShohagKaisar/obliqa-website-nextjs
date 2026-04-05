"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "../../shared/Menu";
import { useRef } from "react";

function Mobilemenu() {
  const drawerCheckboxRef = useRef(null);

  const closeDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
  };

  return (
    <div className="lg:hidden">
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerCheckboxRef}
        />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button">
            <FaBars className="text-white" size={24} />
          </label>
        </div>
        <div className="drawer-side">
          <ul className="menu bg-[#071E38] text-white min-h-24 w-full p-4 rounded-xl">
            <div className="text-white p-4 flex flex-col h-full">
              <Menu onItemClick={closeDrawer} />
            </div>
          </ul>
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="p-3 mt-2 me-2"
          >
            <FaTimes className="text-white" size={28} />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Mobilemenu;