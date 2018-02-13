const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const getUrl = key => `http://ratemyserver.net/index.php?page=misc_table_stbonus&op=${key}`;
const bonusesMapping = ['level', 'str', 'agi', 'vit', 'int', 'dex', 'luk'];

const fetchHtml = async (jobKey) => {
  const { data } = await axios.get(getUrl(jobKey));
  return data;
};

const getBonuses = async (jobKey) => {
  const html = await fetchHtml(jobKey);
  const $ = cheerio.load(html);
  const table = $('table.content_box_db > tbody > tr').not('.filled_header_db');

  const bonuses = [];

  table.each((index, element) => {
    const bonus = { level: 0, str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 };

    $(element).children().each((index, element) => {
      const value = $(element).text()
      const key = bonusesMapping[index];
      bonus[key] = Number(value);
    });

    bonuses.push(bonus);
  });

  return bonuses;
};

const start = async () => {
  const jobs = [
    { id: 7, name: '騎士' },
    { id: 8, name: '祭司' },
    { id: 9, name: '巫師' },
    { id: 10, name: '鐵匠' },
    { id: 11, name: '獵人' },
    { id: 12, name: '刺客' },
  ];
  const jobBonuses = await jobs.reduce(async (prev, { id }) => {
    const accumulation = await prev;
    const bonuses = await getBonuses(id);
    return [...accumulation, { id, bonuses }];
  }, Promise.resolve([]));

  fs.writeFileSync('./src/constants/bonuses.json', JSON.stringify(jobBonuses));
};

start();
