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
	constructor(year?: number, month?: number, date?: number);
	/**
	 * Instantiates a DateOnly object extracting the relevant data from the given Date object
	 * @param date the reference date
	 */
	constructor(date: Date);
	/**
	 * Instantiates a DateOnly object from a DateOnly string representation
	 * @param str the string representation YYYY-MM-DD
	 */
	constructor(str: string);

	constructor(
		yearOrDateOrStr?: number|Date|string,
		month?: number,
		date?: number,
	) {
		const nativeDate = yearOrDateOrStr instanceof Date ? yearOrDateOrStr : new Date();
		if (typeof yearOrDateOrStr === "string") {
			const matches = yearOrDateOrStr.match(DateOnly.regex);

			if (!matches) {
				throw new Error(`invalid date format ${yearOrDateOrStr}`);
			}

			this._year = Number(matches[1]);
			this._month = Number(matches[2]) - 1;
			this._date = Number(matches[3]);
		} else {
			if (!(yearOrDateOrStr instanceof Date)) {
				if (yearOrDateOrStr !== null && yearOrDateOrStr !== undefined) {
					nativeDate.setFullYear(yearOrDateOrStr);
				}
				if (month !== null && month !== undefined) {
					nativeDate.setMonth(month);
				}
				if (date !== null && date !== undefined) {
					nativeDate.setDate(date);
				}
			}
			this._year = nativeDate.getFullYear();
			this._month = nativeDate.getMonth();
			this._date = nativeDate.getDate();
		}
	}

	/**
	 * Converts a native Date into a DateOnly object
	 * @param date the native Date object
	 */
	static fromDate(date: Date): DateOnly {
		return new DateOnly(date);
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
	 * Returns a new DateOnly, its date will be decremented (or incremented)
	 * by the given amount with respect to the current instance
	 * @param n the number of days to subtract
	 */
	subDays(n: number): DateOnly {
		return this.addDays(-n);
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
	 * Returns a new DateOnly, its month will be decremented (or incremented)
	 * by the given amount with respect to the current instance
	 * @param n the number of days to subtract
	 */
	subMonths(n: number): DateOnly {
		return this.addMonths(-n);
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
	 * Returns a new DateOnly, its year will be decremented (or incremented)
	 * by the given amount with respect to the current instance
	 * @param n the number of days to subtract
	 */
	subYears(n: number): DateOnly {
		return this.addYears(-n);
	}

	/**
	 * Instantiates a DateOnly object given a date string
	 * @param str a date string matching the format YYYY-MM-DD
	 */
	static fromString(str: string): DateOnly {
		return new DateOnly(str);
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
	 * Returns a string representing the current instance using the native toLocaleDateString of the Date type
	 * @param locales an array of locales or a specific locale
	 * @param options the Intl.DateFormatOptions object
	 */
	toLocaleString(locales?: string[]|string, options?: Intl.DateTimeFormatOptions) {
		return this.toDate().toLocaleDateString(locales, options);
	}

	/**
	 * Checks whether two DateOnly instances are equal
	 * @param d1 first operand
	 * @param d2 second operand
	 */
	static equals(d1: DateOnly|string, d2: DateOnly|string) {
		if (typeof d1 === "string") {
			d1 = new DateOnly(d1);
		}
		return d1.equals(d2);
	}

	/**
	 * Checks whether two DateOnly instances are equal
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


	/**
	 * Compares two DateOnly instances
	 * @param d1 first operand
	 * @param d2 second operand
	 */
	static compare(d1: DateOnly|string, d2: DateOnly|string) {
		if (typeof d1 === "string") {
			d1 = new DateOnly(d1);
		}
		return d1.compare(d2);
	}

	/**
	 * Compares two DateOnly instances
	 * @param that the other DateOnly instance or its string representation
	 */
	compare(that: DateOnly|string): number {
		if (typeof that === 'string') {
			that = DateOnly.fromString(that);
		}
		return Number(this.toString().replace(/-/g, '')) - Number(that.toString().replace(/-/g, ''));
	}
}
