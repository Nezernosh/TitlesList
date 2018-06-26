import React from 'react';
import styles from './styles.module.css'
import Title from '../Title';

class List extends React.Component {
    render() {
        return (
            <div className={styles.list}>
                <ul>
                    <Title index={0} />
                    <Title index={1} />
                    <Title index={2} />
                    <Title index={3} />
                    <Title index={4} />
                    <Title index={5} />
                    <Title index={6} />
                </ul>
            </div>
        )
    }
}

export default List; 
