interface Agency {
  name: string;
  description?: string;
  county?: string;
  wikiUrl?: string;
  website?: string;
}

const stateAgencies: Agency[] = [
  {
    name: 'California Department of Justice',
    wikiUrl: 'https://en.wikipedia.org/wiki/California_Department_of_Justice',
  },
  { name: 'Division of Law Enforcement' },
  {
    name: 'California Bureau of Investigation',
    wikiUrl: 'https://en.wikipedia.org/wiki/California_Bureau_of_Investigation',
  },
  {
    name: 'California Bureau of Firearms',
    wikiUrl: 'https://en.wikipedia.org/wiki/California_Bureau_of_Firearms',
  },
  {
    name: 'California Bureau of Forensic Services',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Justice#Bureau_of_Forensic_Services',
  },
  {
    name: 'California Bureau of Gambling Control',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Bureau_of_Gambling_Control',
  },
  {
    name: 'Division of Medi-Cal Fraud & Elder Abuse',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Justice#Division_of_Medi-Cal_Fraud_&_Elder_Abuse',
  },
  {
    name: 'California Department of Corrections and Rehabilitation',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Corrections_and_Rehabilitation',
  },
  {
    name: 'Business, Consumer Services and Housing Agency',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Business,_Consumer_Services_and_Housing_Agency',
  },
  {
    name: 'California Department of Alcoholic Beverage Control',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Alcoholic_Beverage_Control',
  },
  {
    name: 'California Department of Consumer Affairs Division of Investigation',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Consumer_Affairs',
  },
  {
    name: 'California Resources Agency',
  },
  {
    name: 'California Department of Fish and Wildlife',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Fish_and_Wildlife',
  },
  {
    name: 'California Natural Resources Agency',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Natural_Resources_Agency',
  },
  {
    name: 'California State Parks Peace Officers',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_State_Parks_Peace_Officer',
  },
  {
    name: 'California Environmental Protection Agency',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Environmental_Protection_Agency',
  },
  {
    name: 'California Department of Toxic Substances Control',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Toxic_Substances_Control',
  },
  {
    name: 'California State Transportation Agency',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_State_Transportation_Agency',
  },
  {
    name: 'California Department of Motor Vehicles Investigations Division',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Motor_Vehicles',
  },
  {
    name: 'California Highway Patrol',
    wikiUrl: 'https://en.wikipedia.org/wiki/California_Highway_Patrol',
  },
  {
    name: 'California Department of Insurance Fraud Division',
    wikiUrl: 'https://en.wikipedia.org/wiki/California_Department_of_Insurance',
  },
  {
    name: 'California Government Operations Agency',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Government_Operations_Agency',
  },
  {
    name: 'California Franchise Tax Board Criminal Investigations Bureau (CFTB-CIB)',
    website:
      'https://www.ftb.ca.gov/about-ftb/newsroom/tax-news/february-2022/criminal-investigation-bureau.html',
  },
  {
    name: 'California Lottery Security Law Enforcement Division',
    website: 'https://www.calottery.com/en/lottery-investigator',
  },
  {
    name: 'California Health and Human Services Agency',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Health_and_Human_Services_Agency',
  },
  {
    name: 'California Department of Health Care Services',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Health_Care_Services',
  },
  {
    name: 'California Department of Public Health',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Public_Health',
  },
  {
    name: 'Office of Protective Services',
    website: 'https://www.dsh.ca.gov/Law_Enforcement/index.html',
  },
  {
    name: 'California Department of Developmental Services Office of Protective Services',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Department_of_Developmental_Services',
    website: 'https://www.dds.ca.gov/services/state-facilities/ops/',
  },
  {
    name: 'California Labor and Workforce Development Agency',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Labor_and_Workforce_Development_Agency',
  },
  {
    name: 'California Employment Development Department Investigation Division',
    website: 'https://edd.ca.gov/en/about_edd/fraud-response/',
  },
];

