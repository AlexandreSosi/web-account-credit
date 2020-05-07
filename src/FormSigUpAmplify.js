import React, { Component } from 'react';
import { Form } from 'react-final-form';
import { Modal } from 'antd';
import arrayMutators from 'final-form-arrays';
import { Auth } from 'aws-amplify';
import history from '../../services/history';

class FormSigUpAmplify extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.confirm_acess = this.confirm_acess.bind(this);
  }

  confirm_acess(username, phone_number) {
    localStorage.setItem('phone_number', phone_number);
    localStorage.setItem('username', username);
    history.push({
      pathname: '/confirm',
      state: { phone_number: phone_number, username: username }
    });
  }

  removeCaracter(values) {
    let pattern = new RegExp(/([\s\W])/g);
    let phone = values.phone_number.replace(pattern, '');
    values.phone_number = '+' + phone;
  }

  handleCpf(values) {
    let pattern = new RegExp(/([\s\W])/g);
    let cpf = values.cpf.replace(pattern, '');
    values.cpf = cpf;
  }

  render() {
    return (
      <Form
        {...this.props}
        {...this.props.children}
        onSubmit={values => {
          this.removeCaracter(values);
          this.handleCpf(values);

          Auth.signUp({
            username: values.username,
            password: values.password,
            attributes: {
              email: values.username, // optional
              phone_number: values.phone_number,
              name: values.name,
              'custom:cpf': values.cpf
              //cpf:values.cpf// optional - E.164 number convention
              // other custom attributes
            },
            validationData: [] //optional
          })
            .then(data => {
              this.confirm_acess(values.username, values.phone_number);
            })
            .catch(err => {
              if (err.code === 'UserNotConfirmedException') {
                // The error happens if the user didn't finish the confirmation step when signing up
                // In this case you need to resend the code and confirm the user
                // About how to resend the code and confirm the user, please check the signUp part
              } else if (err.code === 'PasswordResetRequiredException') {
                // The error happens when the password is reset in the Cognito console
                // In this case you need to call forgotPassword to reset the password
                // Please check the Forgot Password part.
              } else if (err.code === 'NotAuthorizedException') {
                // The error happens when the incorrect password is provided
              } else if (err.code === 'UsernameExistsException') {
                // The error happens when the supplied username/email does not exist in the Cognito user pool
                Modal.info({
                  title: 'Erro ao criar conta',
                  content: 'O E-mail informado já está cadastrado'
                });
              } else if (
                err.message ===
                  "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6" ||
                err.message === 'Password did not conform with policy: Password not long enough'
              ) {
                Modal.info({
                  title: 'Erro ao criar conta',
                  content: 'A senha deve ter no mínimo 8 caracteres.'
                });
              } else if (err.message === 'Invalid email address format.') {
                Modal.info({
                  title: 'Erro ao criar conta',
                  content: 'Formato inválido de e-mail.'
                });
              } else {
                console.log(err);
              }
            });
        }}
        mutators={{
          ...arrayMutators
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop }
          },
          pristine,
          invalid,
          values
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              {/* {JSON.stringify(values)}  */}

              {this.props.children}
            </form>
          );
        }}
      />
    );
  }
}

export default FormSigUpAmplify;
