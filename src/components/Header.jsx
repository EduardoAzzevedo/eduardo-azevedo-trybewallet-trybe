import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{`Email: ${email}`}</h3>
        <section className="expense">
          <h4
            data-testid="total-field"
          >
            {total.map((price) => price.value * price
              .exchangeRates[price.currency].ask)
              .reduce(((acc, curr) => acc + curr), 0).toFixed(2)}
          </h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(Header);