const countyAgencies: Agency[] = [
  {
    name: "Alameda County Sheriff's Office",
    wikiUrl: 'https://en.wikipedia.org/wiki/Alameda_County_Sheriff%27s_Office',
  },
  { name: 'Alameda County Probation Department' },
  { name: "Alpine County Sheriff's Office" },
  { name: "Amador County Sheriff's Office" },
  { name: "Butte County Sheriff's Department" },
  { name: "Calaveras County Sheriff's Department" },
  { name: "Colusa County Sheriff's Office" },
  { name: "Contra Costa County Sheriff's Office" },
  { name: "Del Norte County Sheriff's Office" },
  { name: "El Dorado County Sheriff's Office" },
  {
    name: "Fresno County Sheriff's Office",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Fresno_County,_California#County_Sheriff',
  },
  { name: "Glenn County Sheriff's Office" },
  { name: "Humboldt County Sheriff's Office" },
  { name: "Imperial County Sheriff's Office" },
  { name: "Inyo County Sheriff's Office" },
  {
    name: "Kern County Sheriff's Office",
    wikiUrl: 'https://en.wikipedia.org/wiki/Kern_County_Sheriff%27s_Office',
  },
  { name: 'Kern County Probation Department' },
  { name: 'Kern County Parks and Recreation Park Rangers' },
  { name: "Kings County Sheriff's Office" },
  { name: "Lake County Sheriff's Department" },
  { name: "Lassen County Sheriff's Office" },
  {
    name: "Los Angeles County Sheriff's Department (LASD)",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Los_Angeles_County_Sheriff%27s_Department',
  },
  {
    name: 'Los Angeles County Probation Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Los_Angeles_County_Probation_Department',
  },
  { name: "Madera County Sheriff's Department" },
  { name: "Marin County Sheriff's Office" },
  { name: "Mariposa County Sheriff's Department" },
  { name: "Mendocino County Sheriff's Office" },
  { name: "Merced County Sheriff's Office" },
  { name: "Modoc County Sheriff's Office" },
  { name: "Mono County Sheriff's Department" },
  {
    name: "Monterey County Sheriff's Office",
    wikiUrl: 'https://en.wikipedia.org/wiki/Monterey_County_Sheriff%27s_Office',
  },
  { name: "Napa County Sheriff's Department" },
  { name: "Nevada County Sheriff's Office" },
  {
    name: "Orange County Sheriff's Department",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Orange_County_Sheriff%27s_Department',
  },
  { name: "Placer County Sheriff's Office" },
  { name: "Plumas County Sheriff's Office" },
  {
    name: "Riverside County Sheriff's Department",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Riverside_County_Sheriff%27s_Department',
  },
  {
    name: "Sacramento County Sheriff's Office",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Sacramento_County_Sheriff%27s_Office',
  },
  { name: 'Sacramento County Park Rangers' },
  { name: "San Benito County Sheriff's Office" },
  {
    name: "San Bernardino County Sheriff's Department",
    wikiUrl:
      'https://en.wikipedia.org/wiki/San_Bernardino_County_Sheriff%27s_Department',
  },
  { name: 'San Bernardino County Probation Department' },
  {
    name: "San Diego County Sheriff's Office",
    wikiUrl:
      'https://en.wikipedia.org/wiki/San_Diego_County_Sheriff%27s_Office',
  },
  { name: 'San Diego County Probation Department' },
  {
    name: "San Francisco Sheriff's Office",
    wikiUrl: 'https://en.wikipedia.org/wiki/San_Francisco_Sheriff%27s_Office',
  },
  {
    name: "San Joaquin County Sheriff's Department",
    wikiUrl:
      'https://en.wikipedia.org/wiki/San_Joaquin_County_Sheriff%27s_Department',
  },
  { name: "San Luis Obispo County Sheriff's Department" },
  { name: "San Mateo County Sheriff's Office" },
  { name: "Santa Barbara County Sheriff's Office" },
  {
    name: "Santa Clara County Sheriff's Office",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Santa_Clara_County_Sheriff%27s_Office',
  },
  {
    name: 'Santa Clara County Park Rangers',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Santa_Clara_County_Parks_and_Recreation_Department',
  },
  { name: 'Santa Clara County Department of Correction' },
  { name: "Santa Cruz County Sheriff's Office" },
  { name: "Shasta County Sheriff's Office" },
  { name: "Shasta County Marshal's Office" },
  { name: "Sierra County Sheriff's Office" },
  { name: "Siskiyou County Sheriff's Department" },
  { name: "Solano County Sheriff's Office" },
  {
    name: "Sonoma County Sheriff's Department",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Sonoma_County,_California#Law_enforcement',
  },
  { name: 'Sonoma County Park Rangers' },
  {
    name: "Stanislaus County Sheriff's Department",
    wikiUrl:
      'https://en.wikipedia.org/wiki/Stanislaus_County_Sheriff%27s_Department',
  },
  { name: "Sutter County Sheriff's Department" },
  { name: "Tehama County Sheriff's Office" },
  { name: "Trinity County Sheriff's Department" },
  { name: "Trinity County Marshal's Office" },
  {
    name: "Tulare County Sheriff's Office",
    wikiUrl: 'https://en.wikipedia.org/wiki/Tulare_County_Sheriff%27s_Office',
  },
  { name: "Tuolumne County Sheriff's Office" },
  {
    name: "Ventura County Sheriff's Office",
    wikiUrl: 'https://en.wikipedia.org/wiki/Ventura_County_Sheriff%27s_Office',
  },
  { name: "Yolo County Sheriff's Department" },
  { name: "Yuba County Sheriff's Department" },
];

