import { action, observable } from 'mobx';

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

    @action async fetchArticles(place) {
        const url = `http://localhost:3000/titles?${place}`;
        const data = await this.fetchJson(url);
        this.titles = data.map(item => ({ title: item.title, place: item.place }));
    }
}

const store = new TitlesStore();
export default store;
