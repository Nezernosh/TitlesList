import { action, observable } from 'mobx';

class TitlesStore {
    @observable titles = [];

    @observable inputValue = '';

    @action clearInputValue = () => {
      this.inputValue = '';
    }

    static async fetchJson(url) {
      const response = await fetch(url).catch(console.log);
      return response.json();
    }

    @action async fetchArticles(place) {
      const url = `http://localhost:3000/titles?${place}`;
      const data = await TitlesStore.fetchJson(url);
      this.titles = data.map((item, i) => ({ id: i, title: item.title, place: item.place }));
    }
}

const store = new TitlesStore();
export default store;
