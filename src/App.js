import './App.css';

import { connect } from 'react-redux'
import { anothername } from './action';
import { useState } from 'react';

import Mix from './Mix';

function App() {

  const [loder, setLoder] = useState(false)
  return (
    <>
      <div className="App">
        {/* <h1>Name is {loder ? "Data Fatching....." : props.name}</h1>
        <h1>Surname is {props.surname}</h1>
        <button onClick={() => { props.changename(setLoder) }}>Change Name</button>
        <button onClick={() => { props.changesurname() }}>Change Surname</button> */}
        <Mix />
      </div>
    </>
  );
}

// const mapStateToPropes = (state) => {
//   return {
//     "surname": state.surname,
//     "name": state.name,
//   }
// }

// const mapDispatchToPropes = (dispatch) => {
//   return {
//     changename: (setLoder) => dispatch(anothername(setLoder)),
//     changesurname: () => dispatch({ type: 'CHANGE_SURNAME', payload: 'kp' })
//   }
// }

export default App;
