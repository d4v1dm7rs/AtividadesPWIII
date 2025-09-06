import { useState } from "react"
function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log(`Usuário ${name}, com o sobrenome ${lastName} foi cadastrado com a senha ${password}, com o  e-mail${email}`)
    }

    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    return (
        <div className="container">
            <form onSubmit={cadastrarUsuario}>
                <fieldset>
                    <legend>Cadastro de Usuário</legend>
                    <h2>Nome completo</h2>
                    <div>
                        <label htmlFor="name">Primeiro nome:</label>
                        <input
                            type="text"
                            id="name" name="name"
                            placeholder="Digite o seu primeiro nome:"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Sobrenome:</label>
                        <input
                            type="text"
                            id="lastName" name="LastName"
                            placeholder="Digite o seu sobrenome:"
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <h2>E-mail</h2>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input type="text"
                            id="email"
                            name="email"
                            placeholder="Digite o seu e-mail"
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <h2>Número do Telefone</h2>
                    <div>
                        <label htmlFor="email">Telefone:</label>
                        <input type="text"
                            id="email"
                            name="email"
                            placeholder="Digite o seu e-mail"
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <h2>Endereço</h2>
                    <div>
                        <label htmlFor="password">País:</label>
                        <select name="" id="">
                            <option value="EUA">EUA</option>
                            <option value="Islândia">Islândia</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Chipre">Chipre</option>
                            <option value="Chile">Chile</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Canadá">Canadá</option>
                            <option value="">Canadá</option>
                        </select> 
                    </div>
                    <div>
                    <div>
                        <label htmlFor="password">Estado:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Digite a sua senha:"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                        <label htmlFor="password">Cidade:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Digite a sua senha:"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">CEP:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Digite a sua senha:"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Rua:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Digite a sua senha:"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Número:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Digite a sua senha:"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

export default Form;