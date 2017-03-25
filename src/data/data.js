let parks = [
    {
      state: 'Alaska',
      name: 'Denali',
      code: 'dena',
      year: 'February 26, 1917',
      size: 4740911,
      video: 'TiJtxItuC18'
    },
    {
      state: 'Alaska',
      name: 'Gates of the Artic',
      code: 'gaar',
      year: 'December 2, 1980',
      size: 7523897,
      video: 'alJ9R3nv7gM'
    },
    {
      state: 'Alaska',
      name: 'Glacier Bay',
      code: 'glba',
      year: 'December 2, 1980',
      size: 3223383,
      video: 'Vkr6gxJ9SCs'
    },
    {
      state: 'Alaska',
      name: 'Katmai',
      code: 'katm',
      year: 'December 2, 1980',
      size: 3674368,
      video: 'ik-xss5BQKA'
    },
    {
      state: 'Alaska',
      name: 'Kenai Fjords',
      code: 'kefj',
      year: 'December 2, 1980',
      size: 669983,
      video: 'B9hkIBvBxOQ'
    },
    {
      state: 'Alaska',
      name: 'Kobuk Valley',
      code: 'kova',
      year: 'December 2, 1980',
      size: 1750716,
      video: 'zgzqwBIJuTE'
    },
    {
      state: 'Alaska',
      name: 'Lake Clark',
      code: 'lacl',
      year: 'December 2, 1980',
      size: 2619836,
      video: 'Ra8KYD7vVog'
    },
    {
      state: 'Alaska',
      name: 'Wrangell - St. Elias',
      code: 'wrst',
      year: 'December 2, 1980',
      size: 8323146,
      video: 'RPudBkBW9Tk'
    },
    {
      state: 'American Samoa',
      name: 'American Samoa',
      code: 'npsa',
      year: 1980,
      size: 8256,
      video: 'mB4_KRMXLf0'
    },
    {
      state: 'Arizona',
      name: 'Grand Canyon',
      code: 'grca',
      year: 1919,
      size: 1201647,
      video: 'bEVEsIW4OXo'
    },
    {
      state: 'Arizona',
      name: 'Petrified Forest',
      code: 'pefo',
      year: 1962,
      size: 221416,
      video: '068GcVD3VaE'
    },
    {
      state: 'Arizona',
      name: 'Saguaro',
      code: 'sagu',
      year: 'October 14, 1994',
      size: 91442,
      video: 'DevwfwfjRoE'
    },
    {
      state: 'Arkansas',
      name: 'Hot Springs',
      code: 'hosp',
      year: 1921,
      size: 5549,
      video: 'x-XWxtED9k4'
    },
    {
      state: 'California',
      name: 'Channel Islands',
      code: 'chis',
      year: 1980,
      size: 249561,
      video: 'AURiyMmwtOU'
    },
    {
      state: 'California',
      name: 'Death Valley',
      code: 'deva',
      year: 1994,
      size: 3373063,
      video: 'X6PRC6PYolk'
    },
    {
      state: 'California',
      name: 'Joshua Tree',
      code: 'jotr',
      year: 1994,
      size: 790635,
      video: 'UKdIeBsvOqQ'
    },
    {
      state: 'California',
      name: 'Kings Canyon',
      code: 'seqi',
      year: 1940,
      size: 461901,
      video: 'zHS2Fqj3gKE'
    },
    {
      state: 'California',
      name: 'Lassen Volcanic',
      code: 'lavo',
      year: 'August 9, 1916',
      size: 106589,
      video: 'WU_W5rP7ZIw'
    },
    {
      state: 'California',
      name: 'Pinnacles',
      code: 'pinn',
      year: 'January 10, 2013',
      size: 26685,
      video: 'o-3FY5ijhVI'
    },
    {
      state: 'California',
      name: 'Redwood',
      code: 'redw',
      year: 'October 2, 1968',
      size: 138999,
      video: 'JPEvDQLezyc'
    },
    {
      state: 'California',
      name: 'Sequoia',
      code: 'seqi',
      year: 'September 25, 1890',
      size: 404062,
      video: 'zHS2Fqj3gKE'
    },
    {
      state: 'California',
      name: 'Yosemite',
      code: 'yose',
      year: 'October 1, 1890',
      size: 761347,
      video: 'HTj2BF5HmXo'
    },
    {
      state: 'Colorado',
      name: 'Black Canyon of the Gunnison',
      code: 'blca',
      year: 'October 21, 1999',
      size: 30750,
      video: 'UaHE41qrKoU'
    },
    {
      state: 'Colorado',
      name: 'Great Sand Dunes',
      code:'grsa',
      year: 'September 13, 2004',
      size: 107301,
      video: 'HPb2IwY9Anw'
    },
    {
      state: 'Colorado',
      name: 'Mesa Verde',
      code: 'meve',
      year: 'June 29, 1906',
      size: 52485,
      video: 'kxsbbc2jjmI'
    },
    {
      state: 'Colorado',
      name: 'Rocky Mountain',
      code: 'romo',
      year: 'January 26, 1915',
      size: 265795,
      video: 'G9RKO1-Ocyg'
    },
    {
      state: 'Florida',
      name: 'Biscayne',
      code: 'bisc',
      year: 'June 28, 1980',
      size: 172971,
      video: '8RySPj62S_E'
    },
    {
      state: 'Florida',
      name: 'Dry Tortugas',
      code: 'drto',
      year: 'October 26, 1992',
      size: 64701,
      video: 'K5B-zztAV0E'
    },
    {
      state: 'Florida',
      name: 'Everglades',
      code: 'ever',
      year: 'May 30, 1947',
      size: 1508975,
      video: 'BDHWpkcpvPo'
    },
    {
      state: 'Hawaii',
      name: 'Haleakala',
      code: 'hale',
      year: 'August 1, 1916',
      size: 33264,
      video: '4V8pafcvYiY'
    },
    {
      state: 'Hawaii',
      name: 'Hawaii Volcanoes',
      code: 'havo',
      year: 'August 1, 1916',
      size: 323431,
      video: 'dh2Z6s68R0s'
    },
    {
      state: 'Idaho, Montana, Wyoming',
      name: 'Yellowstone',
      code: 'yell',
      year: 'March 1, 1872',
      size: 2219790,
      video: 'DY9OIg03SI8'
    },
    {
      state: 'Kentucky',
      name: 'Mammoth Cave',
      code: 'maca',
      year: 'July 1, 1941',
      size: 52830,
      video: 'fTNlZl7-s4w'
    },
    {
      state: 'Maine',
      name: 'Acadia',
      code: 'acad',
      year: 'February 26, 1919',
      size: 48995,
      video: 'MQTA8HU07zc'
    },
    {
      state: 'Michigan',
      name: 'Isle Royale',
      code: 'isro',
      year: 'April 3, 1940',
      size: 571790,
      video: '31dwiXJX22U'
    },
    {
      state: 'Minnesota',
      name: 'Voyageurs',
      code: 'voya',
      year: 'January 8, 1975',
      size: 218200,
      video: 'jkRRu6qlj6k'
    },
    {
      state: 'Montana',
      name: 'Glacier',
      code: 'glac',
      year: 'May 11, 1910',
      size: 1013324,
      video: 'LNquUapZ_Sg'
    },
    {
      state: 'Nevada',
      name: 'Great Basin',
      code: 'grba',
      year: 'October 27, 1986',
      size: 77180,
      video: 'fXIruBaCezo'
    },
    {
      state: 'New Mexico',
      name: 'Carlsbad Caverns',
      code: 'cave',
      year: 'May 14, 1930',
      size: 46766,
      video: 'UvxOy-6BWrs'
    },
    {
      state: 'North Carolina, Tennessee',
      name: 'Great Smoky Mountains',
      code: 'grsm',
      year: 'June 15, 1934',
      size: 522426,
      video: 'DVq5Vu3J2sY'
    },
    {
      state: 'North Dakota',
      name: 'Theodore Roosovelt',
      code: 'thro',
      year: 'November 10, 1978',
      size: 70447,
      video: 'bLyJNwN1rOY'
    },
    {
      state: 'Ohio',
      name: 'Cuyahoga Valley',
      code: 'cuva',
      year: 'October 11, 2000',
      size: 32950,
      video: 'Vvb3oV63CIM'
    },
    {
      state:'Oregon',
      name: 'Crater Lake',
      code: 'crla',
      year: 'May 22, 1902',
      size: 183224,
      video: 'qbH5--nwxdk'
    },
    {
      state: 'South Carolina',
      name: 'Congaree',
      code: 'cong',
      year: 'November 10, 2003',
      size: 26276,
      video: 'epQyvVL6yh8'
    },
    {
      state: 'South Dakota',
      name: 'Badlands',
      code: 'badl',
      year: 'November 10, 1978',
      size: 242756,
      video: '68zB8xM8GLo'
    },
    {
      state: 'South Dakota',
      name: 'Wind Cave',
      code: 'wica',
      year: 'January 9, 1903',
      size: 33923,
      video: 'SkAxHMB1g6Y'
    },
    { state: 'Texas',
      name: 'Big Bend',
      code: 'bibe',
      year: 'June 12, 1944',
      size: 801163,
      video: 'D8X5w24VD1M'
    },
    {
      state: 'Tennessee',
      name: 'Guadalupe Mountains',
      code: 'gumo',
      year: 'October 15, 1966',
      size: 86367,
      video: '3rPuCEaxWAo'
    },
    {
      state: 'US Virgin Islands',
      name: 'Virgin Islands',
      code: 'viis',
      year: 'August 2, 1956',
      size: 14948,
      video: 'ZRsh09cu7cY'
    },
    {
      state: 'Utah',
      name: 'Arches',
      code: 'arch',
      year: 'November 12, 1971',
      size: 76679,
      video: 'WNu1VGl416U'
    },
    {
      state: 'Utah',
      name: 'Bryce Canyon',
      code: 'brca',
      year: 'February 25, 1928',
      size: 35835,
      video: 'p7kC0EpClCM'
    },
    {
      state: 'Utah',
      name: 'Capitol Reef',
      code: 'care',
      year: 'December 18, 1971',
      size: 241904,
      video: 'TmD0C6mdFmE'
    },
    {
      state: 'Utah',
      name: 'Canyonlands',
      code: 'cany',
      year: 'September 12, 1964',
      size: 337597,
      video: 'EYcyplCWlTg'
    },
    {
      state: 'Utah',
      name: 'Zion',
      code: 'zion',
      year: 'November 19, 1919',
      size: 147237,
      video: 'XrF1cSzaeAY'
    },
    {
      state: 'Virginia',
      name: 'Shenandoah',
      code: 'shen',
      year: 'May 22, 1935',
      size: 199116,
      video: '7BFuJcxexSM'
    },
    {
      state: 'Washington',
      name: 'Mount Rainier',
      code: 'mora',
      year: 'March 2, 1899',
      size: 236381,
      video: 'i9efn8wc3_Q'
    },
    {
      state: 'Washington',
      name: 'North Cascades',
      code: 'noca',
      year: 'October, 1968',
      size: 501780,
      video: 'vmTvQeVZWo8'
    },
    {
      state: 'Washington',
      name: 'Olympic',
      code: 'olym',
      year: 'June 29, 1938',
      size: 922650,
      video: '3nXdFzgzUQw'
    },
    {
      state: 'Wyoming',
      name: 'Grand Teton',
      code: 'grte',
      year: 'February 26, 1929',
      size: 310043,
      video: 'RLaovLlTllM'
    }
]


// Data Helpers 

const findPark = function(query) {
  let result = parks.find((park) => park.name === query);
  return result;
};


export default {parks: parks, findPark: findPark}









