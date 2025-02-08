const menu = [
  {
    id: 1,
    title: "Batata Frita",
    category: "PORÇÕES",
    price: 25.00,
    img: "./img/batata-bacon.jpg",
    desc: `400g de batata frita crocante, coberta com cheddar cremoso e bacon crocante. Perfeita para compartilhar com os amigos!`,
  },
  {
    id: 2,
    title: "Tilápia com Fritas",
    category: "PORÇÕES",
    price: 55.00,
    img: "./img/tilapia.jpg",
    desc: `400g de Tilápia frita empanada com farinha panko com acompanhamento de 300g batata ou mandioca.`,
  },
  {
    id: 3,
    title: "Costelinha Suína",
    category: "PORÇÕES",
    price: 45.00,
    img: "./img/costelinha.jpg",
    desc: `400g de costelinha suína assada com molho barbecue, acompanhada de 300g de batata ou mandioca.`,
  },
  {
    id: 4,
    title: "Dadinho de Tapioca",
    category: "PORÇÕES",
    price: 20.00,
    img: "./img/dadinho.jpg",
    desc: `300g de dadinhos de tapioca com geleia de pimenta.`,
  },
  {
    id: 5,
    title: "Coração de Frango",
    category: "PORÇÕES",
    price: 20.00,
    img: "./img/coracao.jpg",
    desc: `200g de coraçãozinho de frango grelhado na manteiga.`,
  },
  {
    id: 6,
    title: "Salgadinhos",
    category: "PORÇÕES",
    price: 20.00,
    img: "./img/salgadinho.jpg",
    desc: `200g de salgadinhos variados.(Coxinha, quibe e bolinha de queijo )`,
  },
  {
    id: 7,
    title: "Polenta Frita",
    category: "PORÇÕES",
    price: 20.00,
    img: "./img/polenta.jpg",
    desc: `400g de polenta frita crocante por fora e macia por dentro, uma porção generosa para compartilhar com os amigos ou saborear sozinho.`,
  },
  {
    id: 8,
    title: "Pão de alho",
    category: "PORÇÕES",
    price: 6.00,
    img: "./img/paodealho.jpg",
    desc: `1 unidade. Saboreie nosso pão de alho, feito com ingredientes frescos e caseiros.`,
  },
  {
    id: 9,
    title: "Torresmo de Barriga",
    category: "PORÇÕES",
    price: 45.00,
    img: "./img/torresmo.jpg",
    desc: `400g de torresmo de barriga crocante, com acompanhamento de 300g de batata ou mandioca.`,
  },
  {
    id: 10,
    title: "Feijão Tropeiro",
    category: "PORÇÕES",
    price: 10.00,
    img: "./img/feijao-tropeiro.jpg",
    desc: `Porção de feijão tropeiro 1/2. Servido as terças e quintas.`,
  },
  {
    id: 11,
    title: "Jantinha",
    category: "PORÇÕES",
    price: 25.00,
    img: "./img/jantinha.jpg",
    desc: `Deliciosa jantinha com acompanhamento de farofa, vinagrete, arroz e tropeiro. Servido as terças e quintas.`,
  },
  {
    id: 12,
    title: "Heineken",
    category: "CERVEJAS",
    price: 15.00,
    img: "./beer/heineken.webp",
    desc: `Cerveja Heineken de 600ml. Super gelada!`, 
  },
  {
    id: 13,
    title: "Amstel",
    category: "CERVEJAS",
    price: 11.00,
    img: "./beer/amstel.jpg",
    desc: `Cerveja Amstel de 600ml. Cerveja Super gelada!`, 
  },
  {
    id: 14,
    title: "Original",
    category: "CERVEJAS",
    price: 5.50,
    img: "./beer/original.webp",
    desc: `Cerveja Antarctica Original de 300ml. Super gelada!`, 
  },
  {
    id: 15,
    title: "Antarctica",
    category: "CERVEJAS",
    price: 5.00,
    img: "./beer/antarctica.jpg",
    desc: `Cerveja Antarctica de 300ml. Cerveja Super gelada!`, 
  },
  {
    id: 16,
    title: "Brahma",
    category: "CERVEJAS",
    price: 5.00,
    img: "./beer/brahma.jpg",
    desc: `Cerveja Brahma de 300ml. Cerveja Super gelada!`,
  },
  {
    id: 17,
    title: "Budweiser",
    category: "CERVEJAS",
    price: 8.00,
    img: "./beer/budweiser.jpg",
    desc: `Cerveja Budweiser. (Long Neck). Super gelada!`,
  },
  {
    id: 18,
    title: "Corona",
    category: "CERVEJAS",
    price: 10.00,
    img: "./beer/corona.webp",
    desc: `Cerveja Corona. (Long Neck). Super gelada!`,
  },
  {
    id: 19,
    title: "Heineken",
    category: "CERVEJAS",
    price: 10.00,
    img: "./beer/heinekenlong.webp",
    desc: `Cerveja Heineken. (Long Neck). Super gelada!`,
  },
  {
    id: 20,
    title: "Heineken Zero",
    category: "CERVEJAS",
    price: 9.00,
    img: "./beer/heinekenzero.webp",
    desc: `Cerveja Heineken 0,0% álcool. (Long Neck). Super gelada!`,
  },
  {
    id: 21,
    title: "Skol Beats Lata",
    category: "CERVEJAS",
    price: 10.00,
    img: "./beer/skolbeats.webp",
    desc: `Cerveja Skol Beats Lata. Cerveja Super gelada!`,
  },
  {
    id: 22,
    title: "Ice Drink",
    category: "CERVEJAS",
    price: 8.00,
    img: "./beer/icedrink.jpg",
    desc: `Cerveja Ice Drink 300ml. Cerveja Super gelada!`,
  },
  {
    id: 23,
    title: "Cachaça Seleta",
    category: "DESTILADOS",
    price: 10.00,
    img: "./beer/seleta.png",
    desc: `Valor referente a dose da cachaça Seleta. Cachaça de qualidade!`,
  },
  {
    id: 24,
    title: "Cachaça Salinas",
    category: "DESTILADOS",
    price: 10.00,
    img: "./beer/salinas.jpeg",
    desc: `Valor referente a dose da cachaça Salinas. Cachaça de qualidade!`,
  },
  {
    id: 25,
    title: "Whisky Red Label",
    category: "DESTILADOS",
    price: 18.00,
    img: "./beer/redlabel.jpg",
    desc: `Valor referente a dose do whisky Red Label. Whisky de qualidade!`,
  },
  {
    id: 26,
    title: "Whisky e Energético",
    category: "DESTILADOS",
    price: 18.00,
    img: "./beer/whiskygelo.jpeg",
    desc: `Copão de whisky com energético e gelo. Bebida perfeita para curtir a noite!`,
  },
  {
    id: 27,
    title: "Tequila",
    category: "DESTILADOS",
    price: 10.00,
    img: "./beer/tequila.jpeg",
    desc: `Valor referente a dose de tequila. Tequila de qualidade!`,
  },
  {
    id: 28,
    title: "Campari",
    category: "DESTILADOS",
    price: 14.00,
    img: "./beer/campari.jpeg",
    desc: `Valor referente a dose de campari. Campari de qualidade!`,
  },
  {
    id: 29,
    title: "Vodka",
    category: "DESTILADOS",
    price: 10.00,
    img: "./beer/vodka.webp",
    desc: `Valor referente a dose de vodka. Vodka de qualidade!`,
  },
  {
    id: 30,
    title: "Aperol Spritz",
    category: "DRINKS",
    price: 18.00,
    img: "./beer/aperolspritz.jpg",
    desc: `Drink Aperol Spritz. Bebida refrescante e saborosa!`,
  },
  {
    id: 26,
    title: "Chopp pilsen 500ml",
    category: "CHOPPS",
    price: 10.00,
    img: "./img/chopp.jpg",
    desc: `Delicioso Chopp pilsen de 500ml. Super gelado!`,
  },
  {
    id: 27,
    title: "Chopp pilsen 300ml",
    category: "CHOPPS",
    price: 7.00,
    img: "./beer/choppequeno.jpg",
    desc: `Delicioso Chopp pilsen de 300ml. Super gelado!`,
  },
  {
    id: 28,
    title: "Chopp de Vinho",
    category: "CHOPPS",
    price: 14.00,
    img: "./beer/choppvinho.jpg",
    desc: `Delicioso Chopp de vinho. (Garrafa). Super gelado!`,
  },
  {
    id: 29,
    title: "Torre de Chopp",
    category: "CHOPPS",
    price: 55.00,
    img: "./beer/torre.jpg",
    desc: `Torre de Chopp de 3 litros. Super gelada, ideal para compartilhar com os amigos!`,
  },
  {
    id: 30,
    title: "Jarra de Suco",
    category: "DIVERSOS",
    price: 15.00,
    img: "./img/suco.jpg",
    desc: `750ml de suco de polpa. Vários sabores disponíveis.`,
  },
  
];

const sectionMaster = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")


window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons()
})


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;

  })
  displayMenu = displayMenu.join(" ")
  sectionMaster.innerHTML = displayMenu
}

function displayMenuButtons() {

  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ["TODAS"])
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  })
    .join("");
  container.innerHTML = categoryBtns;
  let filterBtn = document.querySelectorAll(".filter-btn")


  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category)
          return menuItem;
      })
      if (category === "TODAS") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory)
      }
      console.log(menuCategory)
    })

  });
}
