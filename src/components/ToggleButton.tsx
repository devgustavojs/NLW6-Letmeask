import { useTheme } from "../hooks/useTheme";
import { ButtonHTMLAttributes } from 'react';

import '../styles/toggle.scss'
type ToggleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  
}

export function ToggleButton(props: ToggleButtonProps) {
  const {theme, toggleTheme} = useTheme(); // button > onClick{toggleTheme}
  return(
    <div> 
      <label className="switch">
        <input type="checkbox" id={theme} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}