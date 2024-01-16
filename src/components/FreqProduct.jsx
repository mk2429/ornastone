import React from 'react'

export default function FreqProduct() {
  return (
    <div className='mt-5'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <h5 className='display'> Frequently <span style={{color:"green"}}>Bought</span></h5>
        <hr style={{width:"50%",marginTop:"-2px"}} />
        </div>
<div className='d-flex justify-content-center align-items-center flex-row w-100 '>
    <div className='fpcard3'>
<img src="https://www.giva.co/cdn/shop/collections/earrings_pink-min.png?v=1701176930" alt="" className=' h-100 w-100'style={{ objectFit: "cover" }}/>
    </div>
    <div className='fpcard4'>
<img src="https://www.giva.co/cdn/shop/collections/mangalsutra.jpg?v=1701174591" alt="" className=' h-100 w-100'style={{ objectFit: "cover" }}/>
    </div>
</div>
<div className='d-flex justify-content-center align-items-center flex-row w-100 '>
    <div className='fpcard1'>
<img src="https://www.giva.co/cdn/shop/collections/earrings_pink-min.png?v=1701176930" alt="" className=' h-100 w-100'style={{ objectFit: "cover" }}/>
    </div>
    <div className='fpcard2'>
<img src="https://www.giva.co/cdn/shop/collections/mangalsutra.jpg?v=1701174591" alt="" className=' h-100 w-100'style={{ objectFit: "cover" }}/>
    </div>
</div>
</div>
  )
}
