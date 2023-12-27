import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { fontSizes, spacing } from '../utils/sizes'
import { colors } from '../utils/colors'

// Function to convert minutes to milliseconds
const minutesToMillis = (min) => min * 1000 * 60

// Function to format time with leading zero if less than 10
const formatTime = (time) => (time < 10 ? `0${time}` : time)

// Countdown component
export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null)

  const [millis, setMillis] = useState(null)

  // Function to handle countdown logic
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd()
        return time
      }
      const timeLeft = time - 1000
      return timeLeft
    })
  }

  // Set initial milliseconds when minutes prop changes
  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])

  // Call onProgress callback when millis prop changes
  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes))
  }, [millis])

  // Start or stop the countdown based on isPaused prop
  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current)
      return
    }

    interval.current = setInterval(countDown, 1000)

    // Clear the interval when component unmounts or isPaused prop changes
    return () => clearInterval(interval.current)
  }, [isPaused])

  const minute = Math.floor(millis / 1000 / 60) % 60
  const seconds = Math.floor(millis / 1000) % 60

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    borderRadius: spacing.md,
    backgroundColor: 'rgba(94, 132, 226, 0.3)'
  }
})
