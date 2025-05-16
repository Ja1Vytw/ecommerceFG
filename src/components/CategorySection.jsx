import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import "../styles/CategorySection.css"

const CategorySection = ({ title, products, viewAllLink, icon }) => {
  return (
    <div className="category-section">
      <div className="section-header">
        <h2>
          {icon && <i className={icon}></i>} {title}
        </h2>
        <Link to={viewAllLink} className="view-all-link">
          Ver Todos <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="products-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategorySection
