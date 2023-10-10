import styles from "../Home/styles";
import {Text, TextInput, View, Image, TouchableOpacity } from 'react-native'

export default function RecSenha() {
    <View style={styles.container}>
        <View style={styles.bar}>
            <Image source={require('../../../assets/medicina.png')} style={styles.imagem}/>
        </View>
        <Text style={styles.titulo}>Recuperar Senha:</Text>
        <TextInput style={styles.input} placeholder='CPF'/>
        <TextInput style={styles.input} placeholder='Email'/>
        <TextInput style={styles.input} placeholder='Confirme o Email'/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar Solicitação</Text>
        </TouchableOpacity>
    </View>
}