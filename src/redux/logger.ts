const Logger = (state) => (next) => (action) => {
  console.log("Current State => ", state.getState());
  console.log("action =>", action);
  next(action);
  console.log("current State => ", state.getState());
}

export default Logger;