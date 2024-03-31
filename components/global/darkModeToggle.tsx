import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "react-switch";
import useLocalStorageState from 'use-local-storage-state';

export default function DarkModeToggle() {
  const [theme, setTheme] = useLocalStorageState("theme");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="hidden md:block">
      <Switch
      className="scale-125"
      onChange={(checked) => {
        setTheme(checked ? "dark" : "light");
      }}
      checked={theme === "dark"}
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
