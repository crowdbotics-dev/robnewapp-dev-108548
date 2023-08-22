import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.cNcHESjr}>Lorem ipsum…</Text><Text style={styles.epsYJmPn}>{"sadasdasd"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  cNcHESjr: {
    width: 100,
    height: 50,
    lineHeight: 15,
    fontSize: 13,
    borderRadius: 0,
    letterSpacing: 2
  },
  epsYJmPn: {
    width: 100,
    height: 50,
    lineHeight: 16,
    fontSize: 14,
    borderRadius: 0,
    letterSpacing: 2,
    fontWeight: "900",
    fontFamily: "Roboto"
  }
});
export default Untitled10;