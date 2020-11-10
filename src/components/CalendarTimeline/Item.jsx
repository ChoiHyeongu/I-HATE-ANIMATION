import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Item = (props) => {
  const { title, inbound, outbound, image } = props;

  const isInbound = inbound;
  const bound = isInbound ? inbound : outbound;
  const boundStyle = isInbound ? styles.inbound : styles.outbound;

  const numberFormatter = (price) => {
    const result = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const prefix = isInbound ? '+' : '-';
    return `${prefix}${result}원`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.icon} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.price, boundStyle]}>
            {numberFormatter(bound)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
    lineHeight: 18,
    color: '#949191',
    marginBottom: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  price: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
  },
  inbound: {
    color: '#0068ff',
  },
  outbound: {
    color: '#4d5358',
  },
});

export default Item;
