import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import {Colors} from 'react-native-paper';

const Timer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const toggleLoading = useCallback(() => setLoading(loading => !loading), []);
  useEffect(() => {
    console.log('useEffect called');
    const id = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(id);
  }, [loading]);
  return (
    <View style={[styles.view]}>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stop loading' : 'start loading'}
      />
      {loading && (
        <ActivityIndicator size="large" color={Colors.deepPurple700} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '600'},
});

export default Timer;