const municipalAgencies: Agency[] = [
  { name: 'Alameda Police Department' },
  { name: 'Albany Police Department' },
  { name: 'Alhambra Police Department' },
  { name: 'Alturas Police Department' },
  { name: 'Anaheim Police Department' },
  { name: 'Anderson Police Department' },
  { name: 'Angels Camp Police Department' },
  {
    name: 'Antioch Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Antioch_Police_Department',
  },
  {
    name: 'Arcadia Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Arcadia_Police_Department',
  },
  { name: 'Arcata Police Department' },
  { name: 'Arroyo Grande Police Department' },
  { name: 'Arvin Police Department' },
  { name: 'Atascadero Police Department' },
  { name: 'Atherton Police Department' },
  { name: 'Atwater Police Department' },
  { name: 'Auburn Police Department' },
  { name: 'Avenal Police Department' },
  { name: 'Azusa Police Department' },
  {
    name: 'Bakersfield Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bakersfield_Police_Department',
  },
  { name: 'Baldwin Park Police Department' },
  { name: 'Banning Police Department' },
  { name: 'Barstow Police Department' },
  { name: 'Bear Valley Police Department' },
  { name: 'Beaumont Police Department' },
  { name: 'Bell Police Department' },
  { name: 'Bell Gardens Police Department' },
  { name: 'Belmont Police Department' },
  { name: 'Belvedere Police Department' },
  { name: 'Benicia Police Department' },
  {
    name: 'Berkeley Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Berkeley_Police_Department',
  },
  {
    name: 'Beverly Hills Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Beverly_Hills_Police_Department',
  },
  { name: 'Bishop Police Department' },
  { name: 'Blythe Police Department' },
  { name: 'Brawley Police Department' },
  { name: 'Brea Police Department' },
  {
    name: 'Brentwood Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Brentwood,_California#Brentwood_Police_Department_(BPD)',
  },
  { name: 'Brisbane Police Department' },
  { name: 'Buena Park Police Department' },
  { name: 'Burbank Police Department' },
  { name: 'Burlingame Police Department' },
  { name: 'Calexico Police Department' },
  { name: 'California City Police Department' },
  { name: 'Calipatria Police Department' },
  { name: 'Calistoga Police Department' },
  { name: 'Campbell Police Department' },
  { name: 'Capitola Police Department' },
  { name: 'Carlsbad Police Department' },
  { name: 'Carmel Police Department' },
  { name: 'Cathedral City Police Department' },
  {
    name: 'Central Marin Police Authority',
    description:
      'Joint powers agency comprising the cities of Corte Madera, Larkspur, and San Anselmo',
    wikiUrl: 'https://en.wikipedia.org/wiki/Central_Marin_Police_Authority',
  },
  { name: 'Ceres Police Department' },
  { name: 'Chico Police Department' },
  { name: 'Chino Police Department' },
  { name: 'Chowchilla Police Department' },
  {
    name: 'Chula Vista Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Chula_Vista_Police_Department',
  },
  { name: 'Citrus Heights Police Department' },
  { name: 'Claremont Police Department' },
  { name: 'Clayton Police Department' },
  { name: 'Clearlake Police Department' },
  { name: 'Cloverdale Police Department' },
  { name: 'Clovis Police Department' },
  { name: 'Coalinga Police Department' },
  { name: 'Colma Police Department' },
  { name: 'Colton Police Department' },
  { name: 'Colusa Police Department' },
  { name: 'Concord Police Department' },
  { name: 'Corcoran Police Department' },
  { name: 'Corning Police Department' },
  { name: 'Corona Police Department' },
  { name: 'Coronado Police Department' },
  {
    name: 'Costa Mesa Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Costa_Mesa_Police_Department',
  },
  { name: 'Cotati Police Department' },
  { name: 'Covina Police Department' },
  { name: 'Crescent City Police Department' },
  {
    name: 'Culver City Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Culver_City_Police_Department',
  },
  { name: 'Cypress Police Department' },
  { name: 'Daly City Police Department' },
  { name: 'Davis Police Department' },
  { name: 'Del Rey Oaks Police Department' },
  {
    name: 'Delano Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Delano_Police_Department',
  },
  { name: 'Desert Hot Springs Police Department' },
  { name: 'Dinuba Police Department' },
  { name: 'Dixon Police Department' },
  { name: 'Dos Pablos Police Department' },
  { name: 'Downey Police Department' },
  { name: 'East Palo Alto Police Department' },
  {
    name: 'El Cajon Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/El_Cajon_Police_Department',
  },
  { name: 'El Centro Police Department' },
  { name: 'El Cerrito Police Department' },
  { name: 'El Monte Police Department' },
  { name: 'El Segundo Police Department' },
  { name: 'Elk Grove Police Department' },
  { name: 'Emeryville Police Department' },
  { name: 'Escalon Police Department' },
  { name: 'Escondido Police Department' },
  { name: 'Etna Police Department' },
  { name: 'Eureka Police Department' },
  { name: 'Exeter Police Department' },
  { name: 'Fairfax Police Department' },
  { name: 'Fairfield Police Department' },
  { name: 'Farmersville Police Department' },
  { name: 'Ferndale Police Department' },
  { name: 'Firebaugh Police Department' },
  { name: 'Folsom Police Department' },
  {
    name: 'Fontana Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Fontana,_California#Law_enforcement',
  },
  { name: 'Fort Bragg Police Department' },
  { name: 'Fortuna Police Department' },
  { name: 'Foster City Police Department' },
  { name: 'Fountain Valley Police Department' },
  { name: 'Fowler Police Department' },
  { name: 'Fremont Police Department' },
  {
    name: 'Fresno Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Fresno_Police_Department',
  },
  {
    name: 'Fullerton Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Fullerton_Police_Department',
  },
  { name: 'Galt Police Department' },
  { name: 'Garden Grove Police Department' },
  { name: 'Gardena Police Department' },
  { name: 'Gilroy Police Department' },
  { name: 'Glendale Police Department' },
  { name: 'Glendora Police Department' },
  { name: 'Gonzales Police Department' },
  { name: 'Grass Valley Police Department' },
  { name: 'Greenfield Police Department' },
  { name: 'Gridley Police Department' },
  { name: 'Grover Beach Police Department' },
  { name: 'Guadalupe Police Department' },
  { name: 'Gustine Police Department' },
  { name: 'Hanford Police Department' },
  {
    name: 'Hawthorne Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Hawthorne_Police_Department',
  },
  { name: 'Hayward Police Department' },
  { name: 'Healdsburg Police Department' },
  { name: 'Hemet Police Department' },
  { name: 'Hercules Police Department' },
  { name: 'Hermosa Beach Police Department' },
  { name: 'Hillsborough Police Department' },
  { name: 'Hollister Police Department' },
  { name: 'Huntington Beach Police Department' },
  { name: 'Huntington Park Police Department' },
  { name: 'Huron Police Department' },
  { name: 'Imperial Police Department' },
  { name: 'Indio Police Department' },
  { name: 'Inglewood Police Department' },
  { name: 'Ione Police Department' },
  {
    name: 'Irvine Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Irvine_Police_Department',
  },
  { name: 'Irwindale Police Department' },
  { name: 'Jackson Police Department' },
  { name: 'Kensington Police Department' },
  { name: 'Kerman Police Department' },
  { name: 'King City Police Department' },
  { name: 'Kingsburg Police Department' },
  { name: 'La Habra Police Department' },
  { name: 'La Mesa Police Department' },
  { name: 'La Palma Police Department' },
  { name: 'La Verne Police Department' },
  { name: 'Laguna Beach Police Department' },
  { name: 'Lakeport Police Department' },
  { name: 'Lathrop Police Department' },
  { name: 'Lemoore Police Department' },
  { name: 'Lincoln Police Department' },
  { name: 'Lindsay Department of Public Safety' },
  { name: 'Livermore Police Department' },
  { name: 'Livingston Police Department' },
  { name: 'Lodi Police Department' },
  { name: 'Lompoc Police Department' },
  {
    name: 'Long Beach Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Long_Beach_Police_Department_(California)',
  },
  { name: 'Los Alamitos Police Department' },
  { name: 'Los Altos Police Department' },
  {
    name: 'Los Angeles Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Los_Angeles_Police_Department',
  },
  {
    name: 'Los Angeles Bureau of Street Services, Investigation and Enforcement Division',
  },
  {
    name: 'Los Angeles Sanitation and Environmental, Compliance and Enforcement Division',
  },
  { name: 'Los Banos Police Department' },
  {
    name: 'Los Gatos/Monte Sereno Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Los_Gatos/Monte_Sereno_Police_Department',
  },
  { name: 'Madera Police Department' },
  { name: 'Mammoth Lakes Police Department' },
  { name: 'Manhattan Beach Police Department' },
  { name: 'Manteca Police Department' },
  { name: 'Marina Police Department' },
  { name: 'Martinez Police Department' },
  { name: 'Marysville Police Department' },
  { name: 'McFarland Police Department' },
  { name: 'Mendota Police Department' },
  { name: 'Menifee Police Department' },
  { name: 'Menlo Park Police Department' },
  { name: 'Maricopa Police Department' },
  { name: 'Merced Police Department' },
  { name: 'Mill Valley Police Department' },
  { name: 'Milpitas Police Department' },
  { name: 'Modesto Police Department' },
  { name: 'Monrovia Police Department' },
  { name: 'Montclair Police Department' },
  { name: 'Montebello Police Department' },
  { name: 'Monterey Police Department' },
  { name: 'Monterey Park Police Department' },
  { name: 'Moraga Police Department' },
  { name: 'Morgan Hill Police Department' },
  { name: 'Morro Bay Police Department' },
  { name: 'Mount Shasta Police Department' },
  { name: 'Mountain View Police Department' },
  { name: 'Murrieta Police Department' },
  { name: 'Napa Police Department' },
  { name: 'National City Police Department' },
  { name: 'Nevada City Police Department' },
  { name: 'Newark Police Department' },
  { name: 'Newman Police Department' },
  { name: 'Newport Beach Police Department' },
  { name: 'Novato Police Department' },
  { name: 'Oakdale Police Department' },
  {
    name: 'Oakland Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Oakland_Police_Department',
  },
  { name: 'Oakland Housing Authority Police Department' },
  { name: 'Oakley Police Department' },
  { name: 'Oceanside Police Department' },
  { name: 'Ontario Police Department' },
  { name: 'Orange Police Department' },
  { name: 'Orange Cove Police Department' },
  { name: 'Orland Police Department' },
  { name: 'Oroville Police Department' },
  { name: 'Oxnard Police Department' },
  { name: 'Pacific Grove Police Department' },
  { name: 'Pacifica Police Department' },
  {
    name: 'Palm Springs Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Palm_Springs_Police_Department',
  },
  { name: 'Palo Alto Police Department' },
  { name: 'Palos Verdes Estates Police Department' },
  { name: 'Paradise Police Department' },
  { name: 'Parlier Police Department' },
  {
    name: 'Pasadena Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Pasadena_Police_Department_(California)',
  },
  { name: 'Paso Robles Police Department' },
  { name: 'Petaluma Police Department' },
  { name: 'Piedmont Police Department' },
  { name: 'Pinole Police Department' },
  { name: 'Pismo Beach Police Department' },
  { name: 'Pittsburg Police Department' },
  { name: 'Placentia Police Department' },
  { name: 'Placerville Police Department' },
  { name: 'Pleasant Hill Police Department' },
  { name: 'Pleasanton Police Department' },
  { name: 'Pomona Police Department' },
  { name: 'Port Hueneme Police Department' },
  { name: 'Porterville Police Department' },
  { name: 'Red Bluff Police Department' },
  { name: 'Redding Police Department' },
  { name: 'Redlands Police Department' },
  { name: 'Redondo Beach Police Department' },
  { name: 'Redwood City Police Department' },
  { name: 'Reedley Police Department' },
  {
    name: 'Rialto Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Rialto_Police_Department',
  },
  { name: 'Richmond Police Department' },
  {
    name: 'Ridgecrest Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Ridgecrest_Police_Department',
  },
  { name: 'Rio Dell Police Department' },
  { name: 'Ripon Police Department' },
  {
    name: 'Riverside Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Riverside_Police_Department',
  },
  { name: 'Rocklin Police Department' },
  {
    name: 'Rohnert Park Department of Public Safety',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Rohnert_Park,_California#Department_of_Public_Safety',
  },
  { name: 'Roseville Police Department' },
  { name: 'Ross Police Department' },
  {
    name: 'Sacramento Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Sacramento_Police_Department',
  },
  { name: 'Salinas Police Department' },
  { name: 'San Bernardino Police Department' },
  { name: 'San Bruno Police Department' },
  { name: 'San Carlos Police Department' },
  {
    name: 'San Diego Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/San_Diego_Police_Department',
  },
  { name: 'San Fernando Police Department' },
  {
    name: 'San Francisco Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/San_Francisco_Police_Department',
  },
  { name: 'San Gabriel Police Department' },
  {
    name: 'San Jose Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/San_Jose_Police_Department',
  },
  { name: 'San Leandro Police Department' },
  { name: 'San Luis Obispo Police Department' },
  {
    name: 'San Marino Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/San_Marino_Police_Department',
  },
  { name: 'San Mateo Police Department' },
  { name: 'San Pablo Police Department' },
  { name: 'San Rafael Police Department' },
  { name: 'San Ramon Police Department' },
  { name: 'Sand City Police Department' },
  { name: 'Sanger Police Department' },
  { name: 'Santa Ana Police Department' },
  {
    name: 'Santa Barbara Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Santa_Barbara_Police_Department',
  },
  { name: 'Santa Clara Police Department' },
  { name: 'Santa Cruz Police Department' },
  { name: 'Santa Maria Police Department' },
  { name: 'Santa Monica Police Department' },
  { name: 'Santa Paula Police Department' },
  {
    name: 'Santa Rosa Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Santa_Rosa_Police_Department',
  },
  { name: 'Sausalito Police Department' },
  { name: 'Scotts Valley Police Department' },
  { name: 'Seal Beach Police Department' },
  { name: 'Seaside Police Department' },
  { name: 'Sebastopol Police Department' },
  {
    name: 'Selma Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Selma_Police_Department_(California)',
  },
  { name: 'Shafter Police Department' },
  {
    name: 'Sierra Madre Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Sierra_Madre_Police_Department',
  },
  { name: 'Signal Hill Police Department' },
  {
    name: 'Simi Valley Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Simi_Valley_Police_Department',
  },
  { name: 'Soledad Police Department' },
  { name: 'Sonora Police Department' },
  { name: 'South Gate Police Department' },
  { name: 'South Lake Tahoe Police Department' },
  { name: 'South Pasadena Police Department' },
  { name: 'South San Francisco Police Department' },
  { name: 'St. Helena Police Department' },
  {
    name: 'Stockton Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Stockton,_California#Police_department',
  },
  { name: 'Suisun City Police Department' },
  { name: 'Sunnyvale Department of Public Safety' },
  { name: 'Susanville Police Department' },
  { name: 'Sutter Creek Police Department' },
  { name: 'Taft Police Department' },
  { name: 'Tehachapi Police Department' },
  { name: 'Tiburon Police Department' },
  {
    name: 'Torrance Police Department',
    wikiUrl: 'https://en.wikipedia.org/wiki/Torrance_Police_Department',
  },
  { name: 'Tracy Police Department' },
  { name: 'Truckee Police Department' },
  {
    name: 'Tulare Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Tulare_Police_Department_(California)',
  },
  { name: 'Tulelake Police Department' },
  { name: 'Turlock Police Department' },
  { name: 'Tustin Police Department' },
  { name: 'Ukiah Police Department' },
  { name: 'Union City Police Department' },
  { name: 'Upland Police Department' },
  { name: 'Vacaville Police Department' },
  { name: 'Vallejo Police Department' },
  { name: 'Ventura Police Department' },
  { name: 'Vernon Police Department' },
  { name: 'Visalia Police Department' },
  { name: 'Walnut Creek Police Department' },
  { name: 'Watsonville Police Department' },
  { name: 'Weed Police Department' },
  { name: 'West Covina Police Department' },
  { name: 'West Sacramento Police Department' },
  { name: 'Westminster Police Department' },
  { name: 'Westmoreland Police Department' },
  { name: 'Wheatland Police Department' },
  { name: 'Whittier Police Department' },
  { name: 'Williams Police Department' },
  { name: 'Willits Police Department' },
  { name: 'Winters Police Department' },
  { name: 'Woodlake Police Department' },
  { name: 'Woodland Police Department' },
  { name: 'Yreka Police Department' },
  { name: 'Yuba City Police Department' },
];

