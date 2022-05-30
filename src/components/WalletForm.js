import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <input
          type="text"
          data-testid="value-input"
          placeholder="Despesa"
        />
        <input
          type="text"
          data-testid="description-input"
          placeholder="Descrição"
        />
        <label htmlFor="selectCurrency">
          Moeda
          <select id="selectCurrency">
            {currencies.map(
              (currency, index) => <option key={ index }>{currency}</option>,
            )}
          </select>
        </label>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
