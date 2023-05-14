
import { View, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export function ProgressBar({ progress }) {
    return (
        <View style={styles().loadingBar}>
            <View style={styles(progress).loadingBarProgress}></View>
        </View>
    )
}
const primary = colors.primary;
const greyLighter = colors.greyLighter;

const styles =(progress) => StyleSheet.create({
    loadingBar: {
        width: '100%',
        height: 8,
        backgroundColor: greyLighter,
        borderRadius: 4,
        overflow: 'hidden',
    },  
    loadingBarProgress: {
        width: progress ? `${progress}%` : '0%',
        height: '100%',
        backgroundColor: primary,
    } 
})