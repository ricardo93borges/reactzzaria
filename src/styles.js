import styled, { createGlobalStyle } from "styled-components";

const headerHeight = "60px";
const footerHeight = "30px";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
`;

export const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`;

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
