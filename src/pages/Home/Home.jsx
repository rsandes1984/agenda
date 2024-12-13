import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";



function Home() {
    return (
        <div>
            
        <div>
        <h1>BaberShop Mambucaba </h1>
          <Header />
          <div>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">

<ol class="carousel-indicators">
  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
  <li data-target="#myCarousel" data-slide-to="1"></li>
  <li data-target="#myCarousel" data-slide-to="2"></li>
</ol>


<div class="carousel-inner">
  <div class="item active">
    <img src="la.https://images.unsplash.com/photo-1672642150048-fbfa1634804f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
  </div>

  <div class="item">
    <img src="https://images.unsplash.com/photo-1527512950678-b88a241e9f4b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg" alt="Corte Cabelo à maquina."/>
  </div>

  <div class="item">
    <img src="https://images.unsplash.com/photo-1590540179852-2110a54f813a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Corte de Cabelo na tesoura."/> 
  </div>
</div>


<a class="left carousel-control" href="#myCarousel" data-slide="prev">
  <span class="glyphicon glyphicon-chevron-left"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="right carousel-control" href="#myCarousel" data-slide="next">
  <span class="glyphicon glyphicon-chevron-right"></span>
  <span class="sr-only">Next</span>
</a>
</div>

          </div>
        </div>

            <Footer />
        </div>
    );
}

export default Home;