import React from 'react';
import PropTypes from 'prop-types';
import GemStack from '../GemStack/GemStack';
import PlayerCardContainer from './PlayerCardContainer';
import CARD_COLORS from '../../constants/cardColors';
import { CARD_DEFINITIONS_BY_ID } from '../../constants/cardDefintions';
import { NOBLE_DEFINITIONS_BY_ID } from '../../constants/nobleDefintions';
import Noble from '../Noble/Noble';
import Reserve from './Reserve';

const PlayerArea = ({ position, active, player, resources, cards, nobles, returnPlayerResourceToStack, endTurn }) => {
  let highlightClass = active ? 'highlight' : '';

  function handleClick(event) {
    event.preventDefault();
    endTurn();
  }


  return (
    <div key={position + '-area'} className="flex-container" >
      <div className={'player-area-outline ' + highlightClass}>
        <div>
          <div className='nobles' style={{ display: 'flex' }}>
            {

              nobles.map((noble) => {
                console.log(noble);
                return (
                  <Noble key={position + '-' + noble} noble={NOBLE_DEFINITIONS_BY_ID[noble]} height='100' />
                );
              })
            }
          </div>
          <div className='resources'>
            {

              Object.keys(resources).map((color) => {
                return (
                  <GemStack key={position + '-' + color + '-resource'}
                            color={color} position={position}
                            count={resources[color]}
                            height='100'
                            selectGemFromStack={returnPlayerResourceToStack} />
                );
              })
            }
          </div>
          <div className='cards' style={{ display: 'flex' }}>
            {
              CARD_COLORS.map((color) => {
                return (
                  <PlayerCardContainer key={color + '-cards'} cards={
                    cards.filter((card) => {
                      return CARD_DEFINITIONS_BY_ID[card].color === color;
                    })
                  } />
                );
              })
            }
          </div>
          <div className='reserve' style={{ display: 'flex' }}>
            <Reserve cards={cards} />
          </div>
        </div>
        <div style={{ height: '70px', alignSelf: 'flex-end', padding: '10px' }}>
          <div style={{ textAlign: 'left' }}>
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
    </div>
  );
};

PlayerArea.propTypes = {
  position: PropTypes.string,
  active: PropTypes.bool,
  player: PropTypes.object,
  resources: PropTypes.object,
  cards: PropTypes.array,
  nobles: PropTypes.array,
  returnPlayerResourceToStack: PropTypes.func
};

export default PlayerArea;
