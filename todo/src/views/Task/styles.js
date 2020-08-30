import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imageIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    label: {
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        fontSize: 16,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',
        marginHorizontal: 10
    },
    inputArea: {
        fontSize: 16,
        padding: 10,
        width: '95%',
        borderWidth: 1,
        borderColor: '#EE6B26',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'top'
    },
    inLine: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    inputInLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    switchLabel: {
        fontWeight: 'bold',
        color: '#EE6B26',
        textTransform: 'uppercase',
        fontSize: 16,
        paddingLeft: 10
    },
    removeLabel: {
        color: '#20295F',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16
    }
});

export default styles;