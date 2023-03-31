import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g data-name="Layer 2">
                <path fill="none" data-name="invisible box" d="M0 0H48V48H0z" />
                <g data-name="icons Q2">
                    <path d="M41 6H7a2 2 0 00-2 2v24a2 2 0 002 2h34a2 2 0 002-2V8a2 2 0 00-2-2zM44 42H4a2 2 0 010-4h40a2 2 0 010 4z" />
                </g>
            </g>
        </svg>
    )
}

export default SvgComponent
