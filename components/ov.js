import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import GetWorldState from '../functions/WorldStateQuery'
import parseTime from '../functions/parseTime'

// image
import ov from './static/images/OV.jpeg'
export default function OV() {
    const { data } = useQuery(
        GetWorldState,
        { 
          variables: { location: 'vallisCycle'},
          pollInterval: 1000
        }
    )
    return (
        <ImageBackground source={ov}>
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {data ? <>
                    <Text style={styles.text}>Orb Vallis | {data.getWorldstate.state}</Text>
                    <Text style={styles.text}>{parseTime(data.getWorldstate.timeLeft)}</Text>
                </> : <Text style={styles.text}>Loading</Text>}
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    text: { color: 'white' }
})