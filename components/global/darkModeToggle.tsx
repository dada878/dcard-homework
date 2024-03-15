import { useState } from "react";

import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkModeToggle() {
  const [checked, setChecked] = useState(false);
  return (
        <Switch
            className="scale-125"
            onChange={setChecked}
            checked={checked}
            offColor="#51586d"
            onColor="#f4cd8c"
            onHandleColor="#eea950"
            offHandleColor="#6c7693"
            boxShadow="0px 0px 0px 0px #000000"
            activeBoxShadow="0px 0px 0px 0px #000000"
            checkedHandleIcon={
              <div className="flex justify-center items-center h-full">
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
    );
}
