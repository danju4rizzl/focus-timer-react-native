import React, { useState } from 'react'
import { StyleSheet, Text, View, Vibration, Platform } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { Countdown } from '../CountdownTimer'
import { RoundedButton } from '../RoundedButton'
import { colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { Timing } from './Timing'

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

  const [minutes, setMinutes] = useState(0.1)

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    reset()
  }

  return (
    <View style={styles.container}>
      {/* Countdown timer and Task starts here  */}
      <View style={styles.countDownContainer}>
        <Countdown
          onProgress={setProgress}
          onEnd={onEnd}
          isPaused={!isStarted}
          minutes={minutes}
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
      {/* Timer controls view starts here */}

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
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
      {/* Clear button starts here */}
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton title="-" size={50} onPress={clearSubject} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countDownContainer: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: 'green'
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    padding: spacing.xxl
  },
  buttonWrapper: {
    // backgroundColor: 'yellow',
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
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
