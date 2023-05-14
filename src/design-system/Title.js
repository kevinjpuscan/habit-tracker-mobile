import { StyleSheet, Text } from 'react-native';

export function Title(props) {
    return (
        <Text style={styles(props.color).title}>{props.children}</Text>
    )
}

const styles =(color)=> StyleSheet.create({
    title: {  
        color: color?color:'black',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 16,
    }
})