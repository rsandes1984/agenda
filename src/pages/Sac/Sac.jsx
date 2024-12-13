import { Container, Form } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";






function Sac() {
    return (
        <div>
            <Header />
            <Container>
                <h1>SAC</h1>
                <Form />

                <h2>Perguntas Frequentes:</h2>

                <div>
<details>
        <summary>Quais o público é atendido ?</summary>
        Atendemos à todo o publico masculino, que se gosta de cuidar da aparência.
    </details>

    <details>
        <summary>Quais o público é atendido ?</summary>
        Atendemos à todo o publico masculino, que se gosta de cuidar da aparência.
    </details>

    <details>
        <summary>Quais serviços são realizados?</summary>
        Cortes de cabelo simples, cortes desenhados, barba e em breve mais serviços na estetica masculina.
    </details>

    <details>
        <summary>Como faço para agendar o serviço?</summary>
        É muito fácil, é só realizar o cadastro, fazer o login e agendar o serviço com antecedência e de onde você estiver.
    </details>

    <details>
        <summary>Quais as formas de pagamento?</summary>
        Dinheiro, PIX, Cartão de Débito e Cartão de Credito.
    </details>
</div>
            </Container>
            <Footer />
        </div>
    );
}

export default Sac;