import { View, Text, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native'

// images
import PoE from './static/images/PoE.jpeg'
import OV from './static/images/OV.jpeg'
import CD from './static/images/CD.jpeg'
export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={styles.flex}>
                <ImageBackground source={PoE}>
                    <TouchableHighlight
                        onPress = { e => navigation.navigate("POE") }
                        underlayColor = {styles.underlayColor}
                    >
                        <Text style={styles.text}>Plains of Eidelon</Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
            <View style={styles.flex}>
                <ImageBackground source={OV}>
                    <TouchableHighlight
                        onPress={ e => navigation.navigate("OV") }
                        underlayColor = {styles.underlayColor}
                    >
                        <Text style={styles.text}>Orb Vallis</Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
            <View style={styles.flex}>
                <ImageBackground source={CD}>
                    <TouchableHighlight
                        onPress={ e => navigation.navigate("CD") }
                        underlayColor = {styles.underlayColor}
                    >
                        <Text style={styles.text}>Cambion Drift</Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    underlayColor: '#00000000',
    flex: { flex: 1, justifyContent: 'center', width: '100%', position: 'relative', overflow: 'hidden' },
    text: { textAlign: 'center', justifyContent: 'center', padding: 100, color: 'white', backgroundColor: '#00000033' }
  })