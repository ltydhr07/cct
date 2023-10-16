import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Styled from "styled-components";
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import ReactFullpage from "@fullpage/react-fullpage";

import logoImg from "../assets/images/logo.png";
import img1Img from "../assets/images/img1.png";
import img2Img from "../assets/images/img2.png";
import img3Img from "../assets/images/img3.png";
import bannerBgImg from "../assets/images/banner-bg.png";
import bannerBgMImg from "../assets/images/banner-bg_m.png";
import bannerBg1Img from "../assets/images/banner-bg1.png";
import bannerBgM1Img from "../assets/images/banner-bg1_m.png";
import imgaImg from "../assets/images/imga.png";
import imgbImg from "../assets/images/imgb.png";
import imgcImg from "../assets/images/imgc.png";
import imgdImg from "../assets/images/imgd.png";
import imgeImg from "../assets/images/imge.png";
import imgfImg from "../assets/images/imgf.png";
import icon1Img from "../assets/images/icon1.png";
import icon2Img from "../assets/images/icon2.png";
import icon3Img from "../assets/images/icon3.png";
import bg1Img from "../assets/images/bg-1.png";
import us_Img from "../assets/images/us_img.png";
import menuIcon from "../assets/images/menu_icon.png";



import { useTranslation } from 'react-i18next';

