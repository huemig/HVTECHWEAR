import { createSelector } from 'reselect';

const cartSelector = state => state.posts;

export const getCart = createSelector([cartSelector], state => state);