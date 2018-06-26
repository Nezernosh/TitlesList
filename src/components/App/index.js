import React from 'react';
import Header from '../Header';
import SearchBar from '../SearchBar';
import List from '../List';
import Footer from '../Footer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <SearchBar />
                <List />
                <Footer />
            </div>
        )
    }
}

export default App; 