const HomePage = () => {
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
  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()
  }, [])

  const [showMenu, setShowMenu] = useState(false)

  return (
    <StyledWapper>
      <ReactFullpage
        credits={{ enabled: true, label: "", position: "left" }}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section s1">
             <div className="flex justify-center w-full h-[88rem] bg-[#16243F]">
                <div className="reactive flex items-center w-full max-w-[1310rem] h-full px-[24rem] py-[8rem] md:p-0">
                  <img className="w-[226rem]" src={logoImg}  />
                  <img className="block md:hidden w-[35rem] ml-auto" src={menuIcon} onClick={() => setShowMenu(!showMenu)}  />
                  {isPc ? (
                    <div className="flex items-center h-full ml-auto text-[18rem] text-white">
                      <div onClick={() => handelMenu(fullpageApi, 0)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-0 ${menuActive === 0 ? 'border-b-[2rem]' : ''}`}>หน้าแรก</div>
                      <div onClick={() => handelMenu(fullpageApi, 5)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>Manee Power</div>
                      <div onClick={() => handelMenu(fullpageApi, 4)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>บริการของเรา</div>
                      <div onClick={() => handelMenu(fullpageApi, 6)} className={`cursor-pointer flex items-center h-full px-[8rem] border-[#22CF68] hover:border-b-[2rem] ml-[24rem] ${menuActive === null ? 'border-b-[2rem]' : ''}`}>ติดต่อและลูกค้าสัมพันธ์</div>
                    </div>
                  ) : (
                    <div className={`${showMenu ? '' : 'hidden'} absolute top-[94rem] right-[10rem] z-10 flex flex-col items-center bg-[#0A162B] p-[6rem] ml-auto text-[18rem] text-white`}>
                      <div onClick={() => handelMenu(fullpageApi, 0)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 ml-0`}>หน้าแรก</div>
                      <div onClick={() => handelMenu(fullpageApi, 5)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>Manee Power</div>
                      <div onClick={() => handelMenu(fullpageApi, 4)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>บริการของเรา</div>
                      <div onClick={() => handelMenu(fullpageApi, 6)} className={`flex justify-center items-center w-full h-[48rem] px-[12rem] bg-[#16243F] bg-opacity-80 mt-[6rem]`}>ติดต่อและลูกค้าสัมพันธ์</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="content-wrap relative w-full">
                <img className="hidden md:block w-full h-full object-fill" src={bannerBgImg} alt="" />
                <img className="block md:hidden w-full h-full object-fill" src={bannerBgMImg} alt="" />
                <div className="flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
                  <div className="flex flex-col justify-center w-full max-w-[1310rem] h-full px-[92rem]">
                    <div className="w-full max-w-[950px] text-[50rem] text-white">
                      ใช้ไฟฟ้าฟรี วันนี้ ! solar ลดค่าไฟ 1หมื่น- ล้าน คืนทุนไว 3 ปี กำไร 70% ต่อปี พิเศษ ค่าไฟเกิน 100,000/เดือน ติดตั้งฟรี! สัญญา5 ปี
                    </div>
                    <div className="w-full max-w-[950px] mt-[48rem] text-[36rem] md:text-[34rem] text-white">
                      solar rooftop โรงงาน โรงพยาบาล อาคารสำนักงาน ทาวน์โฮม ตึกแถว <span className="text-[#22CF68]">โชว์รูม โรงเรียน</span>
                    </div>
                    <div className="w-[62px] h-[4rem] mt-[48rem] bg-white bg-opacity-30"></div>
                    <div className="w-full max-w-[950px] mt-[45rem] text-[24rem] md:text-[18rem] text-white">
                    Manee Power จำหน่าย ออกแบบ ติดตั้งโซล่าร์ครบวงจรมาตรฐานสากลทั่วประเทศ ประเมิณแม่นยำ ติดตั้งไว บริการแบบมืออาชีพ ราคามิตรภาพ เราเชื่อว่าทุกคนสามารถผลิตไฟเองได้  “สร้างกำไรแบบมีคุณภาพสู่ความยั่งยืน”
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s21">
              <div className="w-full bg-[#22CF68] flex flex-col items-center  justify-center px-[52rem]">
                <div className="flex flex-col items-center w-full max-w-[1310rem] py-[58rem]">
                  <div className="mb-[72rem] md:mb-[60rem] text-center text-white text-[36rem]">ปรึกษา ออกแบบ ติดตั้งโซล่าร์เซล์ ฟรี!</div>
                  <div className="grid md:flex gap-[40rem] md:gap-0 grid-cols-2 justify-between items-center w-full">
                    <div className="inline-flex items-center">
                      <img className="inline-block w-[70rem] h-[70rem] mr-[20rem] object-fill" src={icon1Img} alt="" />
                      <div className="inline-flex flex-col">
                        <div className="md:text-[24rem] text-[22rem] text-white">สถานที่</div>
                        <div className="md:mt-[12rem] mt-[16rem] md:w-[250rem] w-[218rem] md:text-[14rem] text-[15rem] text-white">8th floor - Palace Building - 221b Baker street - London - UK</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center">
                      <img className="inline-block w-[70rem] h-[70rem] mr-[20rem] object-fill" src={icon2Img} alt="" />
                      <div className="inline-flex flex-col">
                        <div className="md:text-[24rem] text-[22rem] text-white">โทรหาเรา  </div>
                        <div className="md:mt-[12rem] mt-[16rem] md:w-[250rem] w-[218rem] md:text-[14rem] text-[15rem] text-white">15263654789  12547889662</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center">
                      <img className="inline-block w-[70rem] h-[70rem] mr-[20rem] object-fill" src={icon3Img} alt="" />
                      <div className="inline-flex flex-col">
                        <div className="md:text-[24rem] text-[22rem] text-white">กล่องจดหมาย</div>
                        <div className="md:mt-[12rem] mt-[16rem] md:w-[250rem] w-[218rem] md:text-[14rem] text-[15rem] text-white">12545555555@139.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full form-bg flex flex-col items-center justify-center px-[50rem]">
                <div className="flex flex-col items-center w-full max-w-[1310rem] py-[58rem]">
                  <div className="mb-[60rem] text-center text-[#222222] text-[36rem]">กรอกข้อมูลเพื่อให้ผู้เชี่ยวชาญดูแล</div>
                    <Form
                      className="w-full"
                      name="basic"
                      layout={isPc ? 'vertical' : 'horizontal'}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[30rem] md:gap-x-[50rem] w-full">
                        <Form.Item label="First Name" name="name" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="นามสกุล" />
                        </Form.Item>
                        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="เบอร์ติดต่อ" />
                        </Form.Item>
                        <Form.Item label="Line / Email" name="email" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="ไลน์/อีเมล" />
                        </Form.Item>
                        <Form.Item label="ประเภท" name="aa" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="ประเภท" />
                        </Form.Item>
                        <Form.Item label="Company" name="company" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="ชื่อบริษัท" />
                        </Form.Item>
                        <Form.Item label="Position" name="position" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="สถานที่ตั้ง" />
                        </Form.Item>
                        <Form.Item label="GPS/Address" name="address" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="พิกัด, ที่อยู่" />
                        </Form.Item>
                        <Form.Item label="Elec bill/ month" name="month" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="บิลค่าไฟฟ้า/เดือน" />
                        </Form.Item>
                        <Form.Item label="Kick off date" name="date" rules={[{ required: true, message: 'Please input!' }]}>
                          <DatePicker placeholder="วันที่เริ่มก่อสร้าง" />
                        </Form.Item>
                        <Form.Item label="Working hour(วันทำงาน)" name="workHour" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="เวลาทำงาน  " />
                        </Form.Item>
                        <Form.Item className="col-span-2" label="ข้อมูลเพื่อให้เราตอบโจทย์คุณได้มากขึ้น" name="desc" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="คำแนะนำอื่น ๆ เช่นข้อ จำกัด ของรายการที่ต้องการพื้นที่การลงทุนและรูปแบบระบบ" />
                        </Form.Item>
                        <Form.Item className="col-span-2 md:col-span-3">
                          <div className="flex justify-center">
                            <Button className="big-btn" type="primary" htmlType="submit">ส่งข้อมูล</Button>
                            <Modal width='unset' wrapClassName="tips-dialog" centered visible={openModal} footer={null} onCancel={handleOk}>
                              <div className="flex flex-col items-center py-[55rem]">
                                <div className="text-center text-[#898989] text-[26rem]">รับทราบขอขอบคุณสำหรับการส่ง</div>
                                <Button className="big-btn mt-[60rem]" type="primary">ระบุ</Button>
                              </div>
                            </Modal>
                          </div>
                        </Form.Item>
                      </div>
                    </Form>
                </div>
              </div>
            </div>
            <div className="section s3">
              <div className="w-full md:h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center w-full max-w-[1310rem] pb-[72rem] pt-[58rem] md:p-0">
                  <div className="title w-[496rem] md:w-[642rem] md:mb-[84rem] mb-[52rem] text-[26rem] md:text-[26rem] font-bold text-[#222222] text-center">เพราะทุกเจ้า ไม่เหมือนกัน! เราจึงเน้นให้บริการอย่างมืออาชีพ ความพึงพอใจลูกค้าคือเป้าหมายของเรา</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[69rem] md:gap-[30rem] w-[547rem] md:w-full">
                    <div className="flex flex-col items-center w-full border border-[#7D7D7D] rounded transition-all duration-500 hover:bg-[#22CF68] hover:text-white">
                      <img className="inline-block w-full h-[317rem] md:h-[238rem] object-fill" src={img1Img} alt="" />
                      <div className="content w-full p-[60rem] md:py-[40rem] md:px-[35rem]">
                        <div className="title mb-[39rem] md:mb-[28rem] text-center font-bold text-[32rem] md:text-[18rem]">ศึกษาความเป็นไปได้ ออกแบบ - วางแผน</div>
                        <div className="desc text-center text-[24rem] md:text-[14rem]">เราออกแบบโซลูชั่นที่ดีที่สุด วิเคราะห์สิ่งที่เหมาะกับคุณ บอกสิ่งที่เป็นไปได้และคุ้มค่า วางแผนอย่างมีประสิทธิภาพ</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full border border-[#7D7D7D] rounded transition-all duration-500 hover:bg-[#22CF68] hover:text-white">
                      <img className="inline-block w-full h-[317rem] md:h-[238rem] object-fill" src={img2Img} alt="" />
                      <div className="content w-full p-[60rem] md:py-[40rem] md:px-[35rem]">
                        <div className="title mb-[39rem] md:mb-[28rem] text-center font-bold text-[32rem] md:text-[18rem]">EPC-ออกแบบ ติดตั้ง</div>
                        <div className="desc text-center text-[24rem] md:text-[14rem]">วิศวกรรม- มาตรฐานที่ดีที่สุด จัดซื้อจัดจ้าง-คุณภาพยุโรป ก่อสร้าง-ควบคุมและตรวจสอบตามมาตรฐาน IEEE และติดตั้ง โดยผู้ปฏิบัติงานทีผ่านการรับรองตามมาตรฐานความปลอดภัย</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full border border-[#7D7D7D] rounded transition-all duration-500 hover:bg-[#22CF68] hover:text-white">
                      <img className="inline-block w-full h-[317rem] md:h-[238rem] object-fill" src={img3Img} alt="" />
                      <div className="content w-full p-[60rem] md:py-[40rem] md:px-[35rem]">
                        <div className="title mb-[39rem] md:mb-[28rem] text-center font-bold text-[32rem] md:text-[18rem]">บริการหลังการขาย ล้างแผง  (O&M)</div>
                        <div className="desc text-center text-[24rem] md:text-[14rem]">ติดตั้งโซล่าเซลล์ บริการระดับสากลด้วยเครื่องล้างแผงเยอรมันเพื่อช่วยรักษาประสิทธิภาพของแผงโซลาร์เซลล์และมีการผลิตไฟฟ้าที่ดีตลอด 25 ปี </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s4">
              <div className="w-full md:h-screen flex flex-col items-center justify-center bg-[#F0F0F0]">
                <div className="flex flex-col items-center w-full max-w-[1310rem] py-[90rem] px-[52rem] md:px-0">
                  <div className="title mb-[74rem] md:mb-[84rem] text-[36rem] md:text-[26rem] font-bold text-[#222222] text-center">Clients trust us</div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-x-[33rem] w-full">
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                    <div className="flex items-center justify-center w-full h-[100rem] md:h-[133rem] border-[#3C434D] border transition-all duration-500 hover:bg-[#FFFFFF]">
                      <img className="inline-block w-[148rem] md:w-3/5 max-h-[70px] object-cover" src={us_Img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s5">
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center w-full max-w-[1310rem] px-[50rem] md:px-0 py-[64rem] md:pb-[100rem] md:pt-0">
                  <div className="head flex flex-col md:flex-row md:items-center w-full h-auto md:h-[250rem]">
                    <div className="left w-full md:w-1/2 md:text-center text-[36rem] text-[#222222] font-bold">Trust  ผลงานที่ผ่านมา</div>
                    <div className="right max-w-[542px] w-full md:w-1/2 mt-[40rem] md:mt-0 text-[24rem] md:text-[16rem] text-[#222222]">Trust  ผลงานที่ผ่านมา เปลี่ยนหลังคาใหม่ พร้อมเปลี่ยน skylightลดจำนวนจากเดิม  แต่สว่างขึ้นมาก ความร้อนหลังคาลดลงกว่า40องศาจากการติดตั้งsolar เราไว้วางใจให้ Manee Power ดูแลทั้งหมด Total 2MWp capacity</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-[38rem] md:mt-0">
                    <img className="w-full object-cover" src={imgaImg} alt="" />
                    <img className="w-full object-cover" src={imgbImg} alt="" />
                    <img className="w-full object-cover" src={imgcImg} alt="" />
                    <img className="w-full object-cover" src={imgdImg} alt="" />
                    <img className="w-full object-cover" src={imgeImg} alt="" />
                    <img className="w-full object-cover" src={imgfImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="section s6">
              <div className="relative w-full h-screen">
                <img className="hidden md:block w-full h-full object-fill" src={bannerBg1Img} alt="" />
                <img className="block md:hidden w-full h-full object-fill" src={bannerBgM1Img} alt="" />
                <div className="flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
                  <div className="flex flex-col justify-start md:justify-center w-full max-w-[1310rem] h-full py-[220rem] p-[112rem] md:p-0">
                    <div className="w-full max-w-[950rem] text-[60rem] md:text-[69rem] text-white">
                      Manee Power
                    </div>
                    <div className="w-full max-w-[950rem] mt-[43rem] text-[24rem] text-white">
                      เราเริ่มต้นธุรกิจด้วยเครื่องตอกเสาเข็มสกรูจากประเทศเยอรมนีสำหรับภาคส่วนโซลาร์ฟาร์ม ก่อตั้งขึ้นในปี 2559 ด้วยทุนจดทะเบียน5 ล้านบาท
                    </div>
                    <div className="w-full max-w-[950rem] text-[24rem] text-white">
                      ตอนนี้ เรากำลังมุ่งเน้นไปที่การเป็นผู้ให้บริการโซลูชั่นพลังงานแสงอาทิตย์เต็มรูปแบบ รวมถึง Solar Rooftop และ Solar Farm, grid-tied หรือระบบแบตเตอรี่ รวมถึงเทคโนโลยีการนำความร้อนกลับมาใช้ใหม่ ตั้งแต่ครัวเรือนขนาดเล็กไปจนถึงอุตสาหกรรมขนาดใหญ่ ผลักดันการใช้พลังงานสะอาดเพื่อสิ่งแวดล้อมที่ดีในสังคมและส่งต่อให้คนรุ่นต่อไป                      </div>
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
