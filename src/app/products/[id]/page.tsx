import Quantity from "@/components/ui/quantity"
import { Products } from "@/utils/mock"
import { StaticImageData } from "next/image"
import Image from 'next/image'

const getproductsdetails = (id:string | number) => {
    return Products.filter((product)=> product.id == id)
}
const sizes = ['xs','sm','md','lg','xl']

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
                        <div>
                        <h1 className="text-2xl">{product.name}</h1>
                        <h2 className="text-base text-gray-400">{product.tagline}</h2>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold mt-6">SELECT SIZE</h3>
                            {/*size */}
                        <div className="flex gap-x-3">
                        {
                                sizes.map((item)=>{
                                    return <div key={1} className="h-6 w-6 rounded-full mt-2 center border hover:shadow-x1 duration-300">
                                    <span className="text-[10px] font-semibold text-gray-900">
                                        {item}
                                    </span>
                                </div>
                                })
                            }</div>

                            {/*quantity */}
                            <div className="flex gap-x-3 items-center mt-6">
                                <h3 className="text-[10] font-semibold">Quantity:</h3>
                                <div>
                                 <Quantity/>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
              ))
          }
      </div>
    )
  }