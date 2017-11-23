import React from 'react';
import ReactDOM from 'react-dom';

function SubmitForm(props) {
  return (
    <form onSubmit={props.submit} className="submitForm">
      <input
        value={props.inputValue}
        onChange={props.change}
        className="form-control mb-4 mb-sm-0"
        type="text" placeholder="Podaj miasto i województwo">
      </input>
      <button type="submit" className="myButton submitButton">SZUKAJ</button>

    </form>
  );
}

export default SubmitForm;
