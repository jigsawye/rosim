import produce from 'immer';

export default handlers => (state, action) =>
  produce(state, draft => {
    const reducer = handlers[action.type];
    if (reducer) {
      reducer(draft, action);
    }
  });
