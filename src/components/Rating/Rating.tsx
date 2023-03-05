import React, { Dispatch, SetStateAction} from 'react'
import { RatingNumber, RatingWrapper } from "../styles/RatingNumber"

type Props = {
    rating: number[];
    selectedRate: number;
    setSelectedRate: Dispatch<SetStateAction<number>>;
}

export default function Rating({ rating, selectedRate, setSelectedRate }: Props) {
    return (
        <RatingWrapper>
            {rating.map(num => (
                <RatingNumber
                    onClick={() => setSelectedRate(num)}
                    key={num}
                    selected={num === selectedRate}
                >
                    {num}
                </RatingNumber>
            ))}
        </RatingWrapper>
    )
}
