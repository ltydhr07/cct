import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Styled from 'styled-components'
import { Button, DatePicker, Form, Input, Modal } from 'antd'
import ReactFullpage from '@fullpage/react-fullpage'

import logoImg from '../assets/images/logo.png'
import toTopImg from '../assets/images/toTop.png'
import lineIcon from '../assets/images/lineIcon.png'
import phoneIcon from '../assets/images/phoneIcon.png'
import mailIcon from '../assets/images/mailIcon.png'
import usIcon from '../assets/images/us.png'
import thIcon from '../assets/images/th.png'
import phoneWhiteIcon from '../assets/images/phoneWhiteIcon.png'
import privateIcon from '../assets/images/privateIcon.png'


import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const toHome = () => {
    window.open('/')
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
    i18n.changeLanguage('th')
  }, [])

  return (
    <StyledWapper>
      <img className='fixed right-[34rem] bottom-[60rem] w-[92rem] z-50 cursor-pointer' onClick={() => toTop()} src={toTopImg} />
      <div className='section'>
        <div className='flex justify-center w-full h-[88rem] bg-[#16243F]'>
          <div className='reactive flex items-center w-full max-w-[1400rem] h-full px-[24rem] py-[8rem] md:p-0'>
            <img id='logo' onClick={() => toHome()} className='w-[226rem] cursor-pointer' src={logoImg} />
            <div className='ml-[33rem] md:ml-[100rem] font-bold text-white leading-none'>
              <div className='text-[22rem] md:text-[18rem]'>{t('s1.callMsg')}</div>
              <div className='flex items-center mt-[6rem] md:mt-[8rem] text-[24rem] md:text-[18rem]'>
                <img className='w-[21rem] md:w-[17rem] mr-[12rem]' src={phoneWhiteIcon} alt="" />
                {t('phone')}
              </div>
            </div>
            <img className='block md:hidden cursor-pointer w-[40rem] ml-auto' src={usIcon} onClick={() => i18n.changeLanguage('en')} alt='' />
            <img className='block md:hidden cursor-pointer w-[40rem] mx-[28rem]' src={thIcon} onClick={() => i18n.changeLanguage('th')} alt='' />
            {isPc ? (
              <div className='flex items-center h-full ml-auto text-[18rem] text-white'>
                <img className='cursor-pointer w-[34rem] ml-[28rem]' onClick={() => i18n.changeLanguage('en')} src={usIcon} alt='' />
                <img className='cursor-pointer w-[34rem] ml-[28rem]' onClick={() => i18n.changeLanguage('th')} src={thIcon} alt='' />
              </div>
            ) : ''}
          </div>
        </div>
      </div>
      <div className='section bg-[#EFEFEF]'>
        <div className='w-full h-[140rem] flex items-center justify-center'>
          <div className='w-full max-w-[1400rem] text-[#222222] text-[44rem] font-bold'>
            {t('Privacy')}
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='w-full flex items-center justify-center pt-[50rem] pb-[148rem]'>
          <div className='w-full max-w-[1400rem] text-[#888888] text-[16rem] leading-loose font-bold whitespace-pre-line break-all'>
            {t('privateDoc')}
          </div>
        </div>
      </div>
      <div className='section bg-[#16243F]'>
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
`

export default HomePage
