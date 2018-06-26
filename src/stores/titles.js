import { observable } from 'mobx';

class TitlesStore {
    @observable titles = ['1', '2', '3', '4', '5', '6', '7'];

    @observable places = ['place 1', 'place 2', 'place 3', 'place 4', 'place 5', 'place 6', 'place 7'];

    getTitle(index) {
        return this.titles[index];
    }

    getPlace(index) {
        return this.places[index];
    }
}

const store = new TitlesStore();
export default store;
