import React from 'react';
import { connect } from 'react-redux';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>H1</h1>;
    }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(MainPage);