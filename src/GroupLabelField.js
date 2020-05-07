import React, { Component } from 'react';
import { Icon } from 'antd';

class GroupLabelField extends Component {
  render() {
    return (
      <>
        <div className="formGroup ">
          {/* Todo tranform component icon */}

          {this.props.iconType && (
            <Icon
              {...this.props.children}
              style={{ paddingRight: '10px' }}
              theme="filled"
              className={this.props.customClassIcon}
              type={this.props.iconType}
            ></Icon>
          )}
          {this.props.label && (
            <label>
              {/* style={{ display: "flex" }} */} {this.props.label}{' '}
              {this.props.required && (
                <small className="danger" style={{ color: '#ea5f5f' }}>
                  {' '}
                  (Obrigatório){' '}
                </small>
              )}
            </label>
          )}
          {this.props.children}
        </div>
      </>
    );
  }
}

export default GroupLabelField;
