import test from 'ava';

import { getChallengeInput } from './fixtures/utils';

import { challenge1 } from '../lib';

test('test results', (t) => {
	t.is(challenge1('2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2'.split(' ')), 138);
});

test('results', async (t) => {
	t.is(challenge1(getChallengeInput()), 36027);
});
