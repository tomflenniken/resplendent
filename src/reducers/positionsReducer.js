const initialState = [
  'North',
  'East',
  'South',
  'West'
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
