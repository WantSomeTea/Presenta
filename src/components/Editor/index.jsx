import React from 'react';
import marked from 'marked';
import styled from 'styled-components';

const EditorContainer = styled.div`
    dispaly: flex;
    justify-content: center;
    flex-wrap: nowrap;
    width: 600px;
    height: 600px;
`;

const Textarea = styled.textarea`
    width: 50%;
    height: 50%;
    padding: 20px;
`;

const Result = styled.div`
    width: 50%;
    height: 50%;
    padding: 20px;
    border: solid 1px #ccc;
`;

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }

    textareaHandler = e => {
        this.setState({
            result: marked(e.target.value)
        })
    };

    render() {
        return (
            <EditorContainer>
                <Textarea onChange={this.textareaHandler} />
                <Result>{this.state.result}</Result>
            </EditorContainer>
        );
    }
}
