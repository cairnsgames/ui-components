


const Link = (props) => {
    return <a href={props.href} onClick={props.onClick}>{props.children}</a>
}

export default Link;