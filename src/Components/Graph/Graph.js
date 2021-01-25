import React from 'react'
import Donut from '../Donut/Donut'
import styles from './Graph.module.css'


/**
 * 
 * @param {Object} props - the react props
 * @param {Number} props.amountTotal -  the text of the left item
 * @param {String} props.amountTotalText - the text of the right item
 * @param {String} props.title
 * @param {String} props.itemName1
 * @param {String} props.amountText1
 * @param {Number} props.amount1
 * @param {Number} props.percentage1
 * @param {String} props.itemName2
 * @param {String} props.amountText2
 * @param {Number} props.amount2
 * @param {Number} props.percentage2
 * @param {String} props.numberColor1
 * @param {String} props.numberColor2
 * @param {String} props.titleColor
 * @param {String} props.totalColor
 * @param {String} props.strokeColor
 * @param {Object[]} props.values
 * @returns {React.Component}
 */
const Graph = ({
  amountTotal,
  amountTotalText,
  title,
  itemName1,
  amountText1,
  amount1,
  percentage1,
  itemName2,
  amountText2,
  amount2,
  percentage2,
  numberColor1,
  numberColor2,
  titleColor,
  totalColor,
  strokeColor,
  values
}) => {

  return(
    <div>
      <div className={styles.Graph}>
      <Donut
          width={200}
          height={200}
          amount1={amount1}
          amount2={amount2}
          numberColor1={numberColor1}
          numberColor2={numberColor2}
          totalNumber={amountTotal}
          title={title}
          amountTotalText={amountTotalText}
          titleColor={titleColor}
          totalColor={totalColor}
          donutWidth={10}
          strokeColor={strokeColor}
          values={values}
        />
      </div>
      <div className={styles.ItemContainer}>
        <div className={styles.leftItem}>
          <p style={{color: numberColor1, fontWeight:'bold'}}>
            {itemName1}
          </p>
          <p><span style={{fontWeight:'bold'}}>{`${percentage1}%`}</span>&nbsp;&nbsp; {amountText1}</p>
        </div>
        <div className={styles.rightItem}>
          <p style={{color: numberColor2, fontWeight:'bold'}}>
            {itemName2}
          </p>
          <p><span style={{fontWeight:'bold'}}>{`${percentage2}%`}</span>&nbsp;&nbsp;{amountText2}</p>
        </div>
      </div>
    </div>
  )
}

export default Graph