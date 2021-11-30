import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = (props) => {
    return (
        <ReactSpeedometer
            maxValue={props.max}
            value={props.value}
            currentValueText={props.title}
            maxSegmentLabels={5}
            needleColor="#386E8D"
            startColor="green"
            segments={props.segments}
            endColor="#FF0000"
            width={170}
            height={120}
            ringWidth={20}
        />
    )
}

export default Speedometer;
