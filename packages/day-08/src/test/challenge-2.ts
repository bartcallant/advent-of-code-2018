import test from 'ava';

import { getChallengeInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2([]), 0);
});

test('results', async (t) => {
	t.is(challenge2(getChallengeInput()), 0);
});
