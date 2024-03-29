export const check = (val, id) => {
  switch (id) {
    case "prezimeRoditelj":
      if (val === "") {
        return "Polje nije popunjeno";
      }
      break;
    case "imeRoditelj":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "telRoditelj":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "emailRoditelj":
      if (val.includes(" ")) {
        return "Polje nije popunjeno ili nije ispravan format";
      }
      if (!val.includes("@")) {
        return "Polje nije popunjeno ili nije ispravan format";
      }

      break;
    case "prezimePutnika":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "imePutnika":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "adresaPutnika":
      if (val === "" && !val.includes(" ")) {
        return "Polje nije popunjeno";
      }

      break;
    case "mjesto":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    case "datumRodenja":
      if (val === "") {
        return "Polje nije popunjeno";
      }

      break;
    default:
      break;
  }
};
export const putovnicaYears = [
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
  2029,
  2030,
  2031,
  2032,
  2033,
  2034,
  2035,
  2036,
  2037,
  2038,
  2039,
  2040,
  2041,
  2042,
  2043,
  2044,
  2045,
  2046,
  2047,
  2048,
  2049,
  2050,
  2051,
  2052,
  2053,
  2054,
  2055,
  2056,
  2057,
  2058,
  2059,
  2060,
  2061,
  2062,
  2063,
  2064,
  2065,
  2066,
  2067,
  2068,
  2069,
  2070,
  2071,
  2072,
  2073,
  2074,
  2075,
  2076,
  2077,
  2078,
  2079,
  2080,
  2081,
  2082,
  2083,
  2084,
  2085,
  2086,
  2087,
  2088,
  2089,
  2090,
  2091,
  2092,
  2093,
  2094,
  2095,
  2096,
  2097,
  2098,
  2099,
  2100,
  2101,
  2102,
  2103,
  2104,
  2105,
  2106,
  2107,
  2108,
  2109,
  2110,
  2111,
  2112,
  2113,
  2114,
  2115,
  2116,
  2117,
  2118,
  2119,
  2120,
  2121,
];
export const dateData = {
  years: [
    2022,
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
    2003,
    2002,
    2001,
    2000,
    1999,
    1998,
    1997,
    1996,
    1995,
    1994,
    1993,
    1992,
    1991,
    1990,
    1989,
    1988,
    1987,
    1986,
    1985,
    1984,
    1983,
    1982,
    1981,
    1980,
    1979,
    1978,
    1977,
    1976,
    1975,
    1974,
    1973,
    1972,
    1971,
    1970,
    1969,
    1968,
    1967,
    1966,
    1965,
    1964,
    1963,
    1962,
    1961,
    1960,
    1959,
    1958,
    1957,
    1956,
    1955,
    1954,
    1953,
    1952,
    1951,
    1950,
    1949,
    1948,
    1947,
    1946,
    1945,
    1944,
    1943,
    1942,
    1941,
    1940,
    1939,
    1938,
    1937,
    1936,
    1935,
    1934,
    1933,
    1932,
    1931,
    1930,
    1929,
    1928,
    1927,
    1926,
    1925,
    1924,
    1923,
    1922,
  ],
  months: [
    { val: "01", ime: "Siječanj" },
    { val: "02", ime: "Veljača" },
    { val: "03", ime: "Ožujak" },
    { val: "04", ime: "Travanj" },
    { val: "05", ime: "Svibanj" },
    { val: "06", ime: "Lipanj" },
    { val: "07", ime: "Srpanj" },
    { val: "08", ime: "Kolovoz" },
    { val: "09", ime: "Rujan" },
    { val: "10", ime: "Listopad" },
    { val: "11", ime: "Studeni" },
    { val: "12", ime: "Prosinac" },
  ],
  days31: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ],
  days30: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],

  months31: ["01", "03", "05", "07", "08", "10", "12"],
  years2: [
    1924,
    1928,
    1932,
    1936,
    1940,
    1944,
    1948,
    1952,
    1956,
    1960,
    1964,
    1968,
    1972,
    1976,
    1980,
    1988,
    1988,
    1992,
    1996,
    2000,
    2004,
    2008,
    2012,
    2016,
    2020,
  ],
};
export const checkPlacanje = (i, cijena) => {
  switch (i) {
    case "A":
      return `- ${cijena.a} (uplata do ${cijena.aD})`;
      break;
    case "B":
      return `- ${cijena.b} (uplata do ${cijena.bD})`;

      break;
    case "C":
      return `- ${cijena.c} (uplata do ${cijena.cD})`;

      break;
    default:
      break;
  }
};
export const checkPlacanjeCijena = (i, cijena) => {
  switch (i) {
    case "A":
      return cijena.a;
    case "B":
      return cijena.b;
    case "C":
      return cijena.c;
    default:
      break;
  }
};

export const dateCheck = (date) => {
  const today = new Date();
  const aranDate = new Date(`${date.year}-${date.month}-${date.day}`);
console.log(date)
console.log(today.getDate(),today.getUTCMonth(),today.getFullYear())
  if (
    today.getDate() === Number(date.day) &&
    today.getMonth()+1 === Number(date.month) &&
    today.getFullYear() === Number(date.year)
  ) {
    return false;
  } else if (aranDate > today) {
    return false;
  } else {
    return true;
  }
};
