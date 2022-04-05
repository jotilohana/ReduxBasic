import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const Home = props => {
  console.log(props);
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text style={{color: 'white'}}>{props.hey}</Text>
    </View>
  );
};
const mapStateToProps = state => ({
  hey: state.name,
});
export default connect(mapStateToProps, null)(Home);
