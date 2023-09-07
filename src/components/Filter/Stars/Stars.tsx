import React, {Dispatch, SetStateAction, useState} from 'react';
import {Star} from "@styled-icons/boxicons-solid";

export interface StarsProps {
    choose: Dispatch<SetStateAction<any>>
    rating: (obj: SelectedRating, name: string)=>void
}

export interface SelectedRating {
    fiveStar: boolean,
    fourStar: boolean,
    threeStar: boolean,
    twoStar: boolean,
    oneStar: boolean,
}

export const Stars = ({choose, rating}: StarsProps) => {

    const [selected, setSelected] = useState<SelectedRating>({
        fiveStar: false,
        fourStar: false,
        threeStar: false,
        twoStar: false,
        oneStar: false
    })

    return (
        <div className="Stars-wrap">
            <div className={selected.fiveStar ? 'Stars-item active' : 'Stars-item'} onClick={()=> {
                setSelected({...selected, fiveStar: !selected.fiveStar})
                choose({...selected, fiveStar: !selected.fiveStar})
                rating(selected, 'ratingCourse')
            }}>
                <p>5</p> <Star
                size={13} className="Star"/>
            </div>
            <div className={selected.fourStar ? 'Stars-item active' : 'Stars-item'} onClick={()=> {
                setSelected({...selected, fourStar: !selected.fourStar})
                choose({...selected, fourStar: !selected.fourStar})
            }}>
                <p>4</p> <Star
                size={13} className="Star"/>
            </div>
            <div className={selected.threeStar ? 'Stars-item active' : 'Stars-item'} onClick={()=> {
                setSelected({...selected, threeStar: !selected.threeStar})
                choose({...selected, threeStar: !selected.threeStar})
            }}>
                <p>3</p> <Star
                size={13} className="Star"/>
            </div>
            <div className={selected.twoStar ? 'Stars-item active' : 'Stars-item'} onClick={()=> {
                setSelected({...selected, twoStar: !selected.twoStar})
                choose({...selected, twoStar: !selected.twoStar})
            }}>
                <p>2</p> <Star
                size={13} className="Star"/>
            </div>
            <div className={selected.oneStar ? 'Stars-item active' : 'Stars-item'} onClick={()=> {
                setSelected({...selected, oneStar: !selected.oneStar})
                choose({...selected, oneStar: !selected.oneStar})
            }}>
                <p>1</p> <Star
                size={13} className="Star"/>
            </div>
        </div>
    )
}