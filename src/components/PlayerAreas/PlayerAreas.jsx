import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerArea from './PlayerArea';
import { endTurn } from '../../actions/gameActions';
import { returnPlayerResourceToStack } from '../../actions/playerActions';

class PlayerAreas extends Component {

  handleReturnPlayerResourceToStack = (color, position) => {
    const { actions } = this.props;
    actions.returnPlayerResourceToStack(color, position);
  };

  handleEndTurn = () => {
    const { actions } = this.props;
    actions.endTurn(this.props.playersByPosition[this.props.activePlayer].nextPlayer);
  };

  render() {
    return this.props.positions.map((position) => {
      return (
        <PlayerArea key={position}
                    position={position} active={this.props.activePlayer === position}
                    player={this.props.playersByPosition[position]}
                    resources={this.props.resourcesByPosition[position]}
                    cards={this.props.cardsByPosition[position]}
                    reserve={this.props.reserveByPosition[position]}
                    nobles={this.props.noblesByPosition[position]}
                    returnPlayerResourceToStack={this.handleReturnPlayerResourceToStack}
                    endTurn={this.handleEndTurn} />
      );
    });
  }
}

const mapStateToProps = (state) => {
  return ({
    activePlayer: state.activePlayer,
    positions: state.positions,
    playersByPosition: state.playersByPosition,
    resourcesByPosition: state.resourcesByPosition,
    cardsByPosition: state.cardsByPosition,
    reserveByPosition: state.reserveByPosition,
    noblesByPosition: state.noblesByPosition,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      returnPlayerResourceToStack: (color, position) => {
        return dispatch(returnPlayerResourceToStack({ color, position }));
      },
      endTurn: (nextPlayer) => {
        return dispatch(endTurn({ nextPlayer }));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAreas);
