import React, { Component } from 'react';
import CardRow from './CardRow';
import { connect } from 'react-redux';
import { drawCard, selectCard } from '../../actions/playerActions';
import { sample } from 'lodash';

class CardRows extends Component {
  handleSelectCard = (id) => {
    const { actions } = this.props;
    if (typeof id === 'number') {
      actions.drawCard(sample(this.props['deck' + id]).id);
    } else {
      actions.selectCard(id);
    }
  };

  render() {
    return (
      <div className='card-rows'>
        <CardRow rowNumber={2}
                 row={this.props.row2}
                 deck={this.props.deck2}
                 selectCard={this.handleSelectCard}/>
        <CardRow rowNumber={1}
                 row={this.props.row1}
                 deck={this.props.deck1}
                 selectCard={this.handleSelectCard}/>
        <CardRow rowNumber={0}
                 row={this.props.row0}
                 deck={this.props.deck0}
                 selectCard={this.handleSelectCard}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
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
      selectCard: (card) => {
        return dispatch(selectCard({ card }));
      },
      drawCard: (card, row) => {
        return dispatch(drawCard({ card, row }));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRows);
