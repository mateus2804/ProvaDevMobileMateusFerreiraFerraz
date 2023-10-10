import { Image, Text, View } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';


export default function Home() {
    <View style={styles.container}>
        <View style={styles.bar}>
            <Image source={require('../../../assets/medicina.png')} style={styles.imagem}/>
        </View>
        <Text style={styles.titulo}>Sobre nós:</Text>
        <Text style={styles.texto}>Somos uma clínica de dermatologia ... etc.</Text>
        <View style={styles.linkArea}>
            <View style={styles.links}>
                <Text style={styles.titulo}>Já possui conta?</Text>
                <Link to={{screen: 'Login'}}></Link>
            </View>
            <View style={styles.links}>
                <Text style={styles.titulo}>Crie uma conta aqui: </Text>
                <Link to={{screen: 'Register'}}></Link>
            </View>
        </View>
    </View>
}


