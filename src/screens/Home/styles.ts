import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        paddingVertical: 70,
        
        
    },
    addNewTask: {
        height: 54,
        flexDirection: 'row', 
        top: -27,
    },

    textInput: {
        flex: 1,
        backgroundColor: '#262626',

        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#5E60CE',
        
        color: '#F2F2F2',

        fontSize: 16,

        padding: 16,


    },

    TextInputButton: {
        backgroundColor: '#1E6F9F',
        marginLeft: 4,
        borderRadius: 6,

        width: 54,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textInputButtonIcon: {
        color: '#F2F2F2',
        textAlign: 'center', 
        
        width: 30,
        height: 30,
        
        fontSize: 16,

        borderWidth: 2,
        borderRadius: 100,
        borderColor: '#F2F2F2'
        
    },


    // container

    container: {
        paddingHorizontal: 24,
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingBottom: 90
    },

    bodyTexts: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    
        marginVertical: 20
    },

    textContainer: {
        flexDirection: 'row'
    },

    textBody01: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold',
    },

    textBody02: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold',
    },
    textCounter: {
        backgroundColor: '#333333',
        color: '#D9D9D9',
        borderRadius: 999,
        textAlign: 'center',
        paddingHorizontal: 8,
        marginLeft: 8,
    },


});