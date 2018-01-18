const initialState = {
  North: {
    nickname: 'Nick',
    nextPlayer: 'East'
  },
  East: {
    nickname: 'Dianna',
    nextPlayer: 'South'
  },
  South: {
    nickname: 'Tom',
    nextPlayer: 'West'
  },
  West: {
    nickname: 'Beverly',
    nextPlayer: 'North'
  },
};

export default (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
}
