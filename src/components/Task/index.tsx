import { useState } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
    task: string;
    onRemove: () => void;
    onToggleCompletion: (isCompleted: boolean) => void;
}

export function Task({task, onRemove, onToggleCompletion} : Props){
    const [isFinished, setIsFinished] = useState(false)

    function handleTaskFinished(){
        const newState = !isFinished;
        setIsFinished(newState);
        onToggleCompletion(newState);
    }

    function TaskCounter(){

    }

    return(
        <View style={styles.container}>
            {isFinished ? (
                <>
                    <TouchableOpacity onPress={handleTaskFinished}>
                        <Image style={styles.image} source={require('../../images/check.png') }/>
                    </TouchableOpacity>
                    <Text style={[styles.cardText, { textDecorationLine: 'line-through', color: '#808080' }]} >
                        {task}
                    </Text>
                </>
            ) : (
                <>
                    <TouchableOpacity style={styles.circle} onPress={handleTaskFinished}/>
                    <Text style={styles.cardText} >
                        {task}
                    </Text>
                </>
            )}
           
           <TouchableOpacity onPress={onRemove}>
                <Image style={styles.image} source={require('../../images/trash.png')}/>
           </TouchableOpacity>
        </View>
    )
}