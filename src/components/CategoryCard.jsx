import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CategoryCard(props) {
const navigate=useNavigate()

  return (
    <div>
    <div className='CatCard d-flex justify-content-center flex-column align-items-center flex-column m-2' onClick={()=>navigate(`/`)}>
        <div className='CatImgDiv'>
            <div className='w-100 h-100' >
                        <img className="d-block w-100 h-100" src={props.images}   />
            </div>
        </div>
        <p className='display text-center catimgtext'>{props.title}</p>
    </div>
</div>
  )
}
