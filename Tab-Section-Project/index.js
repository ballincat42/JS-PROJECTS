const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const cat = document.querySelector('h1');
const img = document.querySelector('img');
const text = document.querySelector('p');

function sect1(){
    btn1.classList.add('btn-live');
    btn1.classList.remove('btn');

    btn2.classList.remove('btn-live');
    btn2.classList.add('btn');

    btn3.classList.remove('btn-live');
    btn3.classList.add('btn');

    img.src = "/Tab-Section-Project/beluga.png";
    cat.textContent = 'Beluga';
    text.textContent = 'Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos recusandae id quod modi accusantium tempore praesentium quia maiores et odit. Totam dolorum ipsam, veniam doloremque debitis impedit reprehenderit consectetur sit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores nam totam ipsum id, aliquid iusto officia delectus voluptatibus earum dicta provident eius suscipit ea harum beatae quam natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, id quod ad consequatur suscipit reiciendis et est fuga neque officiis? Ipsum vero saepe ut cumque quam doloremque alias minus laboriosam. ipsum dolor sit amet consectetur adipisicing elit. Nam, eveniet perferendis magni magnam necessitatibus consequatur consectetur officiis dolore vitae exercitationem! Reprehenderit aspernatur pariatur quidem, quibusdam repudiandae dolore tenetur expedita nam.';
}
function sect2(){
    btn2.classList.add('btn-live');
    btn2.classList.remove('btn');

    btn1.classList.remove('btn-live');
    btn1.classList.add('btn');

    btn3.classList.remove('btn-live');
    btn3.classList.add('btn');

    img.src = "/Tab-Section-Project/axle.png";
    cat.textContent = 'Axle';
    text.textContent = ' amet consectetur adipisicing elit. Dignissimos recusandae id quod modi accusantium tempore praesentium quia maiores et odit. Totam dolorum ipsam, veniam doloremque debitis impedit reprehenderit consectetur sit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores nam totam ipsum id, aliquid iusto officia delectus voluptatibus earum dicta provident eius suscipit ea harum beatae quam natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, id quod ad consequatur suscipit reiciendis et est fuga neque officiis? Ipsum vero saepe ut cumque quam doloremque alias minus laboriosam. ipsum dolor sit amet consectetur adipisicing elit. Nam, eveniet perferendis magni magnam necessitatibus consequatur consectetur officiis dolore vitae exercitationem! Reprehenderit aspernatur pariatur quidem, quibusdam repudiandae ';
}
function sect3(){
    btn3.classList.add('btn-live');
    btn3.classList.remove('btn');

    btn1.classList.remove('btn-live');
    btn1.classList.add('btn');

    btn2.classList.remove('btn-live');
    btn2.classList.add('btn');

    img.src = "/Tab-Section-Project/blawg.jpg";
    cat.textContent = 'Blawg';
    text.textContent = 'Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos recusandae id quod modi accusantium tempore praesentium quia maiores et odit. Totam dolorum ipsam, veniam doloremque debitis impedit reprehenderit consectetur sit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores nam totam ipsum id, aliquid iusto officia delectus voluptatibus earum dicta provident eius suscipit ea harum beatae quam natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, id quod ad consequatur suscipit reiciendis et est fuga neque officiis? Ipsum vero saepe ut cumque quam doloremque alias minus laboriosam. ipsum dolor sit amet consectetur adipisicing elit. Nam, eveniet perferendis magni magnam necessitatibus consequatur consectetur aspernatur pariatur quidem, quibusdam repudiandae officiis dolore vitae exercitationem! Reprehenderit aspernatur pariatur quidem, quibusdam repudiandae ';
}