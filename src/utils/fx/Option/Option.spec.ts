import { pipe } from '@fxts/core';
import * as O from './Option';

describe('O.isSome', () => {
  it('returns true if value is Option.Some', () => {
    expect(O.isSome(O.some('puppy'))).toBe(true);
  });

  it('returns false if value is Option.None', () => {
    expect(O.isSome(O.none())).toBe(false);
  });

  it('returns false if value is null', () => {
    expect(O.isSome(null)).toBe(false);
  });

  it('returns false if value is undefined', () => {
    expect(O.isSome(undefined)).toBe(false);
  });
});

describe('O.isNone', () => {
  it('returns true for null value', () => {
    expect(O.isNone(null)).toBe(true);
  });

  it('returns true for undefined value', () => {
    expect(O.isNone(undefined)).toBe(true);
  });

  it('returns false for non-null value', () => {
    expect(O.isNone('puppy')).toBe(false);
  });
});

describe('O.getOrElse', () => {
  it('passes nil values to given fallback', () => {
    expect(pipe(null, O.getOrElse(1))).toBe(1);
    expect(pipe(undefined, O.getOrElse(42))).toBe(42);
  });

  it('passes non-nil values as it is', () => {
    expect(pipe('hello', O.getOrElse('world'))).toBe('hello');
    expect(pipe([], O.getOrElse('...'))).toEqual([]);
  });
});

describe('O.isStrictEqual', () => {
  it('returns strict sameness when both value is non-nil value', () => {
    const home = ['cat', 'puppy'];
    const office = ['me'];

    expect(O.isStrictEqual(home, home)).toBeTruthy();
    expect(O.isStrictEqual(office, ['me'])).toBeFalsy();
    expect(O.isStrictEqual(20, 5 * 4)).toBeTruthy();
  });

  it('returns false when either value is nil value', () => {
    expect(O.isStrictEqual(null, 'non-null')).toBeFalsy();
    expect(O.isStrictEqual(true, null)).toBeFalsy();
    expect(O.isStrictEqual(undefined, null)).toBeFalsy();
  });
});
