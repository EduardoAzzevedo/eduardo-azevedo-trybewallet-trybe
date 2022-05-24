import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, valorTotal } = this.props;
    return (
      <header>
        <h4 data-testid="email-field">{`Email: ${email}`}</h4>
        <section className="expense">
          <h4
            data-testid="total-field"
          >
            {`Valor Total: ${valorTotal.reduce(((acc, curr) => acc + curr), 0)}`}
          </h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  valorTotal: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  valorTotal: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(Header);
