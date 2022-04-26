import React from 'react'
import Footer from '../components/footer'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Radno Vrijeme</Footer.Title>
                        <Footer.Link href="#">Ponedjeljak – Petak</Footer.Link>
                        <Footer.Link href="#">09:00h – 17:00h</Footer.Link>
                        <Footer.Link href="#">Subotom, nedjeljom i praznikom ne radimo</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Kontakt</Footer.Title>
                        <Footer.Link href="#">Trg Hrvatske bratske zajednice 2, Split</Footer.Link>
                        <Footer.Link href="#">Tel: 021 344 842</Footer.Link>
                        <Footer.Link href="#"> E-mail: desk@f-tours.hr</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Drustvene Mreze</Footer.Title>
                        <Footer.Link href="#">Instagram</Footer.Link>
                        <Footer.Link href="#">Facebook</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Podatci</Footer.Title>
                        <Footer.Link href="#">Opći podaci o Agenciji</Footer.Link>
                        <Footer.Link href="#">Opći uvjeti poslovanja</Footer.Link>
                        <Footer.Link href="#">Pravila privatnosti</Footer.Link>
                        <Footer.Link href="#">Način podnošenja prigovora</Footer.Link>
                        <Footer.Link href="#">Politika kolačića</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}