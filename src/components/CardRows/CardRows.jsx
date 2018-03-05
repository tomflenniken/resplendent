import React, { Component } from 'react';
import CardRow from './CardRow';
import { connect } from 'react-redux';
import { drawCard, selectCard } from '../../actions/playerActions';
import { sample } from 'lodash';
import { CARD_DEFINITIONS_BY_ID } from '../../constants/cardDefintions';

class CardRows extends Component {
  handleSelectCard = (id) => {
    const { actions } = this.props;
    if (typeof id === 'number') {
      let sampledCard = sample(this.props['deck' + id]);
      if (sampledCard) {
        actions.drawCard(this.props.activePlayer, sampledCard);
      }
    } else {
      let tier = CARD_DEFINITIONS_BY_ID[id].tier;
      let replacement = sample(this.props['deck' + tier]);
      if (replacement) {
        actions.drawCard(this.props.activePlayer, replacement);
        actions.selectCard(this.props.activePlayer, id, replacement);
      } else {
        actions.selectCard(this.props.activePlayer, id);
      }
    }
  };

  render() {
    return (
      <div className='card-rows'>
        <CardRow rowNumber={2}
                 row={this.props.row2}
                 deck={this.props.deck2}
                 selectCard={this.handleSelectCard} />
        <CardRow rowNumber={1}
                 row={this.props.row1}
                 deck={this.props.deck1}
                 selectCard={this.handleSelectCard} />
        <CardRow rowNumber={0}
                 row={this.props.row0}
                 deck={this.props.deck0}
                 selectCard={this.handleSelectCard} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    activePlayer: state.activePlayer,
    row0: state.row0,
    row1: state.row1,
    row2: state.row2,
    deck0: state.deck0,
    deck1: state.deck1,
    deck2: state.deck2,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      selectCard: (position, card, replacement) => {
        return dispatch(selectCard({ position, card, replacement }));
      },
      drawCard: (position, card, row) => {
        return dispatch(drawCard({ position, card, row }));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRows);
