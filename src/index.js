import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ChonseSelect = ({
    data,
    initValue,
    onPress,
    colorActive = '#fff',
    color = '#4C5C25',
    borderColor = '#4C5C25',
    style,
    textStyle,
    label = '',
    marginLeft = 0,
    height,
    labelStyle
}) => {
    const size = Object.keys(data).length;
    return (
        <View style={{ marginLeft: marginLeft }}>
            {label != '' &&
                <Text style={[styles.label, labelStyle]}>{label}</Text>
            }
            <View style={[styles.wrapRow, style]}>
                {data.map((item, key) => {
                    if (key == 0) {
                        return (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.9}
                                onPress={() => onPress(item)}
                                style={[item.value == initValue ? styles.wrapStartActive : styles.wrapStart, {
                                    borderColor: borderColor,
                                    height: height
                                }]}>
                                <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    }
                    else if (key == size - 1) {
                        return (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.9}
                                onPress={() => onPress(item)}
                                style={[item.value == initValue ? styles.wrapEndActive : styles.wrapEnd, {
                                    borderColor: borderColor,
                                    height: height
                                }]}>
                                <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    } else {
                        return (
                            <TouchableOpacity
                                key={key}
                                activeOpacity={0.9}
                                onPress={() => onPress(item)}
                                style={[item.value == initValue ? styles.wrapActive : styles.wrap, {
                                    borderColor: borderColor,
                                    height: height
                                }]}>
                                <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    }
                })}
            </View>
        </View>
    )
}

module.exports = {
    ChonseSelect: ChonseSelect
}

const styles = StyleSheet.create({
    wrapRow: {
        flexDirection: 'row',
    },
    label: {
        marginBottom: 5
    },
    wrapStart: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#4C5C25',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapStartActive: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#4C5C25',
        paddingVertical: 5,
        backgroundColor: '#4C5C25',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#4C5C25',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapActive: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#4C5C25',
        backgroundColor: '#4C5C25',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapEnd: {
        borderWidth: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#4C5C25',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapEndActive: {
        borderWidth: 1,
        backgroundColor: '#4C5C25',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#4C5C25',
        paddingVertical: 5,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 13,
        color: '#4C5C25'
    }
});