import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Utils from "./Utils";

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdffff',
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff'
    },
    btn: {
        backgroundColor: Colors.primary,
        height: 50,
        borderRadius: Utils.borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'lex-bold',
    },
    btnIcon: {
        position: 'absolute',
        left: 16,
    }, 
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.grey,
        borderTopWidth: StyleSheet.hairlineWidth,
    }
})