import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import GetWorldState from '../functions/WorldStateQuery'
import parseTime from '../functions/parseTime'

// image
import cd from './static/images/CD.jpeg'
export default function CD() {
    const { data } = useQuery(
        GetWorldState,
        { 
          variables: { location: 'cambionCycle'},
          pollInterval: 1000
        }
    )
    return (
        <ImageBackground source={cd}>
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {data ? <>
                    <Text style={styles.text}>Cambion Drift | {data.getWorldstate.state}</Text>
                    <Text style={styles.text}>{parseTime(data.getWorldstate.timeLeft)}</Text>
                </> : <Text style={styles.text}>Loading</Text>}
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    text: { color: 'white' }
})