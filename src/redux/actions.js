import { INIT_DATA } from './actionTypes';

export const initData = (data) => {
    return {
        type: INIT_DATA,
        data
    }
}