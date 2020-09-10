import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TextInput} from 'react-native';

export default class SearchPanel extends Component {

  state = {
    inputValue: ''
  }

  onChangeInput = (value) => {
    const inputValue = value;
    this.setState({ inputValue });
  }

  pressButton(inputValue) {
    this.props.onPressBtnSearch(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { inputValue } = this.state;

    return(
      <View style={styles.block}>
        <TextInput 
          style={styles.input}
          onChangeText={this.onChangeInput}
          value={inputValue} />
        <Button
          title='Найти'
          onPress={() => {this.pressButton(inputValue)}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#393939'
  },
  input: {
    width: '70%',
    marginBottom: 5,
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    color: '#2196F3'
  }

})