import { StyleSheet, Text } from 'react-native';

export function Title(props) {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {  
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 16,
    }
})