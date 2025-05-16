"use client"

import { useState } from "react"
import "../../styles/admin/AdminEmployees.css"

const AdminEmployees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "João Silva",
      email: "joao@fgfabricadegesso.com.br",
      role: "Gerente de Vendas",
      department: "Vendas",
      active: true,
    },
    {
      id: 2,
      name: "Maria Oliveira",
      email: "maria@fgfabricadegesso.com.br",
      role: "Atendente",
      department: "Atendimento ao Cliente",
      active: true,
    },
    {
      id: 3,
      name: "Carlos Santos",
      email: "carlos@fgfabricadegesso.com.br",
      role: "Estoquista",
      department: "Estoque",
      active: true,
    },
    {
      id: 4,
      name: "Ana Pereira",
      email: "ana@fgfabricadegesso.com.br",
      role: "Vendedora",
      department: "Vendas",
      active: false,
    },
  ])

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    password: "",
    confirmPassword: "",
    active: true,
  })

  const [editingEmployee, setEditingEmployee] = useState(null)
  const [isAddingEmployee, setIsAddingEmployee] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (editingEmployee) {
      setEditingEmployee({
        ...editingEmployee,
        [name]: type === "checkbox" ? checked : value,
      })
    } else {
      setNewEmployee({
        ...newEmployee,
        [name]: type === "checkbox" ? checked : value,
      })
    }

    // Limpar erro de senha quando o usuário digita
    if (name === "password" || name === "confirmPassword") {
      setPasswordError("")
    }
  }

  const validatePasswords = () => {
    const { password, confirmPassword } = editingEmployee || newEmployee
    if (password !== confirmPassword) {
      setPasswordError("As senhas não coincidem")
      return false
    }
    if (password && password.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres")
      return false
    }
    return true
  }

  const handleAddEmployee = () => {
    if (!validatePasswords()) return

    const employeeToAdd = {
      ...newEmployee,
      id: employees.length > 0 ? Math.max(...employees.map((e) => e.id)) + 1 : 1,
    }
    // Remover senha antes de salvar (em um app real, a senha seria criptografada)
    const { password, confirmPassword, ...employeeData } = employeeToAdd
    setEmployees([...employees, employeeData])
    setNewEmployee({
      name: "",
      email: "",
      role: "",
      department: "",
      password: "",
      confirmPassword: "",
      active: true,
    })
    setIsAddingEmployee(false)
  }

  const handleEditEmployee = (employee) => {
    setEditingEmployee({ ...employee, password: "", confirmPassword: "" })
    setIsAddingEmployee(false)
  }

  const handleUpdateEmployee = () => {
    if (!validatePasswords()) return

    // Remover senha antes de salvar
    const { password, confirmPassword, ...employeeData } = editingEmployee
    setEmployees(employees.map((e) => (e.id === employeeData.id ? employeeData : e)))
    setEditingEmployee(null)
  }

  const handleDeleteEmployee = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este funcionário?")) {
      setEmployees(employees.filter((e) => e.id !== id))
    }
  }

  const handleToggleEmployeeStatus = (id) => {
    setEmployees(employees.map((e) => (e.id === id ? { ...e, active: !e.active } : e)))
  }

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const departments = ["Vendas", "Atendimento ao Cliente", "Estoque", "Administrativo", "Marketing", "TI"]

  return (
    <div className="admin-employees">
      <div className="admin-header">
        <h1>Gerenciar Funcionários</h1>
        <p>Adicione, edite ou remova contas de funcionários</p>
      </div>

      <div className="admin-actions-bar">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar funcionários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button className="add-button" onClick={() => setIsAddingEmployee(true)}>
          <i className="fa-solid fa-plus"></i> Adicionar Funcionário
        </button>
      </div>

      {isAddingEmployee && (
        <div className="form-container">
          <h2>Adicionar Novo Funcionário</h2>
          <div className="employee-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="role">Cargo</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={newEmployee.role}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Departamento</label>
                <select
                  id="department"
                  name="department"
                  value={newEmployee.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um departamento</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={newEmployee.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={newEmployee.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {passwordError && <div className="password-error">{passwordError}</div>}

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="active"
                name="active"
                checked={newEmployee.active}
                onChange={handleInputChange}
              />
              <label htmlFor="active">Conta ativa</label>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={() => setIsAddingEmployee(false)}>
                Cancelar
              </button>
              <button type="button" className="save-button" onClick={handleAddEmployee}>
                Adicionar Funcionário
              </button>
            </div>
          </div>
        </div>
      )}

      {editingEmployee && (
        <div className="form-container">
          <h2>Editar Funcionário</h2>
          <div className="employee-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-name">Nome Completo</label>
                <input
                  type="text"
                  id="edit-name"
                  name="name"
                  value={editingEmployee.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="edit-email">E-mail</label>
                <input
                  type="email"
                  id="edit-email"
                  name="email"
                  value={editingEmployee.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-role">Cargo</label>
                <input
                  type="text"
                  id="edit-role"
                  name="role"
                  value={editingEmployee.role}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="edit-department">Departamento</label>
                <select
                  id="edit-department"
                  name="department"
                  value={editingEmployee.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um departamento</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="edit-password">Nova Senha (deixe em branco para manter a atual)</label>
                <input
                  type="password"
                  id="edit-password"
                  name="password"
                  value={editingEmployee.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="edit-confirmPassword">Confirmar Nova Senha</label>
                <input
                  type="password"
                  id="edit-confirmPassword"
                  name="confirmPassword"
                  value={editingEmployee.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {passwordError && <div className="password-error">{passwordError}</div>}

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="edit-active"
                name="active"
                checked={editingEmployee.active}
                onChange={handleInputChange}
              />
              <label htmlFor="edit-active">Conta ativa</label>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={() => setEditingEmployee(null)}>
                Cancelar
              </button>
              <button type="button" className="save-button" onClick={handleUpdateEmployee}>
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
              <th>E-mail</th>
              <th>Cargo</th>
              <th>Departamento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
                <td>{employee.department}</td>
                <td>
                  <span className={`status-badge ${employee.active ? "active" : "inactive"}`}>
                    {employee.active ? "Ativo" : "Inativo"}
                  </span>
                </td>
                <td className="actions-cell">
                  <button
                    className={`status-toggle-button ${employee.active ? "deactivate" : "activate"}`}
                    onClick={() => handleToggleEmployeeStatus(employee.id)}
                  >
                    <i className={`fa-solid ${employee.active ? "fa-toggle-on" : "fa-toggle-off"}`}></i>
                  </button>
                  <button className="edit-button" onClick={() => handleEditEmployee(employee)}>
                    <i className="fa-solid fa-edit"></i>
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteEmployee(employee.id)}>
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

export default AdminEmployees
