/**
 * --- Day 4: Repose Record ---
 *
 * You've sneaked into another supply closet - this time, it's across from the prototype suit manufacturing lab.
 * You need to sneak inside and fix the issues with the suit, but there's a guard stationed outside the lab,
 * so this is as close as you can safely get.
 *
 * As you search the closet for anything that might help, you discover that you're not the first person to want to sneak in.
 * Covering the walls, someone has spent an hour starting every midnight for the past few months secretly observing
 * this guard post! They've been writing down the ID of the one guard on duty that night - the Elves seem to have decided that one
 * guard was enough for the overnight shift - as well as when they fall asleep or wake up while at their post (your puzzle input).
 *
 * For example, consider the following records, which have already been organized into chronological order:
 *
 * [1518-11-01 00:00] Guard #10 begins shift
 * [1518-11-01 00:05] falls asleep
 * [1518-11-01 00:25] wakes up
 * [1518-11-01 00:30] falls asleep
 * [1518-11-01 00:55] wakes up
 * [1518-11-01 23:58] Guard #99 begins shift
 * [1518-11-02 00:40] falls asleep
 * [1518-11-02 00:50] wakes up
 * [1518-11-03 00:05] Guard #10 begins shift
 * [1518-11-03 00:24] falls asleep
 * [1518-11-03 00:29] wakes up
 * [1518-11-04 00:02] Guard #99 begins shift
 * [1518-11-04 00:36] falls asleep
 * [1518-11-04 00:46] wakes up
 * [1518-11-05 00:03] Guard #99 begins shift
 * [1518-11-05 00:45] falls asleep
 * [1518-11-05 00:55] wakes up
 * Timestamps are written using year-month-day hour:minute format. The guard falling asleep or waking up is always the one whose
 * shift most recently started. Because all asleep/awake times are during the midnight hour (00:00 - 00:59),
 * only the minute portion (00 - 59) is relevant for those events.
 *
 * Visually, these records show that the guards are asleep at these times:
 *
 * Date   ID   Minute
 *             000000000011111111112222222222333333333344444444445555555555
 *             012345678901234567890123456789012345678901234567890123456789
 * 11-01  #10  .....####################.....#########################.....
 * 11-02  #99  ........................................##########..........
 * 11-03  #10  ........................#####...............................
 * 11-04  #99  ....................................##########..............
 * 11-05  #99  .............................................##########.....
 * The columns are Date, which shows the month-day portion of the relevant day; ID, which shows the guard on duty that day;
 * and Minute, which shows the minutes during which the guard was asleep within the midnight hour. (The Minute column's header
 * shows the minute's ten's digit in the first row and the one's digit in the second row.) Awake is shown as ., and asleep is shown as #.
 *
 * Note that guards count as asleep on the minute they fall asleep, and they count as awake on the minute they wake up.
 * For example, because Guard #10 wakes up at 00:25 on 1518-11-01, minute 25 is marked as awake.
 *
 * If you can figure out the guard most likely to be asleep at a specific time, you might be able to trick that guard into
 * working tonight so you can have the best chance of sneaking in. You have two strategies for choosing the best guard/minute combination.
 *
 * Strategy 1: Find the guard that has the most minutes asleep. What minute does that guard spend asleep the most?
 *
 * In the example above, Guard #10 spent the most minutes asleep, a total of 50 minutes (20+25+5), while Guard #99 only slept
 * for a total of 30 minutes (10+10+10). Guard #10 was asleep most during minute 24 (on two days, whereas any other
 * minute the guard was asleep was only seen on one day).
 *
 * While this example listed the entries in chronological order, your entries are in the order you found them.
 * You'll need to organize them before they can be analyzed.
 *
 * What is the ID of the guard you chose multiplied by the minute you chose? (In the above example, the answer would be 10 * 24 = 240.)
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

	const highest = Array.from(asleepMaps.entries()).reduce((high, [id, sets]) => {
		const timeAsleep = sets.reduce((time, set) => time + Array.from(set.values()).length, 0);

		if (!high || high.timeAsleep < timeAsleep) {
			return {
				id,
				sets,
				timeAsleep,
			};
		}

		return high;
	}, { id: 0, timeAsleep: 0, sets: [new Set<number>()] });

	const minuteMap = new Map<number, number>();

	for (const set of highest.sets) {
		for (const num of set.values()) {
			const old = minuteMap.get(num);

			if (old) {
				minuteMap.set(num, old + 1);
			} else {
				minuteMap.set(num, 1);
			}
		}
	}

	const minute = Array.from(minuteMap.entries()).reduce(([hmin, hcount], [min, count]) => {
		if (count > hcount) {
			return [min, count];
		}

		return [hmin, hcount];
	}, [0, 0])[0];

	return highest.id * minute;
};
