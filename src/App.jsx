import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import FavoritesPage from "./pages/FavoritesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FAQPage from "./pages/FAQPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import WhatsAppButton from "./components/WhatsAppButton"
import ProtectedRoute from "./components/ProtectedRoute"

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminProducts from "./pages/admin/AdminProducts"
import AdminPromotions from "./pages/admin/AdminPromotions"
import AdminEmployees from "./pages/admin/AdminEmployees"

// Employee Pages
import EmployeeDashboard from "./pages/employee/EmployeeDashboard"
import EmployeeProducts from "./pages/employee/EmployeeProducts"
import EmployeePromotions from "./pages/employee/EmployeePromotions"

import "./styles/App.css"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/produtos" element={<ProductsPage />} />
              <Route path="/produto/:id" element={<ProductPage />} />
              <Route path="/carrinho" element={<CartPage />} />
              <Route path="/favoritos" element={<FavoritesPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registro" element={<RegisterPage />} />

              {/* Admin Routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/produtos"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminProducts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/promocoes"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminPromotions />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/funcionarios"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminEmployees />
                  </ProtectedRoute>
                }
              />

              {/* Employee Routes */}
              <Route
                path="/funcionario"
                element={
                  <ProtectedRoute requiredRole="employee">
                    <EmployeeDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/funcionario/produtos"
                element={
                  <ProtectedRoute requiredRole="employee">
                    <EmployeeProducts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/funcionario/promocoes"
                element={
                  <ProtectedRoute requiredRole="employee">
                    <EmployeePromotions />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
