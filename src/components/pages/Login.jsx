import React from 'react'
import orkutlogo from "../../images/OrkutLogo.png"
import social from "../../images/social.jpg"

export default function Login() {
  return (
    <div>
      <header id="cabecalho">
      </header>

      <main id="field__main">

        <section id="main-images">
          <img src={orkutlogo} alt="logo do orkut" id="logoMain" /> <br />
          <img src={social} alt="imagem png de pessoas em conexao" id="social" />
        </section>
        
        <section id="main-texts">
          <p><span className="orkut-font-color" id="color-text-main-1">Conecte-se</span> aos seus amigos e familiares
            usando recados e mensagens instantâneas</p>
          <p><span className="orkut-font-color" id="color-text-main-2">Conheça</span> novas pessoas através de amigos de
            seus amigos e comunidades</p>
          <p><span className="orkut-font-color" id="color-text-main-3">Compartilhe</span> seus vídeos, fotos e paixões em
            um só lugar</p>
        </section>
      </main>

      <aside className="container">

        <div className="fields">
          <div className="field__title">
            <p>Acesse o
              <span className="orkut-font-color">Orkut</span>
              com a sua conta
              <a href="www.account.google.com" style={{textDecoration: 'none'}}><span style={{color: 'rgb(50, 76, 224)'}}>G</span><span style={{color: 'rgb(247, 0, 255)'}}>o</span><span style={{color: 'rgb(255, 170, 0)'}}>o</span><span style={{color: 'rgb(50, 76, 224)'}}>g</span><span style={{color: 'rgb(89, 89, 96)'}}>l</span><span style={{color: 'rgb(255, 0, 30)'}}>e</span>!
              </a></p>
          </div>

          <div className="fields__textbox">
            <input type="email" placeholder="E-mail ou Número de Celular" name id="field__email" />
            <input type="password" placeholder="Senha" name id="fields__pass" />
          </div>

          <div className="fields__remember">
            <input type="checkbox" name id="fields__remember" />
            <label htmlFor="fields__remember">Lembrar sempre do meu acesso</label>
          </div>

          <div className="fields__buttons">
            <button id="btnlogin" className="orkut-button-bg">Entrar</button>
          </div>

          <div className="fields__recovery">
            <a href>Não consegue acessar a sua conta?</a>
          </div>

          <div className="fields__create">
            <p>Não tem conta ?<a href> <span className="orkut-font-color">Criar Agora</span></a></p>
          </div>

        </div>

      </aside>

      <footer>
        <p>©2017 <a href>Orkut</a> - <a href>Sobre o Orkut</a> - <a href>Centro de Segurança</a> - <a href>Privacidade</a> - <a href>Termos</a> - <a href>Contato</a></p>
      </footer>
    </div>
  );
}
