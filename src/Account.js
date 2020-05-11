import React from 'react';
import { message, Row, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Field } from 'react-final-form';
import GroupLabelField from './GroupLabelField.js';
import { Auth } from 'aws-amplify';
import AccountFrom from './AccountForm.js';
import { InputCustomMask } from './layout/InputMask.js';
import { Container, TArea } from './styles';
import TextArea from 'antd/lib/input/TextArea';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const response = await Auth.currentAuthenticatedUser();
    this.setState({ cognito: response.signInUserSession.idToken.jwtToken });
  }

  state = {
    cognito: null
  };

  handleChange = date => {
    message.info(`Selecione a Data: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
  };

  render() {
    return (
      <Container>
        <Row type="flex" justify="center" align="middle" gutter={4}>
          <div className="modal">
            <div>
              <h1>Token de Acesso APIGateway from Cognito</h1>
              <div>
                <TextArea rows={20} value={this.state.cognito}></TextArea>
              </div>
              <div>
                <CopyToClipboard text={this.state.cognito} onCopy={() => alert('ID_TOKEN copiado')}>
                  <Button>Copiar Token</Button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Account;
