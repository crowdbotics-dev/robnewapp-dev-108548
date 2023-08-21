import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.whyyrcxo}>Lorem ipsum…</Text></ScrollView>
    <View style={styles.TPZNKwzT}><Text style={styles.jOKzWRvV}>Lorem ipsum…</Text><View style={styles.tWFJVMTj}></View></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  whyyrcxo: {
    width: 290,
    height: 616,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    flexDirection: "row",
    flex: 1,
    alignItems: "end"
  },
  TPZNKwzT: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  jOKzWRvV: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  tWFJVMTj: {
    flex: 1
  }
});
export default Untitled4;