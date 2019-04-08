exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    // .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Brenda Doerr',
          password: 'dIOLOmI8R',
          email: 'bdoerr0@mediafire.com',
          phone: '785-742-7911',
          country: 'Latvia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Virgina Vondrys',
          password: 'yYN7WMR',
          email: 'vvondrys1@lulu.com',
          phone: '640-603-7297',
          country: 'Mexico',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Oberon Scrimgeour',
          password: 'E25XahYBmbn',
          email: 'oscrimgeour2@businesswire.com',
          phone: '231-726-9328',
          country: 'Dominican Republic',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Gustave Treasaden',
          password: 'O13WNP7wST',
          email: 'gtreasaden3@dion.ne.jp',
          phone: '827-416-4523',
          country: 'Portugal',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Tabby Grey',
          password: 'lphG0Nc',
          email: 'tgrey4@sun.com',
          phone: '522-634-2692',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Warde Maddie',
          password: 't72QF9k',
          email: 'wmaddie5@yellowbook.com',
          phone: '539-491-7497',
          country: 'British Virgin Islands',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Currey Kitney',
          password: 'Ej2Gw0nbb',
          email: 'ckitney6@artisteer.com',
          phone: '440-516-7536',
          country: 'Czech Republic',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Rudyard Rodrig',
          password: 'UGKHBm',
          email: 'rrodrig7@paypal.com',
          phone: '585-354-0389',
          country: 'Czech Republic',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Gerardo Tytcomb',
          password: 'Xxe7rkaOhR',
          email: 'gtytcomb8@columbia.edu',
          phone: '379-758-1332',
          country: 'Brazil',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Davy Ransley',
          password: 'zcPtf7xvYoXy',
          email: 'dransley9@yale.edu',
          phone: '301-733-6442',
          country: 'Poland',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Meridel Derrett',
          password: 'ENkOcymj7',
          email: 'mderretta@rediff.com',
          phone: '928-313-7927',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Maribel Mollnar',
          password: 'tZ8myxj',
          email: 'mmollnarb@topsy.com',
          phone: '896-490-0533',
          country: 'Colombia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Evvy Riveles',
          password: 'MkVHfYfioe',
          email: 'erivelesc@cdbaby.com',
          phone: '682-242-7069',
          country: 'Libya',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lew Dargie',
          password: 'YnbnMdDRrVd1',
          email: 'ldargied@apple.com',
          phone: '656-631-2207',
          country: 'Brazil',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Marthena Coom',
          password: 'gxk4jcFnhLLH',
          email: 'mcoome@amazon.com',
          phone: '747-141-4989',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Bogart Hobble',
          password: 'Kk1MBnhecGx0',
          email: 'bhobblef@amazonaws.com',
          phone: '468-484-9221',
          country: 'Nigeria',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Mick Heinke',
          password: 'nJ3BoFNoLoPB',
          email: 'mheinkeg@baidu.com',
          phone: '654-400-6941',
          country: 'Portugal',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Maurizio Caser',
          password: 'MKVnZMH3Kj',
          email: 'mcaserh@istockphoto.com',
          phone: '715-323-5436',
          country: 'Poland',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Wendell Saph',
          password: 'uBtlYV',
          email: 'wsaphi@instagram.com',
          phone: '679-151-4957',
          country: 'Russia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Louella MacCole',
          password: 'ozOjdg',
          email: 'lmaccolej@businessweek.com',
          phone: '752-491-3723',
          country: 'Russia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Karina Goscar',
          password: 'FqW4Fz3',
          email: 'kgoscark@angelfire.com',
          phone: '972-127-1530',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lowrance Munden',
          password: '7mQIkiRzY',
          email: 'lmundenl@kickstarter.com',
          phone: '347-515-3035',
          country: 'Pakistan',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Ali Verbrugghen',
          password: '84EejLfDRevO',
          email: 'averbrugghenm@weibo.com',
          phone: '755-438-2500',
          country: 'France',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Jodie Vern',
          password: 'l8OIQZMV',
          email: 'jvernn@de.vu',
          phone: '483-266-5050',
          country: 'Panama',
          org_id: 1,
          role_id: 2,
        },
        {
          name: "Eula De'Ath",
          password: 'W8KcgmLx',
          email: 'edeatho@economist.com',
          phone: '842-396-2047',
          country: 'Brazil',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Jolene Swannack',
          password: '3rk4B3p',
          email: 'jswannackp@eventbrite.com',
          phone: '692-864-0762',
          country: 'Portugal',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Ned Tolcharde',
          password: '36zTgbcu5oAF',
          email: 'ntolchardeq@shinystat.com',
          phone: '927-381-9906',
          country: 'Namibia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Pippy Miell',
          password: 'PVVVh0K8tJ',
          email: 'pmiellr@icq.com',
          phone: '108-308-2256',
          country: 'Czech Republic',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Kit Cutbirth',
          password: 'ufAtd1',
          email: 'kcutbirths@ovh.net',
          phone: '933-223-0226',
          country: 'Greece',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Berget Atkinson',
          password: 'bB5KYU2jphCH',
          email: 'batkinsont@indiegogo.com',
          phone: '736-689-8407',
          country: 'Poland',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Maxie Putton',
          password: 'i9EOd7l3ynVe',
          email: 'mputtonu@webmd.com',
          phone: '456-448-8702',
          country: 'Russia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Ted Rubinsaft',
          password: '2eIP6S',
          email: 'trubinsaftv@php.net',
          phone: '959-893-1620',
          country: 'Greece',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Adolph Escolme',
          password: 'QqMX9P86YFbL',
          email: 'aescolmew@squidoo.com',
          phone: '425-112-2187',
          country: 'Indonesia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Dorolisa Evitt',
          password: 's9BcK3pRyIfX',
          email: 'devittx@nasa.gov',
          phone: '145-418-0292',
          country: 'Niger',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Brenda Miklem',
          password: 'wc1vdlyrNByt',
          email: 'bmiklemy@state.tx.us',
          phone: '592-214-0661',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Sacha Wimbury',
          password: 'asisly7VM2R',
          email: 'swimburyz@seesaa.net',
          phone: '684-616-0441',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Harlan Kolin',
          password: 'bBsQYxdvBq5',
          email: 'hkolin10@elegantthemes.com',
          phone: '808-950-3987',
          country: 'United States',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Addy Lisle',
          password: 'N24WbN7',
          email: 'alisle11@webeden.co.uk',
          phone: '544-867-5405',
          country: 'Germany',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Hadleigh Gush',
          password: '5Geh1kfj0',
          email: 'hgush12@clickbank.net',
          phone: '265-627-7934',
          country: 'Czech Republic',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Ronald Wibrew',
          password: 'RYrEjJJLRgj',
          email: 'rwibrew13@sphinn.com',
          phone: '124-228-0138',
          country: 'Indonesia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Adrian Aherne',
          password: 'a43folmuYxrS',
          email: 'aaherne14@reuters.com',
          phone: '279-529-0570',
          country: 'Syria',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Tommie Dorrell',
          password: 'qrPJ4ENSon',
          email: 'tdorrell15@com.com',
          phone: '891-366-4162',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Agna Pecht',
          password: '0vwM1Pq34TGi',
          email: 'apecht16@tinyurl.com',
          phone: '759-999-3770',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Carri Manhare',
          password: 'fb16EdZqS',
          email: 'cmanhare17@yahoo.co.jp',
          phone: '967-871-9269',
          country: 'Netherlands',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Louise Douty',
          password: 'ZebbMtisr',
          email: 'ldouty18@360.cn',
          phone: '465-591-9432',
          country: 'Indonesia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Tandie Alpes',
          password: 'Yjx7J3',
          email: 'talpes19@weebly.com',
          phone: '372-954-7837',
          country: 'Poland',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Bone Sesons',
          password: 'TZKVJVbGl',
          email: 'bsesons1a@ucsd.edu',
          phone: '772-280-2831',
          country: 'United States',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Sile Mewha',
          password: 'xYs2ds21HNC',
          email: 'smewha1b@symantec.com',
          phone: '938-135-4183',
          country: 'Peru',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Elise Dewsbury',
          password: 'VV29OUz85rd',
          email: 'edewsbury1c@symantec.com',
          phone: '957-539-5727',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Ethe Guiso',
          password: 'i4kImf',
          email: 'eguiso1d@blogs.com',
          phone: '707-944-0059',
          country: 'Argentina',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Iseabal Bass',
          password: 't9XpdVpiqqc5',
          email: 'ibass1e@weather.com',
          phone: '910-400-6716',
          country: 'Russia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Teodoro Ravillas',
          password: 'vFV3okVD',
          email: 'travillas1f@dailymotion.com',
          phone: '520-838-3817',
          country: 'United States',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Jere Partner',
          password: 'OcGjXS',
          email: 'jpartner1g@java.com',
          phone: '407-218-9054',
          country: 'Azerbaijan',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Gerhardt Accomb',
          password: '49KYt44mlC',
          email: 'gaccomb1h@storify.com',
          phone: '846-380-9122',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Carrie Dumblton',
          password: 'XoFuG8trKlpc',
          email: 'cdumblton1i@facebook.com',
          phone: '687-901-5086',
          country: 'Russia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Emalia Mullinger',
          password: '4XFwnG7LfJ',
          email: 'emullinger1j@yahoo.com',
          phone: '694-315-7323',
          country: 'Indonesia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Karrie Corkan',
          password: 'DCEhYd',
          email: 'kcorkan1k@wsj.com',
          phone: '625-232-2770',
          country: 'Greece',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Alisander Farnes',
          password: 'xB6V0D9MPvJ',
          email: 'afarnes1l@smh.com.au',
          phone: '374-330-1179',
          country: 'Sweden',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lilias Blaydon',
          password: 'GfDe3c9rD',
          email: 'lblaydon1m@dion.ne.jp',
          phone: '938-770-8023',
          country: 'Palestinian Territory',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Hagen Grady',
          password: 'k057zQuUYnN',
          email: 'hgrady1n@elpais.com',
          phone: '799-438-3715',
          country: 'Afghanistan',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Francesca Arnaudot',
          password: 'q5ggaD',
          email: 'farnaudot1o@free.fr',
          phone: '824-492-7896',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Claudia Vasilyevski',
          password: 'lhIvMf3',
          email: 'cvasilyevski1p@networksolutions.com',
          phone: '162-377-5220',
          country: 'Indonesia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Orion Simecek',
          password: 'deZ1d80',
          email: 'osimecek1q@discovery.com',
          phone: '549-534-4954',
          country: 'France',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Celinka Kestian',
          password: 'lcKxwWh3K',
          email: 'ckestian1r@psu.edu',
          phone: '547-215-7734',
          country: 'Brazil',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Tabina Howsam',
          password: '2lCDQiO',
          email: 'thowsam1s@alibaba.com',
          phone: '716-792-7362',
          country: 'Ireland',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Kevon Meys',
          password: 'vnwJZjnsw',
          email: 'kmeys1t@aboutads.info',
          phone: '687-309-7183',
          country: 'Egypt',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lyn Matkovic',
          password: 'KijqUDzEAwy',
          email: 'lmatkovic1u@google.pl',
          phone: '770-865-7360',
          country: 'Chile',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Richart Daldry',
          password: 'H8NY5NXyRq',
          email: 'rdaldry1v@sourceforge.net',
          phone: '865-286-3682',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Del Jumeau',
          password: 'xfhTRs1iF',
          email: 'djumeau1w@prlog.org',
          phone: '391-673-8042',
          country: 'Costa Rica',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lemmie Keen',
          password: 'ofuyXGpky',
          email: 'lkeen1x@xinhuanet.com',
          phone: '802-501-7830',
          country: 'Russia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Saxe Richen',
          password: 'uziGYr',
          email: 'srichen1y@zdnet.com',
          phone: '599-861-3748',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Cathe de Verson',
          password: '72lG6mb4',
          email: 'cde1z@macromedia.com',
          phone: '923-407-3369',
          country: 'Armenia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Theodore Desesquelle',
          password: 'L2xTGJnD4Ga',
          email: 'tdesesquelle20@techcrunch.com',
          phone: '515-878-0743',
          country: 'Belarus',
          org_id: 1,
          role_id: 2,
        },
        {
          name: "Lenci O'Hallihane",
          password: 'cVMvAqS5UV',
          email: 'lohallihane21@biblegateway.com',
          phone: '545-469-3724',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Padraig Canter',
          password: 'kxIGe8b11NJA',
          email: 'pcanter22@japanpost.jp',
          phone: '734-850-2907',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Egon Copsey',
          password: 'jW7VPjk8',
          email: 'ecopsey23@dedecms.com',
          phone: '710-687-4186',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Rosemarie Puxley',
          password: 'y0zjvO',
          email: 'rpuxley24@google.cn',
          phone: '176-548-0148',
          country: 'Serbia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Luz Gabits',
          password: 'jzqqDJx',
          email: 'lgabits25@gmpg.org',
          phone: '175-607-6017',
          country: 'Albania',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Kingsly Stealy',
          password: 'Hpy76Bq5X',
          email: 'kstealy26@java.com',
          phone: '331-487-1626',
          country: 'Portugal',
          org_id: 1,
          role_id: 1,
        },
        {
          name: 'Bartholomeo Thomesson',
          password: 'FwbT7SxLr',
          email: 'bthomesson27@chron.com',
          phone: '411-761-1121',
          country: 'Czech Republic',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lisetta Bolding',
          password: 'gKgcWz',
          email: 'lbolding28@artisteer.com',
          phone: '541-885-8262',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Celie Duer',
          password: '242ANO15',
          email: 'cduer29@gnu.org',
          phone: '888-285-1138',
          country: 'Czech Republic',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Darrel Drohane',
          password: 'iqhhKqKRqQd',
          email: 'ddrohane2a@omniture.com',
          phone: '611-629-3890',
          country: 'Peru',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Stanly Macci',
          password: '4TXaL0L6Eyp',
          email: 'smacci2b@youtube.com',
          phone: '735-817-0258',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Marian Kibble',
          password: 'kBb6OkVlm',
          email: 'mkibble2c@unc.edu',
          phone: '545-966-0231',
          country: 'Poland',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Moritz Yurtsev',
          password: 'Cnk39VstWe',
          email: 'myurtsev2d@imdb.com',
          phone: '405-898-4515',
          country: 'United States',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Rosene Thame',
          password: 'bUIgp6f9n36',
          email: 'rthame2e@squidoo.com',
          phone: '136-860-1373',
          country: 'Portugal',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Edmon Gaskill',
          password: '9FVcEalX',
          email: 'egaskill2f@google.fr',
          phone: '210-787-3090',
          country: 'Reunion',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Harriette Ruggier',
          password: '5xkZq9pzZGdC',
          email: 'hruggier2g@bing.com',
          phone: '465-499-4282',
          country: 'Macedonia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lilllie De Caroli',
          password: 'W9VItMOj6W',
          email: 'lde2h@washington.edu',
          phone: '243-427-7484',
          country: 'Nigeria',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Quinta Macon',
          password: 'hJcp7I9',
          email: 'qmacon2i@mediafire.com',
          phone: '105-876-7136',
          country: 'Finland',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Allin Record',
          password: '693v0W',
          email: 'arecord2j@npr.org',
          phone: '518-326-8197',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Nicolle Dober',
          password: 'rNyhITOKK7fV',
          email: 'ndober2k@fda.gov',
          phone: '193-927-7988',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Natalie Jurczik',
          password: 'mEKOR3kP95',
          email: 'njurczik2l@wisc.edu',
          phone: '737-779-1901',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Seline Vedeneev',
          password: 'W5YuH5NCE6',
          email: 'svedeneev2m@phoca.cz',
          phone: '497-142-1542',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Thibaud Kaman',
          password: '6yTh7XzTi',
          email: 'tkaman2n@w3.org',
          phone: '498-965-8726',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Burty Sunock',
          password: 'Y4JpaRAe9',
          email: 'bsunock2o@auda.org.au',
          phone: '622-548-9554',
          country: 'Peru',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Ferne Beart',
          password: 'Lp6d2X6',
          email: 'fbeart2p@google.es',
          phone: '958-849-2681',
          country: 'Iran',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Phyllida Vossing',
          password: 'SMyox2jCsPZz',
          email: 'pvossing2q@cdbaby.com',
          phone: '195-436-0307',
          country: 'Philippines',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Avril Parade',
          password: 'AhwDHo1XfnEI',
          email: 'aparade2r@google.co.jp',
          phone: '532-160-1156',
          country: 'Indonesia',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Bondon Bicheno',
          password: 'PPW1yIneh',
          email: 'bbicheno2s@altervista.org',
          phone: '980-422-5989',
          country: 'Mexico',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Lissa Louder',
          password: 'Z4d8G5l',
          email: 'llouder2t@macromedia.com',
          phone: '700-116-5165',
          country: 'China',
          org_id: 1,
          role_id: 2,
        },
        {
          name: 'Kellie Jedraszek',
          password: 'fuqp0wa7Y',
          email: 'kjedraszek2u@myspace.com',
          phone: '518-691-0531',
          country: 'Mexico',
          org_id: 1,
          role_id: 2,
        },
      ]);
    });
};
