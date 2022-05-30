import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyAPI } from '../actions';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;

    currencies();
  }

  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <WalletTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrencyAPI()),
});

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
