import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {set_data} from '../Store/actions';
import {useNavigation} from '@react-navigation/native';
const Home = props => {
  const user = {name: 'jk', email: 'jklohana208@gmail.com'};
  console.log(props.Users);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      {
        props.Users.map((val, i)=>{
          return(
            <Text style={{color: 'white'}}>{val.email}</Text>
            // <Text style={{color: 'white'}}>{val.email}</Text>
          )
        })
      }
      <Text style={{color: 'white'}}>{props.home}</Text>
      <Text style={{color: 'white'}}>{props.data}</Text>
      {/* <TouchableOpacity onPress={() => props.set_data('jkjkjk')}>
        <Text>Dispatch</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => props.set_data(user)}>
        <Text>Dispatch</Text>
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
  home: state.home.name,
  data: state.home.data,
});

const mapDispatchToProps = dispatch => ({
  set_data: data => {
    dispatch(set_data(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
