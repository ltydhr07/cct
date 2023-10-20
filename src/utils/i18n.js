import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          submit: 'SUBMIT',
          ok: 'OK',
          s1: {
            Home: 'Home',
            Service: 'Service',
            Promotion: 'Promotion',
            'Contact US': 'Contact US',
            p1: 'ใช้ไฟฟ้าฟรี วันนี้ ! solar ลดค่าไฟ 1หมื่น- ล้าน คืนทุนไว 3 ปี กำไร 70% ต่อปี พิเศษ ค่าไฟเกิน 100,000/เดือน ติดตั้งฟรี! สัญญา5 ปี',
            p2: 'solar rooftop โรงงาน โรงพยาบาล อาคารสำนักงาน ทาวน์โฮม ตึกแถว',
            p21: 'โชว์รูม โรงเรียน',
            p3: 'Manee Power จำหน่าย ออกแบบ ติดตั้งโซล่าร์ครบวงจรมาตรฐานสากลทั่วประเทศ ประเมิณแม่นยำ ติดตั้งไว บริการแบบมืออาชีพ ราคามิตรภาพ เราเชื่อว่าทุกคนสามารถผลิตไฟเองได้  “สร้างกำไรแบบมีคุณภาพสู่ความยั่งยืน”',
          },
          s2: {
            t1: 'Our Services',
            t2: 'Rooftop for home owners',
            st2: 'Home Owners',
            t21: 'Rooftop for business owners',
            st21: 'Business Owners',
            t3: 'Leave us your info',
            l1: 'Name',
            l2: 'Phone',
            l3: 'Home Address',
            p1: 'Press Enter',
            p2: 'Please input!',
            tip1: 'รับทราบขอขอบคุณสำหรับการส่ง',
          },
          s21: {
            p1: 'Solar Rooftop for business owners is suitable for all businesses who has electric bill over 100,000 Baht per month or more.',
            p2: 'Businesses in factory, hotel, resort, hospital, school, and office building can lower its electricity costs up to 75%.',
            p3: 'Why CapSolar is right for business owner',
            li1: 'Lower electric bill in the first day of installing solar rooftop',
            li2: 'Good after sales service over solar rooftop lifetime usage.',
            li3: 'Professional and experience installation team.',
            li4: 'If eligible, customers can have 50% tax benefits of solar rooftop investments.',
          },
          s3: {
            t1: 'Home Owners Solution Pricing',
            t2: 'Promotion',
            t3: 'Order now, and get CapFlex Package',
            p1: 'Only 50% up front and up to 12 months installments',
            subscribe: 'subscribe',
          },
          s6: {
            t1: 'Cap Solar',
            p1: 'CapSolar is a total renewable energy solutions company that focuses on solar rooftop, and floating solar in residential and commercial and industrial segments.   We provide survey, design, installation, maintenance of solar rooftop.',
            p2: 'Our main goal is to make solar rooftop accessible to all segments of customers, from customers who are price conscious to those who want premium products and services.',
          },
        },
      },
      th: {
        translation: {
          submit: 'SUBMIT',
          ok: 'OK',
          s1: {
            Home: 'Home',
            Service: 'Service',
            Promotion: 'Promotion',
            'Contact US': 'Contact US',
            p1: 'ใช้ไฟฟ้าฟรี วันนี้ ! solar ลดค่าไฟ 1หมื่น- ล้าน คืนทุนไว 3 ปี กำไร 70% ต่อปี พิเศษ ค่าไฟเกิน 100,000/เดือน ติดตั้งฟรี! สัญญา5 ปี',
            p2: 'solar rooftop โรงงาน โรงพยาบาล อาคารสำนักงาน ทาวน์โฮม ตึกแถว',
            p21: 'โชว์รูม โรงเรียน',
            p3: 'Manee Power จำหน่าย ออกแบบ ติดตั้งโซล่าร์ครบวงจรมาตรฐานสากลทั่วประเทศ ประเมิณแม่นยำ ติดตั้งไว บริการแบบมืออาชีพ ราคามิตรภาพ เราเชื่อว่าทุกคนสามารถผลิตไฟเองได้  “สร้างกำไรแบบมีคุณภาพสู่ความยั่งยืน”',
          },
          s2: {
            t1: 'Our Services',
            t2: 'Rooftop for home owners',
            t21: 'Rooftop for business owners',
            t3: 'Leave us your info',
            l1: 'Name',
            l2: 'Phone',
            l3: 'Home Address',
            p1: 'Press Enter',
            p2: 'Please input!',
            tip1: 'รับทราบขอขอบคุณสำหรับการส่ง',
          },
          s21: {
            p1: 'โซล่าร์ รูฟท็อป สำหรับผู้ประกอบการ เหมาะสำหรับผู้ประกอบการที่ความต้องการการใช้ไฟฟ้าเยอะ มากกว่าหนึ่งแสนบาทต่อเดือน สำหรับลูกค้',
            p2: 'าที่อยู่ในกลุ่มโรงงานอุตสาหกรรม โรงแรม รีสอร์ท โรงพยาบาล โรงเรียน อาคารสำนักงาน การติดตั้งโซล่าร์ รูฟท็อป ช่วยลดต้นทุนพลังงานได้มากถึง 75%',
            p3: 'ทำไม CapSolar เหมาะสมกับผู้ประกอบการ',
            li1: 'ลดต้นทุนด้านพลังงานได้ตั้งแต่วันแรกที่ติดตั้ง',
            li2: 'ดูแลหลังการขายตลอดอายุการใช้งานของ โซล่าร์ รูฟท็อป',
            li3: 'ทีมงานมีความเป็นมืออาชีพ มีมาตรฐานรับรอง',
            li4: 'ได้รับสิทธิประโยชน์ลดหย่อนจากภาษีจาก BOI มากถึง 50% ของเงินลงทุน',
          },
          s3: {
            t1: 'Home Owners Solution Pricing',
            t2: 'Promotion',
            t3: 'Order now, and get CapFlex Package',
            p1: 'Only 50% up front and up to 12 months installments',
            subscribe: 'subscribe',
          },
          s6: {
            t1: 'Cap Solar',
            p1: 'เราเริ่มต้นธุรกิจด้วยเครื่องตอกเสาเข็มสกรูจากประเทศเยอรมนีสำหรับภาคส่วนโซลาร์ฟาร์ม ก่อตั้งขึ้นในปี 2559 ด้วยทุนจดทะเบียน5 ล้านบาท',
            p2: 'ตอนนี้ เรากำลังมุ่งเน้นไปที่การเป็นผู้ให้บริการโซลูชั่นพลังงานแสงอาทิตย์เต็มรูปแบบ รวมถึง Solar Rooftop และ Solar Farm, grid-tied หรือระบบแบตเตอรี่ รวมถึงเทคโนโลยีการนำความร้อนกลับมาใช้ใหม่ ตั้งแต่ครัวเรือนขนาดเล็กไปจนถึงอุตสาหกรรมขนาดใหญ่ ผลักดันการใช้พลังงานสะอาดเพื่อสิ่งแวดล้อมที่ดีในสังคมและส่งต่อให้คนรุ่นต่อไป',
          },
        },
      },
    },
  })

export default i18n
