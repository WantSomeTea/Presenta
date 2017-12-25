import React from 'react';
import { connect } from 'react-redux';

import Editor from '../../components/Editor'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Editor />
        );
    }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(MainPage);