export const SELECT_RESOURCE_FROM_STACK = 'SELECT_RESOURCE_FROM_STACK';
export const selectResourceFromStack = ({ position, color }) => {
  return {
    type: SELECT_RESOURCE_FROM_STACK,
    payload: {
      position,
      color,
    },
  };
};

export const RETURN_PLAYER_RESOURCE_TO_STACK = 'RETURN_PLAYER_RESOURCE_TO_STACK';
export const returnPlayerResourceToStack = ({ position, color }) => {
  return {
    type: RETURN_PLAYER_RESOURCE_TO_STACK,
    payload: {
      position,
      color,
    },
  };
};

export const SELECT_CARD = 'SELECT_CARD';
export const selectCard = ({ position, card, replacement }) => {
  return {
    type: SELECT_CARD,
    payload: {
      position,
      card,
      replacement
    },
  };
};

export const DRAW_CARD = 'DRAW_CARD';
export const drawCard = ({ position, card }) => {
  return {
    type: DRAW_CARD,
    payload: {
      position,
      card
    },
  };
};

