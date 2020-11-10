import React from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#ED553B',
  },
});

class LikeButton extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}/>
      </TouchableHighlight>
    );
  }
}

export default LikeButton;
