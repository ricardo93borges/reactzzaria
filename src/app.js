import React from "react";
import { connect } from 'react-redux'

import { Main, GlobalStyle, Container } from "./styles.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";

function App() {

  return (
    <Container>
      <GlobalStyle />

      <Header />

      <Main>
        Reactzzaria
      </Main>

      <Footer />

    </Container>
  );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(App);
