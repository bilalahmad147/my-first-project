import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View, Button } from 'react-native'

function AddTodos({ submitHandler }) {

    let [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Enter todos name..'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add todo' color='coral'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodos;