import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Button, StyleSheet, Alert, StatusBar } from 'react-native';
import { taskData } from './Data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#EAD7F1',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30, 
        marginTop: 30, 
        textAlign: 'center',
        color: '#4A4A4A',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    buttonSpacing: {
        flex: 1,
        marginHorizontal: 5,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#FFF', 
    },
    taskText: {
        fontSize: 16,
        color: '#4A4A4A',
    },
});

const Home = ({ navigation }) => {
    const handleOverallStatus = () => {
        const completed = taskData.filter(task => task.status === 'Complete').length;
        const incomplete = taskData.length - completed;

        Alert.alert(
            'Overall Status',
            `Completed Tasks: ${completed}\nIncomplete Tasks: ${incomplete}`
        );
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.taskItem}
            onPress={() => navigation.navigate('Edit', { task: item, index })}
        >
            <Text style={styles.taskText}>{item.description}</Text>
            <Text style={styles.taskText}>({item.status})</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.header}>Task Complete React Native Assignment</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}>
                    <Button
                        title="Add Task"
                        color="#ADD8E6" 
                        onPress={() => navigation.navigate('Add')}
                    />
                </View>
                <View style={styles.buttonSpacing}>
                    <Button
                        title="Overall Status"
                        color="#ADD8E6" 
                        onPress={handleOverallStatus}
                    />
                </View>
            </View>
            <FlatList
                data={taskData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Home;
