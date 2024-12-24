// import { gridItems, testimonials } from "@/data"
// import { BentoGrid, BentoGridItem } from "./BentoGrid"
// import { PinContainer } from "./3d-pin"




// const Testemonial = () => {
//   return (
//     <section id="testimonials">
//     <BentoGrid>
//         {testimonials.map(({quote,name,title}) => (
//             <BentoGridItem title={title} name={name}>

//             <div className="mt-9">

//                 <div className="relative w-full h-full overflow-hidden ig:rounded-3xl bg-violet-900 mt-10">
//                     something
//                 </div>
               
//             </div>
//             </BentoGridItem>
//         ))}

//     </BentoGrid>

// </section>
//   )
// }

// export default Testemonial

import { testimonials } from "@/data"
import { PinContainer } from "./3d-pin"

const Testimonial = () => {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, title }, index) => (
          <PinContainer key={index}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-base text-gray-200 mb-4">{name}</p>
              <div className="mt-9">
               
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  )
}

export default Testimonial