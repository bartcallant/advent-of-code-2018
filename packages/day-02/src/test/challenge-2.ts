import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2([
		'abcde',
		'fghij',
		'klmno',
		'pqrst',
		'fguij',
		'axcye',
		'wvxyz',
	]), 'fgij');
});

test('results', async (t) => {
	t.is(challenge2(getStringInput()), 'pbykrmjmizwhxlqnasfgtycdv');
});
