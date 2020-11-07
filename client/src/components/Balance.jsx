import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps =(state)=>{
    return{
        balance : state.balance,
    }
}

const Balance = (props) => {
    return ( <>
    <h4>Your Balance</h4>
    <h1>{props.balance}$</h1>
    </> );
}
 
export default connect(mapStateToProps)(Balance);