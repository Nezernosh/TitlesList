import React from 'react';
import styles from './styles.module.css'
import Title from '../Title';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')
@observer
class List extends React.Component {
    allTitlesPlaces = () => {
        const count = this.props.titlesStore.getCount;
        let all = [];
        for (let i = 0; i < count; i++) {
            all.push(<Title key={i} index={i} />);
        }
        return all;
    }

    render() {
        return (
            <div className={styles.list}>
                <ul>
                    {this.allTitlesPlaces()}
                </ul>
            </div>
        )
    }
}

export default List; 
