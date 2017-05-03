import api from './api';

export const fetchVehicleMakes = () => {
  return (dispatch) => {
    const makes = api.getAllVehicles();
    dispatch({
      type: 'LOAD_VEHICLE_MAKES',
      makes: makes 
    })
  }
}

export const updateFilter = (filter) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_VEHICLE_FILTER',
      filter: filter 
    })
  }
}

export const setVehicleMake = (make) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_VEHICLE_MAKE',
      make: make
    })
  }
}
