import { useContext } from 'react';

import StoreContext from '../context/StoreContext';

const useStoreContext = () => useContext(StoreContext);

export default useStoreContext;
