import { SerializableError } from '@cdellacqua/serializable-error';

/**
 * A DateOnly class for JavaScript
 */
export class DateOnly {
	/** regex that matches the format YYYY-MM-DD */
	static regex = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;

	/** Instance year */
	_year: number;

	/** Instance month */
	_month: number;

	/** Instance date */
	_date: number;

	get year() { return this._year; }
	get month() { return this._month; }
	get date() { return this._date; }

	set year(y: number) {
		const curr = this.toDate();
		curr.setFullYear(y);
		this._year = curr.getFullYear();
		this._month = curr.getMonth();
		this._date = curr.getDate();
	}
	set month(m: number) {
		const curr = this.toDate();
		curr.setMonth(m);
		this._year = curr.getFullYear();
		this._month = curr.getMonth();
		this._date = curr.getDate();
	}
	set date(d: number) {
		const curr = this.toDate();
		curr.setDate(d);
		this._year = curr.getFullYear();
		this._month = curr.getMonth();
		this._date = curr.getDate();
	}

	/**
	 * Instantiates a DateOnly object.
	 * If no argument is provided, the DateOnly instance will reflect the current date.
	 * If some arguments are not provided, the missing one will be filled using the current date values.
	 * @param year year
	 * @param month month
	 * @param date date
	 */
	constructor(
		year?: number,
		month?: number,
		date?: number,
	) {
		const nativeDate = new Date();
		if (year !== null && year !== undefined) {
			nativeDate.setFullYear(year);
		}
		if (month !== null && month !== undefined) {
			nativeDate.setMonth(month);
		}
		if (date !== null && date !== undefined) {
			nativeDate.setDate(date);
		}
		this._year = nativeDate.getFullYear();
		this._month = nativeDate.getMonth();
		this._date = nativeDate.getDate();
	}

	/**
	 * Converts a native Date into a DateOnly object
	 * @param date the native Date object
	 */
	static fromDate(date: Date): DateOnly {
		return new DateOnly(date.getFullYear(), date.getMonth(), date.getDate());
	}

	/**
	 * Clones the current instance
	 */
	clone(): DateOnly {
		return new DateOnly(this._year, this._month, this._date);
	}

	/**
	 * Gets the timestamp of the current instance
	 */
	getTime(): number {
		return this.toDate().getTime();
	}

	/**
	 * Gets the day of week the current instance
	 */
	getDay(): number {
		return this.toDate().getDay();
	}

	/**
	 * Returns a new DateOnly, its date will be incremented (or decremented)
	 * by the given amount with respect to the current instance
	 * @param n the number of days to add
	 */
	addDays(n: number): DateOnly {
		const curr = this.toDate();
		curr.setDate(curr.getDate() + n);
		return DateOnly.fromDate(curr);
	}

	/**
	 * Returns a new DateOnly, its month will be incremented (or decremented)
	 * by the given amount with respect to the current instance
	 * @param n the number of days to add
	 */
	addMonths(n: number): DateOnly {
		const curr = this.toDate();
		curr.setMonth(curr.getMonth() + n);
		return DateOnly.fromDate(curr);
	}

	/**
	 * Returns a new DateOnly, its year will be incremented (or decremented)
	 * by the given amount with respect to the current instance
	 * @param n the number of days to add
	 */
	addYears(n: number): DateOnly {
		const curr = this.toDate();
		curr.setFullYear(curr.getFullYear() + n);
		return DateOnly.fromDate(curr);
	}

	/**
	 * Instantiates a DateOnly object given a date string
	 * @param str a date string matching the format YYYY-MM-DD
	 */
	static fromString(str: string): DateOnly {
		const matches = str.match(DateOnly.regex);

		if (!matches) {
			throw new SerializableError(`invalid date format ${str}`);
		}

		return new DateOnly(
			Number(matches[1]),
			Number(matches[2]) - 1,
			Number(matches[3]),
		);
	}

	/**
	 * Returns a string representing the current DateOnly, using the format YYYY-MM-DD
	 */
	toString(): string {
		return `${this._year}-${(this._month + 1).toString().padStart(2, '0')}-${(this._date).toString().padStart(2, '0')}`;
	}

	/**
	 * Returns a string representing the current DateOnly, using the format YYYY-MM-DD
	 */
	toJSON(): string {
		return this.toString();
	}

	/**
	 * Converts the current DateOnly instance into a native Date object
	 */
	toDate(): Date {
		return new Date(this._year, this._month, this._date);
	}

	/**
	 * Checks whether two DateOnly instances are equals
	 * @param that the other DateOnly instance or its string representation
	 */
	equals(that: DateOnly|string): boolean {
		if (that instanceof DateOnly) {
			return this._year === that.year
				&& this._month === that.month
				&& this._date === that.date;
		}
		return this.toString() === that.toString();
	}
}
