import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      fill="#000"
      width="800px"
      height="800px"
      viewBox="10 0 52 52"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g data-name="Layer 1">
        <path d="M36 4.07c-11.85 0-21.46 3.21-21.46 7.19v5.89c0 4 9.61 7.19 21.46 7.19s21.45-3.21 21.45-7.19v-5.89c.01-3.98-9.6-7.19-21.45-7.19z" />
        <path d="M36 27.78c-11.32 0-20.64-2.93-21.46-6.66v9.75c0 4 9.61 7.18 21.46 7.18s21.45-3.21 21.45-7.18v-9.75c-.82 3.73-10.13 6.66-21.45 6.66z" />
        <path d="M57.44 35c-.82 3.72-10.12 6.66-21.43 6.66S15.37 38.72 14.55 35v9.75c0 4 9.61 7.18 21.46 7.18s21.45-3.21 21.45-7.18z" />
      </g>
    </svg>
  )
}

export default SvgComponent