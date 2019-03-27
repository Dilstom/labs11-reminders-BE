exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        name: 'Cristiano Stanislaw',
        password: 'Y06IsDjc',
        email: 'cstanislaw4p@purevolume.com',
        phone: '228-372-6741',
        country: 'United States',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Katinka Cody',
        password: 'BSvT6y8pXx',
        email: 'kcody4q@yellowpages.com',
        phone: '724-172-4153',
        country: 'Sweden',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Mercy Desseine',
        password: 't67hUCLl',
        email: 'mdesseine4r@harvard.edu',
        phone: '436-266-4992',
        country: 'Czech Republic',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Roarke Parfrey',
        password: 'Z2Sz64uOc',
        email: 'rparfrey4s@tiny.cc',
        phone: '697-562-3400',
        country: 'Uzbekistan',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Mychal Catherine',
        password: 'UZc4x3S6kJ9K',
        email: 'mcatherine4t@paginegialle.it',
        phone: '694-441-1795',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Kendrick Roskam',
        password: 'nuS2PV',
        email: 'kroskam4u@marketwatch.com',
        phone: '423-256-3011',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Lelia Leyborne',
        password: 'Z5LVy1a',
        email: 'lleyborne4v@goodreads.com',
        phone: '226-209-6591',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Jeff Willishire',
        password: 'i2rHrqpeCg',
        email: 'jwillishire4w@privacy.gov.au',
        phone: '310-469-3957',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: "Marty D'Onise",
        password: 'f3LKj0zDU9R',
        email: 'mdonise4x@reddit.com',
        phone: '121-651-0525',
        country: 'Finland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Sonny Atulomah',
        password: 'M2z1XPuFhIl',
        email: 'spengelly4y@webeden.co.uk',
        phone: '214-213-8214',
        country: 'United States',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Jemmie Girvin',
        password: '0Y5UO52m',
        email: 'jgirvin4z@lulu.com',
        phone: '510-849-4506',
        country: 'Yemen',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Thedric Cund',
        password: 'VLCpvbbm3s',
        email: 'tcund50@theguardian.com',
        phone: '318-214-6873',
        country: 'United States',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Ber Loughton',
        password: 'XlhJKU',
        email: 'bloughton51@toplist.cz',
        phone: '952-443-9680',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Solomon Asman',
        password: 'f6mahA',
        email: 'sasman52@flickr.com',
        phone: '706-164-0523',
        country: 'Sweden',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Natty Pardoe',
        password: 'PgBnmD3r4',
        email: 'npardoe53@google.it',
        phone: '681-853-4441',
        country: 'Sweden',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Brook Koeppe',
        password: '3lgoEr8xSlpn',
        email: 'bkoeppe54@engadget.com',
        phone: '982-215-6449',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Jorry Crean',
        password: 'DoFBjxplL92',
        email: 'jcrean55@theglobeandmail.com',
        phone: '534-586-1299',
        country: 'Japan',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Bartlett Claige',
        password: 'IrUDZY3Lxg',
        email: 'bclaige56@goo.ne.jp',
        phone: '268-770-0122',
        country: 'Costa Rica',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Thain Pauling',
        password: 'agTia3',
        email: 'tpauling57@eepurl.com',
        phone: '329-842-9467',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Tatiana Sunter',
        password: 'iIIcqH',
        email: 'tsunter58@nymag.com',
        phone: '959-933-6991',
        country: 'Venezuela',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Berthe Binch',
        password: 'MVBEh4Uu',
        email: 'bbinch59@lycos.com',
        phone: '207-750-1527',
        country: 'Poland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Kliment Folli',
        password: 'KuQWaN',
        email: 'kfolli5a@usa.gov',
        phone: '232-369-1715',
        country: 'Ukraine',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Shannon Laydel',
        password: 'I5iYOyom',
        email: 'slaydel5b@sun.com',
        phone: '416-274-1330',
        country: 'Philippines',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Osbourn Propper',
        password: 'eymduspA',
        email: 'opropper5c@blogs.com',
        phone: '775-256-2059',
        country: 'Guatemala',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Nixie Peschmann',
        password: '1XKTM14odxQ',
        email: 'npeschmann5d@mail.ru',
        phone: '749-902-7619',
        country: 'Spain',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Dori Petersen',
        password: 'HKz2B8X3k',
        email: 'dpetersen5e@ebay.co.uk',
        phone: '226-773-2912',
        country: 'Egypt',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Damien Gurko',
        password: '3IcF9dYG',
        email: 'dgurko5f@dmoz.org',
        phone: '619-977-1103',
        country: 'Morocco',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Faydra Linsay',
        password: 'XI51EHUr2D',
        email: 'flinsay5g@bloomberg.com',
        phone: '365-631-3938',
        country: 'Greece',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Elsinore Gommowe',
        password: 'IkhtdJk',
        email: 'egommowe5h@behance.net',
        phone: '197-887-1890',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Rae Maccraw',
        password: 'WCL5tp3Fr',
        email: 'rmaccraw5i@merriam-webster.com',
        phone: '123-392-6547',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Yank Flohard',
        password: '57K09e',
        email: 'yflohard5j@dot.gov',
        phone: '132-909-3466',
        country: 'Albania',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Nelie Gresly',
        password: 'KOjG17Ghzu',
        email: 'ngresly5k@elpais.com',
        phone: '353-362-2949',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Humfrid Grafton-Herbert',
        password: '9hnNcc',
        email: 'hgraftonherbert5l@google.fr',
        phone: '986-678-3669',
        country: 'Peru',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Noah Melross',
        password: 'SH1wOznfmb2',
        email: 'nmelross5m@hatena.ne.jp',
        phone: '592-621-9645',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Hyman Provis',
        password: 'fp7yOU',
        email: 'hprovis5n@uol.com.br',
        phone: '672-754-9265',
        country: 'Poland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Brnaby Mastrantone',
        password: 'IT6uQkp',
        email: 'bmastrantone5o@answers.com',
        phone: '451-637-1704',
        country: 'Philippines',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Maryanne Clacey',
        password: 'Nsfm1w',
        email: 'mclacey5p@alexa.com',
        phone: '842-817-7817',
        country: 'Portugal',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Bennie Preskett',
        password: 'MXyGxz3oN6Kz',
        email: 'bpreskett5q@csmonitor.com',
        phone: '678-776-3984',
        country: 'Lebanon',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Lilah Fould',
        password: 'vDZnos9ngf',
        email: 'lfould5r@latimes.com',
        phone: '157-222-1896',
        country: 'Morocco',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Norris Dunsford',
        password: 'kH1fJNe',
        email: 'ndunsford5s@ucoz.com',
        phone: '535-323-7451',
        country: 'Sweden',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Ladonna Cone',
        password: 'DDQ0HN2NT8',
        email: 'lcone5t@cnbc.com',
        phone: '774-641-3361',
        country: 'Poland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Diana Rance',
        password: 'rn9VsruBKd',
        email: 'drance5u@uol.com.br',
        phone: '898-272-2124',
        country: 'Mexico',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Alyss Vasyukhnov',
        password: '1rR4NVW',
        email: 'avasyukhnov5v@sogou.com',
        phone: '455-567-1866',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Maxie Longmuir',
        password: 'sf3AXa0',
        email: 'mlongmuir5w@github.com',
        phone: '990-984-3827',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Wildon Harner',
        password: 'UbEXNRyvMtS',
        email: 'wharner5x@ebay.com',
        phone: '823-740-2422',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Aguistin Urch',
        password: 'DkTlyUzOC',
        email: 'aurch5y@usatoday.com',
        phone: '902-226-6516',
        country: 'Mali',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Lorinda Liddle',
        password: '7kgEqnLDlM9',
        email: 'lliddle5z@free.fr',
        phone: '501-624-3169',
        country: 'Greece',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Letty Ethersey',
        password: 'CQhAA0YWRX7j',
        email: 'lethersey60@usatoday.com',
        phone: '834-153-7320',
        country: 'Ukraine',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Belia Kidder',
        password: '8jeTqzRe',
        email: 'bkidder61@huffingtonpost.com',
        phone: '604-948-3528',
        country: 'Portugal',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Haydon Ende',
        password: '4vJALS',
        email: 'hende62@thetimes.co.uk',
        phone: '977-874-1492',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Cissiee Reuben',
        password: 'GEyjD9BKLK',
        email: 'creuben63@admin.ch',
        phone: '231-916-1280',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Frasco Blasdale',
        password: 'aPOTNQ',
        email: 'fblasdale64@shutterfly.com',
        phone: '714-429-6202',
        country: 'Ukraine',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Clayton Howgate',
        password: '9QcBR3tA',
        email: 'chowgate65@yelp.com',
        phone: '983-700-2465',
        country: 'Uruguay',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Wood Cyphus',
        password: 'FF2GZ5U9uOV',
        email: 'wcyphus66@vimeo.com',
        phone: '135-320-7156',
        country: 'Thailand',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Danny Cowely',
        password: 'LcXFol',
        email: 'dcowely67@prweb.com',
        phone: '644-629-6971',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Theresina Burnyate',
        password: '4xrruIZwCC2g',
        email: 'tburnyate68@europa.eu',
        phone: '977-917-3298',
        country: 'South Africa',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Katlin Gheeorghie',
        password: 'rJX1tzhE',
        email: 'kgheeorghie69@msu.edu',
        phone: '764-122-1075',
        country: 'Ireland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Mala Tritten',
        password: 'rXxOCY',
        email: 'mtritten6a@behance.net',
        phone: '743-616-2048',
        country: 'Finland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Jonas Feighney',
        password: 'sfOKkqg',
        email: 'jfeighney6b@usatoday.com',
        phone: '628-694-0199',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Cooper Staniforth',
        password: 'zIoeTch',
        email: 'cstaniforth6c@china.com.cn',
        phone: '874-389-6160',
        country: 'Philippines',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Carolee Diamant',
        password: 'PBT7aGG8Cf9n',
        email: 'cdiamant6d@wsj.com',
        phone: '296-201-4517',
        country: 'Botswana',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Joel Jeannenet',
        password: 'VdR84c',
        email: 'jjeannenet6e@discuz.net',
        phone: '870-436-8964',
        country: 'Colombia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Marabel Daunay',
        password: 'qEsZ4UlhDu0K',
        email: 'mdaunay6f@hibu.com',
        phone: '883-518-1493',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Faustina Bett',
        password: 'ojWzymUMb7V',
        email: 'fbett6g@macromedia.com',
        phone: '164-397-5217',
        country: 'Venezuela',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Mariel Fretwell',
        password: 'IRhqwmq',
        email: 'mfretwell6h@sohu.com',
        phone: '718-270-7471',
        country: 'United Kingdom',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Cosetta Ordish',
        password: '7AOUs9KDxzT',
        email: 'cordish6i@ucsd.edu',
        phone: '138-934-3942',
        country: 'Guatemala',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
      {
        name: 'Evan Royal',
        password: 'GkY2YoBHzazw',
        email: 'eroyal6j@wordpress.com',
        phone: '483-207-7105',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Sara-ann Kornes',
        password: 'oYm1Owq',
        email: 'skornes6k@loc.gov',
        phone: '790-251-7093',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Aubrette Livett',
        password: 'kBj7Zf',
        email: 'alivett6l@github.com',
        phone: '701-785-9845',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Christal Kinset',
        password: 'tRCMtP9hVu7P',
        email: 'ckinset6m@printfriendly.com',
        phone: '446-776-2453',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Nilson Brisson',
        password: 'L6geLvdQfH',
        email: 'nbrisson6n@blogs.com',
        phone: '597-547-1379',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Aloin Lockart',
        password: 'sJqF1X5',
        email: 'alockart6o@spiegel.de',
        phone: '136-835-6944',
        country: 'Ireland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Zackariah Cowpland',
        password: 'dTxD3MffgC',
        email: 'zcowpland6p@dmoz.org',
        phone: '917-283-5050',
        country: 'Ukraine',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Willis Tschirschky',
        password: 'XzuNEEx4DQ4q',
        email: 'wtschirschky6q@businesswire.com',
        phone: '454-848-9932',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Olivie Swiffen',
        password: 'MwzIovgAayx',
        email: 'oswiffen6r@auda.org.au',
        phone: '307-510-9169',
        country: 'Vanuatu',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Fulvia Bicker',
        password: 'BdeTopA',
        email: 'fbicker6s@elpais.com',
        phone: '879-190-0263',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Elden Zannini',
        password: 'EuoSv0kE',
        email: 'ezannini6t@diigo.com',
        phone: '161-999-8350',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Chance Shearman',
        password: 'Pin9eX',
        email: 'cshearman6u@bloglovin.com',
        phone: '281-819-2853',
        country: 'United States',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Giavani Union',
        password: 'UzpcmKtGtrpS',
        email: 'gunion6v@tumblr.com',
        phone: '266-187-3666',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Gilli Digle',
        password: 'Df6H3SoV1',
        email: 'gdigle6w@miitbeian.gov.cn',
        phone: '952-254-3528',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Paolo Marshman',
        password: 'j1aRPVe',
        email: 'pmarshman6x@miitbeian.gov.cn',
        phone: '245-819-7503',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Gilberte Remmer',
        password: 'FNUrNmM3',
        email: 'gremmer6y@reference.com',
        phone: '598-903-3185',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Tootsie Corstan',
        password: '7zLiBieg',
        email: 'tcorstan6z@barnesandnoble.com',
        phone: '573-341-3967',
        country: 'United States',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Elisha Mattiussi',
        password: 'P43Adt8cZ6N',
        email: 'vmattiussi70@google.es',
        phone: '535-510-7818',
        country: 'France',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Wyn Fouch',
        password: '0EwvtuA8Hvos',
        email: 'wfouch71@chronoengine.com',
        phone: '214-476-2376',
        country: 'United States',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Therese Lucock',
        password: 'Ye9I09yxA',
        email: 'tlucock72@hubpages.com',
        phone: '140-617-2597',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Rutledge Sallarie',
        password: 'JW30SCWLRoeC',
        email: 'rsallarie73@tripadvisor.com',
        phone: '664-271-2929',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Kirsti Arnaldo',
        password: '9Vk2A3RZ0vY',
        email: 'karnaldo74@ask.com',
        phone: '581-131-2486',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Madalyn Feeney',
        password: 'V6CNFYU',
        email: 'mfeeney75@aboutads.info',
        phone: '425-699-3498',
        country: 'Poland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Lorelei Daveren',
        password: 'WKftow7U',
        email: 'ldaveren76@tamu.edu',
        phone: '253-191-1169',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Hedwig Osgar',
        password: 'PSzRrzLS',
        email: 'hosgar77@chronoengine.com',
        phone: '407-117-7483',
        country: 'Poland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Jonathon Gennerich',
        password: 'ay6h6Te',
        email: 'jgennerich78@princeton.edu',
        phone: '879-200-3354',
        country: 'Vietnam',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Alyse Charters',
        password: 'O0sWKEZY5sA',
        email: 'acharters79@apple.com',
        phone: '336-826-2649',
        country: 'China',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Maggee Plumb',
        password: 'EygxQra821wx',
        email: 'mplumb7a@cisco.com',
        phone: '600-669-4610',
        country: 'Philippines',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Dunstan Kuzma',
        password: 'blo5Ty',
        email: 'dkuzma7b@prweb.com',
        phone: '601-979-7326',
        country: 'United States',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Chrotoem Bothen',
        password: 'hb7CObtj',
        email: 'cbothen7c@soundcloud.com',
        phone: '238-639-0429',
        country: 'Poland',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 1,
      },
      {
        name: 'Tanhya Ranscome',
        password: 'X1Ye2oBg',
        email: 'transcome7d@intel.com',
        phone: '103-594-5776',
        country: 'Syria',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 2,
      },
      {
        name: 'Pembroke Fredson',
        password: 'YhEkDeVB0b3',
        email: 'pfredson7e@amazonaws.com',
        phone: '713-118-9496',
        country: 'Russia',
        role_id: 1,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
      {
        name: 'Shaylah Covolini',
        password: '9FxDdbAdDPE',
        email: 'scovolini7f@time.com',
        phone: '642-363-3336',
        country: 'Russia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
      {
        name: 'Warner Finney',
        password: '4SKgwf',
        email: 'wfinney7g@bandcamp.com',
        phone: '981-628-4710',
        country: 'Sierra Leone',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
      {
        name: 'Rory Oliphant',
        password: 'CBQOxW',
        email: 'roliphant7h@godaddy.com',
        phone: '229-540-3008',
        country: 'Haiti',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
      {
        name: 'Bentley Friskey',
        password: 'gYOWdUFE3OC',
        email: 'bfriskey7i@simplemachines.org',
        phone: '688-268-3753',
        country: 'Colombia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
      {
        name: 'Anneliese Albion',
        password: 'bVIYj3NNtt2D',
        email: 'aalbion7j@hp.com',
        phone: '312-244-1124',
        country: 'Indonesia',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
      {
        name: 'Cam Guinn',
        password: 'QliAo1TesiZ',
        email: 'cguinn7k@census.gov',
        phone: '208-283-0387',
        country: 'Egypt',
        role_id: 2,
        group_id: null,
        template_id: null,
        org_id: 3,
      },
    ]);
  });
};
