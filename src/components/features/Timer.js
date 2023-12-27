import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'
import { Countdown } from '../CountdownTimer'
import { RoundedButton } from '../RoundedButton'

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStared, setIsStarted] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.countDownContainer}>
        <Countdown
          onProgress={() => {}}
          onEnd={() => {}}
          isPaused={!isStared}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStared && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStared && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: 'green'
  },
  countDownContainer: {
    // backgroundColor: 'yellow',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: colors.white,
    padding: spacing.sm,
    backgroundColor: colors.lightRed
  }
})
