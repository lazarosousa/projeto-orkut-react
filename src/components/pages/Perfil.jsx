import React from 'react'
import logo from  '../../images/Logo.png'
import fotoperfil2 from  '../../images/lazaro-perfil.png'
import perfil from '../../images/botao-perfil.png'

export default function Perfil() {
  return (

<div>

<body>

<header>
  
  <div className="container-header">
    <div className="logo-login">
      <figure>
        <a href="./home.html">
          <img src={logo} alt="Logo Hubkut" />
        </a>
      </figure>
    </div>
    <nav>
      <ul>
        <li>
          <a href="./home.html">Início</a>
        </li>
        <li>
          <a href="https://github.com/pulls">Perfil</a>
        </li>
        <li>
          <a href="https://github.com/issues">Recados</a>
        </li>
        <li>
          <a href="https://github.com/marketplace">Amigos</a>
        </li>
        <li>
          <a href="https://github.com/explore">Aplicativos</a>
        </li>
      </ul>
    </nav>
    <div className="logout">
      <a href="#">Sair</a>
    </div>
    <form action>
      <label htmlFor="search" className="sr-only">Pesquisar no Orkut</label>
      <input type="search" autoComplete="none" id="search" placeholder="Pesquisar no Orkut" />
    </form>
  </div>

</header>

<div className="container-main">

        <main>
          <aside className="profile">
            <div className="img-profile">
              <figure>
                <img src={fotoperfil2} alt="" />
              </figure>
            </div>

            <div className="info-bio">
              <h3>Lazaro Sousa</h3>
              <p>Masculino, Solteiro</p>
              <p>Brasil</p>
            </div>

            <div className="social-media">
              <div className="building">

              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>

                <a href="#">Meu Perfil</a>
              </div>

              <div className="map">

         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
                <a href="#">Recados</a>
              </div>

              <div className="email">

              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
        </svg>

                <a href="#">Galeria</a>
              </div>

              <div className="url">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
        </svg>

                <a href="#">Depoimentos</a>
              </div>

              <div className="twitter">

              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
          <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
        </svg>

                <a href="#">Aplicativos</a>
              </div>
            </div>


          </aside>
          
          <div className="main-middle">
            <section className="welcome">
              <h2>Bem-vindo(a), Lazaro Sousa</h2>
              <p><span>Sorte de hoje:</span> Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de
                existir.</p>
              <div className="count-infos">
                <div className="repos">
                  <p>Repositórios</p>
                  <div className="img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" />
                    </svg>
                    <p>64</p>
                  </div>
                </div>

                <div className="stars">
                  <p>Favoritos</p>
                  <div className="img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                    </svg>
                    <p>1.4k</p>
                  </div>
                </div>

                <div className="followers">
                  <p>Seguidores</p>
                  <div className="img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                    </svg>
                    <p>1.1k</p>
                  </div>
                </div>

                <div className="following">
                  <p>Seguindo</p>
                  <div className="img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" />
                    </svg>
                    <p>216</p>
                  </div>
                </div>
              </div>

            </section>

          </div>

          <div className="followers-following">
            <section className="following">
              <div className="info-following">
                <h2>Seguindo</h2>
                <a href="#">
                  <h2>(216)</h2>
                </a>
              </div>

              <div className="list-following">
                <ul>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                </ul>
              </div>

              <a href="#">
                <h2>Ver todos</h2>
              </a>
            </section>

            <section className="followers">
              <div className="info-followers">
                <h2>Seguindo</h2>
                <a href="#">
                  <h2>(216)</h2>
                </a>
              </div>
              <div className="list-followers">
                <ul>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                  <li>
                    <img src="https://github.com/diego3g.png" alt="" />
                    <p>Diego Fernandes</p>
                  </li>
                </ul>
              </div>
              <a href="#">
                <h2>Ver todos</h2>
              </a>
            </section>

          </div>

        </main>
      </div>

<footer>
      <p>©2023 <a href>Orkut</a> - <a href>Sobre o Orkut</a> - <a href>Centro de Segurança</a> - <a href>Privacidade</a> - <a href>Termos</a> - <a href>Contato</a></p>
    </footer>

        
</body>


</div>

);

}
