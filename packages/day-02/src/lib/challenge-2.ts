/**
 * --- Part Two ---
 *
 * Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.
 *
 * The boxes will have IDs which differ by exactly one character at the same position in both strings.
 * For example, given the following box IDs:
 *
 * abcde
 * fghij
 * klmno
 * pqrst
 * fguij
 * axcye
 * wvxyz
 * The IDs abcde and axcye are close, but they differ by two characters (the second and fourth).
 * However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.
 *
 * What letters are common between the two correct box IDs? (In the example above,
 * this is found by removing the differing character from either ID, producing fgij.)
 */

export const challenge = (words: string[]): string => {
	for (const word of words) {
		for (const w of words) {
			if (w === word) {
				continue;
			}

			let numberOfIncludes = 0;
			let diffLetterIndex = -1;

			for (let i = 0; i < w.length; i++) {
				if (word[i] === w[i]) {
					numberOfIncludes++;
				} else {
					diffLetterIndex = i;
				}
			}

			if (numberOfIncludes >= (word.length - 1)) {
				return Array.from(word).filter((_, i) => i !== diffLetterIndex).join('');
			}
		}
	}

	return '';
};
