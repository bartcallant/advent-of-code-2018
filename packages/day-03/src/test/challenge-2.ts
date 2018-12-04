import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2([
		'#1 @ 1,3: 4x4',
		'#2 @ 3,1: 4x4',
		'#3 @ 5,5: 2x2'
	]), '3');
});

test('results', async (t) => {
	t.is(challenge2(getStringInput()), '1178');
});
