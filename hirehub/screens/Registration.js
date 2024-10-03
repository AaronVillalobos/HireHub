import React from "react";
import { SafeAreaView, StyleSheet, TextInput} from "react-native";
import { Button } from "react-native-web";

SignUp = ({navigation, route}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {setUserToken} = route.params;

    return (
        <SafeAreaView>
            <TextInput 
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button title="Sign Up" onPress={() => setUserToken('token')}/>
        </SafeAreaView>
    )
}

export default function Registration() {
    
}