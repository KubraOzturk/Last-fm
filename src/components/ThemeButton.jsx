import React from "react";
// icons
import { BsFillMoonStarsFill } from "react-icons/bs";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/theme";
// css
import styled from "styled-components";
import themes from "../themes";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ThemeButton({ variant }) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  variant = theme;
  return (
    <>
      {theme === "dark" ? (
        <ThemeButtons
          type="button"
          theme={theme}
          onClick={() => dispatch(setTheme("light"))}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </ThemeButtons>
      ) : (
        <ThemeButtons
          type="button"
          theme={theme}
          onClick={() => dispatch(setTheme("dark"))}
        >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          {/* <BsFillMoonStarsFill size={25} color={themes[theme].textColor} /> */}
        </ThemeButtons>
      )}
    </>
  );
}
export const ThemeButtons = styled.button`
  border-radius: 70%;
  margin: 0 10px;
  padding: 8px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
export default ThemeButton;