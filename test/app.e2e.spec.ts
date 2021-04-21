import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/posts (GET)', () => {
    const response = request(app.getHttpServer()).get('/api/posts');

    return response.expect(200);
  });

  it('/api/zen (GET)', () => {
    const response = request(app.getHttpServer()).get('/api/zen');

    return response
      .expect(200)
      .expect(
        '<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:georss="http://www.georss.org/georss" version="2.0"><channel><title>ITSumma</title><link>https://itsumma.ru</link><description>Daily Ringtone</description><language>ru</language><item><title>The hypnosis of receiving believers is outer.</title><link>https://itsumma.ru/the-hypnosis-of-receiving-believers-is-outer</link><guid>https://itsumma.ru/the-hypnosis-of-receiving-believers-is-outer</guid><pubDate>Fri, 01 Jan 2021 00:00:00 GMT</pubDate><author>Rose</author><category>finance</category><description><![CDATA[ Peace at the ready room that is when ancient hurqs experiment. ]]></description><content:encoded><![CDATA[ Galaxy at the moon was the sensor of vision, converted to a photonic queen. ]]></content:encoded></item><item><title>All pictorial teachers gain each other, only outer suns have a sainthood.</title><link>https://itsumma.ru/all-pictorial-teachers-gain-each-other-only-outer-suns-have-a-sainthood</link><guid>https://itsumma.ru/all-pictorial-teachers-gain-each-other-only-outer-suns-have-a-sainthood</guid><pubDate>Mon, 04 Jan 2021 00:00:00 GMT</pubDate><author>Jack</author><category>sport</category><description><![CDATA[ I teleport this attitude, its called lunar stigma. ]]></description><content:encoded><![CDATA[ Phenomenans tremble from assimilations like calm vogons. Where is the evil machine? ]]></content:encoded></item><item><title>Stigma, heaven and a wonderful heavens of sainthood.</title><link>https://itsumma.ru/stigma-heaven-and-a-wonderful-heavens-of-sainthood</link><guid>https://itsumma.ru/stigma-heaven-and-a-wonderful-heavens-of-sainthood</guid><pubDate>Wed, 03 Feb 2021 00:00:00 GMT</pubDate><author>Jack</author><category>finance</category><description><![CDATA[ I command this anomaly, its called virtual friendship. ]]></description><content:encoded><![CDATA[ Powerdrain at the universe was the modification of pressure, united to a dead space suit. ]]></content:encoded></item><item><title>Why does the sun go?</title><link>https://itsumma.ru/calm-manifestations-believes-most-dimensions</link><guid>https://itsumma.ru/calm-manifestations-believes-most-dimensions</guid><pubDate>Wed, 23 Jun 2021 00:00:00 GMT</pubDate><author>Rose</author><category>sport</category><description><![CDATA[ Creatures tremble on powerdrain at earth! ]]></description><content:encoded><![CDATA[ Calm manifestations believes most dimensions. ]]></content:encoded></item><item><title>Die without alarm, and we won’t raise a spacecraft.</title><link>https://itsumma.ru/die-without-alarm-and-we-wont-raise-a-spacecraft</link><guid>https://itsumma.ru/die-without-alarm-and-we-wont-raise-a-spacecraft</guid><pubDate>Wed, 01 Dec 2021 00:00:00 GMT</pubDate><author>Paul</author><category>politic</category><description><![CDATA[ Where is the solid sensor? ]]></description><content:encoded><![CDATA[ Relativity happens when you fear moonlight so wonderfully that whatsoever you are diing is your issue. ]]></content:encoded></item></channel></rss>',
      );
  });

  it('/api/turbo (GET)', () => {
    const response = request(app.getHttpServer()).get('/api/turbo');

    return response
      .expect(200)
      .expect(
        '<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:turbo="http://turbo.yandex.ru" version="2.0">' +
          '<channel>' +
          '<title>ITSumma</title>' +
          '<link>https://itsumma.ru</link>' +
          '<description>Замечаем неполадки до того, как они вырастают в проблемы.</description>' +
          '<language>ru</language>' +
          '<item turbo="true">' +
          '<title>The hypnosis of receiving believers is outer.</title>' +
          '<turbo:extendedHtml>true</turbo:extendedHtml>' +
          '<link>https://itsumma.ru/the-hypnosis-of-receiving-believers-is-outer</link>' +
          '<turbo:source>https://itsumma.ru/the-hypnosis-of-receiving-believers-is-outer</turbo:source>' +
          '<turbo:topic>The hypnosis of receiving believers is outer.</turbo:topic>' +
          '<pubDate>Fri, 01 Jan 2021 00:00:00 GMT</pubDate>' +
          '<author>Rose</author>' +
          '<category>finance</category>' +
          '<turbo:content><![CDATA[ <header><h1>The hypnosis of receiving believers is outer.</h1></header>Galaxy at the moon was the sensor of vision, converted to a photonic queen. ]]></turbo:content>' +
          '</item>' +
          '<item turbo="true">' +
          '<title>All pictorial teachers gain each other, only outer suns have a sainthood.</title>' +
          '<turbo:extendedHtml>true</turbo:extendedHtml>' +
          '<link>https://itsumma.ru/all-pictorial-teachers-gain-each-other-only-outer-suns-have-a-sainthood</link>' +
          '<turbo:source>https://itsumma.ru/all-pictorial-teachers-gain-each-other-only-outer-suns-have-a-sainthood</turbo:source>' +
          '<turbo:topic>All pictorial teachers gain each other, only outer suns have a sainthood.</turbo:topic>' +
          '<pubDate>Mon, 04 Jan 2021 00:00:00 GMT</pubDate>' +
          '<author>Jack</author>' +
          '<category>sport</category>' +
          '<turbo:content><![CDATA[ <header><h1>All pictorial teachers gain each other, only outer suns have a sainthood.</h1></header>Phenomenans tremble from assimilations like calm vogons. Where is the evil machine? ]]></turbo:content>' +
          '</item>' +
          '<item turbo="true">' +
          '<title>Stigma, heaven and a wonderful heavens of sainthood.</title>' +
          '<turbo:extendedHtml>true</turbo:extendedHtml>' +
          '<link>https://itsumma.ru/stigma-heaven-and-a-wonderful-heavens-of-sainthood</link>' +
          '<turbo:source>https://itsumma.ru/stigma-heaven-and-a-wonderful-heavens-of-sainthood</turbo:source>' +
          '<turbo:topic>Stigma, heaven and a wonderful heavens of sainthood.</turbo:topic>' +
          '<pubDate>Wed, 03 Feb 2021 00:00:00 GMT</pubDate>' +
          '<author>Jack</author>' +
          '<category>finance</category>' +
          '<turbo:content><![CDATA[ <header><h1>Stigma, heaven and a wonderful heavens of sainthood.</h1></header>Powerdrain at the universe was the modification of pressure, united to a dead space suit. ]]></turbo:content>' +
          '</item>' +
          '<item turbo="true">' +
          '<title>Why does the sun go?</title>' +
          '<turbo:extendedHtml>true</turbo:extendedHtml>' +
          '<link>https://itsumma.ru/calm-manifestations-believes-most-dimensions</link>' +
          '<turbo:source>https://itsumma.ru/calm-manifestations-believes-most-dimensions</turbo:source>' +
          '<turbo:topic>Why does the sun go?</turbo:topic>' +
          '<pubDate>Wed, 23 Jun 2021 00:00:00 GMT</pubDate>' +
          '<author>Rose</author>' +
          '<category>sport</category>' +
          '<turbo:content><![CDATA[ <header><h1>Why does the sun go?</h1></header>Calm manifestations believes most dimensions. ]]></turbo:content>' +
          '</item>' +
          '<item turbo="true">' +
          '<title>Die without alarm, and we won’t raise a spacecraft.</title>' +
          '<turbo:extendedHtml>true</turbo:extendedHtml>' +
          '<link>https://itsumma.ru/die-without-alarm-and-we-wont-raise-a-spacecraft</link>' +
          '<turbo:source>https://itsumma.ru/die-without-alarm-and-we-wont-raise-a-spacecraft</turbo:source>' +
          '<turbo:topic>Die without alarm, and we won’t raise a spacecraft.</turbo:topic>' +
          '<pubDate>Wed, 01 Dec 2021 00:00:00 GMT</pubDate>' +
          '<author>Paul</author>' +
          '<category>politic</category>' +
          '<turbo:content><![CDATA[ <header><h1>Die without alarm, and we won’t raise a spacecraft.</h1></header>Relativity happens when you fear moonlight so wonderfully that whatsoever you are diing is your issue. ]]></turbo:content>' +
          '</item>' +
          '</channel>' +
          '</rss>',
      );
  });

  it('/api/yandex-news (GET)', async () => {
    const response = request(app.getHttpServer())
      .get('/api/yandex-news')
      .expect(
        '<rss version="2.0" xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/"><channel><title>ITSumma</title><link>https://itsumma.ru</link><description>Замечаем неполадки до того, как они вырастают в проблемы.</description><language>ru</language><item><title>The hypnosis of receiving believers is outer.</title><link>https://itsumma.ru/the-hypnosis-of-receiving-believers-is-outer</link><pdalink>https://itsumma.ru/the-hypnosis-of-receiving-believers-is-outer</pdalink><pubDate>Fri, 01 Jan 2021 00:00:00 GMT</pubDate><author>Rose</author><category>finance</category><description>Peace at the ready room that is when ancient hurqs experiment.</description><yandex:full-text>Galaxy at the moon was the sensor of vision, converted to a photonic queen.</yandex:full-text></item><item><title>All pictorial teachers gain each other, only outer suns have a sainthood.</title><link>https://itsumma.ru/all-pictorial-teachers-gain-each-other-only-outer-suns-have-a-sainthood</link><pdalink>https://itsumma.ru/all-pictorial-teachers-gain-each-other-only-outer-suns-have-a-sainthood</pdalink><pubDate>Mon, 04 Jan 2021 00:00:00 GMT</pubDate><author>Jack</author><category>sport</category><description>I teleport this attitude, its called lunar stigma.</description><yandex:full-text>Phenomenans tremble from assimilations like calm vogons. Where is the evil machine?</yandex:full-text></item><item><title>Stigma, heaven and a wonderful heavens of sainthood.</title><link>https://itsumma.ru/stigma-heaven-and-a-wonderful-heavens-of-sainthood</link><pdalink>https://itsumma.ru/stigma-heaven-and-a-wonderful-heavens-of-sainthood</pdalink><pubDate>Wed, 03 Feb 2021 00:00:00 GMT</pubDate><author>Jack</author><category>finance</category><description>I command this anomaly, its called virtual friendship.</description><yandex:full-text>Powerdrain at the universe was the modification of pressure, united to a dead space suit.</yandex:full-text></item><item><title>Why does the sun go?</title><link>https://itsumma.ru/calm-manifestations-believes-most-dimensions</link><pdalink>https://itsumma.ru/calm-manifestations-believes-most-dimensions</pdalink><pubDate>Wed, 23 Jun 2021 00:00:00 GMT</pubDate><author>Rose</author><category>sport</category><description>Creatures tremble on powerdrain at earth!</description><yandex:full-text>Calm manifestations believes most dimensions.</yandex:full-text></item><item><title>Die without alarm, and we won’t raise a spacecraft.</title><link>https://itsumma.ru/die-without-alarm-and-we-wont-raise-a-spacecraft</link><pdalink>https://itsumma.ru/die-without-alarm-and-we-wont-raise-a-spacecraft</pdalink><pubDate>Wed, 01 Dec 2021 00:00:00 GMT</pubDate><author>Paul</author><category>politic</category><description>Where is the solid sensor?</description><yandex:full-text>Relativity happens when you fear moonlight so wonderfully that whatsoever you are diing is your issue.</yandex:full-text></item></channel></rss>',
      );

    return response.expect(200);
  });
});
