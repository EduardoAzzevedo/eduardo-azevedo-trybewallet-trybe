import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrenciesAPI from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;

    currencies();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrenciesAPI()),
});

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
