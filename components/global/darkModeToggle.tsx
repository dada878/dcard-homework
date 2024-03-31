import { useEffect, useState } from "react";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "react-switch";

export default function DarkModeToggle() {
  const [checked, setChecked] = useState(true);

  // NOTE: maybe there is a better way to handle this to reduce localStorage access times

  // when switch is toggled (or component mounted), change the theme
  useEffect(() => {
    const isDark = localStorage.getItem("dark") ?? "true";
    if (isDark === "true") {
      setChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, [checked]);

  return (
    <div className="hidden md:block">
      <Switch
      className="scale-125"
      onChange={(checked) => {
        if (checked) {
          localStorage.setItem("dark", "true");
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("dark", "false");
        }
        setChecked(checked);
      }}
      checked={checked}
      onColor="#51586d"
      offColor="#f4cd8c"
      offHandleColor="#eea950"
      onHandleColor="#6c7693"
      boxShadow="0px 0px 0px 0px #000000"
      activeBoxShadow="0px 0px 0px 0px #000000"
      uncheckedHandleIcon={
        <div className="flex justify-center items-center h-full text-white">
          <FontAwesomeIcon icon={faSun} />
        </div>
      }
      checkedHandleIcon={
        <div className="flex justify-center items-center h-full">
          <FontAwesomeIcon icon={faMoon} />
        </div>
      }
      checkedIcon={<div></div>}
      uncheckedIcon={<div></div>}
    />
    </div>
  );
}
