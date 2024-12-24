// import React from 'react'
// import { BentoGrid, BentoGridItem } from './BentoGrid'
// import { contact, testimonials } from '@/data'

// const ContactMe = () => {
//   return (
//    <section id="testimonials">
//        <BentoGrid>
//            {contact.map(({quote,name,title}) => (
//                <BentoGridItem title={title} name={name}>
   
//                <div className="mt-9">
   
//                    <div className="relative w-full h-full overflow-hidden ig:rounded-3xl bg-violet-900 mt-10">
//                        something
//                    </div>
                  
//                </div>
//                </BentoGridItem>
//            ))}
   
//        </BentoGrid>
   
//    </section>
//   )
// }

// export default ContactMe


import React from 'react'
import { contact } from '@/data'

const ContactMe = () => {
  return (
    <section id="contact" className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-6">
        {contact.map(({ name, title}, index) => (
          <div 
            key={index}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{name}</p>
                <div className="mt-9">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-violet-900 mt-10">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactMe