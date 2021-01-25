import React from 'react'
import Graph from '../Graph/Graph'
import styles from './Home.module.css'

const colors = [
  {
    numberColor2: '#226F0B',
    numberColor1: '#85D26F',
    titleColor: 'gray',
    totalColor: 'black',
    strokeColor: 'RGBA(34, 111, 11, .5)'
  },
  {
    numberColor2: '#0F228C',
    numberColor1: '#02C2FF',
    titleColor: 'gray',
    totalColor: 'black',
    strokeColor: 'RGBA(2, 194, 255, .5)'
  },
  {
    numberColor2: '#CA7B28',
    numberColor1: '#FFCD02',
    titleColor: 'gray',
    totalColor: 'black',
    strokeColor: 'RGBA(255, 205, 2, .5)'
  }
]

const lineData = [
  [
    {
      "x": 20,
      "y": 42
    },{
      "x": 25,
      "y": 40
    },{
      "x": 30,
      "y": 39
    },{
      "x": 50,
      "y": 36
    },{
      "x": 71,
      "y": 35
    },{
      "x": 80,
      "y": 35
    },{
      "x": 100,
      "y": 40
    },{
      "x": 120,
      "y": 29
    },{
      "x": 130,
      "y": 35
    },{
      "x": 140,
      "y": 30
    },{
      "x": 160,
      "y": 29
    },
  ],
  [
    {
      "x": 10,
      "y": 30
    },
    {
      "x": 20,
      "y": 29
    },{
      "x": 25,
      "y": 34
    },{
      "x": 30,
      "y": 30
    },{
      "x": 50,
      "y": 33
    },{
      "x": 71,
      "y": 27
    },{
      "x": 80,
      "y": 35
    },{
      "x": 100,
      "y": 45
    },{
      "x": 120,
      "y": 40
    },{
      "x": 160,
      "y": 45
    },
  ],
  [
    {
      "x": 20,
      "y": 42
    },{
      "x": 25,
      "y": 45
    },{
      "x": 30,
      "y": 47
    },{
      "x": 50,
      "y": 40
    },{
      "x": 71,
      "y": 43
    },{
      "x": 80,
      "y": 37
    },{
      "x": 100,
      "y": 32
    },{
      "x": 120,
      "y": 35
    },{
      "x": 160,
      "y": 30
    },
  ]
]
/**
 * @param {Object} props - the props
 * @param {Object[]} props.data - the data of each graph
 * @returns {React.Component}
 */
const Home = ({
  data
}) => {
  let i= 0
  const graphList = data.map(element => {

    const {
      amountTotal,
      amountTotalText,
      title,
      item1,
      item2
    } = element
    const {
      numberColor1,
      numberColor2,
      titleColor,
      totalColor,
      strokeColor
    } = colors[i]
    const values = lineData[i]
    i++
    return (
      <div className={styles.GraphContainer}>
        <Graph
          amountTotal={amountTotal}
          amountTotalText={amountTotalText}
          title={title}
          itemName1={item1.name}
          amountText1={item1.amountText}
          amount1={item1.amount}
          percentage1={item1.percentage}
          itemName2={item2.name}
          amountText2={item2.amountText}
          amount2={item2.amount}
          percentage2={item2.percentage}
          numberColor1={numberColor1}
          numberColor2={numberColor2}
          titleColor={titleColor}
          totalColor={totalColor}
          strokeColor={strokeColor}
          values={values}
        />
      </div>
    )
  })
  return (
    <div className={styles.Container}>
      {graphList}
    </div>
  )
}


export default Home
