import styles from '../Home/styles'
import { Image, TextInput, View, Text, TouchableOpacity } from 'react-native';

export default function Register() {
    <View style={styles.container}>
        <View style={styles.bar}>
            <Image source={require('../../../assets/medicina.png')} style={styles.imagem}/>
        </View>
        <Text style={styles.titulo}>Registro de conta</Text>
        <TextInput style={styles.input} placeholder='Nome'/>
        <TextInput style={styles.input} placeholder='Sobrenome'/>
        <TextInput style={styles.input} placeholder='CPF'/>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput style={styles.input} placeholder='Senha'/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrar-se</Text>
        </TouchableOpacity>
    </View>
}