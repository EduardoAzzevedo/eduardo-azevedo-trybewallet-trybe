import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { recivedUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.sendButton = this.sendButton.bind(this);
  }

  handleChanges({ target }) {
    this.setState({
      [target.type]: target.value,
    });
    this.sendButton();
  }

  sendButton() {
    const magicNumber = 6;
    this.setState((state) => {
      if (state.email.includes('@')
        && state.email.includes('.com')
        && state.password.length >= magicNumber) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  render() {
    const {
      disabled,
      email,
      password,
    } = this.state;
    const { getEmail } = this.props;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            type="email"
            value={ email }
            onChange={ this.handleChanges }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            data-testid="password-input"
            type="password"
            value={ password }
            onChange={ this.handleChanges }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => getEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(recivedUser(email)),
});

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
