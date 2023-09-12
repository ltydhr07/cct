import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Styled from "styled-components";

import logo_pc from "../assets/images/logo_pc.svg";
import logo_m from "../assets/images/logo_m.svg";
import bannerBg from "../assets/images/banner_bg.png";
import bannerRImg from "../assets/images/banner_img.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const locale = useLocation();

  const langOption = {
    en: {
      status: true, 
      nativeName: 'English',
      homeLinkUrl: 'https://www.citex.io/en_US',
      linkUrl: 'https://www.citex.io/en_US/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    zh: {
      status: true, 
      nativeName: '中文',
      homeLinkUrl: 'https://www.citex.club/zh_CN',
      linkUrl: 'https://www.citex.club/zh_CN/trade/CTT_USDT?type=spot',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    tc: {
      status: true, 
      nativeName: '繁体中文',
      homeLinkUrl: 'https://www.citex.club/zh_TC',
      linkUrl: 'https://www.citex.club/zh_TC/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    ko: {
      status: true, 
      nativeName: '韩文',
      homeLinkUrl: 'https://www.citex.io/ko_KR',
      linkUrl: 'https://www.citex.io/ko_KR/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    id: {
      status: true, 
      nativeName: '印尼语',
      homeLinkUrl: 'https://www.citex.io/en_US',
      linkUrl: 'https://www.citex.io/en_US/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    },
    vi: {
      status: true, 
      nativeName: '越南语',
      homeLinkUrl: 'https://www.citex.io/en_US',
      linkUrl: 'https://www.citex.io/en_US/trade/CTT_USDT',
      chainLink: 'https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e',
    }
  };
  const yearOption = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033
  ];

  const toGetLink = () => {
    if(langOption[i18n.language]) {
      window.open(langOption[i18n.language].linkUrl,'_self')
      return
    }
    window.open(langOption.en.linkUrl,'_self')
  }
  
  const toHome = () => {
    if(langOption[i18n.language]) {
      window.open(langOption[i18n.language].homeLinkUrl,'_self')
      return
    }
    window.open(langOption.en.homeLinkUrl,'_self')
  }

  const toChainLink = () => {
    if(langOption[i18n.language]) {
      window.open(langOption[i18n.language].chainLink,'_self')
      return
    }
    window.open(langOption.en.chainLink,'_self')
  }

  // 获取href 的参数 lang 设置中英文切换
  useEffect(() => {
    const search = locale.search
    if(search) {
      const paramArr = search.split('?')[1].split('&');
      let paramObj = {};
      paramArr.forEach(el => {
        const [key, val] = el.split('=');
        paramObj[key] = val
      })
      const lang = paramObj.lang;
      if(lang && langOption[lang] && langOption[lang].status) {
        i18n.changeLanguage(lang);
        return
      }
    }
    i18n.changeLanguage('en');
  }, [])

  return (
    <StyledWapper className="flex flex-col items-center pt-[60px] sm:pt-[54px]">
      <div className="fixed left-0 top-0 flex items-center w-full h-[60px] sm:h-[54px] pl-6 sm:pl-4 bg-white">
        <img className="hidden sm:block w-[91px] cursor-pointer" src={logo_pc} alt="" onClick={() => toHome()} />
        <img className="block sm:hidden w-[113px] cursor-pointer" src={logo_m} alt="" onClick={() => toHome()} />
      </div>
      <div className="banner-wrap flex-wrap sm:h-[490px] sm:block px-6 pt-10 sm:pt-[56px] pb-[38px] sm:pb-[103px]">
        <div className="w-[600px] text-left">
          <div className="sm:text-[48px] text-[22px] font-bold">{t('header.title')}</div>
          <div className="mt-2 sm:mt-4 sm:text-[20px] text-[14px]">
            {t('header.subtitle')}
          </div>
          <div className="hidden sm:flex items-center justify-center mt-5 sm:mt-8 w-[160px] sm:w-[129px] h-[48px] sm:h-[39px] sm:text-xl text-[14px] font-bold bg-[#186CFC] text-white rounded-lg" onClick={() => toGetLink()}>{t('button.getIt')}</div>
        </div>
        <img className="w-[248px] sm:w-[456px] sm:ml-[150px] mt-2 sm:mt-0" src={bannerRImg} />
      </div>
      <div className="card p-[20px] sm:p-[30px] sm:-mt-[72px] -mt-[42px] s1">
        <div className="title text-[18px] sm:text-[32px]">CTT Token</div>
        <div className="w-full h-px my-[20px] sm:my-[30px] bg-[#E2E5E7]"></div>
        <div className="w-full sm:text-center text-left grid sm:grid-cols-3 grid-cols-1 text-xs sm:text-[14px] text-[#87909F]">
          <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
            <div className="">{t('card1.label1')}</div>
            <div className="text-[#0D0E0F] sm:text-2xl font-bold sm:mt-3 mt-0">CITEX Token</div>
          </div>
          <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
            <div className="">{t('token.symbol')}</div>
            <div className="text-[#0D0E0F] sm:text-2xl font-bold sm:mt-3 mt-0">CTT</div>
          </div>
          <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
            <div className="">{t('token.chain')}</div>
            <div className="text-[#0D0E0F] sm:text-2xl font-bold sm:mt-3 mt-0">BNB Smart Chain(BEP20)</div>
          </div>
          <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
            <div className="">{t('card1.label2')}</div>
            <div className="text-[#0D0E0F] sm:text-2xl font-bold sm:mt-3 mt-0">250,000,000 CTT</div>
          </div>
          <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
            <div className="">{t('token.totalCirculate')}</div>
            <div className="text-[#0D0E0F] sm:text-2xl font-bold sm:mt-3 mt-0">171,105,893.29 CTT</div>
          </div>
          <div className="flex sm:flex-col items-center justify-between sm:mt-8 mt-4">
            <div className="">{t('token.totalNot')}</div>
            <div className="text-[#0D0E0F] sm:text-2xl font-bold sm:mt-3 mt-0">78,894,106.71 CTT</div>
          </div>
        </div>
        <div className="go-tips flex items-center justify-start sm:justify-center w-full mt-[30px] cursor-pointer text-xs sm:text-[14px]" onClick={() => toChainLink()}>
          <span>{t('token.contract')}: </span>
          <span className="w-[156px] sm:w-auto ml-auto sm:ml-1 break-words">
          0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e
          </span>
          <span className="ml-1">→</span>
        </div>
      </div>
      <div className="card p-[20px] sm:p-[30px] mt-5 sm:mt-10 s2">
        <div className="title text-[18px] sm:text-[32px]">{t('release.title')}</div>
        <div className="sub-title text-xs sm:text-sm mt-5 sm:mt-[30px]">
          {t('release.desc')}
        </div>
        <div className="w-full h-px my-[20px] sm:my-[30px] bg-[#E2E5E7]"></div>
        <div className="year-wrap w-full grid sm:grid-cols-5 grid-cols-2 gap-y-[10px] gap-x-[6px] sm:gap-[13px]">
          {yearOption.map(el => (
            <div className="year-item flex flex-col px-3 sm:px-[20px] items-start justify-center">
              <div className="year text-base sm:text-[24px] font-semibold">{el}</div>
              <div className="label text-xs sm:text-sm mt-[11px] sm:mt-15px ">{t('release.toDo')}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-[20px] mt-5 sm:mt-10 sm:p-[40px] s3">
        <div className="title text-[18px] sm:text-[32px]">{t('handleTable.title')}</div>
        <div className="w-full h-px my-[20px] sm:my-[30px] bg-[#E2E5E7]"></div>
        <div className="box-wrap flex flex-wrap w-full sm:mb-[16px] text-left">
          <div className="box-item flex flex-row-reverse sm:flex-row sm:w-1/2 w-full sm:pr-[55px]">
            <img className="w-[129px] sm:w-[225px] ml-3 sm:ml-0 sm:mr-[24px]" src={img1} alt="" />
            <div className="flex flex-col items-start justify-center">
              <div className="text-sm sm:text-[20px] font-semibold leading-snug text-[#0D0E0F]">{t('handleTable.d1')}</div>
              <div className="mt-2 sm:mt-5 text-xs sm:text-sm leading-none text-[#87909F]">{t('handleTable.planning')}</div>
              <div className="mt-1 sm:mt-3 text-xs sm:text-sm leading-none text-[#87909F]">{t('handleTable.d3')}</div>
            </div>
          </div>
          <div className="box-item flex flex-row-reverse sm:flex-row sm:w-1/2 w-full border-[#E2E5E7] border-t sm:border-t-0 sm:border-l mt-[30px] sm:mt-0 pt-6 sm:pt-0">
            <img className="w-[125px] sm:w-[225px] ml-4 sm:ml-0 sm:mr-[24px]" src={img2} alt="" />
            <div className="flex flex-col items-start justify-center">
              <div className="w-full sm:w-[243px] text-sm sm:text-[20px] leading-snug font-semibold text-[#0D0E0F]">{t('handleTable.d4')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="s4 grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[40px] mt-5 sm:mt-10">
        <div className="card p-[24px] sm:p-[30px] sm:pb-0">
          <div className="title text-[18px] sm:text-[32px]">{t('handleTable.otherTitle')}</div>
          <div className="sm:hidden w-full h-px my-[18px] sm:my-[30px] bg-[#E2E5E7]"></div>
          <div className="flex sm:flex-row flex-row-reverse sm:items-center items-start w-full h-auto sm:h-[272px]">
            <img className="w-[129px] sm:w-[220px] ml-8 sm:ml-0 sm:mr-[40px]" src={img3} alt="" />
            <div className="flex flex-col items-start sm:justify-center justify-start">
              <div className="text-sm sm:text-[20px] font-semibold leading-none text-[#0D0E0F]">{t('handleTable.od1')}</div>
              <div className="mt-2 sm:mt-5 text-xs sm:text-sm leading-none text-[#87909F]">{t('handleTable.planning')}</div>
              <div className="mt-1 sm:mt-3 text-xs sm:text-sm leading-snug text-[#87909F]">{t('handleTable.od2')}</div>
            </div>
          </div>
        </div>
        <div className="card py-5 px-6 sm:p-[30px] sm:pb-0">
          <div className="hidden sm:block title text-[18px] sm:text-[32px]">{t('handleTable.howTitle')}</div>
          <div className="flex sm:flex-row flex-row-reverse justify-between sm:justify-start items-center w-full sm:h-[272px]">
            <img className="w-[124px] sm:w-[248px] ml-[24px] sm:ml-0 sm:mr-[50px]" src={img4} alt="" />
            <div className="flex flex-col items-start sm:justify-center justify-start">
              <div className="block sm:hidden title text-[18px] sm:text-[32px]">{t('handleTable.howTitle')}</div>
              <div className="inline sm:hidden mt-3 text-xs leading-none text-[#87909F]">{t('handleTable.hd1')}</div>
            </div>
            <div className="hidden sm:flex items-center justify-center w-[160px] sm:w-[129px] h-[48px] sm:h-[39px] sm:text-xl text-[14px] font-bold bg-[#186CFC] text-white rounded-lg" onClick={() => toGetLink()}>{t('button.getIt')}</div>
          </div>
        </div>
      </div>
      <div className="bottom-tips ">
        <span className="inline-block w-[280px] sm:w-full text-xs  sm:text-2xl break-words text-center">{t('end.title')}</span>
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
      background: url(${bannerBg}) no-repeat center/100% 100%;
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
      width: calc(100% - 48px);
      max-width: 1200px;
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
    }
    .s1 {
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    }
    .s2 {
      .sub-title {
        font-family: HarmonyOS Sans SC;
        font-weight: normal;
        line-height: 1.5;
        text-align: left;
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
            font-weight: 500;
            line-height: 100%;
            letter-spacing: 0em;

            color: #186CFC;
          }
          .label {
            font-family: HarmonyOS Sans SC;
            font-weight: normal;
            line-height: 100%;
            letter-spacing: 0em;

            color: #87909F;
          }
        }
      } 
    }
    .s4 {
      width: calc(100% - 48px);
      max-width: 1200px;
      .card {
        width: unset;
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
