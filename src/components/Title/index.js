import React from 'react';
import styles from './styles.module.css';

class Title extends React.Component {
    render() {
        return (
            <li className={styles.li}>
                <p className={styles.title}>Designation</p>
                <p className={styles.text}>Find a co-founder for your startup business</p>
            </li>
        )
    }
}

export default Title;