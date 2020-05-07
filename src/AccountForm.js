import React from 'react';
import { DatePicker, message, Input, Button,Modal,Row, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Form, Field } from 'react-final-form';
import GroupLabelField from './GroupLabelField.js'
import { Auth } from 'aws-amplify';
import arrayMutators from 'final-form-arrays';

class AccountFrom extends React.Component {
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
    return (
      <Form
        {...this.props}
        {...this.props.children}
        onSubmit={values => {

          Modal.info({
            title: 'Erro ao criar conta',
            content: values.name + ' ' + values.email + ' '+ values.cellphonenumber + ' ' + values.phonenumber + ' ' + values.mothername + ' '+ values.borndate + ' '+ values.salary
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
export default AccountFrom;
