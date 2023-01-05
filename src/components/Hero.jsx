import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className={` flex md:flex-row
    flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm_px-16 px-6`}>

        <div className="flex flex-row items-center px-4
        py-[6px] bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
          
          <span className="text-white">20% </span>
          de descuento para una cuenta de
          <span className="text-white"> 1 més</span>
         
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white
          ss:leading-[100px] leading-[75px]">La nueva <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Generación</span>
          <br></br></h1>
          
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white
          ss:leading-[100px] leading-[75px] w-full">de pagos.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nuestro equipo de expertos utiliza una metodología para identificar la mejor tarjeta de crédito que se ajuste a tus necesidades.
          Examinamos porcentajes anuales, tributos anuales.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="link" className="w-[100%] h-[100%] relative z-[5]"/>
      
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  )
}

export default Hero