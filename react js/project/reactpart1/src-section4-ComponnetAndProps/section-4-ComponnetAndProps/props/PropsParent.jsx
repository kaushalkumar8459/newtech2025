import { PropsChildren } from "./propsChildren"

export const PropsParent = () => {
    return (
        <>
            <PropsChildren colorName="red">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Description 1</p>
            </PropsChildren>
            <PropsChildren colorName="green">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Description 2</p>
            </PropsChildren>
            <PropsChildren colorName="pink">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Description 3</p>
            </PropsChildren>
        </>
    )
}

