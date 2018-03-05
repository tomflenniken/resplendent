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
    let height = 180;

    return (
      <div style={{ alignSelf: 'flex-end', height: height + 'px' }}>
        {
          this.props.nobles.map((noble, index) => {
            return noble ?
              <Noble key={'noble-' + index} height={height}
                     noble={NOBLE_DEFINITIONS_BY_ID[noble]} selectNoble={this.handleSelectNoble} /> :
              <div key={'noble-' + index} className="noble">
                <svg height={height} viewBox='0 0 250 250' style={{ fontSize: '80px' }}>
                  <path d='M22, 249 a-20 -20, 0, 0, 1, -20 -20 v-208 a20,20 0 0 1 20,-20
                 h207 a20,20 0 0 1 20,20 v208 a-20 20, 1, 0, 1, -20 20 z  '
                        fill='transparent'
                        stroke='rgba(0,0,0,.9)' strokeWidth='2' strokeDasharray={noble ? 'none' : '8 4'} />

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
