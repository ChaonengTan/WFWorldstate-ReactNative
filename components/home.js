import { View, Text, Button } from 'react-native'
export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <View>
                <Text>Plains of Eidelon</Text>
                <Button 
                    title='Plains of Eidelon'
                    onPress={ e => navigation.navigate("Plains of Eidelon") }
                />
            </View>
            <View>
                <Text>Orb Vallis</Text>
                <Button 
                    title='Orb Vallis'
                    onPress={ e => navigation.navigate("Orb Vallis") }
                />
            </View>
            <View>
                <Text>Cambion Drift</Text>
                <Button 
                    title='Cambion Drift'
                    onPress={ e => navigation.navigate("Cambion Drift") }
                />
            </View>
        </View>
    )
}