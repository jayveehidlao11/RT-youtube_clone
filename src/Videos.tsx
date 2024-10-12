import img from './ExportImages';
import contents from './VideoContent.json';

 export default function VideoContents(){
   let itemCount = 0;
   
    return (
        
        <>
        <div className='pt-32 px-28'>
            <main>
                <div className='grid  gap-2 gap-y-5 md:grid-cols-2 lg:grid-cols-3  grid-cols-1'>
                    {

                          contents.map( ( items ) => (
                    
                            
                            
                            <div className='shadow-xl w-96 ' key={itemCount++}>
                                <img src={items.images.thumbnail} className='w-96'  />
                                <div className='flex'>
                                    <div className='px-4 py-5 w-24'>
                                        <img src={items.images.channel} className='w-12' />
                                    </div>
                                    <div className='pt-2 w-3/4 pr-2'>
                                        <p className='text-xl font-bold'>{ items.title}</p>
                                        <p className='mt-2 text-gray-700 text-md text-xs '>{items.views} views &#8226; { items.timespan}</p>
                                        <p className='mt-2 text-gray-700 text-md text-xs'>{items.channel}</p>
                                    </div>
                                </div>
                            </div>
                          ))
                    }

                    {/* <div className='shadow-xl w-96 '>
                        <img src={img.thumb_1} className='w-96'  />
                        <div className='flex'>
                            <div className='px-4 py-5'>
                                <img src={img.channel_1} className='w-12' />
                            </div>
                            <div className='pt-2'>
                                <p className='text-xl font-bold'>HTML Tutorial</p>
                                <p className='mt-2 text-gray-700 text-md '>10 M . views</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl w-96 '>
                        <img src={img.thumb_2} className='w-96'  />
                        <div className='flex'>
                            <div className='px-4 py-5'>
                                <img src={img.channel_2} className='w-12' />
                            </div>
                            <div className='pt-2'>
                                <p className='text-xl font-bold'>HTML Tutorial</p>
                                <p className='mt-2 text-gray-700 text-md '>10 M . views</p>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-xl w-96 '>
                        <img src={img.thumb_3} className='w-96'  />
                        <div className='flex'>
                            <div className='px-4 py-5'>
                                <img src={img.channel_3} className='w-12' />
                            </div>
                            <div className='pt-2'>
                                <p className='text-xl font-bold'>HTML Tutorial</p>
                                <p className='mt-2 text-gray-700 text-md '>10 M . views</p>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </main>
        </div>
        </>
    );
}