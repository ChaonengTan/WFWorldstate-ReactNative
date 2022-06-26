import { View, Text, StyleSheet } from 'react-native'
export default function parseTime(timeLeft) {
    return (
        <View>
            {timeLeft<0 ?
                <Text style={styles.text}>
                    Waiting for API
                </Text> :
                <Text style={styles.text}>
                    {Math.floor(timeLeft/3600)}h {Math.floor((timeLeft%3600)/60)}m {Math.floor(timeLeft%60)}s
                </Text>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    text: { color: 'white' }
})