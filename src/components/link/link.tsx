import React from "react";

interface LinkProps {
    href: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    children: React.ReactNode;
}

const Link = (props: LinkProps) => {
    return <a href={props.href} onClick={props.onClick}>{props.children}</a>
}

export default Link;