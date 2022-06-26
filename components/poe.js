import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import { useQuery } from '@apollo/client'
import GetWorldState from '../functions/WorldStateQuery'
import parseTime from '../functions/parseTime'

// image
import PoE from './static/images/PoE.jpeg'
export default function POE() {
    const { data: earthData } = useQuery(GetWorldState, { variables: { location: 'earthCycle'}, pollInterval: 1000 })
    const { data: cetusData } = useQuery(GetWorldState, { variables: { location: 'cetusCycle'}, pollInterval: 1000 })
    return (
        <ImageBackground source={PoE}>
            <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    {earthData ? <>
                        <Text style={styles.text}>Earth | {earthData.getWorldstate.state}</Text>
                        <Text style={styles.text}>{parseTime(earthData.getWorldstate.timeLeft)}</Text>
                    </> : <Text style={styles.text}>Loading</Text>}
                </View>
                <View>
                    {cetusData ? <>
                        <Text style={styles.text}>Cetus | {cetusData.getWorldstate.state}</Text>
                        <Text style={styles.text}>{parseTime(cetusData.getWorldstate.timeLeft)}</Text>
                    </> : <Text style={styles.text}>Loading</Text>}
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    text: { color: 'white' }
})