const slider=document.querySelector('.swiper-wrapper');
const card=document.querySelector('.cardes-card');
const input =document.querySelector('input');
const swipercha=document.querySelector('.swiper');
const cardParent=document.querySelector('.cardes-card1');
const h1=document.querySelector('.cardes-title');
const lilar=document.querySelectorAll('.nav-item');
const boxmark = document.querySelector('.boxmark');
const Boxmarks = (data) => {
    data.forEach((e) => {
        
        boxmark.addEventListener('click', (e) => {
            console.log('ss');
            
        })
    })
    
}
let sanoq=1;

const NavList=(data)=> {
    lilar[0].addEventListener('click',(e)=> {
        card.innerHTML = ''; 
        swipercha.style.display='flex'
        h1.textContent='Recommended for you'
         data.forEach((event)=> {
            if(event.thumbnail.trending) {
                   slider.textContent=" "
                slider.innerHTML+= ` 
                 <div class="swiper-slide" style="background-image: url(${event.thumbnail.trending.large});background-size: cover; background-repeat: no-repeat; ">
                                <div class="boxmark">
                                 <svg width="12" height="14" viewBox="0 0 12 14"  xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z" stroke="white" stroke-width="1.5"/>
                                 </svg>
                               </div>
                               
       
                               <div class="swipper-slide-title">
                                   <ul class="swiper-list">
                                       <li class="swiper-item">${event.year}</li>
                                       <li class="swiper-item"><img class=" img2" src="${event.category=='Movie' ? './img/Shape 2.png' : './img/tv.png'}" alt=""> ${event.category}</li>
                                       <li class="swiper-item">${event.rating}</li>
                                   </ul>
                                   <h4>${event.title}</h4>
                               </div>
            
                           </div>`
       
             }
             else {
              
               
            card.innerHTML+= `
            <div class="cardes-card-item">
                           <div class="img" style="background-image: url(${event.thumbnail.regular.large});background-size: cover; background-repeat: no-repeat; ">
                               <div class="boxmark">
                                   <svg width="12" height="14" viewBox="0 0 12 14"  xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z" stroke="white" stroke-width="1.5"/>
                              </svg>
                               </div>
                           </div>
                           <div class="cardes-title">
                               <ul class="cardes-list">
                                   <li class="cardes-item"> ${event.year}</li>
                                    <li class="cardes-item"> <img class=" img2" src='${event.category=='Movie' ? './img/Shape 2.png' : './img/tv.png'}'> ${event.category}</li>
                                   <li class="cardes-item">${event.rating}</li>
                               </ul>
                               <h4>${event.title}</h4>
                           </div>
                       </div>
            `
             }    
            
            
         })
      
})



    lilar[1].addEventListener('click',(e)=> {
        card.innerHTML = ''; 
        swipercha.style.display='none';
         data.forEach((event)=> {
            if(event.category==='Movie') {
                
                h1.textContent=`Movie`
                card.innerHTML += `
                <div class="cardes-card-item">
                    <div class="img" style="background-image: url(${event.thumbnail.regular.large});background-size: cover; background-repeat: no-repeat;">
                        <div class="boxmark">
                            <svg width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z" stroke="white" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </div>
                    <div class="cardes-title">
                        <ul class="cardes-list">
                            <li class="cardes-item">${event.year}</li>
                            <li class="cardes-item"><img class=" img2" src='${event.category == 'Movie' ? './img/Shape 2.png' : './img/tv.png'}'> ${event.category}</li>
                            <li class="cardes-item">${event.rating}</li>
                        </ul>
                        <h4>${event.title}</h4>
                    </div>
                </div>
            `;
            }
         })
      
})



lilar[2].addEventListener('click',(e)=> {
    card.innerHTML = ''; 
    swipercha.style.display='none';
     data.forEach((event)=> {
        if(event.category==='TV Series') {
            
            h1.textContent=`${event.category}`
            card.innerHTML += `
            <div class="cardes-card-item">
                <div class="img" style="background-image: url(${event.thumbnail.regular.large});background-size: cover; background-repeat: no-repeat;">
                    <div class="boxmark">
                        <svg width="12" height="14" viewBox="0 0 12 14"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z" stroke="white" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
                <div class="cardes-title">
                    <ul class="cardes-list">
                        <li class="cardes-item">${event.year}</li>
                        <li class="cardes-item"><img class=" img2" src='${event.category == 'Movie' ? './img/Shape 2.png' : './img/tv.png'}'> ${event.category}</li>
                        <li class="cardes-item">${event.rating}</li>
                    </ul>
                    <h4>${event.title}</h4>
                </div>
            </div>
        `;
        }
     })
  
})

}

