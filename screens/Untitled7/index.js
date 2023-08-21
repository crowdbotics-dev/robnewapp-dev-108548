import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.hMkGyaOe}></View><View style={styles.JFDfKApC}><View style={styles.kuqKXzOy}></View><View style={styles.QeIybPbE}></View><Text style={styles.cdWuCGXR}>Lorem ipsum…</Text><Text style={styles.NqPNrIYH}>Lorem ipsum…</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  hMkGyaOe: {},
  JFDfKApC: {
    height: 501,
    width: 346,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  kuqKXzOy: {
    height: 60,
    width: 140,
    backgroundColor: "#e42020",
    borderRadius: 0,
    color: "#777777"
  },
  QeIybPbE: {
    height: 60,
    width: 140,
    backgroundColor: "#60f431",
    borderRadius: 0,
    color: "#777777"
  },
  cdWuCGXR: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NqPNrIYH: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    fontFamily: "Merriweather"
  }
});
export default Untitled7;