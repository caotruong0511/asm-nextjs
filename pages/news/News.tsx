import React from 'react'

type Props = {}

const News = (props: Props) => {
    return (
        <div className=' grid lg:grid-cols-2  sm:grid-cols-1 gap-4 sm:pd-[10px] md:mx-[20px]'>

            <div className='flex justify-between'>
                <img src="" alt="" className='w-[160px] h-[140px]' />
                <div className='pl-2' >
                    <span className='text-[21px] font-barlow  hover:text-green-600  leading-[30px] '>DÙNG CỐC GIẤY ĐỰNG  CÀ PHÊ NÓNG, THỨ BẠN UỐNG ĐẦY ĂP THỨ ĐÁNG SỢ NÀY</span>
                    <p className='text-[14px] mt-2 font-quicksand' >Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <img src="" alt="" className='w-[160px] h-[140px]' />
                <div className='pl-2 float-left' >
                    <span className='text-[21px] font-barlow  hover:text-green-600  leading-[30px] '>CÀ PHÊ HAY THẺ DỤC: LỰA CHỌN NÀO GIÚP BẠN ĐÁNH BẠI CƠN BUỒN NGỦ TỐT HƠN?</span>
                    <p className='text-[14px] mt-2 font-quicksand' >Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <img src="" alt="" className='w-[160px] h-[140px]' />
                <div className='pl-2' >
                    <span className='text-[21px] font-barlow  hover:text-green-600  leading-[30px] '>BẠN CÓ BAO GIỜ THẮC MẮC TÊN GỌI CHÍNH XÁC CỦA CÀ PHÊ BẮT NGUỒN TỪ ĐÂU KHÔNG?</span>
                    <p className='text-[14px] mt-2 font-quicksand' >Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p>
                </div>
            </div>
            <div className='flex justify-between'>
                <img src="" alt="" className='w-[160px] h-[140px]' />
                <div className='pl-2' >
                    <span className='text-[21px] font-barlow  hover:text-green-600  leading-[30px] '>BẠN CÓ BAO GIỜ THẮC MẮC TÊN GỌI CHÍNH XÁC CỦA CÀ PHÊ BẮT NGUỒN TỪ ĐÂU KHÔNG?</span>
                    <p className='text-[14px] mt-2 font-quicksand' >Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p>
                </div>
            </div>


        </div>
    )
}

export default News