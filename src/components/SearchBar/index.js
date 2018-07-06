import React from 'react';
import { Form, Input, Button } from './styles.js';
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
            <Form>
                <Input placeholder="Search" value={titlesStore.inputValue}
                    onChange={this.handleChange} />
                <Button disabled={!titlesStore.inputValue}
                    onClick={this.loadArticles}>Go</Button>
            </Form>
        )
    }
}

export default SearchBar;
