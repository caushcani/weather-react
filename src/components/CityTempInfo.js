import React from 'react'

export const CityTempInfo = (props) => {
    const tempInCelcius = ()=>{
        return props.temp-273.15;;
    }
    return (
        <div>
            hi from {props.city}
        </div>
    )
}
