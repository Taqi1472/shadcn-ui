import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"
import Image from 'next/image'

const getproductsdetails = (id:string | number) => {
    return Products.filter((product)=> product.id == id)
}

export default function Page({ params }: { params: { id: string } }) {
    const result = getproductsdetails(params.id);
    return (
        <div className='flex flex-col lg:flex-row justify-evenly mt-16 flex-wrap py-10 gap-10'>
          {       
              result.map((product)=>(
                <div key={product.id} className="flex gap-10">
                    <div>
<Image src={product.image} alt={product.name}/>
                    </div>
                    <div>
                        Product Detail
                        <p>Name {product.name}</p>
                        <p>Price {product.price}</p>
                        <p>Category {product.category}</p>
                    </div>
                </div>
              ))
          }
      </div>
    )
  }