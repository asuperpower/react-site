import React from "react"
import "../styles/global/container.css"

export default function Container({ children }) {
    return <div className="container">{children}</div>
}