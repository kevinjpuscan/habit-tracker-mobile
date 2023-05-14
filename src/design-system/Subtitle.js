import {Text, StyleSheet} from 'react-native';
import colors from '../theme/colors';

export function Subtitle({children}){
  return <Text>{children}</Text>;
}

const color = colors.greyDark;

const styles = StyleSheet.create({
  subtitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: color,
  }
})