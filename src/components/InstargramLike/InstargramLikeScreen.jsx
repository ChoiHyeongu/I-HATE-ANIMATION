import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Heart from './Heart';
import LikeButton from './LikeButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginLeft: 24,
  },
  heartContainer: {
    position: 'absolute',
    right: 40,
    bottom: 60,
  },
});

let heartCount = 1;

class InstargramLikeScreen extends React.Component {

  state = {
    hearts: [],
  };

  addHeart = () => {
    this.setState(
      {
        hearts: [
          ...this.state.hearts,
          {
            id: heartCount,
          },
        ],
      },
      () => {
        heartCount++;
      },
    );
  };

  renderHearts = () => {
    return (
      this.state.hearts.map((heart) => {
        return (
          <Heart key={heart.id}/>
        );
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <LikeButton onPress={this.addHeart}/>
        </View>
        <View style={styles.heartContainer}>
          {this.renderHearts()}
        </View>
      </View>
    );
  }
}

export default InstargramLikeScreen;
