import useStoreContext from './useStoreContext';

const useAction = type => {
  const [, dispatch] = useStoreContext();
  return payload => dispatch({ type, payload });
};

export default useAction;
