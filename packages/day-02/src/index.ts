console.log('Advent of Code - Day 02');

const inputs = [
	'pbopcmjeizuhxlqnwasfgtycdm', 'pjokrmjeizuhxlqnfasfguycdv', 'pbokrpjejkuhxlqnwasfgtycdv', 'sbokrmjeizuhxaqnwastgtycdv',
	'pbokrmjeizuhxljnnasfgtycnv', 'pbokrqjeizuhxbqndasfgtycdv', 'bbokrmjeizuhxlqnwasfgtycfj', 'pbokrmjeisuhxlqnwasfzdycdv',
	'pbokrmjefxuhxlqnwasfptycdv', 'pqokrmjenzuhxlqnwasfgtygdv', 'pbokrmjeizunklqnwassgtycdv', 'pbokrmjeizghxvqnkasfgtycdv',
	'lboirmjeizuhxlqnwfsfgtycdv', 'pbofrmjeizuhalqnwasfgtyddv', 'pbokrmjeiguhplqcwasfgtycdv', 'pbokrmjeizzhxlqnwavfgtyctv',
	'pbokrmjeizuhxlqnwaefgtycaj', 'pbokzmjedzuhxlqnwasfgtlcdv', 'pnokrmjegzuhxlbnwasfgtycdv', 'pbojrmjeizuhtlqniasfgtycdv',
	'pbokxmiefzuhxlqnwasfgtycdv', 'pbokrmoeizuhxlqnpasngtycdv', 'abokrmjeezuhxlqnwasfdtycdv', 'pbokrmyeizugxlqnwasfgtycda',
	'pbokdmjeizuhxlqnuatfgtycdv', 'psokrmjeiauhxlqnwasxgtycdv', 'pbokrmjeizuhxlqzwasfgtyzdy', 'pboktmjeizuhxnqndasfgtycdv',
	'pbodrrjeizuhxlqnwasfgtycdb', 'pbokrmjekzuhxljnwasfgtycuv', 'pbokrmjnizuhllqnwawfgtycdv', 'prmkrmjeiwuhxlqnwasfgtycdv',
	'pbokrmjeizkhxlenwajfgtycdv', 'pbofrmjeizuixlqnwasfgoycdv', 'gbhkrmjeizuhclqnwasfgtycdv', 'pbokrmweizuwxlqnwasfgtycyv',
	'pbukrmjeizuhxlqnwasfgqhcdv', 'pbokxmjeizuhxlqnwasfgtecdu', 'pbokomjeizuhrlqnfasfgtycdv', 'bbokymjeizuhxlqnpasfgtycdv',
	'pbodrmjeizuhxlqnwadfgtgcdv', 'zbokrljeipuhxlqnwasfgtycdv', 'pboermjeizuxxlqnwasfgtpcdv', 'pqbkrmjeizuhxlqnjasfgtycdv',
	'pbokrmfeizuhxvqgwasfgtycdv', 'pbokrmjeizuhzlqnjasfdtycdv', 'rbofrmjeizkhxlqnwasfgtycdv', 'pbokrmseizubxlqnwasfgtycdy',
	'pbocrmjeizuhxaqnwasfgtycda', 'pbokrmjeizuhxlqndakfgtscdv', 'pbokrrjeizuhxlqnwgshgtycdv', 'pbokrajeizuhxpqnwasrgtycdv',
	'pbokrbjeizubxlqnwssfgtycdv', 'pbokemjhizuhxlqnwazfgtycdv', 'pbokrmjeizuhxlqntisfgtyrdv', 'pbokrmjwinuhxlqnwasfgkycdv',
	'pypkrmjeizuhxlqtwasfgtycdv', 'pbokrmjeizuhxlqniasfrpycdv', 'pbokomjeizuhxlqnwasfgtgcdw', 'pbokrmjeizusplqnwxsfgtycdv',
	'pbodrmueizxhxlqnwasfgtycdv', 'pbokwmjeizurxlqnwasfgtycdi', 'pbohrmjejzuhxlqnwasfgtycgv', 'pbokrmtqizuhxlqnwasfitycdv',
	'ptozrmjeizuhylqnwasfgtycdv', 'pbokrmjtizuhxlqfwasfgtykdv', 'pbokrmpeizuhxnqmwasfgtycdv', 'pbokrmjeizujxlynwtsfgtycdv',
	'dbokrmjeizuhxlqnwasngticdv', 'pbskrmjeizuhxlqnrasfttycdv', 'pbwkrmjerzuhxlqnwaslgtycdv', 'pboyrmceizuhxlqnwssfgtycdv',
	'pbokpmjeizchxlqngasfgtycdv', 'pbokrmjenzuhxlqnwcsfgxycdv', 'pbxkrmjeizuhxlqnwadfgtyckv', 'pbqkrmjeizuhxlqnwasdgdycdv',
	'pbokrmoeizdhxlqnwasfgtycqv', 'pbokrmjejzuhxlqnwksfgtycwv', 'pbfkrmjeieuhxlnnwasfgtycdv', 'pbokrmjeiuuhxlqnpalfgtycdv',
	'pbokrmjeizunxyqnwasfgtdcdv', 'pbokrmjeazuhxrqnwasogtycdv', 'pbmkrmjeizuhxlqnwaufgtycdj', 'xbskrmjeipuhxlqnwasfgtycdv',
	'tbokrujlizuhxlqnwasfgtycdv', 'xbokvmjeizuhxyqnwasfgtycdv', 'pbnhrmheizuhxlqnwasfgtycdv', 'pboorajrizuhxlqnwasfgtycdv',
	'pbokrmjeizuhxminwusfgtycdv', 'pboqrmjeizuhxlqnwaslgtscdv', 'pgokrdjeizuhxlnnwasfgtycdv', 'pbokrmjeizuhxiqnwasvttycdv',
	'pbokrmwnizuhzlqnwasfgtycdv', 'pbokrmjlizmhjlqnwasfgtycdv', 'pbwkrmjeizohxlqnwasfgtyzdv', 'pbykrmjmizwhxlqnmasfgtycdv',
	'pbokrmjzizuhxeqnwasfgtpcdv', 'pbokrmjewzuhxzqnwasfgtybdv', 'pbokrmjeimupxlonwasfgtycdv', 'pbokrmjvizuhxlqnuasfgtycqv',
	'pbokrmjeizjdxlqnwasfetycdv', 'pbofrmjeizurxlqnwasfztycdv', 'pbozrmjeizuhxxqpwasfgtycdv', 'pbovtmjeizuhxlqnwapfgtycdv',
	'prokrmjeuzuhxlqnwasfgtycqv', 'ubokrmjeizuhxljnwasfgtdcdv', 'pboknmjepzuhxlqnwasogtycdv', 'pbokrmjaizuaxljnwasfgtycdv',
	'pbdkrcjeizuhxlqnwasfgtvcdv', 'pbokymjeizuhxlqnwaxfgtyfdv', 'pbokrmjaizuhxlqnfasfgtyodv', 'pdekrmmeizuhxlqnwasfgtycdv',
	'rbokrmjeizuuxlqnwasfgtycdj', 'pbokrmneifuhxlqiwasfgtycdv', 'pbokrmjeizlbxlunwasfgtycdv', 'pbokrmjewzuhxxqnwasfgoycdv',
	'pbokrmjeizuhxlqtwasfgtzcdo', 'pbokrmkeizzhxlqnwasfgtycmv', 'pbokrmjeiquhxlqnywsfgtycdv', 'xbokrmjeizjhxlqdwasfgtycdv',
	'pbokrmjeizahxzqnzasfgtycdv', 'pbokrmjeizuhxmqmwasfgtytdv', 'pbokrmheiluhxlqnwasfgoycdv', 'rbokrmjeizuhxlqnwaslgtycqv',
	'pbbkzmjeizuhxvqnwasfgtycdv', 'pbokrmjeizudxlznwgsfgtycdv', 'pbokemjeizuhxlqnwascgtysdv', 'pbokrmjdizuexlgnwasfgtycdv',
	'pbokzmjeizuhxlqnwnsfggycdv', 'pbokrmjeizuhxtqnwasfgiycdy', 'bbokrmjeizuhclunwasfgtycdv', 'pbtkrmjeieuhxlqnwasfgtycrv',
	'pbokrmjeizutxlbnwasngtycdv', 'pbokrmjevzumxlqnwasfgtyydv', 'pbokrmjsizuhxlqowasfgtycyv', 'pbssrmjeizuhxlqbwasfgtycdv',
	'pbokrmjeizuhflqnwxsfstycdv', 'pbokimjeizuhxlqnwasfgtywdm', 'pbokrmjbizuhxlqdwasfgtygdv', 'pbokrmheizuhxlqxwasfgtycnv',
	'poakrmjeizuhylqnwasfgtycdv', 'vbrkrmjeizuhxlqnwaszgtycdv', 'pbokrmjeizuhxiqnudsfgtycdv', 'pbokrldeizuhxlqnwasjgtycdv',
	'pbokrmjeizjhflqnwasfgtymdv', 'pbokrmjeizuhxliawasfgtvcdv', 'pbokrmjeisuhtoqnwasfgtycdv', 'nbokrijeizuhxlqnwasfgtycdh',
	'pbokrmjeizrhxlqnwxsfztycdv', 'pbotrmjeizuhxlcnwasfgtyvdv', 'pbokrmjewzuhxlquwasfgtjcdv', 'pbosrmjeipuhxlqnwasfgtvcdv',
	'pbokrmjebzurxlunwasfgtycdv', 'pbogimieizuhxlqnwasfgtycdv', 'pbokrmjeizihxlqnwasagtyzdv', 'pbokrmjeizuoxlqnausfgtycdv',
	'pbokrmjeizuhxlqnwashgbjcdv', 'pbokrdjeizuhxlnnwasfgoycdv', 'pbokrzjtizlhxlqnwasfgtycdv', 'peokrmjexzuhxlqnwasfgoycdv',
	'cboprmjeizuhxlqnwasfgfycdv', 'pbitrmjeizjhxlqnwasfgtycdv', 'pbourmjeizuhxldnwjsfgtycdv', 'pboivmjeizuhxlqnwasvgtycdv',
	'pbokrmjeiduhxaqnqasfgtycdv', 'pbokicjeiwuhxlqnwasfgtycdv', 'pbokrmmeizulxlqnwasfgtyvdv', 'pbokrmjeieuhxlqnaapfgtycdv',
	'pbokxmjeiuuhxlqnwasfgtyqdv', 'pbokrmjeizuhxgqniaslgtycdv', 'pbokrmjeizuuxlqnwisfgtyckv', 'pbovlmjepzuhxlqnwasfgtycdv',
	'pbokrmjeizuhxlqdwaqfgtycdj', 'pbztrvjeizuhxlqnwasfgtycdv', 'pbokrmjeizuholunwasfptycdv', 'pbokrmjeizudxlqnwusfgtycqv',
	'nbokrmjzizmhxlqnwasfgtycdv', 'pbokrmjeypunxlqnwasfgtycdv', 'pbokrjjxizuhxlqnwasfgtyddv', 'pbokrmjeizuhilqnwiufgtycdv',
	'pbokrmjeizuhxtqowasfgfycdv', 'qbokrgjeizuhxlqnwasfgtycdx', 'pvoarmjeizuhxlqnwasfgtfcdv', 'pbokrmjjizuhxlqnwasfggyczv',
	'pbtkrmjeizuhnlqncasfgtycdv', 'pbokrmjeizuzxlqnwasfgtyjnv', 'jmokrmzeizuhxlqnwasfgtycdv', 'pbykrmjmizwhxlqnwasfgtycdv',
	'nbokrmjeizlhxlqnwasfgtecdv', 'pbokrmjeizuhxlqhwasrgrycdv', 'pbokrmjeiruhxlqnwasfgtnedv', 'pbokrmjeizohxlznwasfgtycuv',
	'paokrmjdizuhxlqnwasfktycdv', 'pbokrmjetzutxlqnwasfntycdv', 'pboyrmjeizuhxlqnwasfgtetdv', 'pbokgujeizuhxlqwwasfgtycdv',
	'pbokrifeizshxlqnwasfgtycdv', 'sbokrmjeizfhxlqnaasfgtycdv', 'pbokrmjeizuhxlqpwrsfgfycdv', 'pbokxmjeikuhxlqnwasfctycdv',
	'fbokrmjhizuhxlqnmasfgtycdv', 'pbekamjeizuhxlqnwaxfgtycdv', 'pboksmpeizuhxlqnwasfgtyclv', 'pbokrmjeizrhxdqnwasfgzycdv',
	'pbogrmxeizurxlqnwasfgtycdv', 'pbokrmjeieuhxlqnwqsfgtychv', 'vbokrmjeizuhxlqnwabfgtycdq', 'lbokrmjeizupxlqvwasfgtycdv',
	'pbokrmjeizuhglqnuasfgtucdv', 'hbokrmjeizuhelqnwasfgtrcdv', 'pbokrmweizuhxlqnwhsfgtyvdv', 'pbokrmjeizuhxrqnwasfvtccdv',
	'pbokrmneizuhxlwnyasfgtycdv', 'ybokymjeqzuhxlqnwasfgtycdv', 'pbousmjeizuhxlqswasfgtycdv', 'pblkimjeizuhxlqnwacfgtycdv',
	'psokrmjeizuhxlqnwasfgbpcdv', 'peokrwjeizghxlqnwasfgtycdv', 'pbokrmjeizudxlqnwzsfrtycdv', 'pbotrmjezzxhxlqnwasfgtycdv',
	'pkokrmjezzuhxlqnwasfgtycdh', 'pbokrmleizuhxlnnwasfgtyndv', 'pboxwmjeituhxlqnwasfgtycdv', 'pbokrmjeizoczlqnwasfgtycdv',
	'pbokomjeizuhxlqnwhsfgtybdv', 'pbhwrmjeizuhxlqnwasfgpycdv', 'pbwkrmjeizuhxeqnwasfgtyidv', 'pbokrmjeizuhxlqnjasfgmicdv',
	'tbokrgjeizuhxlqhwasfgtycdv', 'pbolrqjeizuhxlqnhasfgtycdv', 'pbogrhjeizbhxlqnwasfgtycdv', 'pbokrmjeizghxlqnwashgtycdx',
	'pbokrmjeizuhrlqnwasfgthcrv', 'pbokrmjeizuhxlqnwfsngtacdv', 'pbokrmxeizuhxlqnwasfotyctv', 'pbokrmjeizuhxlqnwcsfgnocdv',
	'pnokbmjeizuhxlqnwasfgtscdv', 'pbowrmjeuzuhxlqnwasfgtycdw', 'pbokrmjeiyuhxlqnwasqgtvcdv', 'pbokrmjeivuhxkpnwasfgtycdv',
	'pbokomjeizuhxlqnwasfgtylav', 'pbdkrmjeizuhxlgnwjsfgtycdv', 'pbokrmjeizuaxxqnwasfytycdv', 'pbokrmjerzuhxlqnwasfgtscdk',
	'pbokrmzerzuhxlqnwasfntycdv', 'pbokrmjeizumxdqnwasfgtyckv', 'pbtkrmjeizrhxlqnwasfgtjcdv', 'pbmkrmjuizuhxlqnwasfgtytdv',
	'pbokpmjeizuhxlqnwastgtzcdv', 'kbokrmjeizuhxlqnwasfgzjcdv'
];

