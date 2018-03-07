import React, { Component } from 'react';
import { connect } from 'react-redux';
import Noble from '../Noble/Noble';
import { selectNoble } from '../../actions/playerActions';
import { NOBLE_DEFINITIONS_BY_ID } from '../../constants/nobleDefintions';

class Nobles extends Component {
  handleSelectNoble = (id) => {
    const { actions } = this.props;
    actions.selectNoble(this.props.activePlayer, id);
  };

  render() {
    let sideLength = 140;
    let arcLength = 10;

    return (
      <div className="flex-container" style={{ height: sideLength }}>
        {
          this.props.nobles.map((noble, index) => {
            return noble ?
              <Noble key={'noble-' + index} height={sideLength}
                     noble={NOBLE_DEFINITIONS_BY_ID[noble]} selectNoble={this.handleSelectNoble} /> :
              <div key={'noble-' + index} className="noble">
                <svg height={sideLength} viewBox={`0 0 ${sideLength} ${sideLength}`}>
                  <path d={
                    `M${arcLength + 1}, ${sideLength - 1}
                    a-${arcLength} -${arcLength}, 0, 0, 1, -${arcLength} -${arcLength}
                    v-${sideLength - 2 * arcLength - 2}
                    a${arcLength},${arcLength} 0 0 1 ${arcLength},-${arcLength}
                    h${sideLength - 2 * arcLength - 2}
                    a${arcLength},${arcLength} 0 0 1 ${arcLength},${arcLength}
                    v${sideLength - 2 * arcLength - 2}
                    a-${arcLength} ${arcLength}, 1, 0, 1, -${arcLength} ${arcLength}
                    z`
                  }
                        fill='transparent'
                        stroke='rgba(0,0,0,.5)' strokeWidth='2' strokeDasharray={noble ? 'none' : '8 4'} />
                </svg>
              </div>;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    activePlayer: state.activePlayer,
    nobles: state.nobles
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      selectNoble: (position, noble) => {
        return dispatch(selectNoble({ position, noble }));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nobles);
