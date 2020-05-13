import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';

// import { Container } from './styles';

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Home Page</Text>
      <Text style={{fontSize: 24}}>Iniciante</Text>
      <Link to={'/challengeiniciante1'}>
        <Text>Challenge 1</Text>
      </Link>
      <Link to={'/challengeiniciante2'}>
        <Text>Challenge 2</Text>
      </Link>
    </View>
  );
};

export default Home;
