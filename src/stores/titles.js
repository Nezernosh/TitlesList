import { action, observable, computed } from 'mobx';

class TitlesStore {
    @observable titles = [];
    @observable places = [];
    @observable inputValue = '';

    @action clearInputValue = () => {
        this.inputValue = '';
    }

    getTitle(index) {
        return this.titles[index];
    }

    getPlace(index) {
        return this.places[index];
    }

    @computed get getCount() {
        return this.titles.length;
    }

    @computed get currentInputValue() {
        return this.inputValue;
    }

    fetchTitlesPlaces(place) {
        const url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${place}&format=json&page=1`;
        fetch(url).then(
            response => {
                response.json().then(
                    data => {
                        this.titles = data.items.map(item => item.title);
                        this.places = data.items.map(item => item.place_of_publication);
                    })
            }
        )
            .catch(error => new Error(error));
    }
}

const store = new TitlesStore();
export default store;
