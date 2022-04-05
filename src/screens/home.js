import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import set_data from '../Store/actions';
const Home = props => {
  console.log(props);
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text style={{color: 'white'}}>{props.hey}</Text>
      <Text style={{color: 'white'}}>{props.email}</Text>
      <Text style={{color: 'white'}}>{props.home}</Text>
      <Text style={{color: 'white'}}>{props.data}</Text>
      <TouchableOpacity onPress={()=>props.set_data('jk')}>
        <Text>Dispatch</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => ({
  hey: state.app.name,
  email: state.app.email,
  home: state.home.name,
  data: state.home.data,
});

const mapDispatchToProps = (dispatch) => ({
  set_data: () => dispatch(set_data()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
