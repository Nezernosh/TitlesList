import React from 'react';
import { observer, inject } from 'mobx-react';
import Ul from './styles.js';
import Title from '../Title/index.jsx';

@inject('titlesStore')
@observer
class List extends React.Component {
  render() {
    const prop = this.props;
    return (
      <div>
        <Ul>
          {prop.titlesStore.titles.map(entity => (
            <Title
              key={entity.id}
              title={entity.title}
              text={entity.place}
            />
          ))}
        </Ul>
      </div>
    );
  }
}

export default List;
