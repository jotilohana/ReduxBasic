import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const Home = props => {
  console.log(props);
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text style={{color: 'white'}}>hi</Text>
    </View>
  );
};
const mapStateToProps = state => {
  let {hey} = state.name;
  console.log(hey)
  return (hey);
};
export default connect(mapStateToProps, null)(Home);
