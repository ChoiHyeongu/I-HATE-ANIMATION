import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from 'styles';

const days = ['일', '월', '화', '수', '목', '금', '토', '일'];

const Day = ({ date }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.day}>{days[date.getDay()]}</Text>
      <Text style={styles.date}>{date.getDate()}</Text>
    </View>
  );
};

const RowCalendar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Day date={new Date()} />
        <Day date={new Date()} />
        <Day date={new Date()} />
        <Day date={new Date()} />
        <Day date={new Date()} />
        <Day date={new Date()} />
        <Day date={new Date()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 82,
    borderTopWidth: 1,
    borderTopColor: palette.gray10,
    paddingTop: 16,
  },
  content: {
    flexDirection: 'row',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  day: {
    marginBottom: 4,
    color: palette.coolGray50,
    lineHeight: 12,
    fontWeight: '500',
  },
  date: {
    color: palette.coolGray70,
    fontSize: 17,
    lineHeight: 27,
    fontWeight: '600',
  },
});
export default RowCalendar;
