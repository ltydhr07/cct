import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Styled from 'styled-components'
import { Button, DatePicker, Form, Input, Modal } from 'antd'
import ReactFullpage from '@fullpage/react-fullpage'

import logoImg from '../assets/images/logo.png'
import bannerBgImg from '../assets/images/banner-bg.png'
import bannerBgMImg from '../assets/images/banner-bg_m.png'
import bannerBg1Img from '../assets/images/banner-bg1.png'
import bannerBgM1Img from '../assets/images/banner-bg1_m.png'
import bg_2Img from '../assets/images/bg_2.png'
import bg_3Img from '../assets/images/bg_3.png'
import dataTableImg from '../assets/images/dataTable.png'
import dataTable_thImg from '../assets/images/dataTable_th.png'
import dataTable_mImg from '../assets/images/dataTable_m.png'
import dataTable_m_thImg from '../assets/images/dataTable_m_th.png'
import dataTable2Img from '../assets/images/dataTable2.png'
import dataTable2_thImg from '../assets/images/dataTable2_th.png'
import dataTable2_mImg from '../assets/images/dataTable2_m.png'
import dataTable2_m_thImg from '../assets/images/dataTable2_m_th.png'
import bg1Img from '../assets/images/bg-1.png'
import menuIcon from '../assets/images/menu_icon.png'
import home_img from '../assets/images/home_img.png'
import toTopImg from '../assets/images/toTop.png'
import lineIcon from '../assets/images/lineIcon.png'
import phoneIcon from '../assets/images/phoneIcon.png'
import mailIcon from '../assets/images/mailIcon.png'
import usIcon from '../assets/images/us.png'
import thIcon from '../assets/images/th.png'
import phoneWhiteIcon from '../assets/images/phoneWhiteIcon.png'
import privateIcon from '../assets/images/privateIcon.png'

import bg_4Img from '../assets/images/bg_4.png'
import bg_5Img from '../assets/images/bg_5.png'
import bg_grid1 from '../assets/images/bg_grid1.png'
import bg_grid2 from '../assets/images/bg_grid2.png'

