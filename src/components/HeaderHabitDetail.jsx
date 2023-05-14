import {View,Text, StyleSheet} from 'react-native';
import colors from '../../src/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Title } from '../design-system/Title';

export function HeaderHabitDetail({name,record,nextMilestone}){
  return <View> 
  <View>
  <LinearGradient
      colors={[colors.primaryDark, colors.primary]}
      style={styles.background}
    >
        <Title color="white">{name}</Title>
    </LinearGradient>
   
  </View>    
  <View style={styles.progresContainer}>
  <View style={styles.progress}>
    <Text style={styles.progressRecord}>{record}</Text>
    <Text style={styles.progressNextMilestone}>/{nextMilestone}</Text>
  </View>
    </View>
</View>
  ;
}
const secondary=colors.secondary;

const styles = StyleSheet.create({
  background:{
    minHeight:300,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  progresContainer:{
    width:'100%',
    alignItems:'center',
  },
  progress:{
    height:110,
    width:110,
    borderRadius:55,
    backgroundColor:secondary,
    marginTop:-55,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },

  progressRecord:{ 
    color:'white',
    fontSize:34,
    fontWeight:'bold',
  },

  progressNextMilestone:{
    color:'white',
  }

});