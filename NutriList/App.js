import React, { Component } from 'react';
import { Alert, SafeAreaView, Button, View, StyleSheet, TextInput, Text } from "react-native";

class App extends Component {

  state = {
    food: null,
    serving: 0,
    APIresult: []
  };
  
  onChangeText(text) {
    this.setState({
      food: text,
    })
  }

  onChangeNumber(num) {
    this.setState({
      serving: num,
    })
  }

  toggleButtonState = () => {
    if (this.state.food == null && this.state.serving == 0) {
      Alert.alert('Please enter a food name and serving number.')
    }
    else if (this.state.food == null) {
      Alert.alert('Please enter a food name.')
    }
    else if (this.state.serving == 0) {
      Alert.alert('Please enter a serving number.')
    }
    else {
      var url = 'https://api.nal.usda.gov/fdc/v1/food/' + this.state.food + '?api_key=xPgFESAz09jEJa1gt2gJdomzjJU7en8CGCQQNA5a';

      fetch(url)
            .then(res => res.json())
            .then((data) => {
                Alert.alert('The number of calories in your food item is ' + this.state.serving * data.foodNutrients[2].nutrient.number + ' g');
                { this.setState({ APIresult: data.foodNutrients[2].nutrient.number }) }
            })
    }
  }

  render() {
    return (
      <React.Fragment>
      <SafeAreaView style={styles.container}>
      <View style={styles.loginTextSection}>
      <Text>Find Your Recipe's Carbohydrate Amount:</Text>
      <TextInput 
        style={styles.inputText}
        onChangeText={(text) => this.onChangeText(text)}
        placeholder='Food ID'
      />
      <TextInput 
        style={styles.inputText} 
        onChangeText={(num) => this.onChangeNumber(num)}
        placeholder='Number of Servings' 
        keyboardType="numeric" />
      </View>
      <View style={styles.loginButtonSection}>
      <Button
        title='Find The Total'
        color = '#E0475B'
        onPress={() =>  { this.toggleButtonState() }}
      />
      </View>
      </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     //backgroundColor: '#F8EFEA',
     justifyContent: 'center',
     alignItems: 'center'
  },

  loginTextSection: {
     backgroundColor: 'white',
     width: '100%',
     height: '40%',
     justifyContent: 'center',
     alignItems: 'center'
  },

  loginButtonSection: {
     backgroundColor: 'white',
     width: '100%',
     height: '10%',
     justifyContent: 'center',
     alignItems: 'center'
  },

  inputText: {
     width: 200,
     padding: 8,
     margin: 10,
     borderWidth: 1,
     justifyContent: 'center',
     alignItems: 'center'
  }
});

export default App