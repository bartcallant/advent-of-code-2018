import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge1 } from '../lib';

test('test results', (t) => {
	t.is(challenge1([
		'abcdef',
		'bababc',
		'abbcde',
		'abcccd',
		'aabcdd',
		'abcdee',
		'ababab',
	]), 12);
});

test('results', async (t) => {
	t.is(challenge1(getStringInput()), 6000);
});
