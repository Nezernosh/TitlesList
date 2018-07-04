import React from 'react';
import { Li, Headline, Text } from './styles.js';
import { observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        return (
            <Li>
                <Headline>{this.props.title}</Headline>
                <Text>{this.props.text}</Text>
            </Li>
        )
    }
}

export default Title;
