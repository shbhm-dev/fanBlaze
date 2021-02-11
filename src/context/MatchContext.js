import createDataContext from './createDataContext';
import MatchDataApi from '../api/MatchDataApi'
const matchReducer = (state, action) => {
  switch (action.type) {
    case 'get_seriesData':
      return action.payload;
    case 'get_scoreCardsData':
      return action.payload;
    default:
      return state;
  }
}
const getSeriesData = (dispatch) => {
  return async () => {
    const response = await MatchDataApi.get('/header-series');

    dispatch({type: 'get_seriesData', payload: response.data});
    console.log('series data:');
    console.log(response.data);
  }
}
const getScoreCardsData = (dispatch) => {
  return async () => {
    const response = await MatchDataApi.get('/score-cards');

    dispatch({type: 'get_scoreCardsData', payload: response.data});
    console.log('score cards data:');
    console.log(response.data);
  }
}
export const {Context, Provider} = createDataContext(
  matchReducer,
  {getSeriesData, getScoreCardsData},
  [],
);
