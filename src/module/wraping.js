


import React, { Component, PureComponent, useState, useEffect, useRef, createRef, useMemo, forwardRef } from 'react';
import {Modalize} from 'react-native-modalize';
import {useCombinedRefs} from '../module/combined-refs';

import { Dimensions, StyleSheet, Text, View, PermissionsAndroid, Platform, Alert, ActivityIndicator, Image } from 'react-native';
export const MyModal = forwardRef(({title,price,description}, ref) => {

    const modalizeRef = React.createRef();
    const combinedRef = useCombinedRefs(ref, modalizeRef);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    return (
        <Modalize ref={combinedRef} modalTopOffset={100} 
        snapPoint={200}
        overlayStyle={{
            backgroundColor: 'transparent'
          }}
          handlePosition = {1}
        >

            <Text> {title} {price} {description} </Text>
        </Modalize>
    )
})