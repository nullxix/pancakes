import React from 'react'


/**
 *  Pink Block of Cray Cray
 * 
 * @param {*} props.children the children to surrender 
 */
export default function PinkThing({children}) {
    return (
        <div 
            style={{
                width: '100%',
                backgroundColor: '#F1BA67'
            }}
        >
            {children}
        </div>
    )
}