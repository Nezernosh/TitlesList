import React from 'react';
import { Li, Headline, Text, LeftArea, RightArea, CentralShape } from './styles.js';
import { observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        return (
            <Li>
                <Headline>{this.props.title}</Headline>
                <LeftArea />
                <CentralShape />
                <RightArea />
                <Text>{this.props.text}</Text>
            </Li>
        )
    }
}

export default Title;
