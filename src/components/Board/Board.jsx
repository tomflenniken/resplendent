import React, { Component } from 'react';
import GemStack from '../GemStack/GemStack';
import './Board.css';
import { connect } from 'react-redux';
import { selectResourceFromStack } from '../../actions/playerActions';
import CardRows from '../CardRows/CardRows';
import PlayerAreas from '../PlayerAreas/PlayerAreas';
import Nobles from '../Nobles'

class Board extends Component {

  handleSelectResourceFromStack = (color) => {
    const { actions } = this.props;
    actions.selectResourceFromStack(color, this.props.activePlayer);
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

  render() {
    return (
      <div className="board">
        <Nobles />
        <div>
          {this.createBoardGemStacks()}
        </div>
        <CardRows />
        <PlayerAreas />
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
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
