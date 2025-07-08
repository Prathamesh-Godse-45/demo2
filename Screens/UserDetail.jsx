import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const UserDetail = ({ route, navigation }) => {
    const { user } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: 'lightgray', padding: 20, alignItems: 'center' }}>
            <Image
                source={{ uri: user.image }}
                style={{ width: 140, height: 140, borderRadius: 70, marginTop: 30, marginBottom: 20, borderWidth: 2, borderColor: 'green' }}
            />
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 4, width: 320, marginTop: 20 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'black', marginBottom: 12 }}>
                    {user.firstName} {user.lastName}
                </Text>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Age</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '500' }}>{user.age}</Text>
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Email</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '500' }}>{user.email}</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Address</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '500' }}>{user.address.city}, {user.address.state}</Text>
                </View>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate('EditUser', { user })}
                style={{ backgroundColor: 'green', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10 }}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Edit User</Text>
            </TouchableOpacity>
        </View>
    );
};

export default UserDetail;
