import { Products } from "@/utils/mock"
import Productcard from "@/components/List/Productcard"
import { StaticImageData } from "next/image"


const getproductscategory = (category:string) => {
    return Products.filter((product)=> product.category === category)
}

export default function Page({ params }: { params: { slug: string } }) {
    const result = getproductscategory(params.slug);
    return (
        <div className='flex flex-col lg:flex-row justify-evenly mt-16 flex-wrap py-10 gap-10'>
          {
            result.length>0 ?         
              result.map((product)=>(
                <Productcard 
                key={product.id} 
                title={product.name} 
                price={product.price} 
                img={product.image as StaticImageData} 
                category={product.category}
                id={product.id}
                />
              )) : <p>NO Products Found</p>
          }

      </div>
    )
  }