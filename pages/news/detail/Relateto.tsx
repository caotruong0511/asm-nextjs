import Head from 'next/head'
import React from 'react'

type Props = {}

const Relateto = (props: Props) => {
    return (
        <div className='px-5'>
            <Head>
                <title>Relateto</title>
            </Head>
            <h2 className='text-center text-[40px] font-barlow '>BÀI VIẾT LIÊN QUAN</h2>
            <div className='grid md:grid-cols-3 gap-5 grid-cols-1 my-[20px] text-center'>
                <div className='text-center'>
                    <div className='lg:w-[363px] lg:h-[380px]  md:w-[250px] md:h-[260px] bg-slate-300'>
                        <img src="https://bizweb.dktcdn.net/100/415/010/articles/untitled-1.jpg?v=1608884901087" alt="" className='w-[100%] ' />
                    </div>
                    <samp className='text-[23px] font-barlow leading-[24px] hover:text-green-700 '> Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</samp>
                    <p> </p>
                    <p>Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng ch...</p>
                </div>

                <div>
                    <div className='lg:w-[363px] lg:h-[380px]  md:w-[250px] md:h-[260px] bg-slate-300'>
                        <img src="https://bizweb.dktcdn.net/100/415/010/articles/untitled-1.jpg?v=1608884901087" alt="" className='w-[100%] ' />
                    </div>
                    <samp className='text-[23px] font-barlow leading-[24px] hover:text-green-700 '> Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</samp>
                    <p> </p>
                    <p>Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng ch...</p>
                </div>

                <div>
                    <div className='lg:w-[363px] lg:h-[380px]  md:w-[250px] md:h-[260px] bg-slate-300'>
                        <img src="https://bizweb.dktcdn.net/100/415/010/articles/untitled-1.jpg?v=1608884901087" alt="" className='w-[100%] ' />
                    </div>
                    <samp className='text-[23px] font-barlow leading-[24px] hover:text-green-700 '> Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</samp>
                    <p> </p>
                    <p>Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng ch...</p>
                </div>

            </div>
        </div>
    )
}

export default Relateto