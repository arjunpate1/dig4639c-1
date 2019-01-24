import React, { Component } from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '',
                      error:'',
                      salutation:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChange(event) {
        this.setState({value: event.target.value});

      }



      validateForm() {
        let salutation ='';
        let error ='';

        if (!this.state.value.match(/^[a-zA-Z\s]*$/)) {
          error = 'please enter letters only';
        } else {
          salutation="Hello, " + this.state.value + "!";
        }
        if (error) {
          this.setState({error});
          return false;
        } else if (salutation) {
          this.setState({salutation});
          return false;
        }
        return true;

      }

      handleSubmit(event) {
        //var salutation = 'Hello, ' + this.state.value + '!';
        //this.setState({name:salutation});
        //alert('Hello, ' + this.state.value);
        this.validateForm();

        event.preventDefault();
      }

      render() {
        if (this.state.salutation) {
          return (
            <p>{this.state.salutation}</p>
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
          <p>{this.state.error}</p>

          </div>
        );
      }
    }
     export default NameForm;
