import React from 'react'
import { connect } from 'react-redux'

const Mix = (props) => {
    return (
        <div>
            <h1>Mixed Reducer</h1>
            <p><b>Name : </b>{props.name}</p>
            <p>Wishes : {props.wish.map(item => (<h6>{item}</h6>))}</p>
            <button onClick={props.changename}>Change Name</button>
        </div>
    )
}

const mapStateToPropesmix = (state) => {
    return {
        "name": state.name,
        "wish": state.wish
    }
}

const mapDispatchToPropesminx = (dispatch) => {
    return {
        changename: () => dispatch({ 'type': 'CHANGE_NAME', 'payload': 'prk' }),
    }
}

export default connect(mapStateToPropesmix, mapDispatchToPropesminx)(Mix);
