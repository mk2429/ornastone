import React from 'react'

export default function SearchBox() {
    return (
        <div className='d-flex justify-content-center align-items-center w-100'>
            <div className='searchbox' style={{borderRadius: " 0 6px 6px 0",border:"1px solid #DED3A4",width:"max-content"}}>
            <input class="h-100" type="text" name="search" placeholder='Search' style={{border:"0",outline:"none" }}/>
            <button class="rounded-right h-100 px-2" disabled style={{ borderRadius: " 0 3px 3px 0", margin: "0",background:"#14493f" }}
                >
                    <div class=" rounded-right h-100 px-2" style={{ borderRadius: " 0 3px 3px 0" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search"
                            viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </button>
            </div>
       </div>
    )
}
