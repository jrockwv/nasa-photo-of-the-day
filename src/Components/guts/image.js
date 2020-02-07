import React from 'react'

function Image(props){
    const imgStyle= {
        width: '75%'
        
    }

    return(
        <div>
            <img src={props.source} style={imgStyle} alt={props.alt}/>
        </div>
    )
}

export default Image;