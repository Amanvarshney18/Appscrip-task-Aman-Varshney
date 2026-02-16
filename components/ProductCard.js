import { useState } from 'react'

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
        <span className="wishlist" onClick={()=>setLiked(!liked)}>
          {liked ? "❤️" : "🤍"}
        </span>
      </div>
      <div className="product-info">
        <h3>{product.title.substring(0,30)}</h3>
        <p>Sign in or Create an account to see pricing</p>
      </div>
    </div>
  )
}