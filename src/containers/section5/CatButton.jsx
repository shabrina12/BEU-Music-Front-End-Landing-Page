import React from 'react'

const CategoryButton = ({button, filter}) => {
    return (
        <div className="genres-container">
            {
                button.map((cat, i)=>{
                    return (
                        <button className='genre-btn' key={i} onClick={()=> filter(cat)}>{cat}</button>                        
                    ) 
                })
            }
        </div>
    )
}

export default CategoryButton