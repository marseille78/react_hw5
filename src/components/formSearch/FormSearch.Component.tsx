import * as React from 'react';
import './FormSearch.scss';

export class FormSearchComponent extends React.Component {
  render() {
    return(
    <div className="form">
      <form action="">
        <div className="form__search">
          <input className="form__input" placeholder="Поиск" />
        </div>
      </form>
    </div>
    );
  }
}