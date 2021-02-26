import React from 'react'
import { render } from 'react-dom'
import { PieChart } from 'react-native-svg-charts'
import {Text} from 'react-native-svg'



function pieChart () {


    
    const data = [
        {
            key: 1,
            amount: 40,
            tag: "Food",
            svg: { fill: '#FF7F50'},
        },

        {
            key: 2,
            amount: 30,
            tag: "Transportation",
            svg: { fill: '#E8833C'},
        },

        {
            key: 3,
            amount: 30,
            tag: "Energy",
            svg: { fill: '#E8513C'},
        }
    ]
    //const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const PLabels = ({slices, height, width}) => {
        return slices.map((slice, index) => {
            const {labelCentroid, pieCentroid, data} = slice;

            return (
                <SvgText 
                    key = {index}
                    x={pieCentroid [ 0 ]}
                    y={pieCentroid [ 1 ]}
                    fill = {'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    //stroke={'black'}
                    //strokeWidth={0.2}
                    
                >
                    {data.amount}
                </SvgText>

            )
        })
    }

    return (
        <PieChart
            style ={{height: 200}}
            valueAccessor={({item}) => item.amount}
            data={data}
            spacing = {0}
            outerRadius={'95%'}
            innerRadius={50}
            >
                <PLabels/>
            </PieChart>
    )
    
    
}