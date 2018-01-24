export const SELECT_RESOURCE_FROM_STACK = 'SELECT_RESOURCE_FROM_STACK';
export const selectResourceFromStack = ({ color, position }) => {
  return {
    type: SELECT_RESOURCE_FROM_STACK,
    payload: {
      position,
      color,
    },
  };
};

export const RETURN_PLAYER_RESOURCE_TO_STACK = 'RETURN_PLAYER_RESOURCE_TO_STACK';
export const returnPlayerResourceToStack = ({ color, position }) => {
  return {
    type: RETURN_PLAYER_RESOURCE_TO_STACK,
    payload: {
      position,
      color,
    },
  };
};

export const SELECT_CARD = 'SELECT_CARD';
export const selectCard = ({ card, replacement }) => {
  return {
    type: SELECT_CARD,
    payload: {
      card,
      replacement
    },
  };
};

export const DRAW_CARD = 'DRAW_CARD';
export const drawCard = ({ card }) => {
  return {
    type: DRAW_CARD,
    payload: {
      card
    },
  };
};

