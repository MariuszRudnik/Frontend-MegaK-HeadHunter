import React, {MouseEventHandler} from 'react';
import './Button.css';

interface ButtonProps {
    text: string
    click: (id: string) => void
    id: string
}

export const Button = (props: ButtonProps) => (
    <button className="Button" onClick={() => props.click(props.id)}>{props.text}</button>
)
