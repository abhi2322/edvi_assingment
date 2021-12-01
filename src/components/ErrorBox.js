import React from 'react'

function ErrorBox(props) {
    return (
        <div className="errorBox">
            {props.error}
        </div>
    )
}

export default ErrorBox
