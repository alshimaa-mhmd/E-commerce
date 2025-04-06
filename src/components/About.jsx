import React from 'react'
import sideImage from '../assets/Side Image.png'
import service1 from '../assets/Services25.png'
import service2 from '../assets/Services-3.png'
import service3 from '../assets/Services-4.png'
import service4 from '../assets/Services-2.png'
import person1 from '../assets/Frame 874.png'
import person2 from '../assets/Frame 875.png'
import person3 from '../assets/Frame 876.png'
import service6 from '../assets/Services-1.png'
import service5 from '../assets/Services.png'
function About() {
const sales = [
  {
    price: 10.5,
    description: 'Sallers active our site',
    icon: service1,
  },
  {
    price: 33,
    description: 'Mopnthly Produduct Sale',
    icon: service4,

  },
  {
    price: 45.5,
    description: 'Customer active in our site',
    icon: service3,

  },
  {
    price: 25,
    description: 'Anual gross sale in our site',
    icon: service2,

  }
];

const customers = [
  {
    name: 'John Doe',
    image: person1,
    title: 'Founder & Chairman',
},
{
  name: 'Emma Watson',
  image: person2,
  title: 'Managing Director',
},
  {
    name: 'Will Smith',
    image: person3,
    title: 'Product Designer',
}
];

const features = [
    {
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over $140',
      icon : service5,
    },
    {
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
      icon : service6,
    },
    {
      title: 'MONEY BACK GUARANTEE',
      description: 'We reurn money within 30 days',
      icon : service2,
    }
  ];

  return (
    <>
      <div className='w-full sm:ml-12 sm:p-12 p-6'>
        <p className='text-[14px] leading-5 text-black flex gap-[12px]'><span className='opacity-55'>Home</span> <span className='opacity-55'>/</span> About</p>
      </div>

      <div className='flex flex-wrap items-center justify-between w-full p-0'>
        <div className='w-[582px]  sm:ml-12 sm:p-12 p-6 flex flex-col items-start justify-center gap-10 text-black'>
          <h1 className='text-[30px] sm:text-[54px] font-[600] leading-[64px] text-black'>
            Our Story
          </h1>
          <p className='text-[16px] leading-6 text-black'>
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p className='text-[16px] leading-6 text-black'>
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.      
          </p>
        </div>
        <div className='sm:w-[600px] sm:h-[509px] rounded-sm'>
          <img src={sideImage} alt='side image' className='w-full h-full' />
        </div>
      </div>

      <div className='w-full flex items-center justify-center gap-8 flex-wrap p-12 my-8 '>
        {
          sales.map((sale, index) => {
            return (
              <div key={index} className='w-[270px] h-[230px] border-1 border-black/30 flex flex-col items-center justify-center rounded-sm gap-4 hover:text-white hover:bg-[#DB4444]'>
                <img src={sale.icon} />
                <p className='text-[24px] leading-[32px font-[600]'>
                  ${sale.price}
                </p>
                <p className='text-[16px] leading-[24px] '>
                  {sale.description}
                </p>
              </div>
            )
          })
        }
      </div>

      <div className='w-full flex items-center justify-center gap-8 flex-wrap p-12 my-8'>
        {customers.map((customer, index) => {
          return (
            <div key={index} className='w-[370px] h-[564px]  flex flex-col items-start justify-center gap-8'>
              <div className='w-full h-[430px] bg-[#F5F5F5] flex items-center justify-center'>
                <img src={customer.image} />              
              </div>
              <p className='text-[32px] leading-[30px] text-black font-[500]'>
                {customer.name}
              </p>
              <p className='text-[16px] leading-[24px] text-black'>
                {customer.title}
              </p>
            </div>
          )
        })
      }
      </div>    


      <div className='w-full flex items-center justify-center gap-8 flex-wrap p-12 my-8'>
        {features.map((feature, index) => {
          return (
            <div key={index} className='w-[262px] h-[255px] text-center  flex flex-col items-center justify-center gap-8'>
              <img src={feature.icon} />
              <p className='text-[20px] leading-[28px] text-black font-[600]'>
                {feature.title}
              </p>
              <p className='text-[14px] leading-[21px] text-black'>
                {feature.description}
              </p>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default About
