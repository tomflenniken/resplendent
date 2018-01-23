export const END_TURN = 'END_TURN';
export const endTurn = ({ nextPlayer }) => {
  return {
    type: END_TURN,
    payload: {
      nextPlayer
    },
  };
};

export const START = 'START';
export const start = () => {
  return {
    type: START,
    payload: {
    },
  };
};
