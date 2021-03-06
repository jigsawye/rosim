import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'antd';

import { version } from '../../package.json';

import { Card } from './Layouts/CardLayout';

function Link({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  href: PropTypes.string.isRequired,
};

const renderers = { link: Link };

const aboutWebsite = `
為何會有此模擬器請參考[巴哈原文](https://forum.gamer.com.tw/C.php?bsn=4212&snA=416122&tnum=7)，總之這是一個在過年沒 RO 玩之下的產物。

~~只要我還沒離開 RO 這款遊戲，就會慢慢更新此模擬器，讓功能趨近於完整。~~

雖然已經退坑了，不過還是會慢慢更新。

如果有任何建議歡迎寄信給我，或是透過巴哈私訊我。

假設你有 Github 帳號的話，希望可以順手幫我到 [Github Repo](https://github.com/jigsawye/rosim) 點顆 Star，

若有能力也歡迎發 Pull Request 或是 Issue 討論。

### 改版訊息
目前版本: **${version}**

完整改版訊息請參閱 [Github Releases](https://github.com/jigsawye/rosim/releases)。

### 特別感謝

- 感謝本公會 **暴風雨後的彩虹** 全體成員及會長 [九億少女的夢](https://www.twitch.tv/greaso522) 的 PM 擔當
- 感謝 [川_@](https://home.gamer.com.tw/homeindex.php?owner=hsin0604) 的建議及錯誤回報
- 感謝 [琉璃廣](https://home.gamer.com.tw/homeindex.php?owner=rorigo) 的公式分享
- 感謝 [白龍](https://home.gamer.com.tw/homeindex.php?owner=k99999532) 的說明文字授權
- 感謝 [琥雨心](https://home.gamer.com.tw/homeindex.php?owner=d790012) 的建議及錯誤回報

### 資料來源
- [iRO Wiki](https://irowiki.org/wiki/Main_Page)
`;

const aboutCreator = `
RO 起源玩家，~~遊戲ID: \`Sociopath\`~~ 已退坑

其餘請直接參考我的 [個人網站](https://jigsawye.com/about/)
`;

function About() {
  return (
    <Row>
      <Col xs={24} lg={{ span: 18, offset: 3 }} xxl={{ span: 14, offset: 5 }}>
        <Card title="關於本站">
          <ReactMarkdown source={aboutWebsite} renderers={renderers} />
        </Card>
        <Card title="關於作者">
          <ReactMarkdown source={aboutCreator} renderers={renderers} />
          <p>
            如果你有餘力的話，歡迎資助我以讓我繼續開發此模擬器，有任何疑問歡迎寄信至：jigsaw.ye@gmail.com
          </p>
          <a
            href="https://p.ecpay.com.tw/MeDs6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="ecpay"
              src="https://payment.ecpay.com.tw/Content/themes/WebStyle20170517/images/ecgo.png"
            />
          </a>
        </Card>
      </Col>
    </Row>
  );
}

export default About;
