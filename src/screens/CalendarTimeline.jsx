import React, { useState } from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Item } from 'components/CalendarTimeline';
import {
  bc,
  coffeeplz,
  naver,
  netflix,
  whatcha,
  woori,
} from 'components/CalendarTimeline/assets';

const dummy = [
  {
    timestamp: 1584606278,
    data: [
      { title: '내 우리계좌 → 최형우', inbound: 1000, image: woori },
      {
        title: '내 우리계좌 → 통신요금(01037371157SKT)',
        outbound: 3000,
        image: woori,
      },
    ],
  },
  {
    timestamp: 1594606278,
    data: [
      { title: '커피플리즈', outbound: 25400, image: coffeeplz },
      { title: '내 우리계좌 → 내 시티계좌', inbound: 11000, image: woori },
      {
        title: '넥스 핸드폰거치대 | 네이버쇼핑',
        outbound: 25000,
        image: naver,
      },
    ],
  },
  {
    timestamp: 1595606278,
    data: [
      { title: '넷플릭스', outbound: 4000, image: netflix },
      { title: '내 우리계좌 → 내 시티계좌', inbound: 3100, image: woori },
    ],
  },
  {
    timestamp: 1596606278,
    data: [
      { title: '넷플릭스', outbound: 11000, image: netflix },
      { title: '커피플리즈', outbound: 9000, image: coffeeplz },
    ],
  },
  {
    timestamp: 1596606278,
    data: [
      { title: '왓챠', outbound: 2100, image: whatcha },
      { title: '내 BC계좌 → 김창환', inbound: 9000, image: bc },
    ],
  },
  {
    timestamp: 1602999878,
    data: [
      { title: '내 BC계좌 → 백준호', inbound: 8000, image: bc },
      { title: '커피플리즈', outbound: 25400, image: coffeeplz },
    ],
  },
  {
    timestamp: 1604209478,
    data: [
      { title: '넷플릭스', outbound: 8000, image: netflix },
      { title: '왓챠', outbound: 2100, image: whatcha },
    ],
  },
  {
    timestamp: 1605209478,
    data: [
      { title: '신한은행 적금', outbound: 700000, image: bc },
      { title: '하나은행 청약', inbound: 20000, image: woori },
      { title: '하나은행 적금', outbound: 200000, image: woori },
    ],
  },
  {
    timestamp: 1606974278,
    data: [
      { title: '넷플릭스', outbound: 8750, image: netflix },
      { title: '개발자 머그컵 | 네이버쇼핑', outbound: 10000, image: naver },
    ],
  },
];

const days = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
];

const CalendarTimeline = () => {
  const [currentData, setCurrentData] = useState(dummy[0].data[0]);

  const onViewableItemsChanged = ({ viewableItems }) => {
    const { item } = viewableItems[0];
    if (item?.title) {
      setCurrentData(item);
    }
  };

  const onViewRef = React.useRef(onViewableItemsChanged);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderSectionHeader = ({ section: { timestamp } }) => {
    const date = new Date(timestamp * 1000);
    const dateText = `${date.getMonth() + 1}월 ${date.getDate()}일 ${
      days[date.getDay()]
    }`;

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.section}>{`${dateText}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <SectionList
        sections={dummy}
        data={dummy}
        renderSectionHeader={renderSectionHeader}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item }) => <Item {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 16,
  },
  headerText: {
    marginHorizontal: 16,
    fontSize: 24,
    fontWeight: '800',
  },
  sectionContainer: {
    backgroundColor: 'white',
    paddingTop: 14,
    paddingBottom: 4,
    paddingHorizontal: 16,
  },
  section: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#dde1e6',
  },
});

export default CalendarTimeline;
