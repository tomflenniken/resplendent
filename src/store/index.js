export const initialState = {
    blue: 7
};

class Store {
  state = { ...initialState };

  removeColor(color) {
    this.state = {
      ...this.state,
      [color]: this.state.color - 1
    }
  }
}

export default new Store();
