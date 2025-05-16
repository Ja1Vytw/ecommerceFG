"use client"

import { useState } from "react"
import "../../styles/admin/AdminProducts.css"

const AdminProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Furadeira de Impacto 750W",
      price: 289.9,
      category: "ferramentas-eletricas",
      stock: 45,
      image: "/placeholder.png?height=100&width=100",
    },
    {
      id: 2,
      name: "Jogo de Chaves de Fenda 6 peças",
      price: 49.9,
      category: "ferramentas-manuais",
      stock: 120,
      image: "/placeholder.png?height=100&width=100",
    },
    {
      id: 3,
      name: "Serra Circular 1200W",
      price: 399.9,
      category: "ferramentas-eletricas",
      stock: 28,
      image: "/placeholder.png?height=100&width=100",
    },
    {
      id: 4,
      name: "Broca para Concreto 10mm",
      price: 15.9,
      category: "brocas-discos-lixas",
      stock: 200,
      image: "/placeholder.png?height=100&width=100",
    },
    {
      id: 5,
      name: "Trena Laser 50m",
      price: 189.9,
      category: "trenas-niveis",
      stock: 35,
      image: "/placeholder.png?height=100&width=100",
    },
  ])

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "/placeholder.png?height=100&width=100",
  })

  const [editingProduct, setEditingProduct] = useState(null)
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (editingProduct) {
      setEditingProduct({
        ...editingProduct,
        [name]: name === "price" || name === "stock" ? Number.parseFloat(value) : value,
      })
    } else {
      setNewProduct({
        ...newProduct,
        [name]: name === "price" || name === "stock" ? Number.parseFloat(value) : value,
      })
    }
  }

  const handleAddProduct = () => {
    const productToAdd = {
      ...newProduct,
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    }
    setProducts([...products, productToAdd])
    setNewProduct({
      name: "",
      price: "",
      category: "",
      stock: "",
      image: "/placeholder.png?height=100&width=100",
    })
    setIsAddingProduct(false)
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setIsAddingProduct(false)
  }

  const handleUpdateProduct = () => {
    setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
    setEditingProduct(null)
  }

  const handleDeleteProduct = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const handleCancelEdit = () => {
    setEditingProduct(null)
  }

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const categories = [
    { id: "brocas-discos-lixas", name: "Brocas, Discos e Lixas" },
    { id: "ferramentas-eletricas", name: "Ferramentas Elétricas" },
    { id: "ferramentas-manuais", name: "Ferramentas Manuais" },
    { id: "todas-ferramentas", name: "Todas Ferramentas" },
    { id: "trenas-niveis", name: "Trenas, Níveis a Laser e Mais" },
    { id: "promocoes", name: "Promoções" },
  ]

  return (
    <div className="admin-products">
      <div className="admin-header">
        <h1>Gerenciar Produtos</h1>
        <p>Adicione, edite ou remova produtos do catálogo</p>
      </div>

      <div className="admin-actions-bar">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button className="add-button" onClick={() => setIsAddingProduct(true)}>
          <i className="fa-solid fa-plus"></i> Adicionar Produto
        </button>
      </div>

      {isAddingProduct && (
        <div className="product-form-container">
          <h2>Adicionar Novo Produto</h2>
          <div className="product-form">
            <div className="form-group">
              <label htmlFor="name">Nome do Produto</label>
              <input type="text" id="name" name="name" value={newProduct.name} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="price">Preço (R$)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Categoria</label>
              <select id="category" name="category" value={newProduct.category} onChange={handleInputChange} required>
                <option value="">Selecione uma categoria</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="stock">Estoque</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                min="0"
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={() => setIsAddingProduct(false)}>
                Cancelar
              </button>
              <button type="button" className="save-button" onClick={handleAddProduct}>
                Adicionar Produto
              </button>
            </div>
          </div>
        </div>
      )}

      {editingProduct && (
        <div className="product-form-container">
          <h2>Editar Produto</h2>
          <div className="product-form">
            <div className="form-group">
              <label htmlFor="edit-name">Nome do Produto</label>
              <input
                type="text"
                id="edit-name"
                name="name"
                value={editingProduct.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="edit-price">Preço (R$)</label>
              <input
                type="number"
                id="edit-price"
                name="price"
                value={editingProduct.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="edit-category">Categoria</label>
              <select
                id="edit-category"
                name="category"
                value={editingProduct.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="edit-stock">Estoque</label>
              <input
                type="number"
                id="edit-stock"
                name="stock"
                value={editingProduct.stock}
                onChange={handleInputChange}
                min="0"
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={handleCancelEdit}>
                Cancelar
              </button>
              <button type="button" className="save-button" onClick={handleUpdateProduct}>
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-thumbnail" />
                </td>
                <td>{product.name}</td>
                <td>R$ {product.price.toFixed(2)}</td>
                <td>{categories.find((cat) => cat.id === product.category)?.name || product.category}</td>
                <td>{product.stock}</td>
                <td className="actions-cell">
                  <button className="edit-button" onClick={() => handleEditProduct(product)}>
                    <i className="fa-solid fa-edit"></i>
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProducts
