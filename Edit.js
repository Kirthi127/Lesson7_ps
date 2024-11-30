import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
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
    picker: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

const Edit = ({ navigation, route }) => {
    const { task, index } = route.params;
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);

    const handleSave = () => {
        taskData[index] = { description, status };
        navigation.navigate('Home');
    };

    const handleDelete = () => {
        Alert.alert('Confirm Delete', 'Are you sure you want to delete this task?', [
            {
                text: 'Yes',
                onPress: () => {
                    taskData.splice(index, 1);
                    navigation.navigate('Home');
                },
            },
            { text: 'No' },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text>Task Description:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <Text>Status:</Text>
            <RNPickerSelect
                style={{
                    inputAndroid: {
                        borderWidth: 1,
                        borderColor: 'gray',
                        padding: 10,
                        marginBottom: 10,
                    },
                }}
                onValueChange={(value) => setStatus(value)}
                value={status}
                items={[
                    { label: 'Incomplete', value: 'Incomplete' },
                    { label: 'Complete', value: 'Complete' },
                ]}
            />
            <View style={styles.buttonContainer}>
                <Button title="Save" onPress={handleSave} />
                <Button title="Delete" onPress={handleDelete} />
            </View>
        </View>
    );
};

export default Edit;
