import { View, Text, Button } from 'react-native'
export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <Text>Home Screen</Text>
            <Button 
                title='POE'
                onPress={ e => navigation.navigate("POE") }
            />
        </View>
    )
}