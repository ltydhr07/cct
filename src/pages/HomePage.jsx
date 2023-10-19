import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Styled from "styled-components";
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import ReactFullpage from "@fullpage/react-fullpage";

import logoImg from "../assets/images/logo.png";
import bannerBgImg from "../assets/images/banner-bg.png";
import bannerBgMImg from "../assets/images/banner-bg_m.png";
import bannerBg1Img from "../assets/images/banner-bg1.png";
import bannerBgM1Img from "../assets/images/banner-bg1_m.png";
import bg_2Img from "../assets/images/bg_2.png";
import bg_3Img from "../assets/images/bg_3.png";
import dataTableImg from "../assets/images/dataTable.png";
import dataTable_mImg from "../assets/images/dataTable_m.png";
import bg1Img from "../assets/images/bg-1.png";
import menuIcon from "../assets/images/menu_icon.png";
import home_img from "../assets/images/home_img.png";
import toTopImg from "../assets/images/toTop.png";

import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  const [menuActive, setMenuActive] = useState(0) 
  const handelMenu = (fullpageApi, index) => {
    setMenuActive(index)
    fullpageApi.moveTo(index + 1)
  }

  const [openModal, setOpenModal] = useState(false)
  
  const handleOk = () => {
    setOpenModal(false)
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    setOpenModal(true)
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setOpenModal(true)
  };
  const [isPc, setIsPc] = useState(true)
  function resize() {
    const deviceWidth = document.documentElement.clientWidth
    if(deviceWidth > 768) {
      setIsPc(true)
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + (deviceWidth / 1920) + 'px !important'
    } else {
      setIsPc(false)
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + (deviceWidth / 750) + 'px !important'
    }
  }
  const toTop = () => {
    document.getElementById('logo')?.click()
  }
  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()

    const search = window.location.search
    if(search) {
      const paramArr = search.split('?')[1].split('&');
      let lang = '';
      paramArr.forEach(el => {
        if(el.indexOf('lang') > -1) {
          lang = el.split('=')[1];
        }
      })
      if(lang) {
        i18n.changeLanguage(lang);
        return
      }
    }
    i18n.changeLanguage('en');
  }, [])

  const [showMenu, setShowMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)

  useEffect(() => {
    if(showMenu || showSubMenu) {
      document.body.onclick = () => {
        document.body.onclick = () => {
          setShowMenu(false)
          setShowSubMenu(false)
        }
      }
    }
  }, [showMenu, showSubMenu])

  return (
    <StyledWapper>
      <img className="fixed right-[34rem] bottom-[60rem] w-[92rem] z-50 cursor-pointer" onClick={() => toTop()} src={toTopImg}  />
      <ReactFullpage
        credits={{ enabled: true, label: "", position: "left" }}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section s1">
             <div className="flex justify-center w-full h-[88rem] bg-[#16243F]">
                <div className="reactive flex items-center w-full max-w-[1310rem] h-full px-[24rem] py-[8rem] md:p-0">
                  <img id="logo" onClick={() => handelMenu(fullpageApi, 0)} className="w-[226rem]" src={logoImg}  />
                  <img className="block md:hidden w-[35rem] ml-auto" src={menuIcon} onClick={() => setShowMenu(true)}  />
                  {isPc ? (
                    <div className="flex items-center h-full ml-auto text-[18rem] text-white">
                      <div onClick={() => handelMenu(fullpageApi, 0)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-0 ${menuActive === 0 ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Home')}
                      </div>
                      <div onClick={() => setShowSubMenu(true)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Service')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 3)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Promotion')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 5)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Contact US')}
                      </div>
                    </div>
                  ) : (
                    <div className={`${showMenu ? '' : 'hidden'} absolute w-[140rem] top-[94rem] right-[10rem] z-10 flex flex-col items-center bg-[#0A162B] p-[6rem] ml-auto text-[18rem] text-white`}>
                      <div onClick={() => handelMenu(fullpageApi, 0)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 ml-0`}>
                        {t('s1.Home')}
                      </div>
                      <div onClick={() => setShowSubMenu(true) } className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                        {t('s1.Service')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 3)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                        {t('s1.Promotion')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 5)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                        {t('s1.Contact US')}
                      </div>
                    </div>
                  )}
                  <div className={`${showSubMenu ? '' : 'hidden'} absolute top-[150rem] md:top-[90rem] right-[155rem] md:right-[370rem] z-10 flex flex-col items-center bg-[#0A162B] p-[6rem] ml-auto text-[18rem] text-white`}>
                    <div onClick={() => handelMenu(fullpageApi, 1)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 ml-0`}>
                    {t('s2.t2')}
                    </div>
                    <div onClick={() => handelMenu(fullpageApi, 2)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                    {t('s2.t21')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-wrap relative w-full">
                <img className="hidden md:block w-full h-full object-fill" src={bannerBgImg} alt="" />
                <img className="block md:hidden w-full h-full object-fill" src={bannerBgMImg} alt="" />
                <div className="flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
                  <div className="flex flex-col justify-center w-full max-w-[1310rem] h-full px-[92rem] md:px-[0]">
                    <div className="w-full max-w-[950px] text-[50rem] text-white">
                      {t('s1.p1')}
                    </div>
                    <div className="w-full max-w-[950px] mt-[48rem] text-[36rem] md:text-[34rem] text-white">
                      {t('s1.p2')} <span className="text-[#22CF68]">{t('s1.p21')}</span>
                    </div>
                    <div className="w-[62px] h-[4rem] mt-[48rem] bg-white bg-opacity-30"></div>
                    <div className="w-full max-w-[950px] mt-[45rem] text-[24rem] md:text-[18rem] text-white">
                      {t('s1.p3')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s21 form-bg">
              <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full max-w-[1310rem] text-[#222222] md:p-0 px-[68rem]">
                    <div className="title text-[24rem] font-bold uppercase">{t('s2.t1')}</div>
                    <div className="title text-[40rem] mt-[30rem] font-bold">{t('s2.t2')}</div>
                    <div className="w-full mt-[78rem] md:h-[544rem] flex flex-col md:flex-row items-start justify-between">
                      <div className="relative w-full h-full bg-black">
                        <img className="w-full h-full object-fill" src={bg_2Img} alt="" />
                        <div className="absolute left-0 top-0 bg-black bg-opacity-30 w-full h-full flex items-center justify-center text-white md:text-[22rem] md:text-[32rem] font-bold">
                          XXXXXXXXXXXXXXXXXXXXXXXXX
                        </div>
                      </div>
                      <div className="reactive md:w-[413rem] w-full md:ml-[24rem] mt-[46rem] md:mt-0 flex-shrink-0 flex-grow-0 bg-white">
                        <div className="head flex items-center justify-center w-full h-[100rem] bg-[#22cf68] text-[36rem] text-white font-bold">{t('s2.t3')}</div>
                        <div className="content flex flex-col w-full px-[42rem] py-[24rem]">
                          <Form
                            className="w-full"
                            name="basic" 
                            layout={isPc ? 'vertical' : 'horizontal'}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                          >
                              <Form.Item label={t('s2.l1')} name="name" rules={[{ required: true, message: t('s2.p2') }]}>
                                <Input placeholder={t('s2.p1')} />
                              </Form.Item>
                              <Form.Item label={t('s2.l2')} name="phone" rules={[{ required: true, message: t('s2.p2') }]}>
                                <Input placeholder={t('s2.p1')} />
                              </Form.Item>
                              <Form.Item label={t('s2.l3')} name="address" rules={[{ required: true, message: t('s2.p2') }]}>
                                <Input placeholder={t('s2.p1')} />
                              </Form.Item>
                              <Form.Item>
                                <Button className="big-btn w-full" type="primary" htmlType="submit">{t('submit')}</Button>
                                <Modal width='unset' wrapClassName="tips-dialog" centered visible={openModal} footer={null} onCancel={handleOk}>
                                  <div className="flex flex-col items-center py-[55rem]">
                                    <div className="text-center text-[#898989] text-[26rem]">{t('s2.tip1')}</div>
                                    <Button className="big-btn mt-[60rem]" type="primary">{t('submit')}</Button>
                                  </div>
                                </Modal>
                              </Form.Item>
                          </Form>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="section s21 bg-white">
              <div className="w-full md:h-screen py-[72rem] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full max-w-[1310rem] text-[#222222] md:p-0 px-[68rem]">
                    <div className="title text-[24rem] font-bold uppercase">{t('s2.t1')}</div>
                    <div className="title text-[40rem] mt-[30rem] font-bold">{t('s2.t21')}</div>
                    <div className="w-full mt-[78rem] flex items-start justify-between">
                      <div className="relative w-full h-full">
                        <img className="w-full h-[300rem] md:h-full object-fill" src={bg_3Img} alt="" />
                        <div className="absolute left-0 top-0 bg-[#16243F] bg-opacity-40 w-full h-full px-[36rem] md:px-[200rem] py-[20rem] md:py-[50rem] flex flex-col items-center font-bold">
                          <div className="w-full text-[#222222] text-[14rem] md:text-[22rem] text-center">
                            {t('s21.p1')}
                          </div>
                          <div className="w-full pl-[60rem] md:pl-0 mt-[40rem] md:mt-[90rem] text-white text-[18rem] md:text-[28rem] md:text-center">
                            {t('s21.p2')}
                          </div>
                          <ul className="w-full md:w-fit pl-[60rem] md:pl-[140rem] text-white list-disc text-[12rem] md:text-[18rem]">
                            <li className="mt-[8rem] md:mt-[14rem]">{t('s21.li1')}</li>
                            <li className="mt-[8rem] md:mt-[14rem]">{t('s21.li2')}</li>
                            <li className="mt-[8rem] md:mt-[14rem]">{t('s21.li3')}</li>
                            <li className="mt-[8rem] md:mt-[14rem]">{t('s21.li4')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="section s3 form-bg">
              <div className="w-full flex flex-col items-center justify-center pt-[64rem] md:pt-[90rem]">
                <div className="title text-[40rem] font-bold">{t('s3.t1')}</div>
                <img className="hidden md:block w-full mt-[90rem]" src={dataTableImg} alt="" />
                <img className="block md:hidden w-[622rem] mt-[48rem]" src={dataTable_mImg} alt="" />
                <div className="relative flex flex-col-reverse md:flex-row w-full md:h-[518rem] pl-[95rem] pr-[122rem] pb-[35rem] md:p-0 mt-[77rem] md:mt-[282rem] bg-[#16243F]">
                  <img className="md:absolute -top-[95rem] left-[90rem] w-[909rem]" src={home_img} alt="" />
                  <div className="w-full md:w-[792rem] pt-[72rem] flex flex-col ml-auto leading-none">
                    <div className="text-[40rem] md:text-[60rem] text-[#22cf68] font-bold">{t('s3.t2')}</div>
                    <div className="mt-[15rem] md:mt-[22rem] text-[20rem] md:text-[30rem] text-white">{t('s3.t3')}</div>
                    <div className="mt-[13rem] md:mt-[20rem] mb-[32rem] md:mb-[48rem] w-[74rem] md:w-[113rem] h-px bg-white"></div>
                    <div className="w-[283rem] md:w-[443rem] px-[8rem] py-[18rem] md:p-[24rem] bg-[#22cf68] text-[20rem] md:text-[30rem] text-white leading-tight">{t('s3.p1')}</div>
                    <div className="mt-[28rem] text-[18rem] text-[#22cf68] font-bold uppercase cursor-pointer">{t('s3.subscribe')}<span className="inline-block ml-[20rem] h-[28rem] text-[28rem] leading-[18rem]">→</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s6">
              <div className="relative w-full md:h-screen">
                <img className="hidden md:block w-full h-full object-fill" src={bannerBg1Img} alt="" />
                <img className="block md:hidden w-full h-full object-fill" src={bannerBgM1Img} alt="" />
                <div className="flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
                  <div className="flex flex-col justify-start md:justify-center w-full max-w-[1310rem] h-full py-[220rem] p-[112rem] md:p-0">
                    <div className="w-full max-w-[950rem] text-[60rem] md:text-[69rem] text-white">
                      {t('s6.t1')}
                    </div>
                    <div className="w-full max-w-[950rem] mt-[43rem] text-[24rem] text-white">
                      {t('s6.p1')}
                    </div>
                    <div className="w-full max-w-[950rem] text-[24rem] text-white">
                      {t('s6.p2')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s7 bg-[#16243F]">
              <div className="w-full flex flex-col items-center justify-center p-[50rem]">
                <div className="flex flex-col w-full max-w-[1310rem]">
                  <div className="text-white text-[48rem] md:text-[40rem]">ติดต่อเรา</div>
                  <div className="flex justify-between mt-[54rem] md:mt-[24rem]">
                    <div className="flex flex-col max-w-[50%] text-[#8c8f94] font-bold">
                      <div className="title text-[26rem] md:text-[24rem] text-white">Opportunity-การจ้างงาน </div>
                      <div className="flex items-center mt-[34rem] md:mt-[24rem] text-[20rem] md:text-[18rem]"><div className="label flex-shrink-0 flex-grow-0 w-[260rem]">หัวหน้าบัญชี</div><div>1</div></div>
                      <div className="flex items-center mt-[16rem] md:mt-[16rem] text-[20rem] md:text-[18rem]"><div className="label flex-shrink-0 flex-grow-0 w-[260rem]">ธุรการโครงการ</div><div>1</div></div>
                      <div className="flex items-center mt-[16rem] md:mt-[16rem] text-[20rem] md:text-[18rem]"><div className="label flex-shrink-0 flex-grow-0 w-[260rem]">Business development</div><div>1</div></div>
                      <div className="flex items-center mt-[16rem] md:mt-[16rem] text-[20rem] md:text-[18rem]"><div className="label flex-shrink-0 flex-grow-0 w-[260rem]">sale manager</div><div>1</div></div>
                      <div className="flex items-center mt-[16rem] md:mt-[16rem] text-[20rem] md:text-[18rem]"><div className="label flex-shrink-0 flex-grow-0 w-[260rem]">Design Engineer</div><div>2</div></div>
                      <div className="flex flex-col w-[90%] md:w-full text-[#ffffff] md:text-[#8c8f94] mt-[50rem] md:mt-[16rem] text-[18rem] md:text-[14rem] font-normal"><div className="label">หากต้องการสมัครงานกับเรา กรุณาส่งจดหมายสมัครงานพร้อมประวัติของคุณมาที่: </div><div>achiraya.ch@maneepower.com  โทร 088-269-4245</div></div>
                    </div>
                    <div className="flex flex-col max-w-[50%] text-[#8c8f94] font-bold">
                      <div className="title text-[26rem] md:text-[24rem] text-white">สำนักงานใหญ่</div>
                      <div className="flex flex-col mt-[24rem] text-[20rem] md:text-[14rem] font-normal">263 ซ.เพชรเกษม 84 แขวงบางแคเหนือ เขตบางแค กรุงเทพมหานคร 10160</div>
                      <div className="title mt-[40rem] md:mt-[24rem] text-[26rem] md:text-[24rem] text-white">ติดต่อ ฝ่ายขาย</div>
                      <div className="flex items-start md:items-center mt-[24rem] text-[18rem]"><div className="label flex-shrink-0 flex-grow-0 w-[60rem] md:w-[160rem]">Tel:</div><div className="flex flex-col md:flex-row"><div>094-942-5936 (แอม),</div><div>088-985-2324(ปิง)</div></div></div>
                      <div className="flex items-start mt-[16rem] text-[18rem]"><div className="label flex-shrink-0 flex-grow-0 w-[60rem] md:w-[160rem]">Email:</div><div className="flex flex-col"><div>Chatsuda.ch@maneepower.com</div><div>Mahaphon.ch@maneepower.com</div></div></div>
                      <div className="flex flex-col mt-[16rem] text-[22rem] md:text-[14rem] font-normal">ติดต่อ ฝ่ายจัดซื้อ เสนออุปกรณ์ 096-995-5368</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      ></ReactFullpage>
    </StyledWapper>
  );
};

const StyledWapper = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #ffffff;
  .section {
    width: 100vw;
    justify-content: flex-start;
    height: auto;
  }
  .s1 {
    height:100vh;
    .content-wrap {
      height: calc(100vh - 88rem);
    }
  }
  .s21,.s22 {
    height: auto;
  }
  .s3 {}
  .s4 {
    height: auto;
  }
  .s5 {
    height: auto;
  }
  .s6 {}
  .s7 {
    height: auto;
  }
  .form-bg {
    background: url(${bg1Img}) repeat center center;
  }
`;

export default HomePage;
