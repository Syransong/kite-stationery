import { StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

export default function ResultsScreen({}) {
    return (
        <View style={styles.container}>
            <Text>Results Screen</Text>
            <Text>This screen will hold the results of the search or filtering</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
});