import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const User = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.users);
            });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    {users.map(user => (
                        <TouchableHighlight onPress={() => navigation.navigate('UserDetail', { user })} style={{
                            backgroundColor: '#f0f0f0', padding: 15, marginBottom: 10, borderRadius: 10, borderColor: 'green', borderWidth: 1, elevation: 3,
                        }} underlayColor={'#ddd'}>

                            <Text key={user.id} style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>
                                {user.firstName}
                            </Text>

                        </TouchableHighlight>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default User;

const styles = StyleSheet.create({});
