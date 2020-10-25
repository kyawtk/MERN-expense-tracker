import React from 'react';
import {connect} from 'react-redux'


const mapStateToProps =(state)=>{
    return {
        income : state.income,
        expenses : state.expenses
    }
}
const IncomeExpenses = (props) => {
    return ( <div className="in-exp-container">
        <div className="income">
            <h4>Income</h4>
<p>+{props.income}$</p>
        </div>
        <div className="expense">
            <h4>Expense</h4>
<p>{props.expenses}$</p>
        </div>
    </div> );
}
 
export default connect(mapStateToProps)(IncomeExpenses);