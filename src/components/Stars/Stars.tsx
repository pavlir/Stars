import React from 'react'
import { Star } from '../../components/Star/Star'

interface IStarsProps {
	count?: number
};

export const Stars = ({count = 0}: IStarsProps) => {
	if (typeof count !== 'number' || count < 1 || count > 5) {
		return null;
	}

	const stars: React.JSX.Element[] = [];

	for (let i: number = 0; i < count; i++) {
		stars.push(<Star key={i} />);
	}

  return (
    <ul className="card-body-stars u-clearfix">
		  {stars}
    </ul>
  )
}
