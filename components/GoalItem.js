import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem( props ){
    return(
        <View style={styles.goalItem}>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                //android_ripple={{color: '#210644'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem : {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        }, 
    pressedItem: {
        backgroundColor: '#210644',
        borderRadius: 6,
    },
    goalText: {
        padding: 8,
        color: 'white',    
      }
})

export default GoalItem;