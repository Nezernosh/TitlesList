import React from 'react';
import styles from './styles.module.css';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')
@observer
class SearchBar extends React.Component {
    loadArticles = () => {
        const input = this.props.titlesStore.inputValue;
        if (input) {
            this.props.titlesStore.fetchArticles(input);
            this.props.titlesStore.clearInputValue();
        }
    }

    handleChange = e => {
        this.props.titlesStore.inputValue = e.target.value;
    };

    render() {
        const { titlesStore } = this.props;

        return (
            <form className={styles.form}>
                <input className={styles.input} placeholder="Search" value={titlesStore.inputValue}
                    onChange={this.handleChange} />
                <button className={styles.button} disabled={!titlesStore.inputValue}
                    onClick={this.loadArticles}>Go</button>
            </form>
        )
    }
}

export default SearchBar;
