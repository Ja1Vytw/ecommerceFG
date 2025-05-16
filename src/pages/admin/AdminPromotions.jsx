"use client"

import { useState } from "react"
import "../../styles/admin/AdminPromotions.css"

const AdminPromotions = () => {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      name: "Ferramentas Elétricas com 15% OFF",
      discount: 15,
      category: "ferramentas-eletricas",
      startDate: "2023-05-01",
      endDate: "2023-05-31",
      active: true,
    },
    {
      id: 2,
      name: "Semana das Brocas",
      discount: 20,
      category: "brocas-discos-lixas",
      startDate: "2023-05-10",
      endDate: "2023-05-17",
      active: true,
    },
    {
      id: 3,
      name: "Promoção de Ferramentas Manuais",
      discount: 10,
      category: "ferramentas-manuais",
      startDate: "2023-04-15",
      endDate: "2023-04-30",
      active: false,
    },
  ])

  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "BEMVINDO10",
      discount: 10,
      minPurchase: 100,
      usageLimit: 1,
      expiryDate: "2023-12-31",
      active: true,
    },
    {
      id: 2,
      code: "FRETE20",
      discount: 20,
      minPurchase: 200,
      usageLimit: null,
      expiryDate: "2023-06-30",
      active: true,
    },
    {
      id: 3,
      code: "BLACKFRIDAY",
      discount: 30,
      minPurchase: 300,
      usageLimit: null,
      expiryDate: "2023-11-30",
      active: false,
    },
  ])

  const [newPromotion, setNewPromotion] = useState({
    name: "",
    discount: "",
    category: "",
    startDate: "",
    endDate: "",
    active: true,
  })

  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discount: "",
    minPurchase: "",
    usageLimit: "",
    expiryDate: "",
    active: true,
  })

  const [editingPromotion, setEditingPromotion] = useState(null)
  const [editingCoupon, setEditingCoupon] = useState(null)
  const [isAddingPromotion, setIsAddingPromotion] = useState(false)
  const [isAddingCoupon, setIsAddingCoupon] = useState(false)
  const [activeTab, setActiveTab] = useState("promotions")

  const handlePromotionInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (editingPromotion) {
      setEditingPromotion({
        ...editingPromotion,
        [name]: type === "checkbox" ? checked : value,
      })
    } else {
      setNewPromotion({
        ...newPromotion,
        [name]: type === "checkbox" ? checked : value,
      })
    }
  }

  const handleCouponInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (editingCoupon) {
      setEditingCoupon({
        ...editingCoupon,
        [name]: type === "checkbox" ? checked : value,
      })
    } else {
      setNewCoupon({
        ...newCoupon,
        [name]: type === "checkbox" ? checked : value,
      })
    }
  }

  const handleAddPromotion = () => {
    const promotionToAdd = {
      ...newPromotion,
      id: promotions.length > 0 ? Math.max(...promotions.map((p) => p.id)) + 1 : 1,
      discount: Number.parseFloat(newPromotion.discount),
    }
    setPromotions([...promotions, promotionToAdd])
    setNewPromotion({
      name: "",
      discount: "",
      category: "",
      startDate: "",
      endDate: "",
      active: true,
    })
    setIsAddingPromotion(false)
  }

  const handleAddCoupon = () => {
    const couponToAdd = {
      ...newCoupon,
      id: coupons.length > 0 ? Math.max(...coupons.map((c) => c.id)) + 1 : 1,
      discount: Number.parseFloat(newCoupon.discount),
      minPurchase: Number.parseFloat(newCoupon.minPurchase),
      usageLimit: newCoupon.usageLimit === "" ? null : Number.parseInt(newCoupon.usageLimit),
    }
    setCoupons([...coupons, couponToAdd])
    setNewCoupon({
      code: "",
      discount: "",
      minPurchase: "",
      usageLimit: "",
      expiryDate: "",
      active: true,
    })
    setIsAddingCoupon(false)
  }

  const handleEditPromotion = (promotion) => {
    setEditingPromotion(promotion)
    setIsAddingPromotion(false)
  }

  const handleEditCoupon = (coupon) => {
    setEditingCoupon(coupon)
    setIsAddingCoupon(false)
  }

  const handleUpdatePromotion = () => {
    setPromotions(promotions.map((p) => (p.id === editingPromotion.id ? editingPromotion : p)))
    setEditingPromotion(null)
  }

  const handleUpdateCoupon = () => {
    setCoupons(coupons.map((c) => (c.id === editingCoupon.id ? editingCoupon : c)))
    setEditingCoupon(null)
  }

  const handleDeletePromotion = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta promoção?")) {
      setPromotions(promotions.filter((p) => p.id !== id))
    }
  }

  const handleDeleteCoupon = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este cupom?")) {
      setCoupons(coupons.filter((c) => c.id !== id))
    }
  }

  const handleTogglePromotionStatus = (id) => {
    setPromotions(promotions.map((p) => (p.id === id ? { ...p, active: !p.active } : p)))
  }

  const handleToggleCouponStatus = (id) => {
    setCoupons(coupons.map((c) => (c.id === id ? { ...c, active: !c.active } : c)))
  }

  const categories = [
    { id: "brocas-discos-lixas", name: "Brocas, Discos e Lixas" },
    { id: "ferramentas-eletricas", name: "Ferramentas Elétricas" },
    { id: "ferramentas-manuais", name: "Ferramentas Manuais" },
    { id: "todas-ferramentas", name: "Todas Ferramentas" },
    { id: "trenas-niveis", name: "Trenas, Níveis a Laser e Mais" },
  ]

  return (
    <div className="admin-promotions">
      <div className="admin-header">
        <h1>Gerenciar Promoções e Cupons</h1>
        <p>Crie e gerencie promoções e cupons de desconto</p>
      </div>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "promotions" ? "active" : ""}`}
          onClick={() => setActiveTab("promotions")}
        >
          <i className="fa-solid fa-percent"></i> Promoções
        </button>
        <button
          className={`tab-button ${activeTab === "coupons" ? "active" : ""}`}
          onClick={() => setActiveTab("coupons")}
        >
          <i className="fa-solid fa-ticket"></i> Cupons de Desconto
        </button>
      </div>

      {activeTab === "promotions" && (
        <div className="promotions-section">
          <div className="admin-actions-bar">
            <button className="add-button" onClick={() => setIsAddingPromotion(true)}>
              <i className="fa-solid fa-plus"></i> Adicionar Promoção
            </button>
          </div>

          {isAddingPromotion && (
            <div className="form-container">
              <h2>Adicionar Nova Promoção</h2>
              <div className="promotion-form">
                <div className="form-group">
                  <label htmlFor="name">Nome da Promoção</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newPromotion.name}
                    onChange={handlePromotionInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="discount">Desconto (%)</label>
                  <input
                    type="number"
                    id="discount"
                    name="discount"
                    value={newPromotion.discount}
                    onChange={handlePromotionInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Categoria</label>
                  <select
                    id="category"
                    name="category"
                    value={newPromotion.category}
                    onChange={handlePromotionInputChange}
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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="startDate">Data de Início</label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={newPromotion.startDate}
                      onChange={handlePromotionInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="endDate">Data de Término</label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      value={newPromotion.endDate}
                      onChange={handlePromotionInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="active"
                    name="active"
                    checked={newPromotion.active}
                    onChange={handlePromotionInputChange}
                  />
                  <label htmlFor="active">Ativar promoção</label>
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={() => setIsAddingPromotion(false)}>
                    Cancelar
                  </button>
                  <button type="button" className="save-button" onClick={handleAddPromotion}>
                    Adicionar Promoção
                  </button>
                </div>
              </div>
            </div>
          )}

          {editingPromotion && (
            <div className="form-container">
              <h2>Editar Promoção</h2>
              <div className="promotion-form">
                <div className="form-group">
                  <label htmlFor="edit-name">Nome da Promoção</label>
                  <input
                    type="text"
                    id="edit-name"
                    name="name"
                    value={editingPromotion.name}
                    onChange={handlePromotionInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="edit-discount">Desconto (%)</label>
                  <input
                    type="number"
                    id="edit-discount"
                    name="discount"
                    value={editingPromotion.discount}
                    onChange={handlePromotionInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="edit-category">Categoria</label>
                  <select
                    id="edit-category"
                    name="category"
                    value={editingPromotion.category}
                    onChange={handlePromotionInputChange}
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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="edit-startDate">Data de Início</label>
                    <input
                      type="date"
                      id="edit-startDate"
                      name="startDate"
                      value={editingPromotion.startDate}
                      onChange={handlePromotionInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="edit-endDate">Data de Término</label>
                    <input
                      type="date"
                      id="edit-endDate"
                      name="endDate"
                      value={editingPromotion.endDate}
                      onChange={handlePromotionInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="edit-active"
                    name="active"
                    checked={editingPromotion.active}
                    onChange={handlePromotionInputChange}
                  />
                  <label htmlFor="edit-active">Ativar promoção</label>
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={() => setEditingPromotion(null)}>
                    Cancelar
                  </button>
                  <button type="button" className="save-button" onClick={handleUpdatePromotion}>
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Desconto</th>
                  <th>Categoria</th>
                  <th>Período</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {promotions.map((promotion) => (
                  <tr key={promotion.id}>
                    <td>{promotion.id}</td>
                    <td>{promotion.name}</td>
                    <td>{promotion.discount}%</td>
                    <td>{categories.find((cat) => cat.id === promotion.category)?.name || promotion.category}</td>
                    <td>
                      {promotion.startDate} até {promotion.endDate}
                    </td>
                    <td>
                      <span className={`status-badge ${promotion.active ? "active" : "inactive"}`}>
                        {promotion.active ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td className="actions-cell">
                      <button
                        className={`status-toggle-button ${promotion.active ? "deactivate" : "activate"}`}
                        onClick={() => handleTogglePromotionStatus(promotion.id)}
                      >
                        <i className={`fa-solid ${promotion.active ? "fa-toggle-on" : "fa-toggle-off"}`}></i>
                      </button>
                      <button className="edit-button" onClick={() => handleEditPromotion(promotion)}>
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      <button className="delete-button" onClick={() => handleDeletePromotion(promotion.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "coupons" && (
        <div className="coupons-section">
          <div className="admin-actions-bar">
            <button className="add-button" onClick={() => setIsAddingCoupon(true)}>
              <i className="fa-solid fa-plus"></i> Adicionar Cupom
            </button>
          </div>

          {isAddingCoupon && (
            <div className="form-container">
              <h2>Adicionar Novo Cupom</h2>
              <div className="coupon-form">
                <div className="form-group">
                  <label htmlFor="code">Código do Cupom</label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={newCoupon.code}
                    onChange={handleCouponInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="discount">Desconto (%)</label>
                  <input
                    type="number"
                    id="discount"
                    name="discount"
                    value={newCoupon.discount}
                    onChange={handleCouponInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="minPurchase">Valor Mínimo de Compra (R$)</label>
                  <input
                    type="number"
                    id="minPurchase"
                    name="minPurchase"
                    value={newCoupon.minPurchase}
                    onChange={handleCouponInputChange}
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="usageLimit">Limite de Uso (deixe em branco para ilimitado)</label>
                  <input
                    type="number"
                    id="usageLimit"
                    name="usageLimit"
                    value={newCoupon.usageLimit}
                    onChange={handleCouponInputChange}
                    min="1"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="expiryDate">Data de Expiração</label>
                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    value={newCoupon.expiryDate}
                    onChange={handleCouponInputChange}
                    required
                  />
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="active"
                    name="active"
                    checked={newCoupon.active}
                    onChange={handleCouponInputChange}
                  />
                  <label htmlFor="active">Ativar cupom</label>
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={() => setIsAddingCoupon(false)}>
                    Cancelar
                  </button>
                  <button type="button" className="save-button" onClick={handleAddCoupon}>
                    Adicionar Cupom
                  </button>
                </div>
              </div>
            </div>
          )}

          {editingCoupon && (
            <div className="form-container">
              <h2>Editar Cupom</h2>
              <div className="coupon-form">
                <div className="form-group">
                  <label htmlFor="edit-code">Código do Cupom</label>
                  <input
                    type="text"
                    id="edit-code"
                    name="code"
                    value={editingCoupon.code}
                    onChange={handleCouponInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="edit-discount">Desconto (%)</label>
                  <input
                    type="number"
                    id="edit-discount"
                    name="discount"
                    value={editingCoupon.discount}
                    onChange={handleCouponInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="edit-minPurchase">Valor Mínimo de Compra (R$)</label>
                  <input
                    type="number"
                    id="edit-minPurchase"
                    name="minPurchase"
                    value={editingCoupon.minPurchase}
                    onChange={handleCouponInputChange}
                    min="0"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="edit-usageLimit">Limite de Uso (deixe em branco para ilimitado)</label>
                  <input
                    type="number"
                    id="edit-usageLimit"
                    name="usageLimit"
                    value={editingCoupon.usageLimit || ""}
                    onChange={handleCouponInputChange}
                    min="1"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="edit-expiryDate">Data de Expiração</label>
                  <input
                    type="date"
                    id="edit-expiryDate"
                    name="expiryDate"
                    value={editingCoupon.expiryDate}
                    onChange={handleCouponInputChange}
                    required
                  />
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="edit-active"
                    name="active"
                    checked={editingCoupon.active}
                    onChange={handleCouponInputChange}
                  />
                  <label htmlFor="edit-active">Ativar cupom</label>
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={() => setEditingCoupon(null)}>
                    Cancelar
                  </button>
                  <button type="button" className="save-button" onClick={handleUpdateCoupon}>
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Código</th>
                  <th>Desconto</th>
                  <th>Valor Mínimo</th>
                  <th>Limite de Uso</th>
                  <th>Expiração</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon) => (
                  <tr key={coupon.id}>
                    <td>{coupon.id}</td>
                    <td>{coupon.code}</td>
                    <td>{coupon.discount}%</td>
                    <td>R$ {coupon.minPurchase.toFixed(2)}</td>
                    <td>{coupon.usageLimit === null ? "Ilimitado" : coupon.usageLimit}</td>
                    <td>{coupon.expiryDate}</td>
                    <td>
                      <span className={`status-badge ${coupon.active ? "active" : "inactive"}`}>
                        {coupon.active ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td className="actions-cell">
                      <button
                        className={`status-toggle-button ${coupon.active ? "deactivate" : "activate"}`}
                        onClick={() => handleToggleCouponStatus(coupon.id)}
                      >
                        <i className={`fa-solid ${coupon.active ? "fa-toggle-on" : "fa-toggle-off"}`}></i>
                      </button>
                      <button className="edit-button" onClick={() => handleEditCoupon(coupon)}>
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      <button className="delete-button" onClick={() => handleDeleteCoupon(coupon.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPromotions
