import React, { useState } from 'react';

import { Image , View, TextInput, Text, TouchableOpacity, FlatList, Alert} from "react-native";

import { styles } from './styles';

import { Task } from '../../components/Task';

export default function Home(){ 
    const [task, setTask] = useState<string[]>([]);
    const [taskName, setTaskName] = useState(''); 
    const [completedCount, setCompletedCount] = useState(0)

    function handleTaskAdd(){
        setTask(prevState => [...prevState, taskName])
        setTaskName('')
    }

    function handleTaskRemove(item: string){
        Alert.alert("Remover task?", ``, [
            {
                text: 'Sim',
                onPress: () => {
                    setTask(prevState => prevState.filter(task => task !== item));
                    setCompletedCount(prev => prev > 0 ? prev - 1 : 0);
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    const updateCompletedCount = (isCompleted: boolean) => {
        setCompletedCount(prev => isCompleted ? prev + 1 : prev - 1)
    }

    return(
        <>
            <View style={styles.header}>
                <Image source={require('../../images/Logo.png')}/>
            </View>
            <View style={styles.container}>
                <View style={styles.addNewTask}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                        onChangeText={setTaskName}
                        value={taskName}
                        />
                    <TouchableOpacity style={styles.TextInputButton} onPress={handleTaskAdd}>
                        <Text style={styles.textInputButtonIcon}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* body */}
                <View style={styles.bodyTexts}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textBody01}>Criadas</Text>
                        <Text style={styles.textCounter}>{task.length}</Text>
                    </View>
                     <View style={styles.textContainer}>
                        <Text style={styles.textBody02}>Concluídas</Text>
                        <Text style={styles.textCounter}>{completedCount}</Text>
                    </View>
                </View>
                <FlatList
                    data={task}
                    renderItem={({item})  =>
                        <Task 
                        task={item}
                        onRemove={() => handleTaskRemove(item)}
                        onToggleCompletion={updateCompletedCount}
                        />
                    }
                
                />
            </View>
        </>
    )
}