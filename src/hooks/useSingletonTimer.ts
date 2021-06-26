import { BehaviorSubject, timer } from 'rxjs';
import { useEventCallback } from 'rxjs-hooks';
import { mergeMap, switchMap, takeWhile } from 'rxjs/operators';

export const DEFAULT_GLOBAL_TIME_LIMIT = 30_000;
const timeLeft$ = new BehaviorSubject(0);

interface Params {
	/** @description Interval in milliseconds */
	interval?: number;
}

export function useSingletonTimer({ interval = 300 }: Params = {}) {
	const [startTimer, timeLeft] = useEventCallback<number, number>(start$ => {
		const timer$ = (timeLimit: number) =>
			timer(0, interval).pipe(
				mergeMap(() => {
					/** Do not restart timer if timer is still running use previous timeLeft value. */
					const previousTimeMs = timeLeft$.getValue() > 0 ? timeLeft$.getValue() : timeLimit;
					const currentTimeMs = previousTimeMs - interval;
					timeLeft$.next(Math.max(currentTimeMs, 0));
					return timeLeft$;
				}),
				takeWhile(timeLeft => timeLeft > 0, true)
			);
		return start$.pipe(switchMap(timeLimit => timer$(timeLimit)));
	}, timeLeft$.getValue());

	return [startTimer, timeLeft] as const;
}
