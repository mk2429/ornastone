import React,{useState,useEffect} from 'react'
import CategoryCard from '../components/CategoryCard'

export default function CategoryCorousal() {
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
<div className='w-100 catcarddiv'>
    <div className=' explorediv d-flex justify-content-center align-items-center flex-column'>
      <p className="text-center" style={{ fontSize: "2vmin" }}>Explore Our Unique <strong> <span style={{color:"#14493f"}}>Handmade Jewelry </span></strong> Collection </p>
      
      <div className='d-flex catcardContainer'>
        <CategoryCard title="Necklace" images="https://www.kashmirbox.com/cdn/shop/products/KB5591_5.jpg?v=1613370518"/>
        <CategoryCard title="Necklace" images="https://phuljhadi.com/cdn/shop/products/0J7A1588copy.jpg?v=1676635265"/>
        <CategoryCard title="Necklace" images="https://phuljhadi.com/cdn/shop/products/0J7A1588copy.jpg?v=1676635265"/>

        <CategoryCard title="Necklace" images="https://www.kashmirbox.com/cdn/shop/products/KB5591_5.jpg?v=1613370518"/>
        <CategoryCard title="Necklace" images="https://www.kashmirbox.com/cdn/shop/products/KB5591_5.jpg?v=1613370518"/>
        <CategoryCard title="Necklace" images="https://www.kashmirbox.com/cdn/shop/products/KB5591_5.jpg?v=1613370518"/>
        <CategoryCard title="Necklace" images="https://phuljhadi.com/cdn/shop/products/0J7A1588copy.jpg?v=1676635265"/>

        <CategoryCard title="Necklace" images="https://www.kashmirbox.com/cdn/shop/products/KB5591_5.jpg?v=1613370518"/>
        <CategoryCard title="Necklace" images="https://www.kashmirbox.com/cdn/shop/products/KB5591_5.jpg?v=1613370518"/>
        <CategoryCard title="Necklace" images="https://phuljhadi.com/cdn/shop/products/0J7A1588copy.jpg?v=1676635265"/>

        <CategoryCard title="Necklace" images="https://www.kashmirbox.com/cdn/shop/products/KB5591_5.jpg?v=1613370518"/>


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
