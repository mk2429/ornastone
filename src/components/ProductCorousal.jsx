import React,{useState,useEffect} from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductCorousal(props) {
  const [allBlog, setAllBlog] = useState([]);

//   async function loadData() {
//     let response = await fetch("https://gigayodhya.onrender.com/api/getblogs", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     response = await response.json();
//     console.log("all blogs", response)
//     setAllBlog(response)

//   }
//   useEffect(() => {
//     loadData()
//   }, []);
  return (
<div className='w-100 catcarddiv my-2'>
    <div className=' explorediv d-flex justify-content-center align-items-center flex-column'>
      <h3 className="text-center display muted">{props.title}</h3>
      
      <div className='d-flex catcardContainer'>
        <ProductCard title="Necklace" images="https://www.giva.co/cdn/shop/files/PD02245_5_4b10b484-5e68-4f9b-b386-2bf583a9c93e.jpg?v=1697781985&width=360"/>
        <ProductCard title="Necklace" images="https://www.giva.co/cdn/shop/files/R01625_5.jpg?v=1701962166&width=360"/>
        <ProductCard title="Necklace" images="https://www.giva.co/cdn/shop/files/BR0817_5.jpg?v=1700135659&width=360"/>
        <ProductCard title="Necklace"  images="https://www.giva.co/cdn/shop/files/CH0136_5-min.jpg?v=1686834893&width=360"/>
       
      {/* {allBlog.map((blog)=>{
        return(
        <CategoryCard title={blog.title} images={blog.imageUrlList}/>

        )
    })} */}
      </div>
    </div>

    </div>
  )
}
