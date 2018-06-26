import React from 'react';
import styles from './styles.module.css';
import { inject, observer } from 'mobx-react';

@inject('titlesStore')
@observer
class Title extends React.Component {
    render() {
        const { titlesStore } = this.props;

        return (
            <li className={styles.li}>
                <p className={styles.title}>{titlesStore.getTitle(this.props.index)}</p>
                <p className={styles.text}>{titlesStore.getPlace(this.props.index)}</p>
            </li>
        )
    }
}

export default Title;
