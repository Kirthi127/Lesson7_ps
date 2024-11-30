import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { taskData } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
});

const Add = ({ navigation }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const newTask = { description, status: 'Incomplete' };
        taskData.push(newTask);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text>Task Description:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default Add;
