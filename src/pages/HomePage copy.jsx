import React, { useState } from "react";
import Styled from "styled-components";

import bannerBg from "../assets/images/banner_bg.png";
import bannerRImg from "../assets/images/banner_img.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const HomePage = () => {
  const yearOption = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033
  ];

  const toGetLink = () => {
    window.open('https://www.citex.club/zh_CN/trade/CTT_USDT?type=spot','_blank')
  }

  const toChainLink = () => {
    window.open('https://bscscan.com/token/0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e','_blank')
  }

  return (
    <StyledWapper className="flex flex-col items-center">
      <div className="banner-wrap">
        <div className="left-wrap">
          <div className="title">CTT专区</div>
          <div className="desc">
            CITEX Token（CTT）是 CITEX 交易平台唯一通证。CITEX通过持续丰富 CTT持币权益，拓展 CTT 应用场景，保障和提升CTT价值。
          </div>
          <div className="btn flex items-center justify-center" onClick={() => toGetLink()}>一键获取</div>
        </div>
        <img className="right-img" src={bannerRImg} />
      </div>
      <div className="card s1">
        <div className="title">CTT Token</div>
        <div className="line"></div>
        <div className="flex w-full">
          <div className="token-item w-1/3">
            <div className="label">代币名称</div>
            <div className="name">CITEX Token</div>
            <div className="label">CTT总发行量</div>
            <div className="count">250,000,000 CTT</div>
          </div>
          <div className="token-item w-1/3">
            <div className="label">代币符号</div>
            <div className="name">CTT</div>
            <div className="label">CTT流通量</div>
            <div className="count">171,105,893.29 CTT</div>
          </div>
          <div className="token-item w-1/3">
            <div className="label">所属链</div>
            <div className="name">BNB Smart Chain（BEP20）</div>
            <div className="label">CTT未释放量</div>
            <div className="count">78,894,106.71 CTT</div>
          </div>
        </div>
        <div className="go-tips w-full mt-[30px] cursor-pointer" onClick={() => toChainLink()}>
          智能合约:0x20B65a45d58CedF6c5b62FB2ba019b24A490AD4e →
        </div>
      </div>
      <div className="card s2">
        <div className="title">CTT释放</div>
        <div className="sub-title">
          CTT Token未释放量分10年释放；每年释放7,889,410.671 CTT，其中5,000,000 CTT用于流动性挖矿及生态支持，2,889,410.671 CTT为CTT技术团队。
        </div>
        <div className="line"></div>
        <div className="year-wrap w-full grid grid-cols-5 gap-[13px]">
          {yearOption.map(el => (
            <div className="year-item flex flex-col pl-[20px] items-start justify-center">
              <div className="year">{el}</div>
              <div className="label">释放量：（待释放）</div>
            </div>
          ))}
        </div>
      </div>
      <div className="card s3 mt-[43px]">
        <div className="title">持有CTT，福利享不停</div>
        <div className="box-wrap flex w-full mt-[60px] mb-[20px] text-left">
          <div className="box-item flex w-1/2 pr-[55px]">
            <img className="w-[189px] h-[150px] mr-[38px]" src={img1} />
            <div className="flex flex-col items-start justify-center ">
              <div className="text-[24px] text-[#0D0E0F]">持有CTT，参与投票上币</div>
              <div className="text-[20px] text-[#87909F]">(计划中)</div>
              <div className="text-[20px] text-[#87909F]">投票上币赢空投</div>
            </div>
          </div>
          <div className="box-item flex w-1/2 pl-[75px] border-[#E2E5E7] border-l">
            <img className="w-[131px] h-[150px] mr-[72px]" src={img2} />
            <div className="flex flex-col items-start justify-center ">
              <div className=" w-[243px] text-[24px] text-[#0D0E0F]">持有CTT，不定期免费瓜分代币奖励</div>
            </div>
          </div>
        </div>
      </div>
      <div className="s4 w-full flex mt-[40px]">
        <div className="card">
          <div className="title">CTT其他权益</div>
          <div className="flex items-center w-full h-[272px]">
            <img className="w-[220px] h-[160px] mr-[40px]" src={img3} />
            <div className="flex flex-col items-start justify-center ">
              <div className="text-[24px] text-[#0D0E0F]">现货手续费折扣</div>
              <div className="text-[20px] text-[#87909F]">(计划中)</div>
              <div className="w-[205px] text-[20px] text-[#87909F]">更多权益持续更新中，请及时关注！</div>
            </div>
          </div>
        </div>
        <div className="card ml-[40px]">
          <div className="title">如何获得CTT</div>
          <div className="flex items-center w-full h-[272px]">
            <img className="w-[248px] h-[180px] mr-[50px]" src={img4} />
            <div className="btn flex items-center justify-center" onClick={() => toGetLink()}>一键获取</div>
          </div>
        </div>
      </div>
      <div className="bottom-tips">
      CITEX邀您与我们一起共创健康、安全、可靠的 CTT生态
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
      width: 160px;
      height: 48px;
      border-radius: 8px;

      background: #186CFC;


      font-family: HarmonyOS Sans SC;
      font-size: 20px;
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
      height: 490px;
      padding: 56px 0 103px;
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
      width: 100%;
      max-width: 1200px;
      padding: 30px;
      border-radius: 20px;
      opacity: 1;

      background: #FFFFFF;
      
      box-sizing: border-box;
      border: 1px solid #E2E5E7;
      .title {
        font-family: HarmonyOS Sans SC;
        font-size: 32px;
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
      margin-top: -72px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
      .token-item {
        .label {
          font-family: HarmonyOS Sans SC;
          font-size: 14px;
          font-weight: normal;
          line-height: 100%;
          text-align: center;
          letter-spacing: 0em;

          color: #87909F;
        }
        .name {
          margin-top: 12px;
          font-family: HarmonyOS Sans SC;
          font-size: 24px;
          font-weight: 500;
          line-height: 100%;
          text-align: center;
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
          text-align: center;
          letter-spacing: 0em;

          color: #0D0E0F;
        }
      }
      .go-tips {
        font-family: HarmonyOS Sans SC;
        font-size: 14px;
        font-weight: normal;
        line-height: 100%;
        text-align: center;
        letter-spacing: 0em;
        
        color: #186CFC;
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
      width: 100%;
      max-width: 1200px;
      .card {
        padding-bottom: 0;
      }
    }
    .bottom-tips {
      width: 100%;
      margin: 48px 0 80px;
      font-family: HarmonyOS Sans SC;
      font-size: 24px;
      font-weight: normal;
      line-height: 140%;
      letter-spacing: 0em;
      text-align: center;

      color: #87909F;
    }
`;

export default HomePage;
