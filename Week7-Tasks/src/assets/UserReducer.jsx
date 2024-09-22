import React, { createContext, useReducer } from 'react';

const GlobalContext = createContext();

function UserReducer(props) {
  const [globalState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_STATE':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }, { count: 0 });

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

function ChildComponent() {
  const { globalState, dispatch } = useContext(GlobalContext);

  const incrementCount = () => {
    dispatch({ type: 'UPDATE_STATE', payload: { count: globalState.count + 1 } });
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>Global Count: {globalState.count}</p>
    </div>
  );
}

export default UserReducer;