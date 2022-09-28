

const chisteHTML = (txtChiste,urlImg) =>{
    const tarjChiste = document.querySelector('.tarjetaChiste');
    tarjChiste.innerHTML='';
    const divchiste = document.createElement('div');
    const tarjetaHtml = 
    `
    <div class="card">
            <div class="card-image">
              <img src=${urlImg}>
              <span class="card-title">Chiste</span>
            </div>
            <div class="card-content">
              <p>${txtChiste}</p>
            </div>
            <div class="card-action">
              <a href="#">Like</a>
            </div>
          </div>
    `;
    divchiste.innerHTML= tarjetaHtml;
    tarjChiste.appendChild(divchiste.firstElementChild)
} 

export {
    chisteHTML
}