import React from 'react';
import { observer, inject } from 'mobx-react';
import { Form, Input, Button } from './styles.js';

@inject('titlesStore')
@observer
class SearchBar extends React.Component {
  loadArticles = () => {
    const prop = this.props;
    const input = prop.titlesStore.inputValue;
    if (input) {
      prop.titlesStore.fetchArticles(input);
      prop.titlesStore.clearInputValue();
    }
  }

  handleChange = (e) => {
    const prop = this.props;
    prop.titlesStore.inputValue = e.target.value;
  };

  render() {
    const prop = this.props;
    return (
      <Form>
        <Input
          placeholder="Search"
          value={prop.titlesStore.inputValue}
          onChange={this.handleChange}
        />
        <Button
          disabled={!prop.titlesStore.inputValue}
          onClick={this.loadArticles}
        >
          { 'Go' }
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
