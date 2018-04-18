import * as React from 'react';
import { FormSearchComponent } from "../formSearch/FormSearch.Component";
import { LoginBoxComponent } from "../loginBox/LoginBox.Component";
import './Header.scss';

export class HeaderComponent extends React.Component {
  render() {
    return(
      <header className="header">
          <div className="container">
              <div className="header__inner">
                  <div className="header__logo">
                      <a href="/" className="logo" />
                  </div>
                  <div className="header__search">
                      <FormSearchComponent/>
                  </div>
                  <div className="header__login-box">
                      <LoginBoxComponent/>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}