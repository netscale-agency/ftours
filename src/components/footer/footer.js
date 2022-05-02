import React from 'react'
import FooterLogo from "./imgs/F-tours_logo.png"
import './footer.css'

export default function footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer-main'>
                <div className='footer-column'>
                    <h3 className='footer-heading'>KONTAKT</h3>
                    <a href='./' className='footer-link'>Trg Hrvatske bratske zajednice 2, Split</a>
                    <a href='./' className='footer-link'>Tel: 021 344 842</a>
                    <a href='./' className='footer-link'>E-mail: desk@f-tours.hr</a>
                </div>
                <div className='footer-column'>
                    <img src={FooterLogo} alt="logo"></img>
                </div>
                <div className='footer-column'>
                    <h3 className='footer-heading'>KONTAKT</h3>
                    <a href='./' className='footer-link'>Trg Hrvatske bratske zajednice 2, Split</a>
                    <a href='./' className='footer-link'>Tel: 021 344 842</a>
                    <a href='./' className='footer-link'>E-mail: desk@f-tours.hr</a>
                </div>
            </div>

            <div className='footer-bottom'>
                <span className='copyright'>&copy; 2022 Netscale-Agency</span>
                <a href='./' className='footer-social'>instagram</a>
                <a href='./' className='footer-social'>facebook</a>
            </div>
        </div>
    </footer>
  )
}

