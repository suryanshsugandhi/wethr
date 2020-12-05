import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, text} from '../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>WETHR</Text>
      </View>
      <Text style={text.paragraph}>Dead simple weather application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    color: COLORS.primary,
  },
});
