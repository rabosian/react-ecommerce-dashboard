import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import {useSelector} from "react-redux"

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth.auth)
  return (
    auth ? <ProductDetail /> : <Navigate to="/login" />
  )
}

export default PrivateRoute