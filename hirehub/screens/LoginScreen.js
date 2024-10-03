import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from "react-native";

WelcomeFrame = () => {
    return (
        <SafeAreaView style={styles.welcome}>
            <Text style={styles.name}>Welcome to HireHub</Text>
            <Text style={styles.message}>Log in to continue</Text>
        </SafeAreaView>
    );
}

LoginFrame = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView style={styles.login}>
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
            <Button
                title="Login"
            />
        </SafeAreaView>

    );
}

SignUp = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.sign_up}>
                <Text>Don't have an account?</Text>
                <Button
                    title="Sign up"
                />
                <Text style={{fontSize: 20}}>or</Text>
                <Button
                    title="Continue as Guest"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaView>
    );
}

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <WelcomeFrame/>
            <LoginFrame/>
            <SignUp/>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        marginTop: 64,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
    },
    name: {
        fontSize: 36,
    },
    welcome: {
        alignItems: 'center',
        gap: 4,
    },
    login: {
        gap: 24,
    },
    input: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 16,
        height: 50,
        width: 320,
        fontSize: 16,
    },
    sign_up: {
        alignItems: 'center'
    },
});
