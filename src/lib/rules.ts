import { UTCDate } from "@date-fns/utc";
import {
  addDays,
  getDate,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  isLeapYear,
  isSaturday,
  isSunday,
} from "date-fns";
import { Calendar } from "./calendar.ts";
import {
  COMMUNE_C_10A,
  COMMUNE_C_10B,
  COMMUNE_C_10C,
  COMMUNE_C_10PASC,
  COMMUNE_C_10T,
  EMBER_DAYS,
  FEASTS_OF_JESUS_CLASS_1_AND_2,
  PATTERN_ADVENT,
  PATTERN_CLASS_1,
  PATTERN_EASTER,
  PATTERN_LENT,
  PATTERN_LENT_SUNDAY,
  PATTERN_SANCTI,
  PATTERN_SANCTI_CLASS_1,
  PATTERN_SANCTI_CLASS_1_OR_2,
  PATTERN_SANCTI_CLASS_2,
  PATTERN_SANCTI_CLASS_4,
  PATTERN_SUNDAY,
  PATTERN_TEMPORA,
  PATTERN_TEMPORA_CLASS_4,
  PATTERN_TEMPORA_SUNDAY,
  PATTERN_TEMPORA_SUNDAY_CLASS_2,
  SANCTI_02_24,
  SANCTI_02_27,
  SANCTI_09_29,
  SANCTI_11_02_1,
  SANCTI_12_24,
  SANCTI_12_25_1,
  TEMPORA_PASC1_0,
  TEMPORA_QUAD6_3,
  TYPE_SANCTI,
} from "./constants.ts";
import { Observance } from "./observance.ts";
import { match, yyyyMMDD } from "./utils.ts";

// Nativity Vigil takes place of 4th Advent Sunday.
function rule_nativity_has_multiple_masses(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  const nativityObservance = match(observances, SANCTI_12_25_1);
  if (nativityObservance) {
    const nativityMasses = observances.filter((ld) =>
      ld.id.startsWith("sancti:12-25m"),
    );
    return [nativityMasses.reverse(), [], []];
  }
}

// All Souls Day; if not Sunday - Nov 2, else Nov 3; additionally, it has three masses
function rule_all_souls(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  if (match(observances, SANCTI_11_02_1)) {
    const allSouls = observances
      .filter((ld) => ld.id.startsWith("sancti:11-02m"))
      .reverse();
    if (isSunday(date_)) {
      return [allSouls, [match(observances, PATTERN_TEMPORA_SUNDAY)], []];
    }
    return [allSouls, [], []];
  }
}

// Nativity Vigil takes place of 4th Advent Sunday.
function rule_nativity_vigil(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  if (match(observances, SANCTI_12_24) && isSunday(date_)) {
    return [[match(observances, SANCTI_12_24)], [], []];
  }
}

// St. Matthias the Apostle, normally on Feb 24, but in leap year on Feb 25
function rule_st_matthias(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  if (
    match(observances, SANCTI_02_24) &&
    isLeapYear(date_) &&
    getDate(date_) === 24
  ) {
    return [
      [match(observances, PATTERN_TEMPORA)],
      [],
      [
        [
          yyyyMMDD(addDays(new UTCDate(date_), 1)),
          match(observances, SANCTI_02_24),
        ],
      ],
    ];
  }
}

// Feb 27, normally on Feb 27 but in leap year on Feb 28
function rule_feb27(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  if (
    match(observances, SANCTI_02_27) &&
    isLeapYear(date_) &&
    getDate(date_) === 27
  ) {
    return [
      [match(observances, PATTERN_TEMPORA)],
      [],
      [
        [
          yyyyMMDD(addDays(new UTCDate(date_), 1)),
          match(observances, SANCTI_02_27),
        ],
      ],
    ];
  }
}

