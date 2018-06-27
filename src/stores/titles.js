import { action, observable, computed } from 'mobx';

class TitlesStore {
    @observable titles = [];

    @observable inputValue = '';

    @action clearInputValue = () => {
        this.inputValue = '';
    }

    @computed get currentInputValue() {
        return this.inputValue;
    }

    /* async tempFetchArticles(place) {
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${place}&format=json&page=1`;
        await fetch(url)
    } */
    
    fetchArticles(place) {
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${place}&format=json&page=1`;
        fetch(url).then(
            response => {
                response.json().then(
                    data => {
                        this.titles = data.items.map(item => ({title: item.title, place: item.place_of_publication}));
                    })
            }          
        )
            .catch(error => new Error(error));
    }
}

const store = new TitlesStore();
export default store;
