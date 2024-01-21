import { Day } from "./day.ts";
import { yyyyMMDD } from "./utils.ts";

import {
  ADVENT,
  EMBER_DAYS_SEPTEMBER,
  FROM_PRE_LENT_TO_POST_PENTECOST,
  LANGUAGE,
  NATIVITY_OCTAVE_FERIA,
  NATIVITY_OCTAVE_SUNDAY,
  POST_EPIPHANY,
  SANCTI,
  SANCTI_10_DUr,
  TEMPORA_NAT2_0,
  WEEK_24_AFTER_PENTECOST,
} from "./constants.ts";
import { Observance } from "./observance.ts";
import { rules } from "./rules.ts";

import {
  addDays,
  format,
  getDate,
  getDay,
  getMonth,
  getYear,
  isSameDay,
  isSunday,
  nextSunday,
  nextWednesday,
  previousSaturday,
  previousSunday,
  subDays,
} from "date-fns";
import { UTCDate } from "@date-fns/utc";

class Calendar {
  private _container: Map<string, Day>;
  public year: number;

  constructor(year: number) {
    this.year = year;
    this._container = new Map();
    this._buildEmptyCalendar(year);
    this.create();
  }

  private _buildEmptyCalendar(year: number): void {
    let date_ = new UTCDate(year, 0, 1);

    while (date_.getFullYear() === year) {
      this._container.set(yyyyMMDD(date_), new Day(yyyyMMDD(date_), this));
      date_ = addDays(date_, 1);
    }
  }

  private create() {
    this.fillInTemporaDays();
    this.fillInSanctiDays();
    this.resolveConcurrency();
  }

  private fillInTemporaDays() {
    // """
    // Days depending on variable date, such as Easter or Advent
    // """
    // # Inserting blocks
    this.insertBlock(this.calcHolyFamily(this.year), POST_EPIPHANY);
    this.insertBlock(
      this.calcSeptuagesima(this.year),
      FROM_PRE_LENT_TO_POST_PENTECOST,
    );
    this.insertBlock(
      this.calcSaturdayBefore24SundayAfterPentecost(this.year),
      POST_EPIPHANY,
      true,
      false,
      this.calcFirstAdventSunday(this.year),
    );
    this.insertBlock(
      this.calc24SundayAfterPentecost(this.year),
      WEEK_24_AFTER_PENTECOST,
    );
    this.insertBlock(
      this.calcFirstAdventSunday(this.year),
      ADVENT,
      false,
      false,
      new UTCDate(this.year, 11, 23),
    );
    this.insertBlock(
      this.calcEmberWednesdaySeptember(this.year),
      EMBER_DAYS_SEPTEMBER,
    );

    // # Inserting single days
    const holyNameDate = this.calcHolyName(this.year);

    this._container.get(yyyyMMDD(holyNameDate)).celebration = [
      new Observance(TEMPORA_NAT2_0, yyyyMMDD(holyNameDate)),
    ];

    const christKingDate = this.calcChristKing(this.year);
    if (this._container.get(yyyyMMDD(christKingDate))) {
      this._container.get(yyyyMMDD(christKingDate)).celebration = [
        new Observance(SANCTI_10_DUr, yyyyMMDD(christKingDate)),
      ];
    }

    const christmasOctaveSunday = this.calcSundayChristmasOctave(this.year);
    if (christmasOctaveSunday) {
      this.insertBlock(christmasOctaveSunday, NATIVITY_OCTAVE_SUNDAY);
    }
    this.insertBlock(
      new UTCDate(this.year, 11, 29),
      NATIVITY_OCTAVE_FERIA,
      false,
      false,
    );
    this.insertBlock(
      new UTCDate(this.year, 11, 30),
      NATIVITY_OCTAVE_FERIA,
      false,
      false,
    );
    this.insertBlock(
      new UTCDate(this.year, 11, 31),
      NATIVITY_OCTAVE_FERIA,
      false,
      false,
    );
  }

