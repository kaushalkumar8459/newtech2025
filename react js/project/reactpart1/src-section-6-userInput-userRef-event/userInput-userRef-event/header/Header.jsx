const Header = (props) => {
    return (<div className="header">
        <span>{props.logo}</span>
        <span>{props.header}</span>
        <hr />
    </div>)
}
export default Header;