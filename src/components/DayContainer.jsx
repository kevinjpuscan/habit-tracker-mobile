import {View, StyleSheet} from 'react-native';
import { Subtitle } from '../design-system/Subtitle';
import { HistoryList } from './HistoryList';
import colors from '../theme/colors';

export function DayContainer({title,dayPoints}){
  return <View style={styles.card}>
    <Subtitle>{title}</Subtitle>
    <HistoryList historyList={dayPoints}/>
  </View>;
}

const background=colors.greyLighter;

const styles = StyleSheet.create({
  card:{
    backgroundColor: background,
    padding:15,
    borderRadius: 10,
    gap: 8,
  }
})