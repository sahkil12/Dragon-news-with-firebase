import swimming from '../../assets/swimming.png'
import classPng from '../../assets/class.png'
import playground from '../../assets/playground.png'
import bgPng from '../../assets/bg.png'
const QZone = () => {
    return (
        <div className="space-y-6">
               <div className='bg-base-300 p-4 rounded-md'>
                 <h2 className="font-semibold mb-5 text-xl ">QZone</h2>
                {/* image */}
                <div className="space-y-5">
                    <img src={swimming} className='mx-auto w-full' alt="" />
                    <img src={classPng} className='mx-auto w-full' alt="" />
                    <img src={playground} className='mx-auto w-full' alt="" />
                </div>
               </div>
               <img src={bgPng} className='w-full ' alt="" />
        </div>
    );
};

export default QZone;