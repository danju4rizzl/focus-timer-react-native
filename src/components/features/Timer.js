import React, { useState } from 'react'
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { Countdown } from '../CountdownTimer'
import { RoundedButton } from '../RoundedButton'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'

// ONE_SECOND_IN_MS and PATTERN constance is for the vibration pattern
const ONE_SECOND_IN_MS = 1000
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
]

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)

  // Todo add minutes to timer next
  const [minutes, setMinutes] = useState(0.1)

  return (
    <View style={styles.container}>
      {/* Countdown timer and Task starts here  */}
      <View style={styles.countDownContainer}>
        <Countdown
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN)
          }}
          isPaused={!isStarted}
        />
        <View style={{ padding: spacing.xxl }}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      {/* Progress bar starts here   */}
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.lightRed}
          style={{ height: spacing.sm }}
        />
      </View>
      {/* Play & Pause button starts here */}
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      {/* Timer controls view starts here */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countDownContainer: {
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
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  task: {
    fontSize: fontSizes.md,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white
  }
})
