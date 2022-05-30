import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpensesTable extends React.Component {
  render() {
    const { expenses, onDelete } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses && expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {Number(expense.value * expense.exchangeRates[expense.currency]
                .ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                onClick={ () => onDelete(expense.id) }
                data-testid="delete-btn"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (data) => dispatch(deleteExpense(data)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.shape.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
