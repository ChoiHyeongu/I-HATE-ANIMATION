import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heart: {
    width: 32,
    height: 32,
  },
});

class Heart extends React.Component {
  render() {
    const heart = require('./ic_favorite.png');
    console.log(this.props.color);
    return (
      <Image
        source={heart}
        style={[styles.heart, { tintColor: '#3CAEA3' }]}
      />
    );
  }
}

export default Heart;
