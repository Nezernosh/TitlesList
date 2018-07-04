import React from 'react';
import styles from './styles.module.css';
import { observer } from 'mobx-react';

@observer
class Title extends React.Component {
    render() {
        return (
            <li className={styles.li}>
                <p className={styles.title}>{this.props.title}</p>
                <p className={styles.text}>{this.props.text}</p>
            </li>
        )
    }
}

export default Title;