const tribalAgencies: Agency[] = [
  { name: 'Bear River Police Department' },
  { name: 'Blue Lake Rancheria Tribal Police Department' },
  { name: 'Cahto Tribal Police Department' },
  { name: 'Hoopa Valley Tribal Police Department' },
  { name: 'Round Valley Tribal Police Department' },
  { name: 'Yurok Tribal Police Department' },
];

const universityAgencies: Agency[] = [
  { name: 'Azusa Pacific University Campus Safety' },
  {
    name: 'California State University police departments',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_State_University_police_departments',
  },
  { name: 'Chapman University Department of Public Safety' },
  {
    name: 'Notre Dame de Namur University Department of Public Safety',
  },
  { name: "Saint Mary's College of California Department of Public Safety" },
  { name: 'Stanford University Department of Public Safety' },
  {
    name: 'University of California police departments',
    wikiUrl:
      'https://en.wikipedia.org/wiki/University_of_California_police_departments',
  },
  { name: 'University of the Pacific Police Department' },
  { name: 'University of San Diego Department of Public Safety' },
  { name: 'University of San Francisco Department of Public Safety' },
  { name: 'University of Southern California Department of Public Safety' },
];

const communityCollegeAgencies: Agency[] = [
  { name: 'Allan Hancock Community College Police Department' },
  { name: 'Antelope Valley College District Police' },
  { name: 'Cerritos Community College Police Department' },
  { name: 'Chaffey College Police Department' },
  { name: 'Coastline Community College District Police Department' },
  { name: 'Coastline Community College Public Safety' },
  { name: 'College of the Sequoias District Police Department' },
  { name: 'Compton College Police Department' },
  { name: 'Contra Costa Community College District Police Services' },
  { name: 'Crafton Hills Community College Police Services' },
  { name: 'Cuesta College Police Department' },
  { name: 'El Camino College Police Department' },
  { name: 'Foothill-De Anza College District Police Department' },
  { name: 'Glendale Community College District Police Department' },
  { name: 'Goldenwest College Public Safety' },
  { name: 'Hartnell College Campus Safety Department' },
  { name: 'Irvine Valley College Police Department' },
  { name: 'Los Rios Community College Police Department' },
  { name: 'Merced Community College Police Department' },
  { name: 'MiraCosta Community College Police Department' },
  { name: 'Napa Valley College Police Department' },
  { name: 'Palomar College Police Department' },
  {
    name: 'Pasadena Area Community College District Police Department',
  },
  { name: 'Riverside Community College District Police' },
  { name: 'Saddleback College Police Department' },
  { name: 'San Bernardino Community College District Police Department' },
  { name: 'San Diego Community College District Police Department' },
  { name: 'San Francisco Community College Police Department' },
  { name: 'San Joaquin Delta College District Police Department' },
  { name: 'San Jose/Evergreen College District Police Department' },
  { name: 'San Mateo Community College District Department of Public Safety' },
  { name: 'Santa Rosa Junior College District Police Department' },
  { name: 'Santa Monica College Police Department' },
  { name: 'Shasta College Campus Safety Department' },
  { name: 'Solano Community College Police Department' },
  {
    name: 'South Orange County Community College District Department of Campus Safety',
  },
  { name: 'Southwestern Community College Police Department' },
  { name: 'State Center Community College District Police Department' },
  { name: 'Ventura County Community College Police Department' },
  { name: 'Victor Valley College Police Department' },
  { name: 'West Valley-Mission Community College District Police' },
  { name: 'Yuba College Police Department' },
];

