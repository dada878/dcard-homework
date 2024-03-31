import { useEffect } from "react";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "react-switch";
import useLocalStorageState from "use-local-storage-state";

export default function DarkModeToggle() {
  const [theme, setTheme] = useLocalStorageState("theme");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="hidden md:block">
      <Switch
        className="scale-125"
        onChange={(checked) => {
          setTheme(checked ? "light" : "dark");
        }}
        checked={theme === "light"}
        offColor="#51586d"
        onColor="#f4cd8c"
        onHandleColor="#eea950"
        offHandleColor="#6c7693"
        boxShadow="0px 0px 0px 0px #000000"
        activeBoxShadow="0px 0px 0px 0px #000000"
        checkedHandleIcon={
          <div className="flex justify-center items-center h-full text-white">
            <FontAwesomeIcon icon={faSun} />
          </div>
        }
        uncheckedHandleIcon={
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
