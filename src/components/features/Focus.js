import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../RoundedButton'
import { colors } from '../../utils/colors'
import { spacing } from '../../utils/sizes'

export default function Focus({ addSubject }) {
  const [subject, setSubject] = React.useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label={'What will you like to focus on?'}
          placeholder="Give your focus a name"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  button: {
    justifyContent: 'center',
    padding: 5,
    backgroundColor: colors.lightRed,
    borderRadius: 50
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'top'
  }
})
