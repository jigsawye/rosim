import produce from 'immer';

export default (handlers, defaultState) => (state = defaultState, action) =>
  produce(state, draft => {
    const reducer = handlers[action.type];
    reducer && reducer(draft, action);
  });
