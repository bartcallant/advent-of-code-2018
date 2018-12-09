/**
 * --- Part Two ---
 *
 * As you're about to begin construction, four of the Elves offer to help.
 * "The sun will set soon; it'll go faster if we work together." Now, you need to account for
 * multiple people working on steps simultaneously. If multiple steps are available, workers should
 * still begin them in alphabetical order.
 *
 * Each step takes 60 seconds plus an amount corresponding to its letter:
 * A=1, B=2, C=3, and so on. So, step A takes 60+1=61 seconds,
 * while step Z takes 60+26=86 seconds. No time is required between steps.
 *
 * To simplify things for the example, however, suppose you only have help
 * from one Elf (a total of two workers) and that each step takes 60 fewer
 * seconds (so that step A takes 1 second and step Z takes 26 seconds).
 * Then, using the same instructions as above, this is how each second would be spent:
 *
 * Second   Worker 1   Worker 2   Done
 *    0        C          .
 *    1        C          .
 *    2        C          .
 *    3        A          F       C
 *    4        B          F       CA
 *    5        B          F       CA
 *    6        D          F       CAB
 *    7        D          F       CAB
 *    8        D          F       CAB
 *    9        D          .       CABF
 *   10        E          .       CABFD
 *   11        E          .       CABFD
 *   12        E          .       CABFD
 *   13        E          .       CABFD
 *   14        E          .       CABFD
 *   15        .          .       CABFDE
 * Each row represents one second of time. The Second column identifies
 * how many seconds have passed as of the beginning of that second.
 * Each worker column shows the step that worker is currently doing
 * (or . if they are idle). The Done column shows completed steps.
 *
 * Note that the order of the steps has changed; this is because steps
 * now take time to finish and multiple workers can begin multiple steps simultaneously.
 *
 * In this example, it would take 15 seconds for two workers to complete these steps.
 *
 * With 5 workers and the 60+ second step durations described above, how long will it take to complete all of the steps?
 */

const calculateStepLength = (baseStepDuration: number, step: string): number => baseStepDuration + (step.charCodeAt(0) - 64);

const orderSteps = (inputs: string[]): { letter: string, parents: string[] }[] => {
	const dependencyMap = inputs.reduce((map, input) => {
		const [, parent, , , , , , letter] = input.split(' ');

		const item = map.get(letter);

		if (item) {
			map.set(letter, { letter, parents: [...item.parents, parent].sort() });
		} else {
			map.set(letter, { letter, parents: [parent] });
		}

		if (!map.has(parent)) {
			map.set(parent, { letter: parent, parents: [] });
		}

		return map;
	}, new Map<string, { letter: string, parents: string[] }>());

	const dependencyArray = Array.from(dependencyMap.values()).sort((a, b) => a.letter.localeCompare(b.letter));

	const depOrder: { letter: string, parents: string[] }[] = [];
	const depLetterOrder: string[] = [];

	while (dependencyArray.length > 0) {
		for (const { letter, parents } of dependencyArray) {
			const dependenciesResolved = parents.every((e) => depLetterOrder.includes(e));

			if (dependenciesResolved) {
				depOrder.push({ letter, parents });
				depLetterOrder.push(letter);

				const index = dependencyArray.findIndex((e) => e.letter === letter);
				dependencyArray.splice(index, 1);

				break;
			}
		}
	}

	return depOrder;
};

interface ProductionItem {
	done: string[];
	second: number;
	workers: { part: string, doneSecond?: number }[];
}

export const challenge = (inputs: string[], baseStepDuration: number, numberOfExtraWorkers: number): number => {
	const steps = orderSteps(inputs);

	const initialWorkers: { part: string, doneSecond?: number }[] = [];
	for (let i = 0; i <= numberOfExtraWorkers; i++) {
		initialWorkers.push({ part: '.' });
	}

	const production: ProductionItem[] = [
		{
			done: [],
			second: -1,
			workers: initialWorkers
		}
	];

	while (steps.length > 0) {
		const previousProductionItem = production[production.length - 1];

		const second = previousProductionItem.second + 1;
		const done: string[] = [...previousProductionItem.done];
		const workers = previousProductionItem.workers.map((worker) => {
			if (worker.doneSecond === second) {
				done.push(worker.part);

				return {
					part: '.'
				};
			}

			return worker;
		});

		const test = workers.map((worker) => {
			if (worker.part === '.') {
				if (steps.length === 0) {
					return {
						part: '.'
					};
				}

				const nextOrders = steps.filter((s) => s.parents.every((e) => done.includes(e)));

				if (nextOrders.length >= 1) {
					const order = nextOrders[0];
					steps.splice(steps.findIndex((e) => e.letter === order.letter), 1);

					return {
						doneSecond: second + calculateStepLength(baseStepDuration, order.letter),
						part: order.letter
					};
				}

				return {
					part: '.'
				};
			}

			return worker;
		});

		const productionItem: ProductionItem = {
			done,
			second,
			workers: test,
		};

		production.push(productionItem);
	}

	const lastProduction = production[production.length - 1];
	const lastDoneSecond = lastProduction.workers.reduce((high, worker) => {
		if (worker.doneSecond && high < worker.doneSecond) {
			return worker.doneSecond;
		}

		return high;
	}, 0);

	return lastDoneSecond;
};
