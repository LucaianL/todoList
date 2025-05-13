import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

export function Task(){
    return(
        <View style={styles.container}>
           <Text style={styles.cardText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Doloremque nostrum quia laboriosam omnis itaque mollitia 
                sunt animi iste expedita. 
           </Text>
           <Image source={require('../../images/trash.png')}/>
        </View>
    )
}