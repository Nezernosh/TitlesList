import { action, observable, computed } from 'mobx';

class TitlesStore {
    @observable titles = [];

    @observable inputValue = '';

    @action clearInputValue = () => {
        this.inputValue = '';
    }

    async fetchJson(url) {
        const response = await fetch(url).catch(console.log);;
        return await response.json();
    }

    async fetchArticles(place) {
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${place}&format=json&page=1`;
        const data = await this.fetchJson(url);
        this.titles = data.items.map(item => ({ title: item.title, place: item.place_of_publication }));
    }
}

const store = new TitlesStore();
export default store;
