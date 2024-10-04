import myImage from '@/assets/images/my-image.png'
import removeBgImage from '@/assets/images/remove-bg.png'
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <div className='min-h-screen bg-black'>
        <div className='w-1/2 h-[700px] mx-auto border-2'>
          <Image className='w-full h-full object-contain aspect-square opacity-70' src={removeBgImage} alt='my-image' />
        </div>

      </div>
    </div>
  );
}
