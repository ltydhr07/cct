import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    // 初始化 i18next
    // 配置参数的文档: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: "zh",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { 
                translation: {
                header: {
                    title: "CTT Zone",
                    subtitle:
                        "CITEX Token (CTT) is the only token on the CITEX exchange. CITEX continues to enrich CTT coin holding rights, expand CTT application scenarios, and safeguard and enhance the value of CTT.",
                },
                card1: {
                    label1: "Token Name",
                    label2: "CTT Max Supply",
                },
                button: {
                    getIt: "Buy CTT"
                },
                token: {
                    name: "Token Name",
                    symbol: "Token symbol",
                    chain: "Chain",
                    totalNum: "CTT Max Supply",
                    totalCirculate: "CTT Circulating Supply",
                    totalNot: "CTT release amount",
                    contract: "Contract address",
                },
                release: {
                    title:"CTT release",
                    desc: "The unreleased amount of CTT Token is released over 10 years; 7889410.671 CTT is released annually, of which 5000000 CTT is used for liquidity mining and ecological support, and 2889410.671 CTT is part of the CTT technical team.",
                    toDo: " Release amount: (To be released)",
                },
                handleTable: {
                    title: "Hold CTT and enjoy more benefits",
                    d1: "Hold CTT and have voting rights for the listing of new tokens",
                    planning: "(Planned)",
                    d3: "Vote for New Tokens, Win Airdrop",
                    d4:"Hold CTT and share new token rewards for free",
                    otherTitle:"CTT Other Rights",
                    od1:"Enjoy spot trading fee discount",
                    od2:"More rights are constantly being updated, please pay more attention!",
                    od3:"Please pay more attention!",
                    howTitle:"How to get CTT",
                    hd1: 'Go to CTT/USDT Trading Pair'
                },
                end:{
                    title:"CITEX invites you to create a healthy, safe, and reliable CTT ecology together",
                }
            },
        },
        zh: {
            translation: {
                header: {
                    title: "CTT专区",
                    subtitle:
                        "CITEX Token(CTT)是 CITEX 交易平台唯一通证。CITEX通过持续丰富 CTT持币权益，拓展 CTT 应用场景，保障和提升CTT价值。",
                },
                card1: {
                    label1: "代币名称",
                    label2: "CTT总发行量",
                },
                button: {
                    getIt: "一键获取"
                },
                token: {
                    name: "代币名称",
                    symbol: "代币符号",
                    chain: "所属链",
                    totalNum: "CTT总发行量",
                    totalCirculate: "CTT流通量",
                    totalNot: "CTT未释放量",
                    contract: "智能合约",
                },
                release: {
                    title:"CTT释放",
                    desc: "CTT Token未释放量分10年释放；每年释放7,889,410.671 CTT，其中5,000,000 CTT用于流动性挖矿及生态支持，2,889,410.671 CTT为CTT技术团队。",
                    toDo: "释放量：（待释放）",
                },
                handleTable: {
                    title: "持有CTT，福利享不停",
                    d1: "持有CTT，参与投票上币",
                    planning: "(计划中)",
                    d3: "投票上币赢空投",
                    d4:"持有CTT，不定期免费瓜分代币奖励",
                    otherTitle:"CTT其他权益",
                    od1:"现货手续费折扣",
                    od2:"更多权益持续更新中,请持续关注！",
                    od3:"请持续关注！",
                    howTitle:"如何获得CTT",
                    hd1: '前往CTT/USDT交易对交易'
                },
                end:{
                    title:"CITEX邀您与我们一起共创健康、安全、可靠的 CTT生态",
                }
            },
        },
    }
});

export default i18n;
