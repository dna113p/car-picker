import {createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_VEHICLE_FILTER':
      return {
        ...state,
        selectedMake: null,
        vehicleMakesFilter: action.filter,
        filteredMakes: state.vehicleMakes.filter(make => {
          make = make.name.toLowerCase();
          return make.indexOf(action.filter.toLowerCase()) > -1;
        })
      }
    case 'LOAD_VEHICLE_MAKES':
      return {
        ...state,
        vehicleMakes: action.makes,
        filteredMakes: action.makes
      }
    case 'SET_VEHICLE_MAKE':
      return {
        ...state,
        selectedMake: action.make
      }
    default:
      return state;
  }
};

export default () => {
  const store = createStore(
    reducer, 
    {
      vehicleMakes: [],
      filteredMakes: [],
      vehicleMakesFilter: '' 
    },
    applyMiddleware(reduxThunk)
  );

  return store;
}
