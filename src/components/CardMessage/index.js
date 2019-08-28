import React from 'react'

const CardMessage = ({message}) => {
    return (
        <div>
            {message.author} - {message.message}
        </div>
    )
}

export default CardMessage
