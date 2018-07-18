import { types, flow } from 'mobx-state-tree';

const Title = types.model('Title', {
  id: types.number,
  title: types.string,
  place: types.string,
});

async function fetchJson(url) {
  const response = await fetch(url).catch(console.log);
  return response.json();
}

async function fetchArticles(place) {
  const url = `http://localhost:3000/titles?${place}`;
  const data = await fetchJson(url);
  return data.map((item, i) => Title.create({
    id: i,
    title: item.title,
    place: item.place,
  }));
}

const TitlesStore = types.model('TitlesStore', {
  titles: types.array(Title),
  inputValue: types.string,
}).actions((self) => {
  function clearInputValue() {
    self.inputValue = '';
  }
  function changeInputValue(value) {
    self.inputValue = value;
  }
  const fetchTitles = flow(function* fetchTitles() {
    self.titles = yield fetchArticles(self.inputValue);
  });
  return { clearInputValue, changeInputValue, fetchTitles };
});

export default TitlesStore;
