import { parse } from 'query-string';

export default () => {
  const { data } = parse(window.location.search);

  if (data) {
    try {
      const jsonData = atob(data);
      const { _id, name, ...loadData } = JSON.parse(jsonData);
      return loadData;
    } catch (error) {
      window.location.href = window.location.origin;
      return null;
    }
  }
};
