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
    <header>
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
    <section id="quem-somos" class="container">
        <div class="row">
            <div class="col-md" style="padding: 0">
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
            <div class="col-md">
                <h1>Imagem</h1>
            </div>
        </div>
    </section>
    `
})

Vue.component('Partners',{
    template: /*html*/`
    <section id="parcerias" class="container-fluid">
      <div class="text-center">
        <h1>NOSSOS PARCEIROS</h1>
        <h1>E APOIADORES</h1>
      </div>
      <div class="container text-center">
        <img src="./assets/images/logoexample.png" alt="logo" class="rounded-circle parceiro"> 
        <img src="./assets/images/logoexample.png" alt="logo" class="rounded-circle parceiro"> 
        <img src="./assets/images/logoexample.png" alt="logo" class="rounded-circle parceiro"> 
      </div>
      <div class="container text-center">
        <img src="./assets/images/logoexample.png" alt="logo" class="rounded-circle parceiro"> 
        <img src="./assets/images/logoexample.png" alt="logo" class="rounded-circle parceiro"> 
        <img src="./assets/images/logoexample.png" alt="logo" class="rounded-circle parceiro"> 
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
          esportivas e culturais.<br/>
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
                    <div class="col">
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Nome:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                      </div>
                    </div>
                    <div class="col">
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