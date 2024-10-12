import img from './ExportImages';

export default function LeftNavBar(){
    return (
           <nav className='flex justify-between h-18 shadow-md pb-5 pt-5 fixed w-full bg-white'>
                <div className="pt-2  flex shrink-0 px-5 ">
                    <img src={img['burger.svg']} className='h-10 px-5  '/>
                   <a href='#' className='pt-2 '><img  src={img['youtube_logo.svg']}  /></a>
                </div>
                <div className="flex w-1/3 items-center  min-w-0">
                    <input type="text"  className='placeholder:p-2 placeholder:text-md border-2 border-black  shadow-sm h-12 rounded-l-lg w-full shrink ' placeholder='Search'/>
                    <button type='button' className='border-y-2 border-r-2 border-black bg-gray-400 h-12 w-16 rounded-r-3xl shrink-0'><img src={img.search_icon} className='pl-5'/></button>
                    <img src={img.mic} className='w-1'/>
                </div>
                <div className="flex items-center  px-7">
                    <img src={img.notif} className='w-10 h-10'/>
                    <img src={img.user_icon} className='rounded-full h-12 mx-5 mt-2 '/>
                </div>
            </nav> 
    );
}