import React from 'react';
import { Text, View } from 'react-native';

const Greeting = (props) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Bienvenidos a la tienda argentina de Pokemon TCG! {props.name}!</Text>
      </View>
    );
}

// eslint-disable-next-line no-undef
export default LotsOfGreetings = () => {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
}