import createDataContext from './createDataContext';
import MatchDataApi from '../api/MatchDataApi';
const matchReducer = (state, action) => {
  switch (action.type) {
    case 'get_data':
      return {header: action.payload.header, score: action.payload.score};
    default:
      return state;
  }
};

const getData = (dispatch) => {
  return async () => {
    const headResp = await MatchDataApi.get('/header-series');
    const scoreResp = await MatchDataApi.get('/score-cards');

    dispatch({
      type: 'get_data',
      payload: {
        header: headResp.data,
        score: scoreResp.data,
      },
    });
  };
};
export const {Context, Provider} = createDataContext(
  matchReducer,
  {getData},
  null,
);
