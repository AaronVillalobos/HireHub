import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native";

const WelcomeFrame = () => {
    return (
        <SafeAreaView style = {styles.welcome}>
            <Text style={styles.opening}>HireHub</Text>
            <Text style={styles.message}>Empowering you to hire or offer services with ease.</Text>
        </SafeAreaView>
    )
}

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView style={styles.login}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}

            />
            <Button
                title="Login"
            />
        </SafeAreaView>
    );
}

const SignUp = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.register}>
            <Text>Don't have an account?</Text>
            <Button
                title="Sign up"
            />
            <Text>Or</Text>
            <Button
                title="Continue as Guest"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    );
}

export default function GetStarted() {
    return (
        <View style={styles.container}>
            <WelcomeFrame/>
            <Login/>
            <SignUp/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        padding: 20,
    },
    welcome: {
        alignItems: 'center',
        gap: 8,

    },
    opening: {
        fontSize: 44,
    },
    message: {
        fontSize: 24,
        textAlign: 'center'
    },
    login: {
        gap: 4,
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
    },
    register: {
        alignItems: 'center',
    },
})
