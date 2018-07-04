import React from 'react';
import styles from './styles.module.css'
import Title from '../Title';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')
@observer
class List extends React.Component {
    render() {
        const entities = this.props.titlesStore.titles;
        return (
            <div className={styles.list}>
                <ul>
                    {entities.map((entity, i) => <Title key={i} title={entity.title} text={entity.place} />)}
                </ul>
            </div>
        )
    }
}

export default List; 
