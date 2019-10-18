import React from 'react';
import { connect } from 'react-redux'

import { HeaderTitle, Container } from "./styles";

const Header = () => {
    return (
        <Container>
            <HeaderTitle>Reactzzaria</HeaderTitle>
        </Container>
    );
}


const mapDispatchToProps = (dispatch) => ({

})

export default connect(null, mapDispatchToProps)(Header)