const inputSearch = (data) => {
    input.addEventListener('change', () => { 
        card.innerHTML = ''; 
        swipercha.style.display='none';
        sanoq=0;

        data.forEach((event) => {
            if (event.title.toLowerCase().includes(input.value.toLowerCase())) {
                sanoq++;
              
                
                h1.textContent=`Found ${sanoq} results for ‘${input.value}’`
                card.innerHTML += `
                <div class="cardes-card-item">
                    <div class="img" style="background-image: url(${event.thumbnail.regular.large});background-size: cover; background-repeat: no-repeat;">
                        <div class="boxmark">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z" stroke="white" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </div>
                    <div class="cardes-title">
                        <ul class="cardes-list">
                            <li class="cardes-item">${event.year}</li>
                            <li class="cardes-item"><img class=" img2" src='${event.category == 'Movie' ? './img/Shape 2.png' : './img/tv.png'}'> ${event.category}</li>
                            <li class="cardes-item">${event.rating}</li>
                        </ul>
                        <h4>${event.title}</h4>
                    </div>
                </div>
            `;
            }
        });

        
  input.value=''
    });
   

}

fetch ('http://localhost:3000/product')
.then((res) => res.json())
.then((data) => {
    inputSearch(data);
    NavList(data)

    data.forEach(event => {
      
      if(event.thumbnail.trending) {
        
         slider.innerHTML+= ` 
          <div class="swiper-slide" style="background-image: url(${event.thumbnail.trending.large});background-size: cover; background-repeat: no-repeat; ">
                        <div class="boxmark">
                              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z" stroke="white" stroke-width="1.5"/>
                            </svg>
                        </div>

                        <div class="swipper-slide-title">
                            <ul class="swiper-list">
                                <li class="swiper-item">${event.year}</li>
                                <li class="swiper-item"><img class=" img2" src="${event.category=='Movie' ? './img/Shape 2.png' : './img/tv.png'}" alt=""> ${event.category}</li>
                                <li class="swiper-item">${event.rating}</li>
                            </ul>
                            <h4>${event.title}</h4>
                        </div>
     
                    </div>`

      }
      else {
       
        
     card.innerHTML+= `
     <div class="cardes-card-item">
                    <div class="img" style="background-image: url(${event.thumbnail.regular.large});background-size: cover; background-repeat: no-repeat; ">
                        <div class="boxmark">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z" stroke="white" stroke-width="1.5"/>
                       </svg>
                        </div>
                    </div>
                    <div class="cardes-title">
                        <ul class="cardes-list">
                            <li class="cardes-item"> ${event.year}</li>
                             <li class="cardes-item"> <img class=" img2" src='${event.category=='Movie' ? './img/Shape 2.png' : './img/tv.png'}'> ${event.category}</li>
                            <li class="cardes-item">${event.rating}</li>
                        </ul>
                        <h4>${event.title}</h4>
                    </div>
                </div>
     `
      }

   
      
    });
    const boxmark = document.querySelectorAll('.boxmark');
    boxmark.forEach((e) => {
        e.addEventListener('click',(e) => {
           console.log(e.target);
           
            
          })
    })

    Boxmarks(data)
   
    
})



