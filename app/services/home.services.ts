import axios from 'axios';
import { createAction } from 'redux-actions';
export const getBanners = (type: string) => {
  return async (dispatch: any) => {
    let res = await axios.get('http://localhost:3000/banner');
    dispatch(createAction(type, () => res.data.banners[0].typeTitle)());
  };
};
