import React, {ReactNode} from 'react';
import './CvLabel.css';

interface Props {
    title: string;
    children?: ReactNode;
}

export const CvLabel = (props: Props) => {
    return <>
        <div className="CvLabel">
            <p className="LabelTitle">{props.title}</p>
            <div className="Details">{props.children}</div>
        </div>
    </>
}
