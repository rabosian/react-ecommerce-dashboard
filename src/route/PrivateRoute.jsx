import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'

const PrivateRoute = ({user}) => {
  return (
    user ? <ProductDetail /> : <Navigate to="/login" />
  )
}

export default PrivateRoute