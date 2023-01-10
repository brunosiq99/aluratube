/*export const DarkModeSwitch = ({changeTheme}) => {
    return(
        <form onChange={(e) => changeTheme(e.target.value)}>
            <input type="radio" name="mode" value="dark"/>
            <input defaultChecked type="radio" name="mode" value="light"/>
        </form>
    )
}
*/
import React from "react";
import styled from "styled-components";
import { ColorModeContext } from "../../../pages/ColorMode";
//import { ColorModeContext } from "./ColorMode";

const StyledSwitch = styled.div`
  background-color: #333333;
  border: 0;
  padding: 3px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;
  label {
    width: 50px;
  }
  span { display: inline-flex; width: 20px; height: 20px; align-items: center; justify-content: center; }
  
  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: .3s;
    cursor: pointer;
  }
  input[type="checkbox"] { display: none; }
  input[type="checkbox"]:checked + label:before { transform: translateX(100%); }
`;

export const DarkModeSwitch = () => {
    const toggleMode = () => {
        context.mode === "dark" ? context.setMode("light"): context.setMode("dark")
    }
    const context = React.useContext(ColorModeContext);
    return (
        <StyledSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                toggleMode()
            }} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    )
} 