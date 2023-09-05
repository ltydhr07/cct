import React, { useEffect, useState } from "react";
import Styled from "styled-components";

import bannerBg from "../assets/images/banner_bg.png";
import bannerRImg from "../assets/images/banner_img.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import { useTranslation, Trans } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const langOption = {
    en: {
      status: true, 
      nativeName: 'English',
      linkUrl: 'https://www.citex.io/en_US/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    zh: {
      status: true, 
      nativeName: '中文',
      linkUrl: 'https://www.citex.club/zh_CN/trade/CTT_USDT?type=spot',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    'zh-tw': {
      status: false, 
      nativeName: '繁体中文',
      linkUrl: 'https://www.citex.club/zh_TC/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    ko: {
      status: false, 
      nativeName: '韩文',
      linkUrl: 'https://www.citex.io/ko_KR/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
  };
  const yearOption = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033
  ];

  const toGetLink = () => {
    if(langOption[i18n.language]) {
      window.open(langOption[i18n.language].linkUrl,'_blank')
      return
    }
    window.open(langOption.en.linkUrl,'_blank')
  }

  const toChainLink = () => {
    if(langOption[i18n.language]) {
      window.open(langOption[i18n.language].chainLink,'_blank')
      return
    }
    window.open(langOption.en.chainLink,'_blank')
  }

  // 获取href 的参数 lang 设置中英文切换
  useEffect(() => {
    const search = window.location.search
    if(search) {
      const paramArr = search.split('?')[1].split('&');
      let lang = '';
      paramArr.forEach(el => {
        if(el.indexOf('lang') > -1) {
          lang = el.split('=')[1];
        }
      })
      if(lang && langOption[lang] && langOption[lang].status) {
        i18n.changeLanguage(lang);
        return
      }
    }
    i18n.changeLanguage('en');
  }, [])

  return (
    <StyledWapper className="flex flex-col items-center">
      <div className="banner-wrap flex-wrap sm:h-[490px] h-[580px] sm:block px-6 pt-[56px] pb-[103px]">
        <div className="w-[600px] text-left">
          <div className="sm:text-5xl text-3xl font-bold">{t('header.title')}</div>
          <div className="mt-4 sm:text-xl text-lg">
            {t('header.subtitle')}
          </div>
          <div className="mt-8 w-[160px] h-[48px] sm:text-xl text-lg bg-[#186CFC] text-white rounded-lg  flex items-center justify-center" onClick={() => toGetLink()}>{t('button.getIt')}</div>
        </div>
        <img className="sm:w-[456px] sm:h-[330px] sm:ml-[150px]" src={bannerRImg} />
      </div>
      <div className="card w-[95%] sm:w-full sm:-mt-[72px] -mt-12">
        <div className="title">CTT Token</div>
        <div className="line"></div>
        <div className="w-full sm:text-center text-left grid sm:grid-cols-3 grid-cols-1">
          <div className="token-item">
            <div className="flex sm:flex-col items-center justify-between">
              <div className="label">{t('card1.label1')}</div>
              <div className="name text-lg sm:text-2xl sm:mt-3 mt-0">CITEX Token</div>
            </div>
            <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
              <div className="label">{t('card1.label2')}</div>
              <div className="count text-lg sm:text-2xl sm:mt-3 mt-0">250,000,000 CTT</div>
          </div>
          </div>
          <div className="token-item">
          <div className="flex sm:flex-col items-center justify-between sm:mt-0 mt-4">

            <div className="label">{t('token.symbol')}</div>
            <div className="name text-lg sm:text-2xl sm:mt-3 mt-0">CTT</div>
            </div>
            <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">

            <div className="label">{t('token.totalCirculate')}</div>
            <div className="count text-lg sm:text-2xl sm:mt-3 mt-0">171,105,893.29 CTT</div>
          </div>
          </div>
          <div className="token-item">
          <div className="flex sm:flex-col items-center justify-between sm:mt-0 mt-4">

            <div className="label">{t('token.chain')}</div>
            <div className="name text-lg sm:text-2xl sm:mt-3 mt-0">BNB Smart Chain（BEP20）</div>
            </div>
            <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
            <div className="label">{t('token.totalNot')}</div>
            <div className="count text-lg sm:text-2xl sm:mt-3 mt-0">78,894,106.71 CTT</div>
          </div>
          </div>
        </div>
        <div className="go-tips flex items-center justify-between sm:justify-center w-full mt-[30px] cursor-pointer" onClick={() => toChainLink()}>
          <span>
          {t('token.contract')}:
          </span>
          <span className="inline-block w-60 sm:w-96 break-words">
          0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e →
          </span>

        </div>
      </div>
      <div className="card w-[95%] sm:w-full s2">
        <div className="title">{t('release.title')}</div>
        <div className="sub-title">
          {t('release.desc')}
        </div>
        <div className="line"></div>
        <div className="year-wrap w-full grid sm:grid-cols-5 grid-cols-2 gap-[13px]">
          {yearOption.map(el => (
            <div className="year-item flex flex-col pl-[20px] items-start justify-center">
              <div className="year">{el}</div>
              <div className="label">{t('release.toDo')}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card w-[95%] sm:w-full s3 mt-[43px]">
        <div className="title sm:text-[32px] text-2xl">{t('handleTable.title')}</div>
        <div className="box-wrap flex flex-wrap w-full sm:mt-[60px] mt-4 mb-[20px] text-left">
          <div className="box-item flex flex-col-reverse  sm:flex-row sm:w-1/2 w-full pr-[55px]">
            <img className="w-[189px] h-[150px] sm:mr-[38px] mx-auto mt-6 sm:mt-0" src={img1} />
            <div className="flex flex-col items-start justify-center ">
              <div className="sm:text-[24px] text-[20px] text-[#0D0E0F]">{t('handleTable.d1')}</div>
              <div className="sm:text-[20px] text-base text-[#87909F]">{t('handleTable.planning')}</div>
              <div className="sm:text-[20px] text-base text-[#87909F]">{t('handleTable.d3')}</div>
            </div>
          </div>
          <div className="box-item flex flex-col-reverse sm:flex-row sm:w-1/2 w-full border-[#E2E5E7] border-t sm:border-t-0 sm:border-l mt-8 sm:mt-0 pt-6 sm:pt-0">
            <img className="pl-[75px] w-[206px] h-[150px] mr-[72px]" src={img2} />
            <div className="flex flex-col items-start sm:justify-center justify-start">
              <div className="w-[243px] sm:text-[24px] text-[20px] text-[#0D0E0F]">{t('handleTable.d4')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="s4 w-[95%] sm:w-full grid grid-cols-1 sm:grid-cols-2 gap-[40px] mt-[40px]">
        <div className="card">
          <div className="title sm:text-[32px] text-2xl">{t('handleTable.otherTitle')}</div>
          <div className="flex sm:flex-row flex-col-reverse sm:items-center items-start mt-8 sm:mt-0 w-full h-[288px] sm:h-[272px]">
            <img className="w-[220px] h-[160px] mx-auto mt-4 sm:mt-0 sm:ml-0 sm:mr-[40px]" src={img3} />
            <div className="flex flex-col items-start sm:justify-center justify-start">
              <div className="text-[24px] text-[#0D0E0F]">{t('handleTable.od1')}</div>
              <div className="text-[20px] text-[#87909F]">{t('handleTable.planning')}</div>
              <div className="w-[205px] text-[20px] text-[#87909F]">{t('handleTable.od2')}</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="title sm:text-[32px] text-2xl">{t('handleTable.howTitle')}</div>
          <div className="flex sm:flex-row flex-col-reverse sm:items-center w-full h-[256px] sm:h-[272px]">
            <img className="w-[248px] h-[180px] mx-auto mt-4 sm:mt-0 sm:ml-0 sm:mr-[50px]" src={img4} />
            <div className="btn sm:text-xl text-lg sm:w-[180px] w-40 h-10 sm:h-[48px] flex items-center justify-center" onClick={() => toGetLink()}>{t('button.getIt')}</div>
          </div>
        </div>
      </div>
      <div className="bottom-tips ">
        <span className="inline-block w-80 sm:w-full sm:text-xl text-base break-words text-center">
      {t('end.title')}
        </span>
      </div>
    </StyledWapper>
  );
};

const StyledWapper = Styled.div`
    width: 100vw;
    text-align: left;
    * {
      box-sizing: border-box;
    }
    .btn {
      border-radius: 8px;

      background: #186CFC;


      font-family: HarmonyOS Sans SC;
      font-weight: bold;
      line-height: 140%;
      text-align: center;
      letter-spacing: 0em;

      color: #FFFFFF;
    }
    .banner-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: url(${bannerBg}) no-repeat center/cover;
      .left-wrap {
        width: 600px;
        text-align: left;
        .title {
          font-family: HarmonyOS Sans SC;
          font-size: 48px;
          font-weight: bold;
          line-height: 50px;
          letter-spacing: 0em;

          color: #000000;
        }
        .desc {
          margin-top: 16px;
          font-family: HarmonyOS Sans SC;
          font-size: 20px;
          font-weight: normal;
          line-height: 32px;
          letter-spacing: 0em;

          color: #000000;
        }
        .btn {
          margin-top: 32px;
        }
      }
      .right-img {
        flex: 0 0 auto;
        width: 456px;
        height: 330px;
        margin-left: 150px;
      }
    }
    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      max-width: 1200px;
      padding: 30px;
      border-radius: 20px;
      opacity: 1;

      background: #FFFFFF;
      
      box-sizing: border-box;
      border: 1px solid #E2E5E7;
      .title {
        font-family: HarmonyOS Sans SC;
        font-weight: bold;
        line-height: 100%;
        letter-spacing: 0em;
        
        color: #0D0E0F;
      }
      .line {
        width: 100%;
        height: 1px;
        margin: 30px 0;
        background: #E2E5E7;
      }
    }
    .s1 {
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
      .token-item {
        .label {
          font-family: HarmonyOS Sans SC;
          font-size: 14px;
          font-weight: normal;
          line-height: 100%;
          letter-spacing: 0em;

          color: #87909F;
        }
        .name {
          margin-top: 12px;
          font-family: HarmonyOS Sans SC;
          font-size: 24px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0em;

          color: #0D0E0F;
        }
        .name + .label {
          margin-top: 30px;
        }
        .count {
          margin-top: 12px;
          font-family: HarmonyOS Sans SC;
          font-size: 24px;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0em;

          color: #0D0E0F;
        }
      }
    }
    .s2 {
      margin-top: 40px;
      .sub-title {
        margin-top: 30px;
        font-family: HarmonyOS Sans SC;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        text-align: center;
        letter-spacing: 0em;
        
        color: #186CFC;
      }
      .year-wrap {
        .year-item {
          width: 100%;
          height: 90px;
          background: linear-gradient(180deg, #F3F7FF 0%, #FFFFFF 99%);
          .year {
            font-family: HarmonyOS Sans SC;
            font-size: 24px;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: 0em;

            color: #186CFC;
          }
          .label {
            margin-top: 14px;
            font-family: HarmonyOS Sans SC;
            font-size: 14px;
            font-weight: normal;
            line-height: 100%;
            letter-spacing: 0em;

            color: #87909F;
          }
        }
      } 
    }
    .s4 {
      max-width: 1200px;
      .card {
        padding-bottom: 0;
      }
    }
    .bottom-tips {
      width: 100%;
      margin: 48px 0 80px;
      font-family: HarmonyOS Sans SC;
      font-weight: normal;
      line-height: 140%;
      letter-spacing: 0em;
      text-align: center;

      color: #87909F;
    }
`;

export default HomePage;