const k12Agencies: Agency[] = [
  { name: 'Apple Valley Unified School District Police Department' },
  { name: 'Baldwin Park Unified School District Police' },
  { name: 'Clovis Unified School District Police Department' },
  { name: 'Compton Unified School District Police Department' },
  { name: 'El Rancho Unified School District Police Department' },
  { name: 'Elk Grove Unified School District Police Department' },
  { name: 'Fontana Unified School District Police Department' },
  { name: 'Hacienda La Puente Unified School District Police Department' },
  { name: 'Hesperia School District Police Department' },
  { name: 'Huntington Beach Union High School District Police Department' },
  { name: 'Inglewood Unified School District Police Department' },
  { name: 'Kern High School District Police Department' },
  {
    name: 'Los Angeles School Police Department',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Los_Angeles_School_Police_Department',
  },
  { name: 'Long Beach Unified School District School Safety Department' },
  { name: 'Montebello Unified School District Police Department' },
  {
    name: 'Norwalk-La Mirada Unified School District School Safety Department',
  },
  { name: 'San Bernardino City Unified School District Police Department' },
  { name: 'San Diego Unified School District Police Department' },
  { name: 'San José Unified School District Police Department' },
  { name: 'Santa Ana Unified School District Police Department' },
  { name: 'Snowline Joint Unified School District Police Department' },
  { name: 'Stockton Unified School District Police Department' },
  { name: 'Twin Rivers Unified School District Police Department' },
  { name: 'Val Verde Unified School Police Department' },
  { name: 'Victor Valley Union High School District Police Department' },
  { name: 'West Contra Costa Unified School District Police Department' },
];

