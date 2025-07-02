import React from 'react';
import { Navigate } from 'react-router-dom';

// Example: get user role from localStorage or context
const getUserRole = () => {
  // Replace with your actual auth logic
  return localStorage.getItem('role'); // 'user' or 'admin'
};

export const ProtectedRoute = ({ children }) => {
  const role = getUserRole();
  if (!role) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const AdminRoute = ({ children }) => {
  const role = getUserRole();
  if (role !== 'admin') {
    return <Navigate to="/login" replace />;
  }
  return children;
};
