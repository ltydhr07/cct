import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
              "CITEX Token(CTT) is the only token on the CITEX exchange. CITEX continues to enrich CTT holding rights, expand CTT application scenarios, and safeguard and enhance the value of CTT.",
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
            title: "CTT release",
            desc: "The unreleased amount of CTT Token is released over 10 years; 7889410.671 CTT is released annually, of which 5000000 CTT is used for liquidity mining and ecological support, and 2889410.671 CTT is part of the CTT technical team.",
            toDo: "Release amount: (To be released)",
          },
          handleTable: {
            title: "Hold CTT and enjoy more benefits",
            d1: "Hold CTT and have voting rights for the listing of new tokens",
            planning: "(Planned)",
            d3: "Vote for New Tokens, Win Airdrop",
            d4: "Hold CTT and share new token rewards for free",
            otherTitle: "CTT Other Rights",
            od1: "Enjoy spot trading fee discount",
            od2: "More rights are constantly being updated, please pay more attention！",
            od3: "Please pay more attention！",
            howTitle: "How to get CTT",
            hd1: 'Go to CTT/USDT Trading Pair',
          },
          end: {
            title: "CITEX invites you to create a healthy, safe, and reliable CTT ecology together",
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
            title: "CTT释放",
            desc: "CTT Token未释放量分10年释放；每年释放7,889,410.671 CTT，其中5,000,000 CTT用于流动性挖矿及生态支持，2,889,410.671 CTT为CTT技术团队。",
            toDo: "释放量：（待释放）",
          },
          handleTable: {
            title: "持有CTT，福利享不停",
            d1: "持有CTT，参与投票上币",
            planning: "(计划中)",
            d3: "投票上币赢空投",
            d4: "持有CTT，不定期免费瓜分代币奖励",
            otherTitle: "CTT其他权益",
            od1: "现货手续费折扣",
            od2: "更多权益持续更新中,请持续关注！",
            od3: "请持续关注！",
            howTitle: "如何获得CTT",
            hd1: '前往CTT/USDT交易对交易',
          },
          end: {
            title: "CITEX邀您与我们一起共创健康、安全、可靠的 CTT生态",
          }
        },
      },
      ko: {
        translation: {
          header: {
            title: "CTT 토큰",
            subtitle:
              "CITEX 토큰(CTT)은 씨텍스 거래 플랫폼의 유일한 토큰으로, 씨텍스는 지속적으로 보유자의 권익을 강화하고 CTT의 적용 시나리오를 확장함으로써 씨텍스 토큰의 가치를 보호하고 향상시킵니다.",
          },
          card1: {
            label1: "토큰 이름",
            label2: "CTT 총 발행량",
          },
          button: {
            getIt: "원클릭 받기"
          },
          token: {
            name: "토큰 이름",
            symbol: "토큰 심볼",
            chain: "체인 ",
            totalNum: "CTT 총 발행량",
            totalCirculate: "CTT 유통량",
            totalNot: "CTT 미유통량",
            contract: "계약서 주소",
          },
          release: {
            title: "CTT 릴리스",
            desc: "10년간 미유통된 CTT는 매년 7,889,410.671 CTT가 유통되며, 이 중 5,000,000 CTT는 유동성 채굴 및 생태 지원을 위해 사용되고 2,889,410.671 CTT는 CTT 기술팀이 보유하게 됩니다.",
            toDo: "유통 수량: (대 유통량)",
          },
          handleTable: {
            title: "CTT를 보유하고 혜택을 누리세요",
            d1: "CTT를 보유하고 코인 상장 투표에 참여하세요",
            planning: "(예정)",
            d3: "코인에 투표하여 에어드랍 받기",
            d4: "CTT를 보유하고 때때로 무료 토큰 보상을 받으세요",
            otherTitle: "CTT의 다른 혜택",
            od1: "현물 취급 수수료 할인",
            od2: "더 많은 권한과 혜택이 지속적으로 업데이트되고 있으니 계속 관심을 주세요!",
            od3: "계속 관심을 주세요!",
            howTitle: "CTT 획득 방법",
            hd1: 'CTT/USDT로 이동',
          },
          end: {
            title: "CITEX와 함께 건강하고 안전하며 신뢰할 수 있는 CTT 생태계를 만들어 가시기 바랍니다",
          }
        },
      },
      id: {
        translation: {
          header: {
            title: "Zona CTT",
            subtitle:
              "Token CITEX(CTT) adalah satu-satunya token di bursa CITEX. CITEX terus memperkaya hak kepemilikan CTT, memperluas skenario penerapan CTT, dan menjaga serta meningkatkan nilai CTT.",
          },
          card1: {
            label1: "Nama Token",
            label2: "Pasokan Maks CTT",
          },
          button: {
            getIt: "Beli CTT"
          },
          token: {
            name: "Nama Token",
            symbol: "Token Symbol",
            chain: "Jaringan",
            totalNum: "Pasokan Maks CTT",
            totalCirculate: "Pasokan Sirkulasi CTT",
            totalNot: "Jumlah pelepasan CTT",
            contract: "Alamat Contract ",
          },
          release: {
            title: "Pelepasan CTT",
            desc: "Jumlah Token CTT yang belum dirilis akan dirilis selama 10 tahun;  7889410.671 CTT dirilis setiap tahun, dimana 5000000 CTT digunakan untuk penambangan likuiditas dan dukungan ekologi, dan 2889410.671 CTT adalah bagian dari tim teknis CTT.",
            toDo: "Jumlah rilis: (Akan dirilis)",
          },
          handleTable: {
            title: "Pegang CTT dan nikmati lebih banyak keuntungan",
            d1: "Memegang CTT dan mempunyai hak suara untuk pencatatan token baru",
            planning: "(Direncanakan)",
            d3: "Pilih Token Baru, Menangkan Airdrop",
            d4: "Tahan CTT dan berbagi hadiah token baru secara gratis",
            otherTitle: "Hak Lainnya CTT",
            od1: "Nikmati diskon biaya perdagangan spot",
            od2: "Lebih banyak hak akan terus diperbarui, harap lebih diperhatikan!",
            od3: "Mohon lebih diperhatikan!",
            howTitle: "Bagaimana cara mendapatkan CTT",
            hd1: 'Pergi ke CTT/USDT',
          },
          end: {
            title: "CITEX mengundang Anda untuk bersama-sama menciptakan ekologi CTT yang sehat, aman, dan andal",
          }
        },
      },
      vi: {
        translation: {
          header: {
            title: "Khu vực CTT",
            subtitle:
              "CITEX Token(CTT) là token duy nhất trên sàn giao dịch CITEX. CITEX tiếp tục nâng cao quyền sở hữu CTT, mở rộng các kế hoạch ứng dụng CTT, đồng thời bảo vệ và nâng cao giá trị của CTT.",
          },
          card1: {
            label1: "Tên Token",
            label2: "Tổng cung CTT",
          },
          button: {
            getIt: "Mua CTT"
          },
          token: {
            name: "Tên Token",
            symbol: "Ký tự Token",
            chain: "Chuỗi",
            totalNum: "Tổng cung CTT",
            totalCirculate: "Nguồn cung lưu hành CTT",
            totalNot: "Số lượng CTT phát hành",
            contract: "Địa chỉ hợp đồng",
          },
          release: {
            title: "CTT phát hành",
            desc: "Số lượng CTT Token chưa được phát hành sẽ được phát hành trong 10 năm; 7889410.671 CTT được phát hành hàng năm, trong đó 5000000 CTT được sử dụng để khai thác thanh khoản và hỗ trợ hệ sinh thái, và 2889410.671 CTT là một phần dành cho đội ngũ kỹ thuật của CTT.",
            toDo: "Số lượng phát hành: (Đã được phát hành)",
          },
          handleTable: {
            title: "Nắm giữ CTT để kiếm nhiều lợi nhuận hơn",
            d1: "Nắm giữ CTT để có quyền được tham gia bình chọn niêm yết các Token mới",
            planning: "(Đã lên kế hoạch)",
            d3: "Bình chọn các Token mới, Kiếm Airdrop",
            d4: "Nắm giữ CTT để chia sẻ và giành các giải thưởng từ Token mới miễn phí",
            otherTitle: "Các quyền khác của CTT",
            od1: "Ưu đãi giảm phí khi giao dịch SPOT",
            od2: "Nhiều quyền khác nữa sẽ được liên tục được cập nhật, xin vui lòng chú ý!",
            od3: "Xin vui lòng chú ý!",
            howTitle: "Cách để nhận CTT",
            hd1: 'Đi tới giao dịch CTT/USDT',
          },
          end: {
            title: "CITEX mời bạn cùng nhau tạo ra một hệ sinh thái CTT lành mạnh, an toàn và đáng tin cậy",
          }
        },
      },
      tc: {
        translation: {
          header: {
            title: "CTT專區",
            subtitle:
              "CITEX Token(CTT)是 CITEX 交易平臺唯一通證。CITEX通過持續豐富 CTT持幣權益，拓展 CTT 應用場景，保障和提升CTT價值。",
          },
          card1: {
            label1: "代幣名稱",
            label2: "CTT總發行量",
          },
          button: {
            getIt: "一鍵獲取"
          },
          token: {
            name: "代幣名稱",
            symbol: "代幣符號",
            chain: "所屬鏈",
            totalNum: "CTT總發行量",
            totalCirculate: "CTT流通量",
            totalNot: "CTT未釋放量",
            contract: "智能合約",
          },
          release: {
            title: "CTT釋放",
            desc: "CTT Token未釋放量分10年釋放；每年釋放7,889,410.671 CTT，其中5,000,000 CTT用於流動性挖礦及生態支持，2,889,410.671 CTT為CTT技術團隊。",
            toDo: "釋放量：（待釋放）",
          },
          handleTable: {
            title: "持有CTT，福利享不停",
            d1: "持有CTT，參與投票上幣",
            planning: "(計劃中)",
            d3: "投票上幣贏空投",
            d4: "持有CTT，不定期免費瓜分代幣獎勵",
            otherTitle: "CTT其他權益",
            od1: "現貨手續費折扣",
            od2: "更多權益持續更新中,請持續關註！",
            od3: "請持續關註！",
            howTitle: "如何獲得CTT",
            hd1: '前往CTT/USDT交易對交易',
          },
          end: {
            title: "CITEX邀您與我們一起共創健康、安全、可靠的 CTT生態",
          }
        },
      },
    }
  });

export default i18n;