// On feria Saturdays (4th class) the celebration is B. M. V. Saturdays on the given period
function rule_bmv_office_on_saturday(
  calendar: Calendar,
  date_: string,
  tempora: Observance[],
  observances: Observance[],
) {
  function calcProperForGivenPeriod() {
    if (match(tempora, PATTERN_ADVENT)) {
      return COMMUNE_C_10A; // B. M. V. Saturdays in Advent
    }

    if (
      isAfter(date_, new UTCDate(getYear(date_), 11, 25)) ||
      isBefore(date_, new UTCDate(getYear(date_), 1, 2))
    ) {
      return COMMUNE_C_10B; // B. M. V. Saturdays between Nativity and Purification
    }

    const wednesdayInHolyWeek = calendar.findDay(TEMPORA_QUAD6_3);
    if (
      isAfter(date_, new UTCDate(getYear(date_), 1, 2)) &&
      //@ts-ignore
      isBefore(date_, wednesdayInHolyWeek[0])
    ) {
      return COMMUNE_C_10C; // B. M. V. Saturdays between Feb 2 and Wednesday in Holy Week
    }

    if (match(tempora, PATTERN_EASTER)) {
      return COMMUNE_C_10PASC; // B. M. V. Saturdays in Easter period
    }

    return COMMUNE_C_10T; // B. M. V. Saturdays between Trinity Sunday and Saturday before 1st Sunday of Advent
  }

  if (isSaturday(date_)) {
    const ranks = new Set(observances.map((i) => i.rank));
    if (ranks.size === 0 || (ranks.size === 1 && ranks.has(4))) {
      const bmvOffice = new Observance(calcProperForGivenPeriod(), date_);
      return [
        [bmvOffice],
        observances.filter((i) => i.flexibility === TYPE_SANCTI).slice(0, 1),
        [],
      ];
    }
  }
}

function rule_same_class_feasts_take_over_advent_feria_and_ember_days(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  const advOrEmber = match(observances, [...EMBER_DAYS, PATTERN_ADVENT]);

  if (!isSunday(date_) && advOrEmber) {
    const sancti = match(observances, [PATTERN_SANCTI]);

    if (!sancti) {
      return [[advOrEmber], [], []];
    }

    if (advOrEmber.rank === sancti.rank) {
      return [[sancti], [advOrEmber], []];
    }

    if (advOrEmber.rank < sancti.rank) {
      return [[advOrEmber], [sancti], []];
    }
  }
}

function rule_lent_commemoration(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  const lentObservance = match(observances, PATTERN_LENT);

  if (lentObservance) {
    const sancti = match(observances, [PATTERN_SANCTI]);

    if (!sancti?.rank) {
      return [[lentObservance], [], []];
    }

    if (lentObservance.rank === sancti.rank) {
      if (sancti.rank === 1) {
        // Will be shifted to a different day by the other rule
        return;
      }

      return [[lentObservance], [sancti], []];
    }

    if (lentObservance.rank > sancti.rank) {
      return [[sancti], [lentObservance], []];
    }
  }
}

function rule_shift_conflicting_1st_class_feasts(
  calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  // # If there are two feasts with 1st class, the one with lower priority on Precedence Table is shifted to the first
  // # day where there is no 1st and 2nd class feast.
  //
  // # The feast of the Immaculate Conception of the Blessed Virgin Mary, however,
  // # is preferred to the Sunday of Advent on which it may occur. (General Rubrics, 15)

  if (getDate(date_) === 8 && getMonth(date_) === 11 && isSunday(date_)) {
    return [
      [match(observances, PATTERN_SANCTI)],
      [match(observances, PATTERN_TEMPORA)],
      [],
    ];
  }

  function calcTargetDate() {
    let targetDate = new UTCDate(date_);
    while (getYear(targetDate) === getYear(date_)) {
      targetDate = addDays(targetDate, 1);
      const allRanks = new Set(
        calendar.get(yyyyMMDD(targetDate)).all.map((ld) => ld.rank),
      );
      if (!allRanks.has(1) && !allRanks.has(2)) {
        return yyyyMMDD(targetDate);
      }
    }
  }

  const firstClassFeasts = observances.filter((ld) => ld.rank === 1);

  if (firstClassFeasts.length > 1) {
    const targetDate = calcTargetDate();

    const [celebration, shiftDay] = firstClassFeasts
      .sort((a, b) => a.priority - b.priority)
      .slice(0, 2);
    const toShift = [[targetDate, [shiftDay]]];
    return [[celebration], [], toShift];
  }
}

// if we have first and second class feasts
// transfer second class to next available
function rule_shift_conflicting_second_class_feasts(
  calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  function calcTargetDate() {
    let targetDate = new UTCDate(date_);
    while (getYear(targetDate) === getYear(date_)) {
      targetDate = addDays(targetDate, 1);
      const allRanks = new Set(
        calendar.get(yyyyMMDD(targetDate))?.all.map((ld) => ld.rank),
      );
      if (!allRanks.has(1)) {
        return yyyyMMDD(targetDate);
      }
    }
  }

  const firstClassFeasts = observances.filter((ld) => ld.rank === 1);

  const secondClassFeasts = match(observances, PATTERN_SANCTI_CLASS_2);

  if (firstClassFeasts.length && secondClassFeasts?.rank === 2) {
    const targetDate = calcTargetDate();

    const toShift = [[targetDate, match(observances, PATTERN_SANCTI_CLASS_2)]];
    return [[firstClassFeasts[0]], [], toShift];
  }
}

