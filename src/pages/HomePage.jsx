import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Styled from "styled-components";
import { Button, DatePicker, Form, Input } from 'antd';
import ReactFullpage from "@fullpage/react-fullpage";

import logoImg from "../assets/images/logo.png";
import img1Img from "../assets/images/img1.png";
import img2Img from "../assets/images/img2.png";
import img3Img from "../assets/images/img3.png";
import bannerBgImg from "../assets/images/banner-bg.png";
import bannerBg1Img from "../assets/images/banner-bg1.png";
import imgaImg from "../assets/images/imga.png";
import imgbImg from "../assets/images/imgb.png";
import imgcImg from "../assets/images/imgc.png";
import imgdImg from "../assets/images/imgd.png";
import imgeImg from "../assets/images/imge.png";
import imgfImg from "../assets/images/imgf.png";
import icon1Img from "../assets/images/icon1.png";
import icon2Img from "../assets/images/icon2.png";
import icon3Img from "../assets/images/icon3.png";



import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [menuActive, setMenuActive] = useState(0) 
  const handelMenu = (fullpageApi, index) => {
    setMenuActive(index)
    fullpageApi.moveTo(index + 1)
  }
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledWapper>
      <ReactFullpage
        credits={{ enabled: true, label: "", position: "left" }}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section s1">
             <div className="flex justify-center w-full h-[88px] bg-[#16243F]">
                <div className="flex items-center w-full max-w-[1310px] h-full">
                  <img className="w-[226px]" src={logoImg}  />
                  <div className="flex items-center h-full ml-auto text-[18px] text-white">
                    <div onClick={() => handelMenu(fullpageApi, 0)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-0 ${menuActive === 0 ? 'border-b-2' : ''}`}>หน้าแรก</div>
                    <div onClick={() => handelMenu(fullpageApi, 5)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-6 ${menuActive === null ? 'border-b-2' : ''}`}>Manee Power</div>
                    <div onClick={() => handelMenu(fullpageApi, 4)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-6 ${menuActive === null ? 'border-b-2' : ''}`}>บริการของเรา</div>
                    <div onClick={() => handelMenu(fullpageApi, 6)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-6 ${menuActive === null ? 'border-b-2' : ''}`}>ติดต่อและลูกค้าสัมพันธ์</div>
                  </div>
                </div>
              </div>
              <div className="content-wrap relative w-full">
                <img className="w-full h-full object-fill" src={bannerBgImg} alt="" />
                <div className="flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
                  <div className="flex flex-col justify-center w-full max-w-[1310px] h-full">
                    <div className="w-full max-w-[950px] text-[50px] text-white">
                      ใช้ไฟฟ้าฟรี วันนี้ ! solar ลดค่าไฟ 1หมื่น- ล้าน คืนทุนไว 3 ปี กำไร 70% ต่อปี พิเศษ ค่าไฟเกิน 100,000/เดือน ติดตั้งฟรี! สัญญา5 ปี
                    </div>
                    <div className="w-full max-w-[950px] mt-[48px] text-[34px] text-white">
                      solar rooftop โรงงาน โรงพยาบาล อาคารสำนักงาน ทาวน์โฮม ตึกแถว <span className="text-[#22CF68]">โชว์รูม โรงเรียน</span>
                    </div>
                    <div className="w-[62px] h-1 mt-[48px] bg-white bg-opacity-30"></div>
                    <div className="w-full max-w-[950px] mt-[45px] text-[18px] text-white">
                    Manee Power จำหน่าย ออกแบบ ติดตั้งโซล่าร์ครบวงจรมาตรฐานสากลทั่วประเทศ ประเมิณแม่นยำ ติดตั้งไว บริการแบบมืออาชีพ ราคามิตรภาพ เราเชื่อว่าทุกคนสามารถผลิตไฟเองได้  “สร้างกำไรแบบมีคุณภาพสู่ความยั่งยืน”
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s21">
              <div className="w-full bg-[#22CF68] flex flex-col items-center  justify-center px-[10vw]">
                <div className="flex flex-col items-center w-full max-w-[1310px] py-[58px]">
                  <div className="mb-[60px] text-center text-white text-[36px]">ปรึกษา ออกแบบ ติดตั้งโซล่าร์เซล์ ฟรี!</div>
                  <div className="flex justify-between items-center w-full">
                    <div className="inline-flex items-center">
                      <img className="inline-block w-[70px] h-[70px] mr-[20px] object-fill" src={icon1Img} alt="" />
                      <div className="inline-flex flex-col">
                        <div className="text-[22px] text-white">สถานที่</div>
                        <div className="mt-[12px] w-[250px] text-[14px] text-white">8th floor - Palace Building - 221b Baker street - London - UK</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center">
                      <img className="inline-block w-[70px] h-[70px] mr-[20px] object-fill" src={icon2Img} alt="" />
                      <div className="inline-flex flex-col">
                        <div className="text-[22px] text-white">โทรหาเรา  </div>
                        <div className="mt-[12px] w-[250px] text-[14px] text-white">15263654789  12547889662</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center">
                      <img className="inline-block w-[70px] h-[70px] mr-[20px] object-fill" src={icon3Img} alt="" />
                      <div className="inline-flex flex-col">
                        <div className="text-[22px] text-white">กล่องจดหมาย</div>
                        <div className="mt-[12px] w-[250px] text-[14px] text-white">12545555555@139.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#ffCcee] flex flex-col items-center  justify-center px-[10vw]">
                <div className="flex flex-col items-center w-full max-w-[1310px] py-[58px]">
                  <div className="mb-[60px] text-center text-[#222222] text-[36px]">กรอกข้อมูลเพื่อให้ผู้เชี่ยวชาญดูแล</div>
                    <Form
                    className="w-full"
                      name="basic"
                      layout="vertical"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <div className="grid grid-cols-3 gap-x-[50px] w-full">
                        <Form.Item label="First Name" name="name" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="นามสกุล" />
                        </Form.Item>
                        <Form.Item label="* Phone" name="phone" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="เบอร์ติดต่อ" />
                        </Form.Item>
                        <Form.Item label="* Line / Email" name="email" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="ไลน์/อีเมล" />
                          <Input />
                        </Form.Item>
                        <Form.Item label="* ประเภท" name="aa" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="ประเภท" />
                        </Form.Item>
                        <Form.Item label="Company" name="company" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="ชื่อบริษัท" />
                        </Form.Item>
                        <Form.Item label="Position" name="position" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="สถานที่ตั้ง" />
                        </Form.Item>
                        <Form.Item label="* GPS/Address" name="address" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="พิกัด, ที่อยู่" />
                        </Form.Item>
                        <Form.Item label="* Elec bill/ month" name="month" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="บิลค่าไฟฟ้า/เดือน" />
                        </Form.Item>
                        <Form.Item label="Kick off date" name="date" rules={[{ required: true, message: 'Please input!' }]}>
                          <DatePicker placeholder="วันที่เริ่มก่อสร้าง" />
                        </Form.Item>
                        <Form.Item label="* Working hour(วันทำงาน)" name="workHour" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input placeholder="เวลาทำงาน  " />
                        </Form.Item>
                        <Form.Item className="col-span-2" label="ข้อมูลเพื่อให้เราตอบโจทย์คุณได้มากขึ้น" name="desc" rules={[{ required: true, message: 'Please input!' }]}>
                          <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="คำแนะนำอื่น ๆ เช่นข้อ จำกัด ของรายการที่ต้องการพื้นที่การลงทุนและรูปแบบระบบ" />
                        </Form.Item>
                        <Form.Item className="col-span-3">
                          <div className="flex justify-center">
                            <Button className="big-btn" type="primary" htmlType="submit">ส่งข้อมูล</Button>
                          </div>
                        </Form.Item>
                      </div>
                    </Form>
                </div>
              </div>
            </div>
            <div className="section s3">
              <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center w-full max-w-[1310px]">
                  <div className="title w-4/5 max-w-[642px] mb-[84px] text-[26px] font-bold text-[#222222] text-center">เพราะทุกเจ้า ไม่เหมือนกัน! เราจึงเน้นให้บริการอย่างมืออาชีพ ความพึงพอใจลูกค้าคือเป้าหมายของเรา</div>
                  <div className="grid grid-cols-3 gap-[30px] w-full">
                    <div className="flex flex-col items-center w-full border border-[#7D7D7D] rounded transition-all duration-500 hover:bg-[#22CF68] hover:text-white">
                      <img className="inline-block w-full h-[238px] object-fill" src={img1Img} alt="" />
                      <div className="content w-full h-[190px] pt-[40px] px-[35px]">
                        <div className="title mb-[28px] text-center font-bold text-[18px]">ศึกษาความเป็นไปได้ ออกแบบ - วางแผน</div>
                        <div className="desc text-center text-[14px]">เราออกแบบโซลูชั่นที่ดีที่สุด วิเคราะห์สิ่งที่เหมาะกับคุณ บอกสิ่งที่เป็นไปได้และคุ้มค่า วางแผนอย่างมีประสิทธิภาพ</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full border border-[#7D7D7D] rounded transition-all duration-500 hover:bg-[#22CF68] hover:text-white">
                      <img className="inline-block w-full h-[238px] object-fill" src={img2Img} alt="" />
                      <div className="content w-full h-[190px] pt-[40px] px-[35px]">
                        <div className="title mb-[28px] text-center font-bold text-[18px]">EPC-ออกแบบ ติดตั้ง</div>
                        <div className="desc text-center text-[14px]">วิศวกรรม- มาตรฐานที่ดีที่สุด จัดซื้อจัดจ้าง-คุณภาพยุโรป ก่อสร้าง-ควบคุมและตรวจสอบตามมาตรฐาน IEEE และติดตั้ง โดยผู้ปฏิบัติงานทีผ่านการรับรองตามมาตรฐานความปลอดภัย</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full border border-[#7D7D7D] rounded transition-all duration-500 hover:bg-[#22CF68] hover:text-white">
                      <img className="inline-block w-full h-[238px] object-fill" src={img3Img} alt="" />
                      <div className="content w-full h-[190px] pt-[40px] px-[35px]">
                        <div className="title mb-[28px] text-center font-bold text-[18px]">บริการหลังการขาย ล้างแผง  (O&M)</div>
                        <div className="desc text-center text-[14px]">ติดตั้งโซล่าเซลล์ บริการระดับสากลด้วยเครื่องล้างแผงเยอรมันเพื่อช่วยรักษาประสิทธิภาพของแผงโซลาร์เซลล์และมีการผลิตไฟฟ้าที่ดีตลอด 25 ปี </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s4">
              <div className="w-full h-screen flex flex-col items-center justify-center bg-[#F0F0F0]">
                <div className="flex flex-col items-center w-full max-w-[1310px]">
                  <div className="title w-4/5 max-w-[642px] mb-[84px] text-[26px] font-bold text-[#222222] text-center">Clients trust us</div>
                  <div className="grid grid-cols-3 gap-x-[33px] w-full">
                    <div className="flex flex-col w-full border border-[#3C434D]">
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] border-t transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] border-t transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full border border-[#3C434D]">
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] border-t transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] border-t transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                    </div>
                    <div className="flex flex-col w-full border border-[#3C434D]">
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] border-t transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                      <div className="flex items-center justify-center w-full h-[133px] border-[#3C434D] border-t transition-all duration-500 hover:bg-[#FFFFFF]">
                        <img className="inline-block w-3/5 max-h-[70px] object-cover" src={img2Img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section s5">
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center w-full max-w-[1310px] pb-[100px]">
                  <div className="head flex items-center w-full h-[250px]">
                    <div className="left w-1/2 text-center text-[36px] text-[#222222] font-bold">Trust  ผลงานที่ผ่านมา</div>
                    <div className="right max-w-[542px] w-1/2 text-[16px] text-[#222222]">Trust  ผลงานที่ผ่านมา เปลี่ยนหลังคาใหม่ พร้อมเปลี่ยน skylightลดจำนวนจากเดิม  แต่สว่างขึ้นมาก ความร้อนหลังคาลดลงกว่า40องศาจากการติดตั้งsolar เราไว้วางใจให้ Manee Power ดูแลทั้งหมด Total 2MWp capacity</div>
                  </div>
                  <div className="grid grid-cols-2 w-full">
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
                <img className="w-full h-full object-fill" src={bannerBg1Img} alt="" />
                <div className="flex justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-60">
                  <div className="flex flex-col justify-center w-full max-w-[1310px] h-full">
                    <div className="w-full max-w-[950px] text-[69px] text-white">
                      Manee Power
                    </div>
                    <div className="w-full max-w-[950px] mt-[43px] text-[24px] text-white">
                      เราเริ่มต้นธุรกิจด้วยเครื่องตอกเสาเข็มสกรูจากประเทศเยอรมนีสำหรับภาคส่วนโซลาร์ฟาร์ม ก่อตั้งขึ้นในปี 2559 ด้วยทุนจดทะเบียน5 ล้านบาท
                    </div>
                    <div className="w-full max-w-[950px] text-[24px] text-white">
                      ตอนนี้ เรากำลังมุ่งเน้นไปที่การเป็นผู้ให้บริการโซลูชั่นพลังงานแสงอาทิตย์เต็มรูปแบบ รวมถึง Solar Rooftop และ Solar Farm, grid-tied หรือระบบแบตเตอรี่ รวมถึงเทคโนโลยีการนำความร้อนกลับมาใช้ใหม่ ตั้งแต่ครัวเรือนขนาดเล็กไปจนถึงอุตสาหกรรมขนาดใหญ่ ผลักดันการใช้พลังงานสะอาดเพื่อสิ่งแวดล้อมที่ดีในสังคมและส่งต่อให้คนรุ่นต่อไป                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="section s7 bg-[#16243F]">
              <div className="w-full flex flex-col items-center justify-center px-[10vw] py-[55px]">
                <div className="flex flex-col w-full max-w-[1310px]">
                  <div className="text-white text-[40px]">ติดต่อเรา</div>
                  <div className="flex justify-between mt-[24px]">
                    <div className="flex flex-col max-w-[50%] text-[#8c8f94] font-bold">
                      <div className="title text-[24px] text-white">Opportunity-การจ้างงาน </div>
                      <div className="flex items-center mt-[24px] text-[18px]"><div className="label flex-shrink-0 flex-grow-0 w-[260px]">หัวหน้าบัญชี</div><div>1</div></div>
                      <div className="flex items-center mt-[16px] text-[18px]"><div className="label flex-shrink-0 flex-grow-0 w-[260px]">ธุรการโครงการ</div><div>1</div></div>
                      <div className="flex items-center mt-[16px] text-[18px]"><div className="label flex-shrink-0 flex-grow-0 w-[260px]">Business development</div><div>1</div></div>
                      <div className="flex items-center mt-[16px] text-[18px]"><div className="label flex-shrink-0 flex-grow-0 w-[260px]">sale manager</div><div>1</div></div>
                      <div className="flex items-center mt-[16px] text-[18px]"><div className="label flex-shrink-0 flex-grow-0 w-[260px]">Design Engineer</div><div>2</div></div>
                      <div className="flex flex-col mt-[16px] text-[14px] font-normal"><div className="label">หากต้องการสมัครงานกับเรา กรุณาส่งจดหมายสมัครงานพร้อมประวัติของคุณมาที่: </div><div>achiraya.ch@maneepower.com  โทร 088-269-4245</div></div>
                    </div>
                    <div className="flex flex-col max-w-[50%] text-[#8c8f94] font-bold">
                      <div className="title text-[24px] text-white">สำนักงานใหญ่</div>
                      <div className="flex flex-col mt-[24px] text-[14px] font-normal">263 ซ.เพชรเกษม 84 แขวงบางแคเหนือ เขตบางแค กรุงเทพมหานคร 10160</div>
                      <div className="title mt-[24px] text-[24px] text-white">ติดต่อ ฝ่ายขาย</div>
                      <div className="flex items-center mt-[24px] text-[18px]"><div className="label flex-shrink-0 flex-grow-0 w-[160px]">Tel:</div><div>094-942-5936 (แอม), 088-985-2324(ปิง)</div></div>
                      <div className="flex items-start mt-[16px] text-[18px]"><div className="label flex-shrink-0 flex-grow-0 w-[160px]">Email:</div><div className="flex flex-col"><div>Chatsuda.ch@maneepower.com</div><div>Mahaphon.ch@maneepower.com</div></div></div>
                      <div className="flex flex-col mt-[16px] text-[14px] font-normal">ติดต่อ ฝ่ายจัดซื้อ เสนออุปกรณ์ 096-995-5368</div>
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
    height:100vh;
    justify-content: flex-start;
  }
  .s1 {
    .content-wrap {
      height: calc(100vh - 88px);
    }
  }
  .s21,.s22 {
    height: auto;
  }
  .s3 {}
  .s4 {}
  .s5 {
    height: auto;
  }
  .s6 {}
  .s7 {
    height: auto;
  }
`;

export default HomePage;
