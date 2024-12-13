import { useForm } from "react-hook-form";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Contato() {

    const { handleSubmit, register } = useForm();

    function enviarFormulario(dados) {
        console.log("Formulário enviado.");
        console.log(dados);
    }

    return (
        <div>
            <Header />
            <h1>Contato</h1>

            <form onSubmit={handleSubmit(enviarFormulario)}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" {...register("nome", {
                        required: true,
                        minLength: 3,
                    })} autoComplete="off" />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" {...register("email", {
                        required: true,
                        minLength: 10,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    })} autoComplete="off" />
                </div>

                <div>
                    <label htmlFor="phone">Telefone:</label>
                    <input type="tel" id="telefone" {...register("telefone",  {
                        required: true,
                        minLength: 8,  
                    })} autoComplete="off" />
                </div>
                <div>
                <label htmlFor="msg">Mensagem:</label>
                    <input type="text" s id="mensagem" {...register("mensagem",  {
                        required: true,
                        minLength: 3,  
                    })} autoComplete="off" />
                </div>
                <button type="button" onClick={enviarFormulario}>
                    Entrar
                </button>
            </form>
            <Footer />
        
        </div>
    );
}


export default Contato