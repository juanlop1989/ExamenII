import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/count">Visualizacion Graficas </a>
     
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/promedio">Valor Promedio</Link>
            </li>            
            
            <li className="nav-item">
                <Link   className="nav-link active" href="/cantidad">                      
                    Cantidad Productos
                </Link>          
            </li>

            <li className="nav-item">
                <Link  className="nav-link active" href="/valorTotal">
                        Valor Total
                </Link>          
            </li>

            <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
            </li>
          
        </ul>

    </div>
</nav>
  )
}
