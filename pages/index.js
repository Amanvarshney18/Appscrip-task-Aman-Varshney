import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";

export default function Home({ products }) {
  const router = useRouter();

  const [showFilter, setShowFilter] = useState(true);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("recommended");
  const [priceRange, setPriceRange] = useState(1000);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

    data = data.filter((p) => p.price <= priceRange);

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, category, sort, priceRange]);

  return (
    <>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Product Listing Page" />
      </Head>

      {/* TOP STRIP */}
      <div className="top-strip">
        <div className="container strip-inner">
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container header-top">
          <div>☰</div>
          <div className="logo">LOGO</div>
          <div className="icons">
            <span>🔍</span>
            <span>♡</span>
            <span>🛍</span>
            <span>ENG</span>
          </div>
        </div>

        <nav className="nav">
          <Link href="/" className={router.pathname === "/" ? "active" : ""}>
            SHOP
          </Link>
          <Link href="/skills">SKILLS</Link>
          <Link href="/stories">STORIES</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque.
        </p>
      </section>

      {/* TOOLBAR */}
      <div className="container toolbar">
        <div>
          <strong>{filteredProducts.length} ITEMS</strong>
          <span
            className="show-filter"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </div>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="recommended">RECOMMENDED</option>
          <option value="low">PRICE LOW TO HIGH</option>
          <option value="high">PRICE HIGH TO LOW</option>
        </select>
      </div>

      {/* MAIN */}
      <div className="container main">
        {showFilter && (
          <aside className="sidebar">
            <h4>CATEGORY</h4>

            <label>
              <input
                type="radio"
                name="cat"
                onChange={() => setCategory("all")}
                defaultChecked
              />
              All
            </label>

            <label>
              <input
                type="radio"
                name="cat"
                onChange={() => setCategory("men's clothing")}
              />
              Men's Clothing
            </label>

            <label>
              <input
                type="radio"
                name="cat"
                onChange={() => setCategory("women's clothing")}
              />
              Women's Clothing
            </label>

            <label>
              <input
                type="radio"
                name="cat"
                onChange={() => setCategory("jewelery")}
              />
              Jewelry
            </label>

            <label>
              <input
                type="radio"
                name="cat"
                onChange={() => setCategory("electronics")}
              />
              Electronics
            </label>

            <h4>PRICE RANGE</h4>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
            <p>Up to ${priceRange}</p>
          </aside>
        )}

        <div className={`grid ${showFilter ? "" : "full"}`}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>

          <div className="footer-cols">
            <div>
              <h4>mettā muse</h4>
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
            </div>

            <div>
              <h4>Quick Links</h4>
              <p>Orders & Shipping</p>
              <p>Return & Refunds</p>
            </div>

            <div>
              <h4>Contact</h4>
              <p>+44 221 133 530</p>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>

          <p className="copyright">
            © 2026 Appscrip Task Submission - Aman Varshney
          </p>
        </div>
      </footer>
    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}
