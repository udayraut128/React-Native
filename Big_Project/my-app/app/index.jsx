import {StatusBar} from 'expo-status-bar';
import { StyleSheet,Text,View } from 'react-native';
export default function App(){
    return(
        <View style={styles.container}>
            <Text>Uday</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFF',
    }
});