import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Header, Item } from 'components/CalendarTimeline';

const dummy = [
  // 1월 1, 8, 24
  {
    date: 1578635078,
    data: [
      { title: '새해', timestamp: 1578635078 },
      { title: '건영이형이랑 술', timestamp: 1578462278 },
      { title: '낙원상가 방문', timestamp: 1579844678 },
    ],
  },
  // 2월 10, 15, 20
  {
    date: 1581313478,
    data: [
      { title: '송파공고 방문', timestamp: 1581313478 },
      { title: '술모임', timestamp: 1581745478 },
      { title: '베이스', timestamp: 1582177478 },
    ],
  },
  // 3월 6
  {
    date: 1583473478,
    data: [{ title: '영월 놀러감', timestamp: 1583473478 }],
  },
  // 4월 7, 9, 15
  {
    date: 1586238278,
    data: [
      { title: '이신영 생일', timestamp: 1586238278 },
      { title: '추세연 생일', timestamp: 1586411078 },
      { title: '최형우 생일', timestamp: 1586929478 },
    ],
  },
  // 7월 1, 12
  {
    date: 1593582278,
    data: [
      { title: '최형우 신체검사', timestamp: 1593582278 },
      { title: '왓섭 2.0 새로 등록하기 마감', timestamp: 1594532678 },
    ],
  },
  // 8월 5, 12, 28
  {
    date: 1596606278,
    data: [
      { title: '청운위 오리엔테이션', timestamp: 1596606278 },
      { title: '청운위 성내천 캠패인', timestamp: 1597211078 },
      { title: '원시그널 백그라운드 알림', timestamp: 1598593478 },
    ],
  },
  // 10월 12, 28
  {
    date: 1602999878,
    data: [
      { title: '송파대성 장민호', timestamp: 1602999878 },
      { title: '왓섭 정기 배포', timestamp: 1603863878 },
    ],
  },
  // 11월 1, 5, 15, 25
  {
    date: 1604209478,
    data: [
      { title: '아이폰 12프로 사전 예약일', timestamp: 1604209478 },
      { title: '아이폰 12프로 배송일', timestamp: 1604555078 },
      { title: '미국 대통령 선거', timestamp: 1605419078 },
      { title: '왓섭 정기 배포', timestamp: 1606283078 },
    ],
  },
  // 12월 3, 6, 25,
  {
    date: 1606974278,
    data: [
      { title: '청운위 성내천 캠패인', timestamp: 1606974278 },
      { title: '코드 리팩토링', timestamp: 1607233478 },
      { title: '크리스마스', timestamp: 1608875078 },
    ],
  },
];

const CalendarTimeline = () => {
  const [currentData, setCurrentData] = useState(dummy[0].data[0]);

  const onViewableItemsChanged = ({ viewableItems }) => {
    const { item } = viewableItems[0];
    if(item?.title) {
      setCurrentData(item);
    }
  };

  const onViewRef = React.useRef(onViewableItemsChanged);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <Header data={dummy} currentData={currentData} />
      <SectionList
        sections={dummy}
        data={dummy}
        renderSectionHeader={({ section: { date } }) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.section}>{date}</Text>
          </View>
        )}
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
    paddingHorizontal: 8,
    backgroundColor: 'grey',
  },
  section: {
    fontSize: 18,
  },
});

export default CalendarTimeline;
