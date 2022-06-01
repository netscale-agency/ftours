import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../src/styles/pages/TermsOfService.css";

function PolitikaKolacica() {
  return (
    <Container>
      <Row className="row-terms">
        <Col>
          <h1 className="h1-terms">Politika kolačića (cookies)</h1>
        </Col>
        <Col>
          <p className="p-terms-long-text">
            <span className="span-terms-heading">Pravila o kolačićima</span>
            <br />
            Kako bi se osigurao ispravan rad ovog web-mjesta, ponekad na vaše
            uređaje pohranjujemo male podatkovne datoteke poznate pod nazivom
            kolačići.
            <br />
          </p>
          <p className="p-terms-long-text">
            <span className="span-terms-heading">Što su kolačići?</span>
            <br />
            Kolačić je mala podatkovna datoteka koja se pohranjuje na vaše
            računalo ili mobilni uređaj pri posjetu određenom web-mjestu. Pomoću
            kolačića web-mjesto pamti vaše radnje i željene postavke (poput
            korisničkog imena, jezika, veličine fonta i drugih željenih postavki
            koje se odnose na prikaz) tijekom duljeg razdoblja, pa ih nije
            potrebno ponovno unositi pri svakom povratku na web-mjesto odnosno
            pri prelasku s jedne njegove stranice na drugu.
            <br />
          </p>
          <p className="p-terms-long-text">
            <span className="span-terms-heading">
              Na koji se način koristimo kolačićima?
            </span>
            <br />
            Na nekim se našim stranicama koristimo kolačićima koji nisu prijeko
            potrebni za prikaz web-mjesta, no omogućit će vam ugodnije
            pregledavanje. Te kolačiće možete izbrisati ili blokirati, ali ako
            to učinite, neke funkcije te stranice možda neće raditi kako je
            predviđeno. S pomoću kolačića spremaju se sljedeći podaci:
            <br />- vaše željene postavke prikaza, poput jezika preglednika,
            kontrasta boja, veličine fonta; korišteni uređaj, željene postavke
            prikaza rezultata pretraživanja i obavijesti
            <br />- jeste li ili ne pristali na našu uporabu kolačića na toj
            stranici
            <br />
          </p>
          <p className="p-terms-long-text">
            <span className="span-terms-heading">Osobni podaci</span>
            <br />
            Informacije povezane s kolačićima ne služe za vašu identifikaciju, a
            podaci o navikama pregledavanja isključivo su pod našim nadzorom.
            Kolačićima se ne koristimo ni u koje druge svrhe osim onih koje smo
            ovdje opisali.
          </p>
          <p className="p-terms-long-text">
            <span className="span-terms-heading">Kolačići trećih osoba</span>
            <br />
            Ponekad u statističke svrhe koristimo i vanjske usluge za praćenje
            korištenja stranica, poput Google Analytics. U tom slučaju, Google
            će na vaše računalo poslati svoje kolačiće – tzv. kolačiće treće
            strane. Isto se događa kada koristimo karte na Google Maps. Kolačiće
            trećih strana možete odbiti prilikom prve posjete stranice te na taj
            način skripte trećih strana neće biti učitane.
          </p>
          <p className="p-terms-long-text">
            <span className="span-terms-heading">
              Kako se kontroliraju kolačići?
            </span>
            <br />
            Kolačiće možete kontrolirati i/ili izbrisati prema želji. Možete
            izbrisati sve kolačiće koji su već pohranjeni na vašem uređaju, a
            postavke većine preglednika omogućuju blokiranje pohrane kolačića.
            Ako blokirate kolačiće, možda ćete pri svakom posjetu web-mjestu
            morati ručno prilagođivati neke željene postavke, a određene usluge
            i funkcije možda neće biti dostupne. Ako ne želite na svome računalu
            primati kolačiće, svom pregledniku možete zadati da vas obavijesti
            kada ih detektira ili ih možete automatski sve odbiti. Također
            možete obrisati sve kolačiće koje ste već primili. Ako želite
            ograničiti ili blokirati kolačiće koji su vam već instalirani, to
            možete učiniti putem postavki svoga preglednika. Na koji način,
            saznajte preko funkcije “Help”/”Pomoć” unutar preglednika ili na
            stranici www.aboutcookies.org (vanjska poveznica), gdje možete naći
            detaljne upute koje se odnose na različite preglednike.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PolitikaKolacica;
