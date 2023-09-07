import React, {ReactNode} from 'react';
import './ExpectationDetail.css';

interface Props {
    title: string;
    children?: ReactNode;
}

export const ExpectationDetail = (props: Props) => {
    return <>
        <div className="ExpectationDetails">
            <p className="Title">{props.title}</p>
            <p className="Expected">{props.children}</p>
        </div>
    </>
}
