import DashBoard from "/static/icons/ic_dashboard.svg";
import Profile from "/static/icons/ic_profile.svg";
import Messages from "/static/icons/ic_messages.svg";
import History from "/static/icons/ic_history.svg";
import Products from "/static/icons/ic_products.svg";
import Customers from "/static/icons/ic_customers.svg";
import Support from "/static/icons/ic_support.svg";
import React from "react";

export default [

    {
        "name" : "DashBoard",
		"icon" : DashBoard,
		"path" : "/dashboard"
		
    }, 
    {
        "name" : "Perfil",
		"icon" :  Profile,
		"path" : "/"
    }, 
    {
        "name" : "Mensajes",
		"icon" : Messages,
		"path" : "/chat-room"
    }, 
    {
        "name" : "Historial de ventas",
		"icon" : History,
		"path" : "/history"
    }, 
    {
        "name" : "Mis productos",
		"icon" : Products,
		"path" : "/products"
    }, 
    {
        "name" : "Clientes",
		"icon" : Customers,
		"path" : "/customers"
    }, 
    {
        "name" : "Soporte",
		"icon" : Support,
		"path" : "/"
    }
]