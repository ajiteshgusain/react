function SensorData(props){


    // Logic: Decide the color based on the 'value' prop
   // If value is > 50, use red. Otherwise, use green.


    const statusColor=props.value>50?"green":"red";

    const style={
    border: '`2px solid ${statusColor}',
    borderRadius: '10px',
    padding: '15px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    width: '250px'

    };
    return(
        <div style={style}>
            <h3>    Sensor name:{prop.sensorName}</h3>
            <h1 style={{statusColor}}>{props.value}</h1>

            {/* Dynamic message based on value */}
            <p>{props.value > 50 ? "⚠️ DANGER: OVERHEATING" : "✅ SYSTEM NORMAL"}</p>

        </div>
    )

    

}

export default SensorData