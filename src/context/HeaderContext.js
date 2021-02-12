import createDataContext from './createDataContext';
import MatchDataApi from '../api/MatchDataApi';
const matchReducer = (state, action) => {
  switch (action.type) {
    case 'get_seriesData':
      return action.payload;
    default:
      return state;
  }
};
const getSeriesData = (dispatch) => {
  return async () => {
    const response = await MatchDataApi.get('/header-series');
    dispatch({type: 'get_seriesData', payload: response.data});
  };
};

export const {Context, Provider} = createDataContext(
  matchReducer,
  {getSeriesData},
  [],
);
