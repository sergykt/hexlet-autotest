import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');

assert.deepStrictEqual({}, {});
assert.deepStrictEqual({ key: 'value' }, { key: 'value' });

assert.notStrictEqual('hello', 'world');
assert.notDeepStrictEqual({ a: 1 }, { a: '1' });

console.log('Все тесты пройдены!');