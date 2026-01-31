import { useState } from "react"

export const PropsChildren = ({ children, colorName }) => {
    const [show, setShow] = useState(true)
    return (
        <>
            {show &&
                <div className={`design ${colorName}`}>
                    {children}
                    <button onClick={() => { setShow(!show) }}>delete</button>
                </div>
            }
        </>
    )
}
