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
import dataTable_mImg from '../assets/images/dataTable_m.png'
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

  const handleOk = () => {
    setOpenModal(false)
  }

  const onFinish = val => {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://192.168.1.101/gf/formInfo/createHomeForm', true)
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      console.log(xhr,xhr.readyState, xhr.status)
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          const res = JSON.parse(xhr.response)
          if(res.status === 1) {
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
    i18n.changeLanguage('en')
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
      <div className='section s1'>
        <div className='flex justify-center w-full h-[88rem] bg-[#16243F]'>
          <div className='reactive flex items-center w-full max-w-[1400rem] h-full px-[24rem] py-[8rem] md:p-0'>
            <img id='logo' onClick={() => handelMenu(fullpageApi, 0)} className='w-[226rem]' src={logoImg} />
            <div className='ml-[33rem] md:ml-[100rem] font-bold text-white leading-none'>
              <div className='text-[22rem] md:text-[18rem]'>{t('s1.callMsg')}</div>
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
                    <div onClick={() => handelMenu(fullpageApi, 2)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                      {t('s2.st21')}
                    </div>
                    <div onClick={() => handelMenu(fullpageApi, 3)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                      {t('s22.t1')}
                    </div>
                    <div onClick={() => handelMenu(fullpageApi, 4)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                      {t('s22.t2')}
                    </div>
                  </div>
                </div>
                <div onClick={() => handelMenu(fullpageApi, 6)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>
                  {t('s1.Promotion')}
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
                    <div onClick={() => handelMenu(fullpageApi, 2)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                      {t('s2.st21')}
                    </div>
                    <div onClick={() => handelMenu(fullpageApi, 3)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                      {t('s22.t1')}
                    </div>
                    <div onClick={() => handelMenu(fullpageApi, 4)} className={`flex justify-start items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                      {t('s22.t2')}
                    </div>
                  </div>
                </div>
                <div onClick={() => handelMenu(fullpageApi, 6)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                  {t('s1.Promotion')}
                </div>
                <div onClick={() => handelMenu(fullpageApi, 8)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>
                  {t('s1.Contact Us')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='section s7 bg-[#16243F]'>
        <div className='w-full flex flex-col items-center justify-center p-[50rem]'>
          <div className='flex flex-col w-full max-w-[1400rem]'>
            <div className='text-white text-[48rem] md:text-[40rem]'>{t('foot.t1')}</div>
            <div className='flex justify-between mt-[32rem] md:mt-[24rem]'>
              <div className='flex flex-row-reverse w-full text-[#8c8f94] font-bold'>
                <div className='flex flex-col w-full'>
                  <div className='title text-[26rem] md:text-[24rem] text-white'>{t('foot.t2')}</div>
                  <div className='flex mt-[24rem] text-[20rem] md:text-[14rem] font-normal'>{t('foot.p1')}</div>
                  <div className='flex items-center cursor-pointer underline mt-[24rem] text-[20rem] md:text-[14rem] font-normal'>
                    <img className='w-[26rem] mr-[8rem]' src={privateIcon} alt="" />
                    {`<Privacy Agreement>`}
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
