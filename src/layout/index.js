// Layout sem nada, para tela de login etc
import React from 'react';
import { Layout } from 'antd';

export default function LayoutLogin({ children }) {
  return <Layout className="page">{children}</Layout>;
}
