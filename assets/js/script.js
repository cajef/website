Vue.component('Navbar',{
    template: /*html*/`
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="navbar-brand">
            <img src="./assets/images/Cajef_Logo.png" class="logo"/>
        </div>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse text-center" id="navbarNav">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="#">Sobre</a>
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="#">Parceiros</a>
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="#">Contatos</a>
        </li>
        <li>
            <Donate></Donate>
        </li>
        </ul>
        </div>
    </nav>
    `
})

Vue.component('Hero',{
    template: /*html*/`
    <header id="#home">
    <div class="jumbotron">
    <div class="big">
    <h1>CAGEF</h1>
    <h1>CENTRO DE</h1>
    <h1>ATENÇÃO AO</h1>
    <h1 style="color: var(--green)">JOVEM FELIZ</h1>    
    </div>
    </div>
    </header>
    `
})

Vue.component('About',{
    template: /*html*/`
    <section id="about" class="container-fluid">
        <div class="row">
            <div class="col-lg" style="padding: 0">
                <h1>QUEM SOMOS?</h1>
                <h2>CAJEF</h2>
                <p>
                  O Centro de Atenção ao Jovem Espaço Feliz (CAJEF) é uma 
                  organização não governamental (ONG) 
                  sem fins lucrativos que visa incentivar 
                  a cidadania e a vivência de bons valores 
                  para crianças e adolescentes. 
                  Atendemos mais de 100 crianças de 3 a 16 anos de Cabo Frio (RJ) 
                  em situação de vulnerabilidade social, 
                  promovendo a eles atividades educativas, 
                  esportivas e culturais para potencializar seus talentos.
                </p>
                <p>
                  Nosso trabalho também tem como objetivo a inserção 
                  e permanência dos jovens no mercado de trabalho.
                </p>
                <div class="social">
                    <a href="#">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
            <div class="col-lg">
                <div class="team">
                <div class="green-box">
                <svg class="yellow-detail" width="357" height="434" viewBox="0 0 357 434" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.2674 81.4999C1.90717 70.6932 8.74974 59.9465 19.6937 58.3389C58.7507 52.602 98.6427 54.9039 136.902 65.186C181.621 77.2042 222.805 99.7742 256.997 131.002C291.189 162.229 317.391 201.203 333.404 244.652C347.104 281.825 353.005 321.345 350.823 360.761C350.212 371.805 340.128 379.592 329.153 378.219C318.177 376.845 310.477 366.83 310.965 355.78C312.426 322.737 307.302 289.664 295.819 258.504C282.021 221.067 259.444 187.486 229.983 160.579C200.523 133.673 165.037 114.226 126.506 103.87C94.4356 95.2516 61.0342 93.1403 28.2591 97.5832C17.2979 99.069 6.62761 92.3066 4.2674 81.4999Z" fill="#FFDB31"/>
                </svg>
                </div>
            </div>
         </div>
      </div>
    </section>
    `
})

Vue.component('Partners',{
    template: /*html*/`
    <section id="parcerias" class="container-fluid">
      <svg class="blue-detail" width="204" height="526" viewBox="0 0 204 526" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M118.55 43.5115C130.567 39.6004 143.562 46.1579 146.633 58.4168C156.788 98.9542 159.186 141.12 153.623 182.677C147.046 231.808 129.51 278.833 102.312 320.274C75.1143 361.715 38.9495 396.513 -3.50823 422.095C-39.4212 443.734 -79.0596 458.311 -120.291 465.123C-132.759 467.183 -143.946 457.871 -145.139 445.289C-146.332 432.708 -137.075 421.635 -124.63 419.437C-90.225 413.359 -57.1639 400.994 -27.1272 382.896C9.45578 360.853 40.6166 330.87 64.0514 295.163C87.4862 259.456 102.596 218.938 108.262 176.605C112.915 141.848 111.105 106.596 102.992 72.6136C100.057 60.3214 106.533 47.4227 118.55 43.5115Z" fill="#4387C7"/>
      </svg>
    
      <div class="text-center">
        <h1>NOSSOS PARCEIROS</h1>
        <h1>E APOIADORES</h1>
      </div>
      <div class="container text-center">
        <img src="./assets/images/logoexample.png" alt="logo" class="parceiro"> 
        <img src="./assets/images/cabofrio.png" alt="logo" class="parceiro"> 
        <img src="./assets/images/logoexample.png" alt="logo" class="parceiro"> 
      </div>
    </section>
    `
})

Vue.component('Help', {
    template: /*html*/`
    <section id="nos-ajude" class="container-fluid help text-center">
      <div class="container">
        <h1>NOS AJUDE A REALIZAR SONHOS</h1>
        <p>
          Com programas sociais que preparam para a entrada,
          permanência e reinserção no mercado de trabalho, além de potencializarseus talentos, com atividades educativas,
          esportivas e culturais.
        </p>
        <p>
          O CAJEF, que funciona de doações e da ajuda de voluntários, atende atualmente cerca de 100 crianças com idades
          entre 3 e 16 anos, com objetivo de promover a cidade e vivência de valores no bem.
        </p>
        <a href="#" class="btn btn-primary ong-red">           
          Clique aqui para fazer a sua doação
        </a>
      </div>
    </section>
    `
})

Vue.component('Contact', {
    template: /*html*/`
    <section id="fale" class="container-fluid text-center">
      <svg class="pink-detail" width="200" height="421" viewBox="0 0 200 421" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M391.354 334.013C393.827 346.406 385.79 358.541 373.255 360.152C334.965 365.073 296.048 363.26 258.276 354.735C213.051 344.527 170.477 324.926 133.316 297.203C96.1553 269.48 65.238 234.254 42.5699 193.811C23.6373 160.033 10.8125 123.245 4.62126 85.1397C2.5945 72.6655 11.9371 61.504 24.5215 60.3444V60.3444C37.1059 59.1848 48.1541 68.4715 50.3193 80.9224C55.8354 112.642 66.6967 143.254 82.492 171.435C102.024 206.282 128.663 236.634 160.682 260.521C192.701 284.408 229.384 301.297 268.352 310.092C299.865 317.205 332.302 318.895 364.279 315.146C376.831 313.675 388.88 321.619 391.354 334.013V334.013Z" fill="#E67FAE"/>
      </svg>    
      <h1>FALE CONOSCO</h1>
      <div class="container">
        <div class="card">        
          <div class="card-body">
            <div class="card-title">
              <p>
                E-mail:  Kelita.barbosa@outlook.com     Telefone: (22) 9261-86002
              </p>
              <p>
                Rua Erica Ramos , N° 25
                CASA - JACARE
                - Cabo Frio-Rio de Janeiro,  Brasil
              </p>  
            </div>
            <div class="card-text text-left">
              <form>
                <div class="container">
                  <div class="row">
                    <div class="col-md">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Nome:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Email:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Email:</label>
                    <textarea class="form-control" name="" id="" rows="5" placeholder="Digite aqui a sua mensagem"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </form>  
            </div>
          </div>
        </div>
      </div>
    </section>
    `
})

Vue.component('Foot', {
    template: /*html*/`
    <footer>
        <div class="container">
        <div class="text-left">
            <i class="fab fa-facebook"></i>
        </div>
        <div class="text-right">
            <a class="btn btn-primary ong-red" href="#">Quero Doar</a>
        </div>
        </div>
    </footer>    
    `
})

Vue.component('Donate', {
    template: /*html*/`
    <a href="#" class="btn btn-primary btn-block ong-red"> 
        <i class="fas fa-heart"></i>
        Quero Doar
    </a>
    `
})

const App = new Vue({
    el: "#app"
})