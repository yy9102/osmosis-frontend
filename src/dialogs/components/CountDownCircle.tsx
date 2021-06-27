import React from 'react';
import { DEFAULT_GLOBAL_TIME_LIMIT } from '../../providers/SingletonTimerProvider';

interface Props {
	/** @description Time left in milliseconds */
	timeLeft: number;

	/** @description Circle size(diameter) in px */
	size?: number;

	/** @description Time limit in milliseconds
	 * @default DEFAULT_GLOBAL_TIME_LIMIT
	 * */
	timeLimit?: number;

	/**
	 * @description Color of a timer circle. cssProp.color values.
	 * */
	color?: string;
}

export function CountDownCircle({
	size = 50,
	timeLimit = DEFAULT_GLOBAL_TIME_LIMIT,
	color = 'rgb(65, 184, 131)',
	timeLeft,
}: Props) {
	return (
		<div
			style={{
				position: 'relative',
				width: `${size}px`,
				height: `${size}px`,
			}}>
			<svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<g
					className="base-timer__circle"
					style={{
						fill: 'none',
						stroke: 'none',
					}}>
					<circle
						style={{
							strokeWidth: '7px',
							stroke: 'grey',
						}}
						cx="50"
						cy="50"
						r="45"
					/>
					<path
						id="base-timer-path-remaining"
						strokeDasharray={calculateStrokeDashArray({ timeLimit, timeLeft })}
						style={{
							strokeWidth: '7px',
							strokeLinecap: 'round',
							transform: 'rotate(90deg)',
							transformOrigin: 'center',
							fillRule: 'nonzero',
							stroke: 'currentColor',
							color,
						}}
						className="base-timer__path-remaining ${remainingPathColor}"
						d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
					/>
				</g>
			</svg>
		</div>
	);
}

interface Params {
	timeLimit: number;
	timeLeft: number;
}

function calculateStrokeDashArray({ timeLimit, timeLeft }: Params) {
	const FULL_DASH_ARRAY = 283;
	const rawTimeFraction = timeLeft / timeLimit;
	const timeFraction = rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
	return `${(timeFraction * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
}
