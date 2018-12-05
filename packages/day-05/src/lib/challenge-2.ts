/**
 * --- Part Two ---
 *
 * Time to improve the polymer.
 *
 * One of the unit types is causing problems; it's preventing the polymer from collapsing as much as it should.
 * Your goal is to figure out which unit type is causing the most problems, remove all instances of it (regardless
 * of polarity), fully react the remaining polymer, and measure its length.
 *
 * For example, again using the polymer dabAcCaCBAcCcaDA from above:
 *
 * Removing all A/a units produces dbcCCBcCcD. Fully reacting this polymer produces dbCBcD, which has length 6.
 * Removing all B/b units produces daAcCaCAcCcaDA. Fully reacting this polymer produces daCAcaDA, which has length 8.
 * Removing all C/c units produces dabAaBAaDA. Fully reacting this polymer produces daDA, which has length 4.
 * Removing all D/d units produces abAcCaCBAcCcaA. Fully reacting this polymer produces abCBAc, which has length 6.
 * In this example, removing all C/c units was best, producing the answer 4.
 *
 * What is the length of the shortest polymer you can produce by removing all units of exactly one type and fully reacting the result?
 */

const calculateLength = (inputString: string, excludeChar: string): number => {
	const letters: string[] = [];

	for (const currentLetter of inputString) {
		if (currentLetter.toLowerCase() === excludeChar.toLowerCase()) {
			continue;
		}

		const previousLetter = letters.pop();

		if (!previousLetter) {
			letters.push(currentLetter);

			continue;
		}

		const previousIndex = previousLetter.charCodeAt(0);
		const currentIndex = currentLetter.charCodeAt(0);

		const indexResult = previousIndex - currentIndex;

		if (!(indexResult === 32 || indexResult === -32)) {
			letters.push(previousLetter);
			letters.push(currentLetter);
		}
	}

	return letters.length;
};

export const challenge = (input: string): number => {
	const chars = new Set([...input]);

	const values = Array.from(chars.values()).map((char) => calculateLength(input, char));

	const res = values.reduce((low, curr) => curr < low ? curr : low, 10000000);

	return res;
};
