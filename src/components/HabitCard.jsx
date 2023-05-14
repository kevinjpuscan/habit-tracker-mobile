import {View, StyleSheet} from 'react-native';
import { ProgressBar } from '../design-system/ProgressBar';
import colors from '../theme/colors';
import { Subtitle } from '../design-system/Subtitle';
import { HistoryList } from './HistoryList';

export function HabitCard({name,record,nextMilestone,lastHistory}){
  return <View style={[styles.card,styles.shadowProp]}>
      <Subtitle>{name}</Subtitle>
      <ProgressBar progress={record*100/nextMilestone} />
      <HistoryList historyList={lastHistory}/>
  </View>;
}

const shadowColor = colors.greyDarker;

const styles = StyleSheet.create({
  card:{
    backgroundColor: 'white',  
    borderRadius: 10,  
    padding:18,
    minWidth: '100%',  
    gap: 10,
  },
  shadowProp: {
    shadowColor: shadowColor,
    shadowRadius:10,  
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
  },
})