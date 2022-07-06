const baslik = document.querySelector("h1");
const button = document.getElementById("button");
const birinciZar = document.getElementById("birinci");
const ikinciZar = document.getElementById("ikinci");

let birinciOyuncuAdi = "Player 0NE";
let ikinciOyuncuAdi = "Player TW0";

const birinciOyuncu = document.querySelector(".birinci-oyuncu");
const ikinciOyuncu = document.querySelector(".ikinci-oyuncu");
const imgBirinciAdi = document.getElementById("img-birinci-adi");
const imgIkinciAdi = document.getElementById("img-ikinci-adi");
const adKaydetButton = document.querySelector(".ad-kaydet");
const adKaydetButton2 = document.querySelector(".ikinci-oyuncu button");

window.onload = function(event) {
    Toastify({
        text: "Hadi Oynayalım",
        className: "info",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #f5b2cb, #b154cc, #212121)",
        },
    }).showToast();
};

function isimKayit() {
    Toastify({
        text: "İsminiz kaydedildi.",
        className: "info",
        style: {
            background: "linear-gradient(to right, #f5b2cb, #b154cc)",
        },
    }).showToast();
}

function bosİsim() {
    Toastify({
        text: "İsim yazmadın ki!",
        className: "error",
        style: {
            background: "linear-gradient(to right, #f5b2cb, #b154cc)",
        },
    }).showToast();
}

adKaydetButton.addEventListener("click", () => {
    birinciOyuncuAdi = document.getElementById("birinci-oyuncu-adi").value;
    if (birinciOyuncu === "") {
        bosİsim();
    } else {
        imgBirinciAdi.innerText = birinciOyuncuAdi;
        birinciOyuncu.remove();
        isimKayit();
    }
});

adKaydetButton2.addEventListener("click", () => {
    ikinciOyuncuAdi = document.getElementById("ikinci-oyuncu-adi").value;
    if (ikinciOyuncuAdi === "") {
        bosİsim();
    } else {
        imgIkinciAdi.innerText = ikinciOyuncuAdi;
        ikinciOyuncu.remove();
        isimKayit();
    }
});
button.addEventListener("click", zarCevir);

function zarCevir() {
    let ilkCeviri = Math.floor(Math.random() * 6 + 1);
    let ikinciCeviri = Math.floor(Math.random() * 6 + 1);

    while (ilkCeviri === ikinciCeviri) {
        ikinciCeviri = Math.floor(Math.random() * 6 + 1);
    }
    if (ilkCeviri > ikinciCeviri) {
        baslik.innerText = `${birinciOyuncuAdi} kesinlikle kazandı.`;
    } else {
        baslik.innerText = `${ikinciOyuncuAdi} sana acımadı ${birinciOyuncuAdi}`;
    }
    birinciZar.src = `img/dice${ilkCeviri}.png`;
    ikinciZar.src = `img/dice${ikinciCeviri}.png`;
}