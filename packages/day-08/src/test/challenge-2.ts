import test from 'ava';

import { getChallengeInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2('2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2'.split(' ')), 66);
});

test('results', async (t) => {
	t.is(challenge2(getChallengeInput()), 0);
});