  private insertBlock(
    date: Date,
    block: string[],
    reverse = false,
    overwrite = true,
    stopDate?: Date,
  ) {
    if (reverse) {
      // TODO: use toReversed in order not to mutate the original
      // or slice
      block = block.slice().reverse();
    }

    for (const [ii, observance_ids] of block.entries()) {
      const currentDate = addDays(new UTCDate(date), reverse ? -ii : ii);

      if (!observance_ids) {
        continue;
      }

      const dateKey = yyyyMMDD(currentDate);

      if (this._container.get(dateKey)?.celebration.length && !overwrite) {
        break;
      }

      if (isSameDay(stopDate, subDays(currentDate, 1))) {
        break;
      }

      if (this._container.get(dateKey)) {
        this._container.get(dateKey).tempora = [
          new Observance(observance_ids, dateKey),
        ];
        this._container.get(dateKey).celebration = [
          ...this._container.get(dateKey).tempora,
        ];
      }
    }
  }

  private fillInSanctiDays() {
    for (const [date] of this._container.entries()) {
      const dateId = format(date, "MM-dd");
      const days = SANCTI.filter((ii) => ii.startsWith(`sancti:${dateId}`)).map(
        (ii) => new Observance(ii, date),
      );

      this._container.get(date)?.celebration.push(...days);
      this._container.get(date)?.celebration.reverse();
    }
  }

  private resolveConcurrency() {
    // """
    // Apply `kalendar.rules.*` to the initially instantiated Calendar to fix the situations
    // where more than one Observance falls in the same day.
    // """
    const shiftedAll: Map<string, Observance[]> = new Map();

    for (const [date] of this._container.entries()) {
      const [celebration, commemoration, shifted] = this.applyRules(
        date,
        shiftedAll.get(date) || [],
      );

      this._container.get(date).celebration = celebration as Observance[];
      this._container.get(date).commemoration = commemoration as Observance[];

      for (const [k, v] of shifted.entries()) {
        if (!shiftedAll.get(String(k))) {
          shiftedAll.delete(String(k));
        }
        shiftedAll.set(String(k), v as Observance[]);
      }
    }
  }

  private applyRules(date_: string, shifted: Observance[]) {
    for (const rule of rules) {
      const results = rule(this, date_, this._container.get(date_)?.tempora, [
        ...this._container.get(date_).celebration,
        ...shifted,
      ]);

      if (date_ === "2023-03-24") {
        console.log("here");
      }

      if (results) {
        return results;
      }
    }

    return [this._container.get(date_).celebration, [], []];
  }

  private calcEasterSunday(year: number): Date {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    const easter = new UTCDate(year, month - 1, day);

    return easter;
  }

  private calcHolyFamily(year: number): Date {
    // Feast of the Holy Family - First Sunday after Epiphany (06 January).
    const d = new UTCDate(year, 0, 6); // Months are zero-indexed in JavaScript

    return nextSunday(d);
  }

  private calcSeptuagesima(year: number): Date {
    // """ Septuagesima Sunday.
    //
    // Beginning of the pre-Lenten season (Shrovetide).
    // It's 63 days before Ressurection, ninth Sunday before Easter, the third before Ash Wednesday.
    // First day of the Ressurection Sunday - related block.
    // """
    const easter = this.calcEasterSunday(year);
    return subDays(easter, 63);
  }

  private calcFirstAdventSunday(year: number): Date {
    // """
    // First Sunday of Advent - November 27 if it's Sunday, otherwise closest Sunday.
    // """
    const christmasDay = new UTCDate(year, 11, 25);
    const weekday = getDay(christmasDay);

    switch (weekday) {
      case 0: // Sunday
        return new UTCDate(getYear(christmasDay), 10, 27);
      case 1: // Monday
        return new UTCDate(getYear(christmasDay), 11, 3);
      case 2: // Tuesday
        return new UTCDate(getYear(christmasDay), 11, 2);
      case 3: // Wednesday
        return new UTCDate(getYear(christmasDay), 11, 1);
      case 4: // Thursday
        return new UTCDate(getYear(christmasDay), 10, 30);
      case 5: // Friday
        return new UTCDate(getYear(christmasDay), 10, 29);
      default: // Saturday
        return new UTCDate(getYear(christmasDay), 10, 28);
    }
  }

