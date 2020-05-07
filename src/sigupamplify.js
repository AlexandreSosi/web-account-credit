import React, { Component } from 'react';
import FormSigUpAmplify from '../../components-form/login/FormSigUpAmplify';
import './../cognito-login.scss';
import { Row, Typography } from 'antd';
import GroupLabelField from '../../components-form/GroupLabelField';
import { Field } from 'react-final-form';
import { InputCustomMask } from '../../components-form/InputMask';
import { InputPassword } from '../../components-form/InputPassword';
import logo from '~/assets/logo_login.png';
import { Link } from 'react-router-dom';
import { validarCPF } from '../../utils/validarCPF';

const { Title } = Typography;

const ErrorCPF = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span className="errorMsg">Insira um CPF válido</span> : null
    }
  />
);
const requiredCPF = value => (validarCPF(value) ? undefined : ErrorCPF);

class SigupAmplify extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  render() {
    return (
      <Row type="flex" justify="center" align="middle" gutter={16}>
        <div className="modal">
          <div className="modal-content background-customizable modal-content-mobile visible-md visible-lg">
            <div className="modal-body">
              <div>
                <div>
                  <div className="banner-customizable">
                    <center>
                      <img className="logo-customizable" src={logo} alt="Logo" />
                    </center>
                  </div>
                </div>
              </div>

              <Row>
                <Title className="textDescription-customizable" level={4}>
                  Crie uma nova conta
                </Title>
              </Row>

              <FormSigUpAmplify>
                <Row>
                  <GroupLabelField label="E-mail" className="label-customizable">
                    <Field
                      className="  inputField-customizable"
                      component={InputCustomMask}
                      placeholder=""
                      name="username"
                      mask=""
                      required={true}
                    />
                  </GroupLabelField>
                </Row>
                <Row>
                  <GroupLabelField label="Nome completo">
                    <Field
                      className=" inputField-customizable"
                      component={InputCustomMask}
                      placeholder=""
                      name="name"
                      mask=""
                      required={true}
                    />
                  </GroupLabelField>
                </Row>
                <Row>
                  <GroupLabelField label="Telefone Celular">
                    <Field
                      className=" inputField-customizable"
                      component={InputCustomMask}
                      placeholder=""
                      name="phone_number"
                      mask="+55 (99) 99999-9999"
                      required={true}
                    />
                  </GroupLabelField>
                </Row>
                <Row>
                  <GroupLabelField label="CPF">
                    <Field
                      className="input-form"
                      component={InputCustomMask}
                      name="cpf"
                      mask="999.999.999-99"
                      validate={requiredCPF}
                      required={true}
                    />
                    <ErrorCPF name="cpf" />
                  </GroupLabelField>
                </Row>
                <Row>
                  <GroupLabelField label="Defina uma senha">
                    <Field
                      className=" inputField-customizable"
                      type="password"
                      component={InputPassword}
                      name="password"
                      mask=""
                      required={true}
                    />
                  </GroupLabelField>
                </Row>
                <Row type="flex" justify="end">
                  <button className=" next bt-submit signUpButton submitButton-customizable" type="submit">
                    Criar
                  </button>
                </Row>
                <Row>
                  Já possui uma conta? <Link to="/sigin"> Acesse sua conta</Link>{' '}
                </Row>
                <Row>
                  Não recebeu o código de confirmação? <Link to="/confirm"> Clique aqui</Link>{' '}
                </Row>
              </FormSigUpAmplify>
            </div>
          </div>
        </div>
      </Row>
    );
  }
}

export default SigupAmplify;
