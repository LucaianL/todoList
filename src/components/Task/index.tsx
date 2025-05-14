import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
    task: string;
    onRemove: () => void;
}

export function Task({task, onRemove} : Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.circle}/>
           <Text style={styles.cardText}>
                {task}
           </Text>
           <TouchableOpacity onPress={onRemove}>
                <Image style={styles.image} source={require('../../images/trash.png')}/>
           </TouchableOpacity>
        </View>
    )
}