const specialDistrictAgencies: Agency[] = [
  {
    name: 'Bear Valley Police Department (Bear Valley Community Services District)',
  },
  { name: 'Bethel Island Municipal Improvement District (BIMID)' },
  { name: 'Broadmoor Police Protection District' },
  {
    name: 'Capistrano Bay Police Department (Capistrano Bay Community Services District)',
  },
  { name: 'Kensington Police Protection and Community Services District' },
  { name: 'Lake Shastina Police Department (Lake Shastina C.S.D.)' },
  { name: 'Stallion Springs Police Department' },
  { name: 'Town of Discovery Bay Community Services District (CSD)' },
];

const animalAgencies: Agency[] = [
  {
    name: 'Los Angeles Society for the Prevention of Cruelty to Animals Law Enforcement Division',
  },
  { name: 'San Diego Humane Society Humane Law Enforcement' },
];

const parkAgencies: Agency[] = [
  {
    name: 'California Exposition & State Fair Police (Cal Expo Police)',
    wikiUrl:
      'https://en.wikipedia.org/wiki/California_Exposition_and_State_Fair_Police',
  },
  { name: 'East Bay Regional Park District Police Department' },
  {
    name: 'Exposition Park Department of Public Safety',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Exposition_Park_(urban_park)#Department_of_Public_Safety',
  },
  { name: 'Fulton–El Camino Park Police Department' },
  {
    name: 'Long Beach Park Rangers (enveloped into Long Beach Police Department, disbandment proposed in late 2022)',
  },
  {
    name: 'Los Angeles Park Ranger Division',
    wikiUrl: 'https://en.wikipedia.org/wiki/Los_Angeles_Park_Ranger_Division',
  },
  { name: 'Midpeninsula Regional Open Space District Ranger Division' },
  { name: 'Montebello Park Rangers[citation needed]' },
  { name: 'Monterey County Park Rangers' },
  { name: 'San Francisco Park Patrol[citation needed]' },
  { name: 'Santa Ana Park Rangers' },
];

