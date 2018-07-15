import React from 'react';
import { observer } from 'mobx-react';
import {
  Li, Headline, Text, LeftArea, RightArea, CentralShape,
} from './styles.js';

@observer
class Title extends React.Component {
  render() {
    const article = this.props;
    return (
      <Li>
        <Headline>
          {article.title}
        </Headline>
        <LeftArea />
        <CentralShape />
        <RightArea />
        <Text>
          {article.text}
        </Text>
      </Li>
    );
  }
}

export default Title;
