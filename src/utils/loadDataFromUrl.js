import { parse } from 'query-string';
import { loadSaveData } from '../actions';

export default ({ dispatch }) => {
  const { data } = parse(window.location.search);
  if (data) {
    try {
      const jsonData = atob(data);
      const { _id, name, ...loadData } = JSON.parse(jsonData);
      dispatch(loadSaveData(loadData));
    } catch (error) {
      window.location.href = window.location.origin;
    }
  }
};
