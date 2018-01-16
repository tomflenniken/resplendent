const initialState = {
  North: {
    nextPlayer: 'East'
  },
  East: {
    nextPlayer: 'South'
  },
  South: {
    nextPlayer: 'West'
  },
  West: {
    nextPlayer: 'North'
  },
};

export default (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
}
