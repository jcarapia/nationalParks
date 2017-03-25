let parks = [
    {
      state: 'Alaska',
      name: 'Denali',
      code: 'dena',
      year: 'February 26, 1917',
      size: 4740911,
      video: 'TiJtxItuC18',
      desc: "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await."
    },
    {
      state: 'Alaska',
      name: 'Gates of the Artic',
      code: 'gaar',
      year: 'December 2, 1980',
      size: 7523897,
      video: 'alJ9R3nv7gM',
      desc: "This vast landscape does not contain any roads or trails. Visitors discover intact ecosystems where people have lived with the land for thousands of years. Wild rivers meander through glacier-carved valleys, caribou migrate along age-old trails, endless summer light fades into aurora-lit night skies of winter. It remains virtually unchanged except by the forces of nature."
    },
    {
      state: 'Alaska',
      name: 'Glacier Bay',
      code: 'glba',
      year: 'December 2, 1980',
      size: 3223383,
      video: 'Vkr6gxJ9SCs',
      desc: "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage and part of a 25-million acre World Heritage Site—one of the world’s largest international protected areas. From sea to summit, Glacier Bay offers limitless opportunities for adventure and inspiration."
    },
    {
      state: 'Alaska',
      name: 'Katmai',
      code: 'katm',
      year: 'December 2, 1980',
      size: 3674368,
      video: 'ik-xss5BQKA',
      desc: "Katmai National Monument was established in 1918 to protect the volcanically devastated region surrounding Mount Katmai and the Valley of Ten Thousand Smokes. Today, Katmai National Park and Preserve remains an active volcanic landscape, but it also protects 9,000 years of human history as well as important habitat for salmon and thousands of brown bears."
    },
    {
      state: 'Alaska',
      name: 'Kenai Fjords',
      code: 'kefj',
      year: 'December 2, 1980',
      size: 669983,
      video: 'B9hkIBvBxOQ',
      desc: "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Native Alutiiq relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate."
    },
    {
      state: 'Alaska',
      name: 'Kobuk Valley',
      code: 'kova',
      year: 'December 2, 1980',
      size: 1750716,
      video: 'zgzqwBIJuTE',
      desc: "Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current path for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues."
    },
    {
      state: 'Alaska',
      name: 'Lake Clark',
      code: 'lacl',
      year: 'December 2, 1980',
      size: 2619836,
      video: 'Ra8KYD7vVog',
      desc: "Lake Clark National Park is a land of stunning beauty where volcanoes steam, salmon run, bears forage, craggy mountains reflect in shimmering turquoise lakes, and local people and culture still depend on the land and water of their home.  Solitude is found around every bend in the river and shoulder of a mountain.  Venture into the park to become part of the wilderness."
    },
    {
      state: 'Alaska',
      name: 'Wrangell - St. Elias',
      code: 'wrst',
      year: 'December 2, 1980',
      size: 8323146,
      video: 'RPudBkBW9Tk',
      desc: "Wrangell St. Elias is a vast national park that rises from the ocean all the way up to 18,008 ft. Mount St. Elias. At 13.2 million acres, it’s the same size as Yellowstone Nat. Park, Yosemite Nat. Park, and Switzerland combined! Within this wild landscape, people continue to live off the land as they have done for centuries. This is a rugged, beautiful area filled with opportunities for adventure."
    },
    {
      state: 'American Samoa',
      name: 'American Samoa',
      code: 'npsa',
      year: 1980,
      size: 8256,
      video: 'mB4_KRMXLf0',
      desc: 'The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.'
    },
    {
      state: 'Arizona',
      name: 'Grand Canyon',
      code: 'grca',
      year: 1919,
      size: 1201647,
      video: 'bEVEsIW4OXo',
      desc: "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size \n\nThe South Rim of the park is open all year \nThe North Rim of the park is closed for winter. \nThe North Rim reopens on May 15 for the 2017 Season"
    },
    {
      state: 'Arizona',
      name: 'Petrified Forest',
      code: 'pefo',
      year: 1962,
      size: 221416,
      video: '068GcVD3VaE',
      desc: "Did you know that Petrified Forest is more spectacular than ever? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin and little known areas like the Martha's Butte. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!"
    },
    {
      state: 'Arizona',
      name: 'Saguaro',
      code: 'sagu',
      year: 'October 14, 1994',
      size: 91442,
      video: 'DevwfwfjRoE',
      desc: "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset."
    },
    {
      state: 'Arkansas',
      name: 'Hot Springs',
      code: 'hosp',
      year: 1921,
      size: 5549,
      video: 'x-XWxtED9k4',
      desc: "Water. That's what first attracted people, and they have been coming here ever since to use these soothing thermal waters to heal and relax. Rich and poor alike came for the baths, and a thriving city built up around the hot springs. Together nicknamed \"The American Spa,\" Hot Springs National Park today surrounds the north end of the city of Hot Springs, Arkansas. Come discover it for yourself."
    },
    {
      state: 'California',
      name: 'Channel Islands',
      code: 'chis',
      year: 1980,
      size: 249561,
      video: 'AURiyMmwtOU',
      desc: "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was."
    },
    {
      state: 'California',
      name: 'Death Valley',
      code: 'deva',
      year: 1994,
      size: 3373063,
      video: 'X6PRC6PYolk',
      desc: "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley."
    },
    {
      state: 'California',
      name: 'Joshua Tree',
      code: 'jotr',
      year: 1994,
      size: 790635,
      video: 'UKdIeBsvOqQ',
      desc: "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself."
    },
    {
      state: 'California',
      name: 'Kings Canyon',
      code: 'seki',
      year: 1940,
      size: 461901,
      video: 'zHS2Fqj3gKE',
      desc: "This dramatic landscape testifies to nature's size, beauty, and diversity--huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. These two parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'. Sequoias grow at 5,000 - 7,000', above usual snowline."
    },
    {
      state: 'California',
      name: 'Lassen Volcanic',
      code: 'lavo',
      year: 'August 9, 1916',
      size: 106589,
      video: 'WU_W5rP7ZIw',
      desc: "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land. Lassen Volcanic offers opportunities to discover the wonder and mysteries of volcanoes and hot water for visitors willing to explore the undiscovered."
    },
    {
      state: 'California',
      name: 'Pinnacles',
      code: 'pinn',
      year: 'January 10, 2013',
      size: 26685,
      video: 'o-3FY5ijhVI',
      desc: "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor."
    },
    {
      state: 'California',
      name: 'Redwood',
      code: 'redw',
      year: 'October 2, 1968',
      size: 138999,
      video: 'JPEvDQLezyc',
      desc: "Most people know Redwood as home to the tallest trees on Earth. The parks also protect vast prairies, oak woodlands, wild riverways, and nearly 40 miles of rugged coastline.  For thousands of years people have lived in this verdant landscape.  Together, the National Park Service and California State Parks manage these lands for the inspiration, enjoyment, and education of all."
    },
    {
      state: 'California',
      name: 'Sequoia',
      code: 'seki',
      year: 'September 25, 1890',
      size: 404062,
      video: 'zHS2Fqj3gKE',
      desc: "This dramatic landscape testifies to nature's size, beauty, and diversity--huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. These two parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'. Sequoias grow at 5,000 - 7,000', above usual snowline."
    },
    {
      state: 'California',
      name: 'Yosemite',
      code: 'yose',
      year: 'October 1, 1890',
      size: 761347,
      video: 'HTj2BF5HmXo',
      desc: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.\n\nFirst protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more."
    },
    {
      state: 'Colorado',
      name: 'Black Canyon of the Gunnison',
      code: 'blca',
      year: 'October 21, 1999',
      size: 30750,
      video: 'UaHE41qrKoU',
      desc: "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky."
    },
    {
      state: 'Colorado',
      name: 'Great Sand Dunes',
      code:'grsa',
      year: 'September 13, 2004',
      size: 107301,
      video: 'HPb2IwY9Anw',
      desc: "The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, conifer and aspen forests, alpine lakes, and tundra. Experience this diversity through hiking, sand sledding, splashing in Medano Creek, wildlife watching, and more!"    },
    {
      state: 'Colorado',
      name: 'Mesa Verde',
      code: 'meve',
      year: 'June 29, 1906',
      size: 52485,
      video: 'kxsbbc2jjmI',
      desc: "Mesa Verde, Spanish for green table, offers a spectacular look into the lives of the Ancestral Pueblo people who made it their home for over 700 years, from AD 600 to 1300. Today the park protects nearly 5,000 known archeological sites, including 600 cliff dwellings. These sites are some of the most notable and best preserved in the United States."    },
    {
      state: 'Colorado',
      name: 'Rocky Mountain',
      code: 'romo',
      year: 'January 26, 1915',
      size: 265795,
      video: 'G9RKO1-Ocyg',
      desc: "Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!"    },
    {
      state: 'Florida',
      name: 'Biscayne',
      code: 'bisc',
      year: 'June 28, 1980',
      size: 172971,
      video: '8RySPj62S_E',
      desc: "Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay."    },
    {
      state: 'Florida',
      name: 'Dry Tortugas',
      code: 'drto',
      year: 'October 26, 1992',
      size: 64701,
      video: 'K5B-zztAV0E',
      desc: "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. The 100-square mile park is mostly open water with seven small islands.  Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life,   and the vast assortment of bird life that frequent the area."    },
    {
      state: 'Florida',
      name: 'Everglades',
      code: 'ever',
      year: 'May 30, 1947',
      size: 1508975,
      video: 'BDHWpkcpvPo',
      desc: "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther.\n\nAn international treasure as well -  a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty."    },
    {
      state: 'Hawaii',
      name: 'Haleakala',
      code: 'hale',
      year: 'August 1, 1916',
      size: 33264,
      video: '4V8pafcvYiY',
      desc: "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry."    },
    {
      state: 'Hawaii',
      name: 'Hawaii Volcanoes',
      code: 'havo',
      year: 'August 1, 1916',
      size: 323431,
      video: 'dh2Z6s68R0s',
      desc: "Volcanoes are monuments to Earth's origin, evidence that its primordial forces are still at work. During a volcanic eruption, we are reminded that our planet is an ever-changing environment whose basic processes are beyond human control. As much as we have altered the face of the Earth to suit our needs, we can only stand in awe before the power of an eruption."    
    },
    {
      state: 'Idaho, Montana, Wyoming',
      name: 'Yellowstone',
      code: 'yell',
      year: 'March 1, 1872',
      size: 2219790,
      video: 'DY9OIg03SI8',
      desc: ''
    },
    {
      state: 'Kentucky',
      name: 'Mammoth Cave',
      code: 'maca',
      year: 'July 1, 1941',
      size: 52830,
      video: 'fTNlZl7-s4w',
      desc: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people."    
    },
    {
      state: 'Maine',
      name: 'Acadia',
      code: 'acad',
      year: 'February 26, 1919',
      size: 48995,
      video: 'MQTA8HU07zc',
      desc: 'Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.'
    },
    {
      state: 'Michigan',
      name: 'Isle Royale',
      code: 'isro',
      year: 'April 3, 1940',
      size: 571790,
      video: '31dwiXJX22U',
      desc: "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers unparalleled solitude and adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime."    },
    {
      state: 'Minnesota',
      name: 'Voyageurs',
      code: 'voya',
      year: 'January 8, 1975',
      size: 218200,
      video: 'jkRRu6qlj6k',
      desc: "Voyageurs National Park lies within the heart of the North American Continent.  Here you can see and touch rocks half as old as the world, experience the life of a voyageur, immerse yourself in the sights and sounds of a boreal forest, view the dark skies, or ply the interconnected water routes.\n\nLeave your car behind and set out on the water highways of the North Woods."    },
    {
      state: 'Montana',
      name: 'Glacier',
      code: 'glac',
      year: 'May 11, 1910',
      size: 1013324,
      video: 'LNquUapZ_Sg',
      desc: "As the Crown of the Continent, Glacier is the headwaters for streams that flow to the Pacific Ocean, the Gulf of Mexico, and to Hudson's Bay. What happens here affects waters in a huge section of North America. Due to a detection of invasive mussel populations in central Montana, Glacier has closed all park waters to boating until further notice. Please see the press release for further details."    },
    {
      state: 'Nevada',
      name: 'Great Basin',
      code: 'grba',
      year: 'October 27, 1986',
      size: 77180,
      video: 'fXIruBaCezo',
      desc: "From the 13,000-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here!"    },
    {
      state: 'New Mexico',
      name: 'Carlsbad Caverns',
      code: 'cave',
      year: 'May 14, 1930',
      size: 46766,
      video: 'UvxOy-6BWrs',
      desc: "High ancient sea ledges, deep rocky canyons, flowering cactus and desert wildlife - treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 known caves - all formed when sulfuric acid dissolved the surrounding limestone leaving behind caverns of all sizes."    },
    {
      state: 'North Carolina, Tennessee',
      name: 'Great Smoky Mountains',
      code: 'grsm',
      year: 'June 15, 1934',
      size: 522426,
      video: 'DVq5Vu3J2sY',
      desc: "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park."    },
    {
      state: 'North Dakota',
      name: 'Theodore Roosovelt',
      code: 'thro',
      year: 'November 10, 1978',
      size: 70447,
      video: 'bLyJNwN1rOY',
      desc: "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today."    },
    {
      state: 'Ohio',
      name: 'Cuyahoga Valley',
      code: 'cuva',
      year: 'October 11, 2000',
      size: 32950,
      video: 'Vvb3oV63CIM',
      desc: "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal."    },
    {
      state:'Oregon',
      name: 'Crater Lake',
      code: 'crla',
      year: 'May 22, 1902',
      size: 183224,
      video: 'qbH5--nwxdk',
      desc: "Crater Lake inspires awe. Native Americans witnessed it form 7,700 years ago, when a violent eruption triggered the collapse of a towering volcano. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and perhaps the most pristine on earth. Artists, photographers, and sightseers stand in wonder at its blue water and stunning setting. Come visit, and be amazed!"    },
    {
      state: 'South Carolina',
      name: 'Congaree',
      code: 'cong',
      year: 'November 10, 2003',
      size: 26276,
      video: 'epQyvVL6yh8',
      desc: "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States.   Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees."    },
    {
      state: 'South Dakota',
      name: 'Badlands',
      code: 'badl',
      year: 'November 10, 1978',
      size: 242756,
      video: '68zB8xM8GLo',
      desc: "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today."    },
    {
      state: 'South Dakota',
      name: 'Wind Cave',
      code: 'wica',
      year: 'January 9, 1903',
      size: 33923,
      video: 'SkAxHMB1g6Y',
      desc: "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere."    },
    { state: 'Texas',
      name: 'Big Bend',
      code: 'bibe',
      year: 'June 12, 1944',
      size: 801163,
      video: 'D8X5w24VD1M',
      desc: ''
    },
    {
      state: 'Tennessee',
      name: 'Guadalupe Mountains',
      code: 'gumo',
      year: 'October 15, 1966',
      size: 86367,
      video: '3rPuCEaxWAo',
      desc: "Guadalupe Mountains National Park is the world's premier example of a fossil reef from the Permian Era.  The park is known for its extensive hiking and backpacking opportunities in one of the nation's most pristine wilderness areas.  Birding, history, and many other opportunities to learn and have fun await visitors in this hidden gem of West Texas."    },
    {
      state: 'US Virgin Islands',
      name: 'Virgin Islands',
      code: 'viis',
      year: 'August 2, 1956',
      size: 14948,
      video: 'ZRsh09cu7cY',
      desc: "Virgin Islands National Park’s hills, valleys and beaches are breathtaking. However, within its 7,000 plus acres on the island of St. John is the complex history of civilizations - both free and enslaved - dating back more than a thousand years, all who utilized the land and the sea for survival. Use the links below to learn about the history, culture and resources of Virgin Islands National Park."    },
    {
      state: 'Utah',
      name: 'Arches',
      code: 'arch',
      year: 'November 12, 1971',
      size: 76679,
      video: 'WNu1VGl416U',
      desc: "Visit Arches and discover a landscape of contrasting colors, landforms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets."    },
    {
      state: 'Utah',
      name: 'Bryce Canyon',
      code: 'brca',
      year: 'February 25, 1928',
      size: 35835,
      video: 'p7kC0EpClCM',
      desc: "There is no place like Bryce Canyon. Hoodoos (odd-shaped pillars of rock left standing from the forces of erosion) can be found on every continent, but here is the largest collection of hoodoos in the world! Descriptions fail. Photographs do not do it justice. Bring your sense of wonder and imagination when visiting Bryce Canyon National Park."    },
    {
      state: 'Utah',
      name: 'Capitol Reef',
      code: 'care',
      year: 'December 18, 1971',
      size: 241904,
      video: 'TmD0C6mdFmE',
      desc: "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles."  
    },
    {
      state: 'Utah',
      name: 'Canyonlands',
      code: 'cany',
      year: 'September 12, 1964',
      size: 337597,
      video: 'EYcyplCWlTg',
      desc: "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure."    },
    {
      state: 'Utah',
      name: 'Zion',
      code: 'zion',
      year: 'November 19, 1919',
      size: 147237,
      video: 'XrF1cSzaeAY',
      desc: "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures."    },
    {
      state: 'Virginia',
      name: 'Shenandoah',
      code: 'shen',
      year: 'May 22, 1935',
      size: 199116,
      video: '7BFuJcxexSM',
      desc: "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is your escape to recreation and re-creation. Cascading waterfalls, spectacular vistas, quiet wooded hollows—take a hike, meander along Skyline Drive, or picnic with the family. 200,000 acres of protected lands are haven to deer, songbirds, the night sky…and you. Plan a Shenandoah escape today!"    },
    {
      state: 'Washington',
      name: 'Mount Rainier',
      code: 'mora',
      year: 'March 2, 1899',
      size: 236381,
      video: 'i9efn8wc3_Q',
      desc: ''
    },
    {
      state: 'Washington',
      name: 'North Cascades',
      code: 'noca',
      year: 'October, 1968',
      size: 501780,
      video: 'vmTvQeVZWo8',
      desc: "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning six major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits."    },
    {
      state: 'Washington',
      name: 'Olympic',
      code: 'olym',
      year: 'June 29, 1938',
      size: 922650,
      video: '3nXdFzgzUQw',
      desc: "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!"    },
    {
      state: 'Wyoming',
      name: 'Grand Teton',
      code: 'grte',
      year: 'February 26, 1929',
      size: 310043,
      video: 'RLaovLlTllM',
      desc: "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River or enjoy the serenity of this remarkable place."    }
]


// Data Helpers 

const findPark = function(query) {
  let result = parks.find((park) => park.name === query);
  return result;
};


export default {parks: parks, findPark: findPark}









