import React, { Component } from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});

      }

      handleSubmit(event) {
        var salutation = 'Hello, ' + this.state.value + '!';
        this.setState({name:salutation});
        //alert('Hello, ' + this.state.value);
        event.preventDefault();
      }
/*
      validateForm(props) {

       let formIsValid = true;

        if (!(this.state.value).match(/^[a-zA-Z]*$/)){
          formIsValid = false;
          return <p>Please enter letters only</p>;
        }
        //return formIsValid;
      }
*/
      render() {
        if (this.state.name) {
          return (
            <p>{this.state.name}</p>
            );
          } else
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"/>
          </form>
          </div>
        );
      }
    }
     export default NameForm;
