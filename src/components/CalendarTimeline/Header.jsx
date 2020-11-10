import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  const { data, currentData } = props;

  const previous = data[currentData.index - 1];
  const next = data[currentData.index + 1];

  const getCenterDate = () => {
    const { timestamp } = currentData;
    if (timestamp) {
      const date = new Date(timestamp * 1000);
      return date.getMonth() + 1;
    }
  };

  const getPreviousDate = () => {
    if (previous?.timestamp) {
      const date = new Date(previous.timestamp * 1000);
      return date.getMonth() + 1;
    }

    return overflowOrUnderflowDate(getCenterDate() - 1);
  };

  const getNextDate = () => {
    if (next?.timestamp) {
      const date = new Date(previous.timestamp * 1000);
      return date.getMonth() + 1;
    }

    return overflowOrUnderflowDate(getCenterDate() + 1);
  };

  const overflowOrUnderflowDate = (month) => {
    if (month < 1) {
      return 12 - month;
    } else if (month > 12) {
      return month - 12;
    }

    return month;
  };

  return (
    <View style={styles.header}>
      <SafeAreaView />
      <View style={styles.title}>
        <Text style={styles.headerText}>{`${getPreviousDate()}월`}</Text>
        <Text style={styles.headerText}>{`${getCenterDate()}월`}</Text>
        <Text style={styles.headerText}>{`${getNextDate()}월`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 16,
    alignItems: 'center',
  },
  headerText: {
    marginHorizontal: 16,
    fontSize: 24,
    fontWeight: '800',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Header;
