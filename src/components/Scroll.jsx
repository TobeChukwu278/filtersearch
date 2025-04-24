import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
            <div style={{ height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {props.children}
            </div>

        </div>
    )
}

export default Scroll