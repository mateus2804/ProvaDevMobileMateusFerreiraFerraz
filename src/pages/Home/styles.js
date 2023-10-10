import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bar: {
        backgroundColor: 'green',
        height: '150px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    texto: {
        fontSize: '10px',
        fontWeight: 'normal'
    },
    imagem: {
        width: '200px',
        height: '200px',
        padding: '20px',
        borderRadius: '7px'
    },
    input: {
        width: '40%',
        height: '50px',
        backgroundColor: 'green',
        padding: '8px',
        fontSize: '20px',
        border: '1px solid green',
        borderRadius: '7px',
        color: 'grey'
    },
    linkArea: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },
    links: {
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'green',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
        padding: '5px'
    },
    buttonText: {
        fontSize: '10px',
        fontWeight: 'normal',
        color: 'grey'
    },

});

export default styles;
