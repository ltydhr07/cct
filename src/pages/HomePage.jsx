import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";

import logoImg from "../assets/images/logo.png";
import img1Img from "../assets/images/img1.png";
import img2Img from "../assets/images/img2.png";
import img3Img from "../assets/images/img3.png";
import bannerBgImg from "../assets/images/banner-bg.png";

import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const [menuActive, setMenuActive] = useState(0) 

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
                    <div onClick={() => setMenuActive(0)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-0 ${menuActive === 0 ? 'border-b-2' : ''}`}>หน้าแรก</div>
                    <div onClick={() => setMenuActive(1)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-6 ${menuActive === 1 ? 'border-b-2' : ''}`}>Manee Power</div>
                    <div onClick={() => setMenuActive(2)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-6 ${menuActive === 2 ? 'border-b-2' : ''}`}>บริการของเรา</div>
                    <div onClick={() => setMenuActive(3)} className={`cursor-pointer flex items-center h-full px-2 border-[#22CF68] hover:border-b-2 ml-6 ${menuActive === 3 ? 'border-b-2' : ''}`}>ติดต่อและลูกค้าสัมพันธ์</div>
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
            <div className="section s2">
              <div className="left-wrap">
                <div className="content">
                  <div className="title">กรอกข้อมูลเพื่อให้ผู้เชี่ยวชาญดูแล</div>
                  <div className="form-wrap">
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div>
                    <div className="form-item">
                      <div className="form-label">* First Name</div>
                      <div className="form-content"><input type="text" /></div>
                    </div> 
                  </div>
                </div>
              </div>
              <div className="right-wrap">

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
            <div className="section ">
              <div className="w-full h-screen flex flex-col items-center justify-center bg-[#F0F0F0]">
                <div className="flex flex-col items-center w-full max-w-[1310px]">
                  <div className="head flex items-center w-full">
                    <div className="left">Trust  ผลงานที่ผ่านมา</div>
                    <div className="right">Trust  ผลงานที่ผ่านมา เปลี่ยนหลังคาใหม่ พร้อมเปลี่ยน skylightลดจำนวนจากเดิม  แต่สว่างขึ้นมาก ความร้อนหลังคาลดลงกว่า40องศาจากการติดตั้งsolar เราไว้วางใจให้ Manee Power ดูแลทั้งหมด
 

 Total 2MWp capacity</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
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
  .s2 {}
  .s3 {}
  .s4 {}
  .s5 {}
  .s6 {}
  .s7 {}
`;

export default HomePage;
