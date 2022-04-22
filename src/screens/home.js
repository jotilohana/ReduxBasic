import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {set_data} from '../Store/actions';
import {useNavigation} from '@react-navigation/native';
const Home = props => {
  const user = {name: 'joti', email: 'jklohana208@gmail.com'};
  console.log(props.Users);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'grey', alignItems: 'center'}}>
      <Text style={{color: 'white'}}>Data from App Reducer</Text>
      {props.Users.map((val, i) => {
        console.log(val.name);
        return (
          <View style={{alignItems:"center"}}>
            <Text style={{color: 'white'}}>{val.name}</Text>
            <Text style={{color: 'white'}}>{val.email}</Text>
          </View>
        );
      })}
      <Text style={{color: 'white'}}>Data from Home Reducer</Text>
      <Text style={{color: 'white'}}>{props.Address1}</Text>
      <Text style={{color: 'white'}}>{props.Address2}</Text>
      {/* <TouchableOpacity onPress={() => props.set_data('jkjkjk')}>
        <Text>Dispatch</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{backgroundColor: 'black', width: 100}}
        onPress={() => props.set_data(user)}>
        <Text style={{color: 'white'}}>SET User data</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
        <Text>move to next page</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = state => ({
  // hey: state.app.name,
  // email: state.app.email,
  Users: state.app.Users,
  Address1: state.home.Address1,
  Address2: state.home.Address2,
});

const mapDispatchToProps = dispatch => ({
  set_data: data => {
    dispatch(set_data(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
