import React, { createContext, useContext, useMemo } from 'react';
import { BehaviorSubject, timer } from 'rxjs';
import { useEventCallback } from 'rxjs-hooks';
import { mergeMap, switchMap, takeWhile } from 'rxjs/operators';

export const DEFAULT_GLOBAL_TIME_LIMIT = 30_000;

export const SingletonTimerContext = createContext<{ startTimer: (e: number) => void; timeLeft: number } | null>(null);

export function SingletonTimerProvider({ children }: { children: React.ReactNode }) {
	const [startTimer, timeLeft] = useTimer();
	return <SingletonTimerContext.Provider value={{ startTimer, timeLeft }}>{children}</SingletonTimerContext.Provider>;
}

export function useSingletonTimer() {
	const context = useContext(SingletonTimerContext);
	if (!context) {
		throw new Error('You have forgot to use SingletonTimerProvider');
	}
	return context;
}

interface Params {
	/** @description Interval in milliseconds */
	interval?: number;
}

function useTimer({ interval = 300 }: Params = {}) {
	const timeLeft$ = useMemo(() => new BehaviorSubject(0), []);
	return useEventCallback<number, number>(start$ => {
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
}