function rule_lord_feast(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  if (
    match(observances, FEASTS_OF_JESUS_CLASS_1_AND_2) &&
    match(observances, PATTERN_TEMPORA_SUNDAY_CLASS_2)
  ) {
    return [[match(observances, PATTERN_SANCTI_CLASS_1_OR_2)], [], []];
  }
}

// When 2nd class Sunday occurs along with 2nd class feast, the Sunday takes precedence and the feast is commemorated
function rule_2nd_class_sunday_tempora(
  _calendar: Calendar,
  date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  const pattern_sunday_class_2 = match(observances, PATTERN_SUNDAY);

  const pattern_sancti_class_2 = match(observances, PATTERN_SANCTI_CLASS_2);

  if (
    pattern_sunday_class_2 &&
    pattern_sunday_class_2.rank === 2 &&
    isSunday(date_)
  ) {
    if (pattern_sancti_class_2) {
      return [[pattern_sancti_class_2], [pattern_sunday_class_2], []];
    }
    return [[pattern_sunday_class_2], [], []];
  }
}

function rule_commemoration(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  const pattern_sancti = match(observances, PATTERN_SANCTI);

  const sundays = match(observances, PATTERN_SUNDAY);

  const sundaysLent = match(observances, PATTERN_LENT_SUNDAY);

  const albis = match(observances, TEMPORA_PASC1_0);

  const firstClassSaints = match(observances, PATTERN_SANCTI_CLASS_1);

  // In case of some 1st class feasts the Sunday is commemorated,
  // e.g. St. Michael the Archangel on Sunday 2019-09-29
  if (
    match(observances, SANCTI_09_29) &&
    match(observances, PATTERN_TEMPORA_SUNDAY_CLASS_2)
  ) {
    return [
      [match(observances, PATTERN_CLASS_1)],
      [match(observances, PATTERN_TEMPORA_SUNDAY_CLASS_2)],
      [],
    ];
  }

  // if sundays outside lent and easter week
  if (!sundaysLent && !albis && sundays && pattern_sancti) {
    // if sunday is second class and sancti first class
    // celebrate the sancti without sunday commemoration
    if (firstClassSaints && sundays?.rank === 2) {
      return [[firstClassSaints], [], []];
    }

    // if sancti second class sunday is commemorated
    if (pattern_sancti.rank <= 2) {
      return [[pattern_sancti], [sundays], []];
    }

    // if sancti third class is commemorated
    if (pattern_sancti.rank === 3) {
      return [[sundays], [pattern_sancti], []];
    }

    // if sancti is fourth class skip
    if (pattern_sancti.rank === 4) {
      return;
    }

    // else sundays with sancti commemoration
    return [[sundays], [pattern_sancti], []];
  }

  // if not on sunday and first class sancti
  // no commemoration takes place
  if (!sundays && firstClassSaints) {
    return [[firstClassSaints], [], []];
  }

  // else first class without commemoration
  if (match(observances, PATTERN_CLASS_1)) {
    return [[match(observances, PATTERN_CLASS_1)], [], []];
  }
}

function rule_4th_class_feria_are_removed_from_celebration(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  const fourthClassTempora = match(observances, PATTERN_TEMPORA_CLASS_4);

  if (fourthClassTempora) {
    const commemoration = match(observances, PATTERN_SANCTI_CLASS_4);

    if (commemoration) {
      return [[], [commemoration], []];
    }

    return [observances.filter((o) => o !== fourthClassTempora), [], []];
  }
}

function rule_general(
  _calendar: Calendar,
  _date_: string,
  _tempora: Observance[],
  observances: Observance[],
) {
  // Default rule for situations not handled by any of the above
  if (observances.length === 0) {
    return [[], [], []];
  }
  if (observances.length === 1) {
    return [observances, [], []];
  }
  const [first, second] = observances
    .sort(
      (a, b) =>
        a.rank - b.rank ||
        a.priority - b.priority ||
        a.flexibility.localeCompare(b.flexibility),
    )
    .slice(0, 2);

  return [[first], [second], []];
}

export const rules = [
  rule_nativity_has_multiple_masses,
  rule_all_souls,
  rule_nativity_vigil,
  rule_st_matthias,
  rule_feb27,
  rule_same_class_feasts_take_over_advent_feria_and_ember_days,
  rule_lent_commemoration,
  rule_shift_conflicting_1st_class_feasts,
  rule_shift_conflicting_second_class_feasts,
  rule_lord_feast,
  rule_commemoration,
  rule_2nd_class_sunday_tempora,
  rule_bmv_office_on_saturday,
  rule_4th_class_feria_are_removed_from_celebration,
  rule_general,
];