/**
 *  * --- Day 2: Inventory Management System ---
 *
 * You stop falling through time, catch your breath, and check the screen on the device. "Destination reached.
 * Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.
 *
 * Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people
 * have chimneys, maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new
 * kind of suit that would let him fit through tight spaces like that. But, I heard that a few days ago, they lost
 * the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"
 *
 * "Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together,
 * so the box IDs should be similar. Too bad it would take forever to search the warehouse for two similar box IDs..."
 * They walk too far away to hear any more.
 *
 * Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered
 * - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).
 *
 * To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID
 * containing exactly two of any letter and then separately counting those with exactly three of any letter.
 * You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.
 *
 * For example, if you see the following box IDs:
 *
 * abcdef contains no letters that appear exactly two or three times.
 * bababc contains two a and three b, so it counts for both.
 * abbcde contains two b, but no letter appears exactly three times.
 * abcccd contains three c, but no letter appears exactly two times.
 * aabcdd contains two a and two d, but it only counts once.
 * abcdee contains two e.
 * ababab contains three a and three b, but it only counts once.
 * Of these box IDs, four of them contain a letter which appears exactly twice,
 * and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.
 *
 * What is the checksum for your list of box IDs?
 */

function calculateChecksum(words: string[]): number {
	const wordValueMap = new Map<string, number>([
		['twice', 0],
		['three', 0]
	]);

	for (const word of words) {
		const letterMap = new Map<string, number>([]);

		for (const letter of word) {
			const letterCount = letterMap.get(letter);

			if (letterCount) {
				letterMap.set(letter, letterCount + 1);
			} else {
				letterMap.set(letter, 1);
			}
		}

		const valueMap = new Map<string, boolean>([
			['twice', false],
			['three', false]
		]);

		for (const count of letterMap.values()) {
			if (count === 2) {
				valueMap.set('twice', true);
			} else if (count === 3) {
				valueMap.set('three', true);
			}
		}

		for (const [key, value] of valueMap.entries()) {
			if (value) {
				wordValueMap.set(key, (wordValueMap.get(key) as number) + 1);
			}
		}
	}

	return Array.from(wordValueMap.values()).reduce((sum, multiplier) => sum * multiplier, 1);
}

const testInputs = [
	'abcdef',
	'bababc',
	'abbcde',
	'abcccd',
	'aabcdd',
	'abcdee',
	'ababab',
];
const testInputsResult = calculateChecksum(testInputs);
console.log('Reuslt for testInputs: ', testInputsResult);

const result = calculateChecksum(inputs);
console.log('Reuslt for inputs: ', result); // Corrent anszer: 6000

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

function calculateCommonLetterParts(words: string[]): string {
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
}

const testInputs2 = [
	'abcde',
	'fghij',
	'klmno',
	'pqrst',
	'fguij',
	'axcye',
	'wvxyz',
];
const testInputsResult2 = calculateCommonLetterParts(testInputs2);
console.log('Reuslt for testInputs2: ', testInputsResult2);

const result2 = calculateCommonLetterParts(inputs);
console.log('Reuslt2 for inputs: ', result2); // Correct answer: pbykrmjmizwhxlqnasfgtycdv
