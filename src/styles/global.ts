import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 1rem "Reddit Sans", sans-serif;
    -webkit-font-smoothing: antialised;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  input:focus, 
  select:focus, 
  textarea:focus, 
  button:focus {
    outline: none; /* Remove the default focus outline */
    box-shadow: none; /* Remove any default box-shadow */
  }
`;
