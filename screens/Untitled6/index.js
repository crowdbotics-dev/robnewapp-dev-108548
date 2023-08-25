import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.udjmVywr}><Text style={styles.rVDBdwMb}>Lorem ipsum…</Text><Text style={styles.YavcklhY}>Lorem ipsum…</Text><View style={styles.AXMGeGYI}></View></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  udjmVywr: {
    height: 224,
    width: 303,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "start"
  },
  rVDBdwMb: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  YavcklhY: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  AXMGeGYI: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled6;