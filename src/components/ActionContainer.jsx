import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import colors from '../theme/colors';

export function ActionContainer(){
  const handleTouch = () => {
    console.log('touch')
  }
  return <View style={styles.container}>
    <TouchableHighlight style={styles.button} onPress={handleTouch}>
      <Text style={styles.text}>+</Text>
    </TouchableHighlight>
  </View>;
}

const background=colors.white;
const primary=colors.primary;

const styles = StyleSheet.create({
  container:{
    padding: 24,
    flexDirection: 'row',
    justifyContent:'flex-end',
    position:'absolute',
    top:600,
    right:0,
  },
  button:{
    width: 60,
    height:60,
    borderRadius: 30,
    backgroundColor: primary,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'white',
    marginTop:-5,
    marginRight:-2,
    fontSize: 40,
  }
})