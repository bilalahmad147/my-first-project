import React, { useState } from 'react'
import { Text, TextInput, Buttton } from 'react-native'

function AddTodos() {

    let [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <TextInput
            style={styles.input}
            placeholder='Enter todos name..'
            onChangeText={changeHandler}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizental: 8,
        paddingVerticle: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodos;