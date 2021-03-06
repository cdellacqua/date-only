import { DateOnly } from "../src/index";

beforeAll(() => {
	console.error = jest.fn();
});

describe('constructors', function () {
	it('constructs using the default constructor', () => {
		const now = new Date();
		expect(new DateOnly().toString()).toEqual(`${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${(now.getDate()).toString().padStart(2, '0')}`);
	});
	it('constructs using a Date', () => {
		const now = new Date();
		expect(new DateOnly(now).toString()).toEqual(`${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${(now.getDate()).toString().padStart(2, '0')}`);
	});
	it('constructs using a string', () => {
		expect(new DateOnly('2020-01-01').toString()).toEqual('2020-01-01');
	});
	it('constructs using an invalid string', () => {
		expect(() => new DateOnly('2020-1-01')).toThrow();
	});
	it('constructs passing only the year', () => {
		const now = new Date();
		expect(new DateOnly(2020).toString()).toEqual(`2020-${(now.getMonth() + 1).toString().padStart(2, '0')}-${(now.getDate()).toString().padStart(2, '0')}`);
	});
	it('constructs passing only the year and the month', () => {
		const now = new Date();
		expect(new DateOnly(2020, 1).toString()).toEqual(`2020-02-${(now.getDate()).toString().padStart(2, '0')}`);
	});
	it('constructs passing all the arguments', () => {
		expect(new DateOnly(2020, 1, 10).toString()).toEqual('2020-02-10');
	});
	it('constructs cloning an existing DateOnly', () => {
		expect(new DateOnly(2020, 1, 10).clone().toString()).toEqual('2020-02-10');
	});
});

describe('converts to DateOnly', function () {
	it('string to DateOnly', () => {
		expect(DateOnly.fromString('2020-01-10')).toEqual(new DateOnly(2020, 0, 10));
	});
	it('invalid string to DateOnly', () => {
		expect(() => DateOnly.fromString('2020-1-10')).toThrow();
	});
	it('Date to DateOnly', () => {
		expect(DateOnly.fromDate(new Date(2020, 1, 10)).toDate()).toEqual(new Date(2020, 1, 10));
	});
});

describe('converts from DateOnly', function () {
	it('DateOnly to string', () => {
		expect(DateOnly.fromString('2020-01-10').toString()).toEqual('2020-01-10');
	});
	it('DateOnly to JSON representation', () => {
		expect(JSON.stringify(DateOnly.fromString('2020-01-10'))).toEqual('"2020-01-10"');
	});
	it('DateOnly to Date', () => {
		expect(new DateOnly(2020, 1, 10).toDate()).toEqual(new Date(2020, 1, 10));
	});
});

describe('equality', function () {
	it('DateOnly equals DateOnly', () => {
		expect(DateOnly.fromString('2020-01-10').equals(new DateOnly(2020, 0, 10))).toBeTruthy();
	});
	it('DateOnly equals string', () => {
		expect(DateOnly.fromString('2020-01-10').equals('2020-01-10')).toBeTruthy();
	});
});

describe('accessor methods', function () {
	let dateOnly = new DateOnly(2020, 0, 1);
	it('tests getters', () => {
		expect(dateOnly.year).toEqual(2020);
		expect(dateOnly.month).toEqual(0);
		expect(dateOnly.date).toEqual(1);
		expect(dateOnly.getTime()).toEqual(new Date(2020, 0, 1).getTime());
		expect(dateOnly.getDay()).toEqual(new Date(2020, 0, 1).getDay());
	});
	it('tests setters', () => {
		dateOnly.year++;
		expect(dateOnly.year).toEqual(2021);
		dateOnly.month++;
		expect(dateOnly.month).toEqual(1);
		dateOnly.date++;
		expect(dateOnly.date).toEqual(2);
	});
	it('tests setters with overflows', () => {
		let dateOnly = new DateOnly(2020, 0, 31);
		dateOnly.month += 1;
		expect(dateOnly.month).toEqual(2);
		dateOnly.date -= 2;
		expect(dateOnly.date).toEqual(29);
	});
});


describe('add methods', function () {
	let dateOnly = new DateOnly(2020, 0, 1);
	it('adds days', () => {
		expect(dateOnly.addDays(10).toString()).toEqual('2020-01-11');
	});
	it('adds months', () => {
		expect(dateOnly.addMonths(2).toString()).toEqual('2020-03-01');
	});
	it('adds years', () => {
		expect(dateOnly.addYears(5).toString()).toEqual('2025-01-01');
	});
});


describe('sub methods', function () {
	let dateOnly = new DateOnly(2020, 3, 15);
	it('subs days', () => {
		expect(dateOnly.subDays(10).toString()).toEqual('2020-04-05');
	});
	it('subs months', () => {
		expect(dateOnly.subMonths(2).toString()).toEqual('2020-02-15');
	});
	it('subs years', () => {
		expect(dateOnly.subYears(5).toString()).toEqual('2015-04-15');
	});
});

describe('compare methods', function () {
	let dateOnly = new DateOnly(2020, 3, 15);
	it('checks equality', () => {
		expect(dateOnly.equals('2020-04-15')).toBeTruthy();
		expect(dateOnly.equals(new DateOnly('2020-04-15'))).toBeTruthy();
		expect(dateOnly.equals(new DateOnly('2020-04-13'))).toBeFalsy();
		expect(DateOnly.equals(dateOnly, '2020-04-15')).toBeTruthy();
		expect(DateOnly.equals(dateOnly.toString(), new DateOnly('2020-04-15'))).toBeTruthy();
		expect(DateOnly.equals(dateOnly.toString(), new DateOnly('2020-04-13').toString())).toBeFalsy();
	});
	it('compares', () => {
		expect(dateOnly.compare('2020-09-01')).toBeLessThan(0);
		expect(dateOnly.compare(new DateOnly('2020-09-01'))).toBeLessThan(0);
		expect(dateOnly.compare('2020-04-15')).toEqual(0);
		expect(DateOnly.compare(dateOnly, '2020-09-01')).toBeLessThan(0);
		expect(DateOnly.compare(dateOnly.toString(), new DateOnly('2020-08-01'))).toBeLessThan(0);
		expect(DateOnly.compare(dateOnly, '2020-04-15')).toEqual(0);
	});
});
