import React from 'react';
import {connect} from 'react-redux'


const mapStateToProps =(state)=>{
    return {
        income : state.income,
        expenses : state.expenses
    }
}
const IncomeExpenses = (props) => {
    return ( <div className="inc-exp-container">
        <div className="income">
            <h4>Income</h4>
<p className='money plus'>+{props.income}$</p>
        </div>
        <div className="expense">
            <h4>Expense</h4>
<p className='money minus'>{props.expenses}$</p>
        </div>
    </div> );
}
 
export default connect(mapStateToProps)(IncomeExpenses);