import React, { useState } from "react"

function Footer() {
    
    return (
        <div className="footer">
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="nav-brand text-white" href="./">
                        imgFooter
                    </a>
                    <div className="text-white">
                        {(new Date().getFullYear())} - Alina Chaiyasarikul
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Footer