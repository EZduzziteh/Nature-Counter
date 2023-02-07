import auth from '@react-native-firebase/auth';

export const createToken = async () => {
    const user = auth().currentUser;
    const token = user && (await user.getIdToken());
    const payloadHeader = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    return payloadHeader;
}