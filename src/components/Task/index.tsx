import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

export function Task(){
    return(
        <View style={styles.container}>
            <View style={styles.circle}/>
           <Text style={styles.cardText}>
                Lorem ipsum dolor 
           </Text>
           <Image style={styles.image} source={require('../../images/trash.png')}/>
        </View>
    )
}