const transitAgencies: Agency[] = [
  {
    name: 'BART Police',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Bay_Area_Rapid_Transit_Police_Department',
  },
  { name: 'Metropolitan Transit System Police Department' },
  { name: 'Napa Valley Railroad Police Department' },
  { name: 'Sacramento Regional Transit Police' },
];

const airportAgencies: Agency[] = [
  {
    name: 'Burbank-Glendale-Pasadena Airport Authority Police',
    wikiUrl:
      'https://en.wikipedia.org/wiki/Burbank%E2%80%93Glendale%E2%80%93Pasadena_Airport_Authority_Police',
  },
  {
    name: 'Los Angeles Airport Police',
    wikiUrl: 'https://en.wikipedia.org/wiki/Los_Angeles_Airport_Police',
  },
  { name: 'Kern County Airport Police' },
  { name: 'Monterey Peninsula Airport Police' },
  { name: 'Stockton Metropolitan Airport Police' },
];

const portAndHarborAgencies: Agency[] = [
  {
    name: 'Long Beach Harbor Patrol',
    wikiUrl: 'https://en.wikipedia.org/wiki/Long_Beach_Harbor_Patrol',
  },
  {
    name: 'Los Angeles Port Police',
    wikiUrl: 'https://en.wikipedia.org/wiki/Los_Angeles_Port_Police',
  },
  { name: 'Port of San Diego Harbor Police' },
  { name: 'Port of Stockton Police' },
  { name: 'Santa Cruz Harbor Patrol' },
];

export {
  stateAgencies,
  countyAgencies,
  municipalAgencies,
  tribalAgencies,
  universityAgencies,
  communityCollegeAgencies,
  k12Agencies,
  specialDistrictAgencies,
  animalAgencies,
  parkAgencies,
  transitAgencies,
  airportAgencies,
  portAndHarborAgencies,
};
