import React from "react"

function Footer() {
    
    return (
        <div className="footer">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid justify-content-end">
                    <div className="text-white">
                        &copy; {(new Date().getFullYear())} - Alina Chaiyasarikul
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Footer