import { useState } from 'react'

export default function Sidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice
}) {
  const [open, setOpen] = useState("category")

  return (
    <aside className="sidebar">

      <div className="filter-section">
        <div className="filter-header" onClick={() => setOpen(open==="category"?"":"category")}>
          <h4>CATEGORY</h4>
          <span>{open==="category"?"-":"+"}</span>
        </div>
        {open==="category" && (
          <div className="filter-body">
            {categories.map(cat => (
              <label key={cat} className="filter-option">
                <input
                  type="radio"
                  checked={selectedCategory===cat}
                  onChange={()=>setSelectedCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-header" onClick={() => setOpen(open==="price"?"":"price")}>
          <h4>PRICE RANGE</h4>
          <span>{open==="price"?"-":"+"}</span>
        </div>
        {open==="price" && (
          <div className="filter-body">
            <input type="number" placeholder="Min" value={minPrice} onChange={e=>setMinPrice(e.target.value)} />
            <input type="number" placeholder="Max" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} />
          </div>
        )}
      </div>

    </aside>
  )
}