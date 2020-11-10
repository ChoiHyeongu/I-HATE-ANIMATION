import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Item = (props) => {
  const { title, timestamp } = props;
  const date = new Date(timestamp * 1000);
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.day}>{days[date.getDay()]}</Text>
        <Text style={styles.date}>{`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  day: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 3,
  },
  date: {
    fontSize: 12,
  },
  title: {
    fontSize: 16,
  },
});

export default Item;
