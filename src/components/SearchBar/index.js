import React from 'react';
import styles from './styles.module.css';
import { observer, inject } from 'mobx-react';

@inject('titlesStore')
@observer
class SearchBar extends React.Component {
    loadArticles = e => {
        e.preventDefault();
        if (this.props.titlesStore.currentInputValue) {
            const inputText = this.props.titlesStore.currentInputValue;
            this.props.titlesStore.fetchTitlesPlaces(inputText);
            this.props.titlesStore.clearInputValue();
        }
    }

    handleChange = (e) => {
        this.props.titlesStore.inputValue = e.target.value;
    };

    render() {
        const { titlesStore } = this.props;

        return (
            <form className={styles.form} onSubmit={event => this.loadArticles(event)}>
                <input className={styles.input} placeholder="Search" value={titlesStore.inputValue}
                    onChange={this.handleChange} />
                <button className={styles.button} disabled={!titlesStore.inputValue}>Go</button>
            </form>
        )
    }
}

export default SearchBar;
