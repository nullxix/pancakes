import React from 'react'

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