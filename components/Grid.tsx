import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./BentoGrid"



const Grid = () => {
  return (
    <section id="about">
    <BentoGrid>
        {gridItems.map(({title,description,id,className,img,imgClassName,titleClassName,spareImg}) => (
            <BentoGridItem
                id={id}
                key={id}
                description={description}
                title={title}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
            />
        ))}

    </BentoGrid>

</section>
  )
}

export default Grid