import React, { Component } from 'react';
import GemStack from '../GemStack/GemStack';
import './Board.css';
import { connect } from 'react-redux';
import { returnPlayerResourceToStack, selectResourceFromStack } from '../../actions/playerActions';
import { endTurn } from '../../actions/gameActions';
import CardRows from '../CardRows/CardRows';

class Board extends Component {

  handleSelectResourceFromStack = (color) => {
    const { actions } = this.props;
    actions.selectResourceFromStack(color, this.props.activePlayer);
  };

  handleReturnPlayerResourceToStack = (color, position) => {
    const { actions } = this.props;
    actions.returnPlayerResourceToStack(color, position);
  };

  handleClick = (event) => {
    const { actions } = this.props;
    event.preventDefault();
    actions.endTurn(this.props.playersByPosition[this.props.activePlayer].nextPlayer);
  };

  createBoardGemStacks() {
    return Object.keys(this.props.supply).map((color) => {
      return (
        <GemStack key={color + '-supply'} color={color} count={this.props.supply[color]}
                  height='150'
                  selectGemFromStack={this.handleSelectResourceFromStack} />
      );
    });
  }

  createPlayerGemStacks(position) {
    let highlightClass = this.props.activePlayer === position ? "highlight" : "";
    return (
      <div key={position + '-resources'}>
        <div className={'player-resources-outline ' + highlightClass} />
        {
          Object.keys(this.props.resourcesByPosition[position]).map((color) => {
            return (
              <GemStack key={position + '-' + color + '-resource'}
                        color={color} position={position}
                        count={this.props.resourcesByPosition[position][color]}
                        height='100'
                        selectGemFromStack={this.handleReturnPlayerResourceToStack} />);
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className="board">
        <div>
          <button onClick={this.handleClick}>
            End Turn
          </button>
        </div>
        <div>
          {this.createBoardGemStacks()}
        </div>
        <CardRows />
        {
          Object.keys(this.props.resourcesByPosition).map((position) => {
            return this.createPlayerGemStacks(position);
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    ...state
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      selectResourceFromStack: (color, position) => {
        return dispatch(selectResourceFromStack({ color, position }));
      },
      returnPlayerResourceToStack: (color, position) => {
        return dispatch(returnPlayerResourceToStack({ color, position }));
      },
      endTurn: (nextPlayer) => {
        return dispatch(endTurn({ nextPlayer }));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
