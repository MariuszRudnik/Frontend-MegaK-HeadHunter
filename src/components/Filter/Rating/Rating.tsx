import React, {Dispatch, SetStateAction, useState} from "react";
import {Star} from "@styled-icons/boxicons-solid";

interface RatingProps {
    title: string
    rating: (obj: SelectedRating, name: string) => void
    name: string
}

export interface SelectedRating {
    fiveStar: boolean,
    fourStar: boolean,
    threeStar: boolean,
    twoStar: boolean,
    oneStar: boolean,
}

export const Rating = (props: RatingProps) => {

    const [selected, setSelected] = useState<SelectedRating>({
        fiveStar: false,
        fourStar: false,
        threeStar: false,
        twoStar: false,
        oneStar: false
    })

    return (
        <div className="Stars">
            <p>{props.title}</p>
            <div className="Stars-wrap">
                <div className={selected.fiveStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    setSelected({...selected, fiveStar: !selected.fiveStar})
                    props.rating({...selected, fiveStar: !selected.fiveStar}, props.name)
                }}>
                    <p>5</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={selected.fourStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    setSelected({...selected, fourStar: !selected.fourStar})
                    props.rating({...selected, fourStar: !selected.fourStar}, props.name)
                }}>
                    <p>4</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={selected.threeStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    setSelected({...selected, threeStar: !selected.threeStar})
                    props.rating({...selected, threeStar: !selected.threeStar}, props.name)
                }}>
                    <p>3</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={selected.twoStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    setSelected({...selected, twoStar: !selected.twoStar})
                    props.rating({...selected, twoStar: !selected.twoStar}, props.name)
                }}>
                    <p>2</p> <Star
                    size={13} className="Star"/>
                </div>
                <div className={selected.oneStar ? 'Stars-item active' : 'Stars-item'} onClick={() => {
                    setSelected({...selected, oneStar: !selected.oneStar})
                    props.rating({...selected, oneStar: !selected.oneStar}, props.name)
                }}>
                    <p>1</p> <Star
                    size={13} className="Star"/>
                </div>
            </div>
        </div>
    )
}
