import React, { Component } from 'react';
import CardRow from './CardRow';
import { connect } from 'react-redux';
import { selectCard } from '../../actions/playerActions';

class CardRows extends Component {
  handleSelectCard = (card, row, slot) => {
    const { actions } = this.props;
    actions.selectCard(card, row, slot);
  };

  render() {
    return (
      <div className='card-rows'>
        <CardRow rowNumber={2}
                 slot0={this.props.cards[2][0]}
                 slot1={this.props.cards[2][1]}
                 slot2={this.props.cards[2][2]}
                 slot3={this.props.cards[2][3]}
                 deck={[1, 2, 3, 4]}
                 selectCard={this.handleSelectCard}/>
        <CardRow rowNumber={1}
                 slot0={this.props.cards[1][0]}
                 slot1={this.props.cards[1][1]}
                 slot2={this.props.cards[1][2]}
                 slot3={this.props.cards[1][3]}
                 deck={[1, 2]}
                 selectCard={this.handleSelectCard} />
        <CardRow rowNumber={0}
                 slot0={this.props.cards[0][0]}
                 slot1={this.props.cards[0][1]}
                 slot2={this.props.cards[0][2]}
                 slot3={this.props.cards[0][3]}
                 deck={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                 selectCard={this.handleSelectCard} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    cards: [
      {
        0: state.cards[0][0],
        1: state.cards[0][1],
        2: state.cards[0][2],
        3: state.cards[0][3],
      },
      {
        0: state.cards[1][0],
        1: state.cards[1][1],
        2: state.cards[1][2],
        3: state.cards[1][3],
      },
      {
        0: state.cards[2][0],
        1: state.cards[2][1],
        2: state.cards[2][2],
        3: state.cards[2][3],
      }
    ]
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      selectCard: (card, row, slot) => {
        return dispatch(selectCard({ card, row, slot }));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRows);
