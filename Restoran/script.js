// script.js
const menuItems = [
    { name: "Mercimek Çorbası", category: "başlangıçlar", description: "Lezzetli mercimek çorbası.", image: "images/mercimek-corbasi.jpg" },
    { name: "Izgara Tavuk", category: "ana yemekler", description: "Izgara tavuk göğsü, pilav ve salata ile servis edilir.", image: "images/izgara-tavuk.jpg" },
    { name: "Baklava", category: "tatlılar", description: "Şerbetli baklava tatlısı.", image: "images/baklava.jpg" },
    { name: "Kola", category: "içecekler", description: "Serinletici kola.", image: "images/kola.jpg" },
    { name: "Çoban Salata", category: "başlangıçlar", description: "Taze sebzelerle yapılan çoban salata.", image: "images/coban-salata.jpg" },
    { name: "Kuzu Tandır", category: "ana yemekler", description: "Yumuşak kuzu tandır.", image: "images/kuzu-tandir.jpg" },
    { name: "Profiterol", category: "tatlılar", description: "Çikolata soslu profiterol.", image: "images/profiterol.jpg" },
    { name: "Ayran", category: "içecekler", description: "Soğuk ayran.", image: "images/ayran.jpg" },
    { name: "Lahmacun", category: "ana yemekler", description: "Kıymalı lahmacun.", image: "images/lahmacun.jpg" },
    { name: "Sütlaç", category: "tatlılar", description: "Fırın sütlaç.", image: "images/sutlac.jpg" },
    { name: "Karpuz", category: "tatlılar", description: "Taze dilimlenmiş karpuz.", image: "images/karpuz.jpg" },
    { name: "Çay", category: "içecekler", description: "Sıcak çay.", image: "images/cay.jpg" },
    { name: "Meze Tabağı", category: "başlangıçlar", description: "Çeşitli mezelerle dolu tabak.", image: "images/meze-tabagi.jpg" },
	{ name: "İçecek", category: "içecekler", description: "Açıklama.", image: "images/ayran.jpg" },
    { name: "Lahmacun", category: "ana yemekler", description: "Kıymalı lahmacun.", image: "images/lahmacun.jpg" },
    { name: "Sütlaç", category: "tatlılar", description: "Fırın sütlaç.", image: "images/sutlac.jpg" },
    { name: "Karpuz", category: "tatlılar", description: "Taze dilimlenmiş karpuz.", image: "images/karpuz.jpg" },
    { name: "İçecek", category: "içecekler", description: "Açıklama.", image: "images/cay.jpg" },
    { name: "Meze Tabağı", category: "başlangıçlar", description: "Çeşitli mezelerle dolu tabak.", image: "images/meze-tabagi.jpg" },
    { name: "Meze Tabağı", category: "başlangıçlar", description: "Çeşitli mezelerle dolu tabak.", image: "images/meze-tabagi.jpg" }
	
	
	
];


function displayMenu(items) {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

function filterMenu(category) {
    if (category === 'hepsi') {
        displayMenu(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenu(filteredItems);
    }
}
// script.js
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const reservationData = {};
    formData.forEach((value, key) => {
        reservationData[key] = value;
    });

    // Burada rezervasyon verilerini işleme kodu eklenecek

    console.log('Rezervasyon Bilgileri:', reservationData);
    // Rezervasyon işlemi tamamlandıktan sonra bir mesaj gösterilebilir veya başka bir işlem yapılabilir
});

// Sayfa yüklendiğinde tüm menüyü göster
window.onload = () => displayMenu(menuItems);