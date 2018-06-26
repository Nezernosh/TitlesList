import React from 'react';
import styles from './styles.module.css'
import Title from '../Title';

class List extends React.Component {
    render() {
        return (
            <div className={styles.list}>
                <ul>
                    <Title />
                    <Title />
                    <Title />
                    <Title />
                    <Title />
                    <Title />
                    <Title />
                </ul>
            </div>
        )
    }
}

export default List; 