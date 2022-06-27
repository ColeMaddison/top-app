import { useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';

import StarIcon from './star.svg';

export const Rating = ({ rating, setRating, isEditable = false, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const changeDisplay = (i: number): void => {
        if (!isEditable) {
            return;
        }

        constructRating(i);
    };

    const onClick = (i: number): void => {
        if (!isEditable || !setRating) {
            return;
        }

        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>): void => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }

        setRating(i);
    };

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((r, i) => {
            return (
                <span
                    key={`r_${i}`}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={(): void => changeDisplay(i + 1)}
                    onMouseLeave={(): void => changeDisplay(rating)}
                    onClick={(): void => onClick(i + 1)}
                >
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>): void => {isEditable && handleSpace(i + 1, e)}}
                    />
                </span>
            );
        });

        setRatingArray(updatedArray);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    return (
        <div
            {...props}
        >
            {
                ratingArray.map((r, i) => (<span key={`i_${i}`}>{r}</span>))
            }
        </div>
    );
};
