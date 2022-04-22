import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const Home2 = props => {
  return (
    <View>
      {props.users.map((val, i) => {
        return (
          <View>
            <Text>{val.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const mapStateToProps = state => ({
  // console.log(state);
  users: state.app.Users,
});
export default connect(mapStateToProps, null)(Home2);
