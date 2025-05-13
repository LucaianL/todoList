import React, { useState } from 'react';

import { Image , View, TextInput, Text, TouchableOpacity} from "react-native";

import { styles } from './styles';

import { Task } from '../../components/Task';

export default function Home(){ 
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
                        />
                    <TouchableOpacity style={styles.TextInputButton}>
                        <Text style={styles.textInputButtonIcon}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* body */}
                <View style={styles.bodyTexts}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textBody01}>Criadas</Text>
                        <Text style={styles.textCounter}>0</Text>
                    </View>
                     <View style={styles.textContainer}>
                        <Text style={styles.textBody02}>Concluídas</Text>
                        <Text style={styles.textCounter}>0</Text>
                    </View>
                </View>
                <Task/>
            </View>
        </>
    )
}