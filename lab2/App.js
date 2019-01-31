import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

var name;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  error:'',
                  salutation:''};

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChange(event) {
    name = event;
  }

  onPress() {
    this.validateForm();
    console.log("Pressed");
  }

  validateForm() {
    let salutation ='';
    let error ='';

    if (!name.match(/^[a-zA-Z\s]*$/)) {
      error = 'Please enter letters only.';
    } else {
      salutation="Hello, " + name + "!";
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

  render() {
    if (this.state.salutation) {
      return(
        <View style={styles.container} flexDirection="column" alignItems='stretch'>
          <Text style={styles.defaultText}>{this.state.salutation}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container} flexDirection="column" alignItems='stretch'>
          <View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
          <Text style={styles.errorText}>{this.state.error}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'teal',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:30,
    textAlign: 'center'
  },
  errorText:
  {
    fontSize:20,
    color:'red',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
