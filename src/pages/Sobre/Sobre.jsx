import { Container } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

function Sobre() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header />
            <Container className="flex-grow-1">
                <h1>Sobre a Barbearia</h1>
                <p>
                    A BarbeariaShop foi inaugurada em 2020. Com proposito de trazer o que tem de melhor em estetica facial masculina e 
                    podendo se tornar a primeira da região Costa Verde no segmento e com a exclusividade do agendamento personalizado.
                </p>

                <h2>Especificações:</h2>
                <ul>
                    <li>Corte Masculino Tradicional.</li>
                    <li>Corte MAcsculino Desenhado.</li>
                    <li>Barba a navalha e a cera quente.</li>
                </ul>
                <h2>Localização:</h2>
                <p>Estamos localizados no seguinte endereço:</p>
                <p>Rua da Limeira nº: 122 - Parque Mambucaba - Angra dos Reis - RJ </p>
                <p>CEP: 23953-390</p>
                <p>Contato: 0249994-9994</p>

                

            </Container>
            <Footer />
        </div>
    );
}

export default Sobre;