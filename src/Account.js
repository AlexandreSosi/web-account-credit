import React from 'react';
import { DatePicker, message, Input, Button,Modal,Row, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Form, Field } from 'react-final-form';
import GroupLabelField from './GroupLabelField.js';
import { Auth } from 'aws-amplify';
import AccountFrom from './AccountForm.js';
import { InputCustomMask } from './layout/InputMask.js';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
      //some code
/*   componentDidMount(){
    fetch(Some_API).then(response=>{
        console.log(response.headers)
    })
  } */

  state = {
    date: null,
  };

  handleChange = date => {
    message.info(`Selecione a Data: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    this.setState({ date });
  };


  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>Dados do Solicitante</h1>
        <AccountFrom>
                    <Row>
                      <GroupLabelField label="Nome Completo" className="label-customizable">
                        <Field
                          className="inputField-customizable"
                          component={InputCustomMask}
                          placeholder=""
                          name="name"
                          mask=""
                          type="text"
                          required={true}
                        />
                      </GroupLabelField>
                    </Row>
                    <Row>
                      <GroupLabelField label="E-mail" className="label-customizable">
                        <Field
                          className="inputField-customizable"
                          component={InputCustomMask}
                          placeholder=""
                          name="email"
                          mask=""
                          type="text"
                          required={true}
                        />
                      </GroupLabelField>
                    </Row>
                    <Row>
                      <GroupLabelField label="Celular" className="label-customizable">
                        <Field
                          className="inputField-customizable"
                          component={InputCustomMask}
                          placeholder=""
                          name="cellphonenumber"
                          mask=""
                          type="text"
                          required={true}
                        />
                      </GroupLabelField>
                    </Row>
                    <Row>
                      <GroupLabelField label="Telefone Fixo" className="label-customizable">
                        <Field
                          className="inputField-customizable"
                          component={InputCustomMask}
                          placeholder=""
                          name="phonenumber"
                          mask=""
                          type="text"
                          required={false}
                        />
                      </GroupLabelField>
                    </Row>
                    <Row>
                      <GroupLabelField label="Nome da Mãe" className="label-customizable">
                        <Field
                          className="inputField-customizable"
                          component={InputCustomMask}
                          placeholder=""
                          name="mothername"
                          mask=""
                          type="text"
                          required={false}
                        />
                      </GroupLabelField>
                    </Row>
                    <Row>
                    <GroupLabelField label="Data de Nascimento" className="label-customizable">
                        <Field
                          className="inputField-customizable"
                          component={InputCustomMask}
                          placeholder=""
                          name="borndate"
                          mask=""
                          type="text"
                          required={false}
                        />
                      </GroupLabelField>
                    </Row>
                  <Row>
                    <GroupLabelField label="Renda Mensal" className="label-customizable">
                        <Field
                          className="inputField-customizable"
                          component={InputCustomMask}
                          placeholder=""
                          name="salary"
                          mask=""
                          type="text"
                          required={false}
                        />
                      </GroupLabelField>
                    </Row>


                <Row type="flex" justify="end">
                      <button className=" next bt-submit" type="submit">
                        Solicitar
                      </button>
                </Row>
                
                </AccountFrom>
      </div>
    );
  }
}

export default Account;
