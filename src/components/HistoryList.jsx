import {View, StyleSheet} from 'react-native';
import { DayPoint } from '../design-system/DayPoint';

export function HistoryList({historyList}){
  return <View style={styles.historyList}>
    {
      historyList.map((history,index) => <DayPoint key={index} type={history.type} date={history.date}/>)
    }
  </View>;
}

const styles  = StyleSheet.create({
historyList:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10,
}
})