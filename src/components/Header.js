import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{`Email: ${email}`}</h3>
        <section className="expense">
          <h4
            data-testid="total-field"
          >
            0
          </h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
