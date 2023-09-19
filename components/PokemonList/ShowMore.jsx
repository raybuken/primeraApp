import { Button } from '@react-native-material/core'
import React from 'react'
import { View } from 'react-native'
import Loading from '../Loading'

function ShowMore({updateData, loading}) {
    return (
        <View style={{flex: 1, alignItems: "center", marginTop: 20, marginBottom: 20}}>
            <Button color='primary' title={loading ? <Loading/> : "Mostrar más"} onPress={updateData} />
        </View>
    )
}

export default ShowMore