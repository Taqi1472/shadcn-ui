import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import photo1 from '@/components/photo1.webp'
import { Button } from '@/components/ui/button';
import {ShoppingCart} from "lucide-react"
import logo1 from '@/components/logo1.webp'
import logo2 from '@/components/logo2.webp'
import logo3 from '@/components/logo3.webp'
import logo4 from '@/components/logo4.webp'


function Hero() {
    return ( 
        <section className='flex flex-col gap-y-10 lg:flex-row py-6'>
            {/*left side*/}
            <div className='flex-1'>
            <Badge className='bg-blue-100 text-blue-600 py-3 px-6 text-md h-12 rounded-lg mt-4'>Sale 70%</Badge>
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-6xl mt-8">
            An Industrial<br/> Take on<br/> Streetwear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-12 text-slate-600">
            Anyone can beat you but no one can<br/> beat your outfit as long as you wear<br/> Dine outfits.
            </p>
            <Button className='mt-12 h-16 gap-x-4 text-lg'><ShoppingCart className='h-5'/>Start <br/> Shopping</Button>
            <div className='flex gap-x-4 mt-6'>
            <Image src={logo1} alt='logo'/>
            <Image src={logo2} alt='logo'/>
            <Image src={logo3} alt='logo'/>
            <Image src={logo4} alt='logo'/>
            </div>
            </div>
            {/*Right side */}
            <div className='flex-1 bg-orange-100 rounded-full'>
            <Image src={photo1} alt='photo' />
            </div>
        </section>
     );
}

export default Hero;