  private calc24SundayAfterPentecost(year: number): Date {
    // """ 24th Sunday after Pentecost.
    //
    // Last Sunday before First Sunday of Advent.
    // It will be always TEMPORA_PENT24_0, which will be placed either:
    // * instead of TEMPORA_PENT23_0
    //   if the number of TEMPORA_PENT*_0 Sundays in given year == 23)
    // * directly after a week starting with TEMPORA_PENT23_0
    //   if the number of TEMPORA_PENT*_0 Sundays in given year == 24)
    // * directly after a week starting with TEMPORA_EPI6_0 (moved from post-epiphania period)
    //   if the number of TEMPORA_PENT*_0 Sundays in given year > 24)
    // """
    return previousSunday(new UTCDate(this.calcFirstAdventSunday(year)));
  }

  private calcSaturdayBefore24SundayAfterPentecost(year: number): Date {
    // """ Last Saturday before 24th Sunday after Pentecost.
    //
    // This is the end of potentially "empty" period that might appear
    // between 23rd and 24th Sunday after Pentecost if Easter is early.
    // In such case one or more Sundays after Epiphany (TEMPORA_EPI*_0) are moved here to "fill the gap"

    return previousSaturday(new UTCDate(this.calc24SundayAfterPentecost(year)));
  }

  private calcEmberWednesdaySeptember(year: number): Date {
    // """ Wednesday of the Ember Days of September.
    //
    // Ember Wednesday in September is a Wednesday after third Sunday
    // of September according to John XXIII's motu proprio
    // "Rubricarum instructum" of June 25 1960.
    // """
    let d = new UTCDate(year, 8, 1);
    while (getMonth(d) === 8) {
      if (isSunday(d) && getDate(d) >= 15 && getDate(d) <= 21) {
        break;
      }
      d = addDays(d, 1);
    }
    return nextWednesday(d);
  }

  private calcHolyName(year: number) {
    // """ The Feast of the Holy Name of Jesus.
    //
    // Kept on the First Sunday of the year; but if this Sunday falls on
    // 1st, 6th or 7th January, the feast is kept on 2nd January.
    // """
    let d = new UTCDate(year, 0, 1);

    while (getDate(d) <= 7) {
      if (isSunday(d)) {
        if (getDate(d) === 1 || getDate(d) === 6 || getDate(d) === 7) {
          return new UTCDate(year, 0, 2);
        }

        return d;
      }

      d = addDays(d, 1);
    }

    console.error("Unexpected condition: Holy Name date not found.");
  }

  private calcChristKing(year: number): Date {
    // The Feast of Christ the King, last Sunday of October.
    const d = new UTCDate(year, 10, 1);

    return previousSunday(d);
  }

  private calcSundayChristmasOctave(year: number): Date | null {
    // """
    // Sunday within the Octave of Christmas, falls between Dec 26 and Dec 31
    // """
    let d = new UTCDate(year, 11, 27); // December 27
    while (d.getFullYear() === year) {
      if (isSunday(d)) {
        return d;
      }
      d = addDays(d, 1);
    }
    return null;
  }

  get(date_: string) {
    return this._container.get(date_);
  }

  findDay(observanceId: string) {
    for (const [date_, day] of this._container) {
      if (day.all.some((observance) => observance.id === observanceId)) {
        return [date_, day];
      }
    }
  }

  items() {
    return this._container.entries();
  }

  serialize() {
    const serialized = {};
    for (const [date_, day] of this.items()) {
      serialized[date_] = day.serialize();
    }
    return serialized;
  }
}

export { Calendar };
