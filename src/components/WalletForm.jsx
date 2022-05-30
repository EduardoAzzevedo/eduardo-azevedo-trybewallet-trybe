import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onExpensesClick = this.onExpensesClick.bind(this);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  onHandleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onExpensesClick() {
    const { expenses, expesesFunc } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };

    expesesFunc(expense);
    this.setState({
      value: '',
      description: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <input
          type="number"
          name="value"
          value={ value }
          onChange={ this.onHandleChange }
          data-testid="value-input"
          placeholder="Valor da Despesa atual"
        />
        <input
          type="text"
          name="description"
          value={ description }
          onChange={ this.onHandleChange }
          data-testid="description-input"
          placeholder="Descrição da Despesa atual"
        />
        <label htmlFor="selectCurrency">
          Moeda
          <select
            id="selectCurrency"
            name="currency"
            value={ currency }
            onChange={ this.onHandleChange }
          >
            {currencies.map(
              (curr, index) => <option key={ index }>{curr}</option>,
            )}
          </select>
        </label>
        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.onHandleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.onHandleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button type="button" onClick={ this.onExpensesClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expesesFunc: (quotation) => dispatch(fetchExpenses(quotation)),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.shape.isRequired,
  expesesFunc: PropTypes.func.isRequired,
  expenses: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
