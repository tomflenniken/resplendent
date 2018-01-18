import React from 'react';
import PropTypes from 'prop-types';
import GemStack from '../GemStack/GemStack';

const PlayerArea = ({ position, active, player, resources, returnPlayerResourceToStack, endTurn }) => {
  let highlightClass = active ? 'highlight' : '';

  function handleClick(event) {
    event.preventDefault();
    endTurn();
  }


  return (
    <div key={position + '-area'}>
      <div className={'player-area-outline ' + highlightClass} />
      <div className={'resources'}>
        {

          Object.keys(resources).map((color) => {
            return (
              <GemStack key={position + '-' + color + '-resource'}
                        color={color} position={position}
                        count={resources[color]}
                        height='100'
                        selectGemFromStack={returnPlayerResourceToStack} />);
          })
        }
      </div>
      <div style={{ height: '70px', alignSelf: 'flex-end', padding: '10px' }}>
        <div style={{textAlign: 'left'}}>
          {player.nickname}
        </div>
        {
          active &&
          <button onClick={handleClick}>
            End Turn
          </button>
        }
      </div>
    </div>
  );
};

PlayerArea.propTypes = {
  position: PropTypes.string,
  active: PropTypes.bool,
  player: PropTypes.object,
  resources: PropTypes.object,
  returnPlayerResourceToStack: PropTypes.func
};

export default PlayerArea;
