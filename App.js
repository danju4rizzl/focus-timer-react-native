import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View
} from 'react-native'
import { colors } from './src/utils/colors'
import Focus from './src/components/features/Focus'
import React, { useState } from 'react'
import { Timer } from './src/components/features/Timer'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('web')

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer focusSubject={currentSubject} />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkRed,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
