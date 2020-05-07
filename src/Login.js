import React from 'react';
import { DatePicker, message, Input } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Account from './Account';

const Login = () => (
    <div>
      <AmplifySignOut />
     <Account/>
    </div>
  );
  
export default withAuthenticator(Login);