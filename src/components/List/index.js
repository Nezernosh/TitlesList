import React from 'react';
import Ul from './styles.js'
import Title from '../Title';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')
@observer
class List extends React.Component {
    render() {
        const entities = this.props.titlesStore.titles;
        return (
            <div>
                <Ul>
                    {entities.map((entity, i) => <Title key={i} title={entity.title} text={entity.place} />)}
                </Ul>
            </div>
        )
    }
}

export default List; 
