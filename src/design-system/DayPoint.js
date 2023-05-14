import {View, Text, StyleSheet} from "react-native";
import colors from "../theme/colors";

export function DayPoint({type,date, letter}){
  const getInitialLetterDay = (date) => {
    const day = new Date(date).toLocaleDateString('es-ES', { weekday: 'long' });
    return day[0].toUpperCase();
  }
    return (
        <View style={styles(type).dayPoint}>
          <Text style={styles(type).dayPointText}>{date?getInitialLetterDay(date): letter}</Text>
        </View>
    )
}

const primary = colors.primary;
const greyLigh=colors.greyLigh;
const red=colors.red;
const white=colors.white;

const backgroundColor={
    completed:primary,
    failed:red,
    disabled:greyLigh,
}

const styles = (type) => StyleSheet.create({
    dayPoint: {  
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: backgroundColor[type],
        justifyContent: 'center',
        alignItems: 'center', 
    },
    dayPointText: {
      color: white,
    }
})
