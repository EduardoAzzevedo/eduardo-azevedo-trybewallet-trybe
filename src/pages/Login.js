import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.submitBtn = this.submitBtn.bind(this);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChanges({ target }) {
    this.setState({
      [target.type]: target.value,
    });
    this.submitBtn();
  }

  submitBtn() {
    const passwordLenght = 6;

    this.setState((state) => {
      if (state.email.includes('@')
      && state.email.includes('.com')
      && state.password.length >= passwordLenght) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    });
  }

  render() {
    const { isDisabled, email, password } = this.state;
    const { getEmail } = this.props;
    return (
      <form>
        <input
          type="email"
          placeholder="Insira seu Email"
          data-testid="email-input"
          onChange={ this.handleChanges }
          value={ email }
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="password-input"
          onChange={ this.handleChanges }
          value={ password }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isDisabled }
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
  getEmail: (email) => dispatch(receiveUser(email)),
});

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
