/**
 * --- Part Two ---
 *
 * Strategy 2: Of all guards, which guard is most frequently asleep on the same minute?
 *
 * In the example above, Guard #99 spent minute 45 asleep more than any other guard or minute - three times in total.
 * (In all other cases, any guard spent any minute asleep at most twice.)
 *
 * What is the ID of the guard you chose multiplied by the minute you chose? (In the above example, the answer would be 99 * 45 = 4455.)
 */

import moment from 'moment';

enum EventType {
	FallsAsleep,
	WakesUp,
	BeginsShift
}

interface Eventt {
	message: string;
	guardId: number;
	eventType: EventType;
	timestamp: moment.Moment;
}

const determineEventType = (message: string): EventType => {
	switch (message) {
		case ' wakes up':
			return EventType.WakesUp;
		case ' falls asleep':
			return EventType.FallsAsleep;
		default:
			return EventType.BeginsShift;
	}
};

const determineGuardId = (message: string): number | undefined => {
	const [, idPart] = message.split('#');

	if (!idPart) {
		return undefined;
	}

	const [id] = idPart.split(' ');

	return parseInt(id, 10);
};

let lastGuardId: number;

const parseEvent = (log: string): Eventt => {
	const [dateTime, message] = log.split(']');

	const id = determineGuardId(message);

	if (id) {
		lastGuardId = id;
	}

	const timestamp = moment(dateTime, '[YYYY-MM-DD HH:mm', true);

	return {
		eventType: determineEventType(message),
		guardId: lastGuardId,
		message: message.trim(),
		timestamp,
	};
};

const calculateAsleepMaps = (logs: string[]) => {
	const events = logs.sort((a, b) => a.localeCompare(b)).map(parseEvent);

	let logId = -1;
	const shifts = events.reduce((s, event) => {
		if (event.eventType === EventType.BeginsShift) {
			logId++;

			return s;
		}

		const shift = s.get(logId);

		if (!shift) {
			s.set(logId, [event]);
		} else {
			s.set(logId, [...shift, event]);
		}

		return s;
	}, new Map<number, Eventt[]>());

	const asleepMaps = Array.from(shifts.values()).reduce((y, shiftEvents) => {
		const { guardId } = shiftEvents[0];

		const values = y.get(guardId);

		const asleepMap = new Set<number>();
		const length = shiftEvents.length;

		for (let i = 0; i < length; i += 2) {
			const startMinute = shiftEvents[i].timestamp.minute();
			const endMinute = shiftEvents[i + 1].timestamp.minute();

			for (let j = startMinute; j < endMinute; j++) {
				asleepMap.add(j);
			}
		}

		if (values) {
			y.set(guardId, [...values, asleepMap]);
		} else {
			y.set(guardId, [asleepMap]);
		}

		return y;
	}, new Map<number, Set<number>[]>());

	return asleepMaps;
};

export const challenge = (logs: string[]): number => {
	const asleepMaps = calculateAsleepMaps(logs);

	const highest = Array.from(asleepMaps.entries()).reduce((high, [id, maps]) => {
		const minuteMap = new Map<number, number>();

		for (const set of maps) {
			for (const num of set.values()) {
				const old = minuteMap.get(num);

				if (old) {
					minuteMap.set(num, old + 1);
				} else {
					minuteMap.set(num, 1);
				}
			}
		}

		const [minute, count] = Array.from(minuteMap.entries()).reduce(([hmin, hcount], [min, c]) => {
			if (c > hcount) {
				return [min, c];
			}

			return [hmin, hcount];
		}, [0, 0]);

		if (count > high.count) {
			return {
				count,
				id,
				minute,
			};
		}

		return high;
	}, { id: -1, minute: -1, count: -1 });

	return highest.id * highest.minute;
};
