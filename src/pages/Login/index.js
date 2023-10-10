import styles from "../Home/styles";
import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native';

export default function Login() {
    <View style={styles.container}>
        <View style={styles.bar}>
            <Image source={require('../../../assets/medicina.png')} style={styles.imagem}/>
        </View>
        <Text style={styles.titulo}>Login</Text>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput style={styles.input} placeholder='Senha'/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
}