import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t, i18n } = useTranslation()

  const [menuActive, setMenuActive] = useState(0)
  const handelMenu = (fullpageApi, index) => {
    setMenuActive(index)
    fullpageApi.moveTo(index + 1)
  }

  const [openModal, setOpenModal] = useState(false)

  const toPrivacy = () => {
    window.open('/privacy')
  }
  
  const handleOk = () => {
    setOpenModal(false)
  }

  const onFinish = val => {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://www.capsolar.homes/gf/formInfo/createHomeForm', true)
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      console.log(xhr,xhr.readyState, xhr.status)
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          const res = JSON.parse(xhr.response)
          if(res.status === 1) {
            if(fbq) fbq('track', 'SubmitHomeForm', val);
            if(gtag_report_conversion) gtag_report_conversion()
            setOpenModal(true)
          }
        } else {
          
        }
      }
    }
    xhr.send(JSON.stringify(val))
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  const [isPc, setIsPc] = useState(true)
  function resize() {
    const deviceWidth = document.documentElement.clientWidth
    if (deviceWidth > 768) {
      setIsPc(true)
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 1920 + 'px !important'
    } else {
      setIsPc(false)
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 750 + 'px !important'
    }
  }
  const toTop = () => {
    document.getElementById('logo')?.click()
  }
  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()

    // const search = window.location.search
    // if(search) {
    //   const paramArr = search.split('?')[1].split('&');
    //   let lang = '';
    //   paramArr.forEach(el => {
    //     if(el.indexOf('lang') > -1) {
    //       lang = el.split('=')[1];
    //     }
    //   })
    //   if(lang) {
    //     i18n.changeLanguage(lang);
    //     return
    //   }
    // }
    i18n.changeLanguage('th')
  }, [])

  const [showMenu, setShowMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)

  useEffect(() => {
    if (showMenu || showSubMenu) {
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
      <img className='fixed right-[34rem] bottom-[60rem] w-[92rem] z-50 cursor-pointer' onClick={() => toTop()} src={toTopImg} />
      <ReactFullpage
        credits={{ enabled: true, label: '', position: 'left' }}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className='section s1'>
              <div className='flex justify-center w-full h-[88rem] bg-[#16243F]'>
                <div className='reactive flex items-center w-full max-w-[1500rem] h-full px-[24rem] py-[8rem] md:p-0'>
                  <img id='logo' onClick={() => handelMenu(fullpageApi, 0)} className='w-[226rem]' src={logoImg} />
                  <div className='ml-[33rem] md:ml-[100rem] font-bold text-white leading-none'>
                    <div className='text-[20rem] md:text-[18rem]'>{t('s1.callMsg')}</div>
                    <div className='flex items-center mt-[6rem] md:mt-[8rem] text-[24rem] md:text-[18rem]'>
                      <img className='w-[21rem] md:w-[17rem] mr-[12rem]' src={phoneWhiteIcon} alt="" />
                      {t('phone')}
                    </div>
                  </div>
                  <img className='block md:hidden cursor-pointer w-[40rem] ml-auto' src={usIcon} onClick={() => i18n.changeLanguage('en')} alt='' />
                  <img className='block md:hidden cursor-pointer w-[40rem] mx-[28rem]' src={thIcon} onClick={() => i18n.changeLanguage('th')} alt='' />
                  <img className='block md:hidden w-[35rem]' src={menuIcon} onClick={() => setShowMenu(true)} />
                  {isPc ? (
                    <div className='flex items-center h-full ml-auto text-[18rem] text-white'>
                      <div onClick={() => handelMenu(fullpageApi, 0)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-0 ${menuActive === 0 ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Home')}
                      </div>
                      <div onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)} className={`relative cursor-pointer flex items-center h-full px-[20rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Service')}
                        <div className={`${showSubMenu ? '' : 'hidden'} absolute top-[88rem] left-0 w-[200rem] z-10 flex flex-col items-center bg-[#0A162B] p-[6rem] ml-auto text-[18rem] text-white`}>
                          <div onClick={() => handelMenu(fullpageApi, 1)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 ml-0`}>
                            {t('s2.st2')}
                          </div>
                          <div onClick={() => handelMenu(fullpageApi, 4)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                            {t('s2.st21')}
                          </div>
                          <div onClick={() => handelMenu(fullpageApi, 5)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                            {t('s22.t1')}
                          </div>
                          <div onClick={() => handelMenu(fullpageApi, 6)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                            {t('s22.t2')}
                          </div>
                        </div>
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 3)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Promotion')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 2)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Pricing')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 8)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                        {t('s1.Contact Us')}
                      </div>
                      <img className='cursor-pointer w-[34rem] ml-[28rem]' onClick={() => i18n.changeLanguage('en')} src={usIcon} alt='' />
                      <img className='cursor-pointer w-[34rem] ml-[28rem]' onClick={() => i18n.changeLanguage('th')} src={thIcon} alt='' />
                    </div>
                  ) : (
                    <div className={`${showMenu ? '' : 'hidden'} absolute w-[140rem] top-[94rem] right-[10rem] z-10 flex flex-col items-center bg-[#0A162B] p-[6rem] ml-auto text-[18rem] text-white`}>
                      <div onClick={() => handelMenu(fullpageApi, 0)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 ml-0`}>
                        {t('s1.Home')}
                      </div>
                      <div onClick={() => setShowSubMenu(true)} className={`relative flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                        {t('s1.Service')}
                        <div className={`${showSubMenu ? '' : 'hidden'} absolute top-0 -left-[200rem] w-[200rem] z-10 flex flex-col items-center bg-[#0A162B] p-[6rem] ml-auto text-[18rem] text-white`}>
                          <div onClick={() => handelMenu(fullpageApi, 1)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 ml-0`}>
                            {t('s2.st2')}
                          </div>
                          <div onClick={() => handelMenu(fullpageApi, 4)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                            {t('s2.st21')}
                          </div>
                          <div onClick={() => handelMenu(fullpageApi, 5)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                            {t('s22.t1')}
                          </div>
                          <div onClick={() => handelMenu(fullpageApi, 6)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                            {t('s22.t2')}
                          </div>
                        </div>
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 3)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                        {t('s1.Promotion')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 2)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                        {t('s1.Pricing')}
                      </div>
                      <div onClick={() => handelMenu(fullpageApi, 8)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                        {t('s1.Contact Us')}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className='content-wrap relative w-full'>
                <img className='hidden md:block w-full h-full object-fill' src={bannerBgImg} alt='' />
                <img className='block md:hidden w-full h-full object-fill' src={bannerBgMImg} alt='' />
                <div className='flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'>
                  <div className='flex flex-col justify-center w-full max-w-[1500rem] h-full px-[92rem] md:px-[0]'>
                    <div className='w-full max-w-[950px] text-[50rem] text-white leading-tight'>{t('s1.p1')}</div>
                    <div className='w-full max-w-[950px] mt-[48rem] text-[36rem] md:text-[34rem] text-white leading-tight'>
                      {t('s1.p2')} <span className='text-[#22CF68]'>{t('s1.p21')}</span>
                    </div>
                    <div className='w-[62px] h-[4rem] mt-[48rem] bg-white bg-opacity-30'></div>
                    <div className='w-full max-w-[950px] mt-[45rem] text-[24rem] md:text-[18rem] text-white'>{t('s1.p3')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='section s21 form-bg'>
              <div className='w-full md:h-screen flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-full max-w-[1500rem] text-[#222222] md:px-0 md:py-[0rem] py-[54rem] px-[68rem]'>
                  <div className='title text-[20rem] md:text-[24rem] leading-none font-bold uppercase'>{t('s2.t1')}</div>
                  <div className='title text-[30rem] md:text-[36rem] leading-none mt-[22rem] md:mt-[32rem] xl:mt-[16rem] font-bold'>{t('s2.t2')}</div>
                  <div className='grid grid-cols-4 gap-[20rem] w-full mt-[38rem] md:mt-[56rem] xl:mt-[36rem]'>
                    <img className='col-span-4 md:col-span-3 w-full h-full object-fill' src={bg_2Img} alt='' />
                    <div className='col-span-4 md:col-span-1 bg-white flex flex-col'>
                      <div className='head flex flex-shrink-0 flex-grow-0 items-center justify-center w-full h-[100rem] bg-[#22cf68] text-[28rem] text-white font-bold'>{t('s2.t3')}</div>
                      <div className='content flex flex-col justify-center w-full h-full px-[22rem] py-[24rem]'>
                        <Form className='w-full' requiredMark={false} name='basic' layout={isPc ? 'vertical' : 'horizontal'} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
                          <Form.Item label={t('s2.l1')} name='name' rules={[{ required: true, message: 'Please input!' }]}>
                            <Input placeholder={t('s2.p1')} />
                          </Form.Item>
                          <Form.Item label={t('s2.l2')} name='mobile' rules={[{ required: true, message: 'Please input!' }]}>
                            <Input placeholder={t('s2.p1')} />
                          </Form.Item>
                          <Form.Item label={t('s2.l3')} name='address' rules={[{ required: true, message: 'Please input!' }]}>
                            <Input placeholder={t('s2.p1')} />
                          </Form.Item>
                          <Form.Item>
                            <Button className='big-btn w-full' type='primary' htmlType='submit'>
                              {t('submit')}
                            </Button>
                            <Modal width='unset' wrapClassName='tips-dialog' centered visible={openModal} footer={null} onCancel={handleOk}>
                              <div className='flex flex-col items-center py-[55rem]'>
                                <div className='text-center text-[#898989] text-[26rem]'>{t('s2.tip1')}</div>
                                <Button onClick={() => setOpenModal(false)} className='big-btn w-[200rem] mt-[60rem]' type='primary'>
                                  {t('ok')}
                                </Button>
                              </div>
                            </Modal>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                    <div className='col-span-4 flex flex-col xl:flex-row items-center w-full py-[32rem] xl:py-[24rem] px-[32rem] bg-[#F3FFF8]'>
                      <div className="xl:w-[230rem] xl:mr-[48rem] flex-shrink-0 flex-grow-0 font-bold leading-none xl:leading-tight text-[#22CF68] text-[28rem] md:text-[32rem] xl:text-[30rem]">{t('s2.lit')}</div>
                      <ul className='text-[#22CF68] list-disc text-[20rem] md:text-[16rem] leading-none mb-0 mt-[24rem] md:mt-[30rem] xl:mt-0 pl-[24rem] xl:pl-0'>
                        <li><div className="text-[#888888]">{t('s2.li1')}</div></li>
                        <li className='mt-[16rem] md:mt-[18rem] xl:mt-[12rem]'><div className="text-[#888888]">{t('s2.li2')}</div></li>
                        <li className='mt-[16rem] md:mt-[18rem] xl:mt-[12rem]'><div className="text-[#888888]">{t('s2.li3')}</div></li>
                        <li className='mt-[16rem] md:mt-[18rem] xl:mt-[12rem]'><div className="text-[#888888]">{t('s2.li4')}</div></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='section s3 form-bg'>
              <div className='w-full flex flex-col items-center pt-[64rem] md:pt-[70rem] pb-[50rem] md:pb-[102rem]'>
                <div className='title w-full px-[64rem] text-center text-[40rem] font-bold'>{t('s3.t1')}</div>
                <img className='hidden md:block w-full mt-[90rem]' src={i18n.language === 'th' ? dataTable_thImg : dataTableImg} alt='' />
                <img className='block md:hidden w-[622rem] mt-[48rem]' src={i18n.language === 'th' ? dataTable_m_thImg : dataTable_mImg} alt='' />
              </div>
            </div>
            <div className='section s3 form-bg'>
              <div className='w-full md:h-screen flex flex-col items-center justify-center'>
                <div className='relative flex h-full flex-col items-center w-full px-[48rem] pb-[35rem] md:p-0 mt-[27rem] md:mt-[100rem] bg-[#16243F]'>
                  <img className='order-2 md:order-1 md:absolute -top-[100rem] left-[40rem] w-[909rem]' src={home_img} alt='' />
                  <div className='order-1 md:order-2 w-full md:w-[855rem] pt-[72rem] flex flex-col ml-auto mr-[55rem] leading-none'>
                    <div className='text-[40rem] md:text-[48rem] text-[#22cf68] font-bold'>{t('s3.t2')}</div>
                    <div className='mt-[13rem] md:mt-[44rem] mb-[32rem] md:mb-[40rem] w-[74rem] md:w-[113rem] h-px bg-white'></div>
                    <div className='mt-[15rem] md:mt-[22rem] text-[24rem] leading-none text-[#a7aab0]'>{t('s3.p1')}</div>
                    <div className='mt-[15rem] md:mt-[22rem] text-[24rem] leading-none text-[#a7aab0]'>{t('s3.p2')}</div>
                    <div className='mt-[15rem] md:mt-[22rem] text-[24rem] leading-none text-[#a7aab0]'>{t('s3.p3')}</div>
                    <div onClick={() => handelMenu(fullpageApi, 1)} className='mt-[45rem] text-[24rem] text-[#22cf68] font-bold uppercase cursor-pointer'>
                      {t('s3.Contact')}
                      <span className='inline-block ml-[20rem] h-[28rem] text-[28rem] leading-[18rem]'>→</span>
                    </div>
                  </div>
                  <img className='hidden md:block w-[1355rem] mt-[50rem] order-3' src={i18n.language === 'th' ? dataTable2_thImg : dataTable2Img} alt='' />
                  <img className='block md:hidden w-full order-3' src={i18n.language === 'th' ? dataTable2_m_thImg : dataTable2_mImg} alt='' />
                </div>
              </div>
            </div>

            <div className='section s21 bg-white'>
              <div className='w-full md:h-screen flex flex-col items-center justify-center py-[70rem] md:py-0'>
                <div className='flex flex-col items-center justify-center w-full max-w-[1500rem] text-[#222222] md:p-0 px-[68rem]'>
                  <div className='title text-[20rem] md:text-[24rem] leading-none font-bold uppercase'>{t('s2.t1')}</div>
                  <div className='title text-[30rem] md:text-[36rem] leading-none mt-[22rem] md:mt-[32rem] xl:mt-[16rem] font-bold'>{t('s2.t21')}</div>
                  <div className='text-[16rem] text-[#888888] font-bold mt-[42rem] xl:mt-[24rem]'>
                    <div>{t('s21.p1')}</div>
                    <div>{t('s21.p2')}</div>
                  </div>
                  <img className='w-full md:h-[50vh] mt-[36rem] md:mt-[48rem] xl:mt-[24rem]' src={bg_3Img} alt='' />
                  <div className='flex flex-col items-center w-full justify-center py-[28rem] px-[30rem] bg-[#F3FFF8]'>
                    <div>
                      <div className='w-full text-[#22CF68] font-bold text-[26rem] md:text-[32rem] leading-none'>{t('s21.lit')}</div>
                      <ul className='w-full mt-[24rem] md:mt-[30rem] xl:mt-[20rem] mb-0 pl-[24rem] md:pl-[40rem] text-[#22CF68] list-disc leading-none text-[20rem] md:text-[16rem]'>
                        <li><div className="text-[#888888]">{t('s21.li1')}</div></li>
                        <li className='mt-[16rem] md:mt-[18rem] xl:mt-[12rem]'><div className="text-[#888888]">{t('s21.li2')}</div></li>
                        <li className='mt-[16rem] md:mt-[18rem] xl:mt-[12rem]'><div className="text-[#888888]">{t('s21.li3')}</div></li>
                        <li className='mt-[16rem] md:mt-[18rem] xl:mt-[12rem]'><div className="text-[#888888]">{t('s21.li4')}</div></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='section s3 form-bg'>
              <div className='w-full md:h-screen flex flex-col items-center justify-center py-[70rem] md:py-0'>
                <div className='title text-[20rem] md:text-[24rem] leading-none font-bold uppercase'>{t('s2.t1')}</div>
                <div className='title text-[30rem] md:text-[36rem] leading-none mt-[22rem] md:mt-[32rem] xl:mt-[16rem] font-bold'>{t('s22.t1')}</div>
                
                <div className='w-full px-[50rem] md:p-0 relative mt-[24rem] md:mt-[48rem] xl:mt-[24rem]'>
                  <img className='hidden md:block md:w-[1200rem] xl:w-[1040rem] ml-[40%]' src={bg_grid1} alt='' />
                  <img className='w-full md:w-[1300rem] xl:w-[1200rem] md:absolute top-[50rem] left-[300rem]' src={bg_4Img} alt='' />
                  <div className='absolute inset-y-0 my-auto md:top-[32%] md:inset-y-auto right-[84rem] md:right-[10%] xl:right-[13%] px-[30rem] flex items-center justify-center h-[65rem] md:h-[150rem] bg-[#22CF68] bg-opacity-80 text-[28rem] md:text-[48rem] font-bold text-white'>{t('comingSoon')}</div>
                </div>
              </div>
            </div>

            <div className='section s3 '>
              <div className='w-full md:h-screen flex flex-col items-center justify-center py-[70rem] md:py-0'>
                <div className='title text-[20rem] md:text-[24rem] leading-none font-bold uppercase'>{t('s2.t1')}</div>
                <div className='title text-[30rem] md:text-[36rem] leading-none mt-[22rem] md:mt-[32rem] xl:mt-[16rem] font-bold'>{t('s22.t2')}</div>

                <div className='w-full px-[50rem] md:p-0 relative mb-[100rem] mt-[24rem] md:mt-[48rem] xl:mt-[24rem]'>
                  <img className='hidden md:block w-[1040rem] max-h-[70vh] ml-[20%]' src={bg_grid2} alt='' />
                  <img className='w-full md:w-[1050rem] md:absolute top-[60rem] left-[575rem]' src={bg_5Img} alt='' />
                  <div className='absolute inset-y-0 my-auto md:top-[32%] md:bottom-[auto] left-[50rem] md:left-[13%] flex items-center justify-center w-[166rem] md:w-[auto] text-center h-[139rem] md:h-[150rem] px-[30rem] bg-[#22CF68] bg-opacity-80 text-[28rem] md:text-[48rem] font-bold text-white'>{t('comingSoon')}</div>
                </div>
              </div>
            </div>
            <div className='section s6'>
              <div className='relative w-full md:h-screen'>
                <img className='hidden md:block w-full h-full object-fill' src={bannerBg1Img} alt='' />
                <img className='block md:hidden w-full h-full object-fill' src={bannerBgM1Img} alt='' />
                <div className='flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'>
                  <div className='flex flex-col justify-start md:justify-center w-full max-w-[1500rem] h-full py-[220rem] p-[112rem] md:p-0'>
                    <div className='w-full max-w-[950rem] text-[60rem] md:text-[69rem] text-white'>{t('s6.t1')}</div>
                    <div className='w-full max-w-[950rem] mt-[43rem] text-[24rem] text-white'>{t('s6.p1')}</div>
                    <div className='w-full max-w-[950rem] text-[24rem] text-white'>{t('s6.p2')}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='section s7 bg-[#16243F]'>
              <div className='w-full flex flex-col items-center justify-center p-[50rem]'>
                <div className='flex flex-col w-full max-w-[1500rem]'>
                  <div className='text-white text-[48rem] md:text-[40rem]'>{t('foot.t1')}</div>
                  <div className='flex justify-between mt-[32rem] md:mt-[24rem]'>
                    <div className='flex flex-row-reverse w-full text-[#8c8f94] font-bold'>
                      <div className='flex flex-col w-full'>
                        <div className='title text-[26rem] md:text-[24rem] text-white'>{t('foot.t2')}</div>
                        <div className='flex mt-[24rem] text-[20rem] md:text-[14rem] font-normal'>{t('foot.p1')}</div>
                        <div onClick={() => toPrivacy()} className='flex items-center cursor-pointer underline mt-[24rem] text-[20rem] md:text-[14rem] font-normal'>
                          <img className='w-[26rem] mr-[8rem]' src={privateIcon} alt="" />
                          {`<`}{t('Privacy')}{`>`}
                        </div>
                      </div>
                      <div className='flex flex-col w-full ml-[20rem]'>
                        <div className='title text-[26rem] md:text-[24rem] text-white'>{t('foot.t3')}</div>
                        <div className='flex items-center md:items-center mt-[24rem] text-[16rem]'>
                          <div className='label flex-shrink-0 flex-grow-0 w-[60rem] md:w-[80rem]'>{t('foot.l1')}:</div>
                          <img className='w-[17rem] mr-[22rem]' src={lineIcon} alt='' />
                          <div className='flex flex-col md:flex-row'>{t('line')}</div>
                        </div>
                        <div className='flex items-center mt-[16rem] text-[16rem]'>
                          <div className='label flex-shrink-0 flex-grow-0 w-[60rem] md:w-[80rem]'>{t('foot.l2')}:</div>
                          <img className='w-[17rem] mr-[22rem]' src={phoneIcon} alt='' />
                          <div className='flex flex-col'>{t('phone')}</div>
                        </div>
                        <div className='flex items-center mt-[16rem] text-[16rem]'>
                          <div className='label flex-shrink-0 flex-grow-0 w-[60rem] md:w-[80rem]'>{t('foot.l3')}:</div>
                          <img className='w-[17rem] mr-[22rem]' src={mailIcon} alt='' />
                          <div className='flex flex-col'>{t('mail')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      ></ReactFullpage>
    </StyledWapper>
  )
}

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
`

export default HomePage
