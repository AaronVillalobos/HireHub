import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
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
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <SafeAreaView style={styles.login}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <Button
                title="Login"
            />
        </SafeAreaView>

    );
}

SignUp = () => {
    return (
        <SafeAreaView>
            <View style={styles.signupnow}>
                <Text>Don't have an account?</Text>
                <Button
                    title="Sign up"
                    textSize={8}
                />
                <Text>Or</Text>
                <Button
                    title="Continue as Guest"
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
    signupnow: {
        alignItems: 'center'
    },
});