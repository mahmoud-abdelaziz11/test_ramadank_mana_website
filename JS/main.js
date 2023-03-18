let azkar = [];
let azkar_category = [];
choseen_azkar = [];
let unique = [];
let outer = document.querySelectorAll(".outer");

// let zekr_name = document.querySelectorAll(".zekr-name")
// let content = document.querySelectorAll(".contenet")
Object.defineProperties(Array.prototype, {
count: {
    value: function (value) {
        return this.filter((x) => x == value).length;
    },
},
});

async function getData() {
await fetch("../azkar.json") // first step
    .then((response) => response.json()) // second step
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            azkar.push(data[i].category);
            azkar_category.push(data[i]);
        }
        for (let i = 0; i < azkar.length; i++) {
            if (azkar.count(azkar[i]) >= 5) {
                choseen_azkar.push(azkar[i]);
            }
        }
        unique = [...new Set(choseen_azkar)];
        console.log(unique);
    })
    .catch((error) => console.error(error));
}

getData();
let cardsOfSaba7 = "";
let cardsOfMass2 = "";
function getCategory() {
setTimeout(function () {
    for (let j = 0; j < azkar_category.length; j++) {
        if (azkar_category[j].category == "أذكار الصباح") {
            cardsOfSaba7 += `
            <div class="inner">
                    <div class="sekr sekr-bg-one">
                        <div class="azkar-text">
                        <b>أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ</b>
                        <br>
                        ${azkar_category[j].zekr}
                    </div>
                    <div class="buttons">
                        <button class="counter-button" data-number="${azkar_category[j].count}">${azkar_category[j].count}</button>
                        <button class="repeat-button">
                        <i class="fa-solid fa-repeat"></i>
                        </button>
                    </div>
                    <b>${azkar_category[j].description}</b>
                </div>
                </div>
            `;
        }else if(azkar_category[j].category == "أذكار المساء"){
            cardsOfMass2 += `
            <div class="inner">
                    <div class="sekr sekr-bg-one">
                        <div class="azkar-text">
                        <b>أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ</b>
                        <br>
                        ${azkar_category[j].zekr}
                    </div>
                    <div class="buttons">
                        <button class="counter-button" data-number="${azkar_category[j].count}">${azkar_category[j].count}</button>
                        <button class="repeat-button">
                        <i class="fa-solid fa-repeat"></i>
                        </button>
                    </div>
                </div>
                </div>
            `;
        }
    }
    
}, 200);
}
getCategory();
let task = document.querySelectorAll(".task")
function setData(){
setTimeout(()=>{
    let nameOftask = document.querySelectorAll(".outer p")
    
    for(let i = 0;i<nameOftask.length;i++){
        if(nameOftask[i].innerText == "أذكار الصباح"){
            task[i].innerHTML += cardsOfSaba7
            console.log()
            
    }else if(nameOftask[i].innerText == "أذكار المساء"){
        task[i].innerHTML += cardsOfMass2
    }
    }
    
},200)
}

setData()

// zekr_name.addEventListener("click",()=>{
//     let card_body = document.querySelectorAll(".card-body")
//     card_body.classList.remove('show')
// })

function setShow(id){
    let inner = document.querySelectorAll(`.task-${id} .inner`);
    let icon = document.querySelector(`.task-${id} .outer i`);
    icon.classList.toggle("icon-rotate")
    for(let j = 0;j<inner.length;j++){
        inner[j].classList.toggle("show");
}


}
setTimeout(()=>{
let counter_button = document.querySelectorAll(".counter-button")
let repeat_button = document.querySelectorAll(".repeat-button")
let count = 0
for(let i = 0;i<counter_button.length;i++){
    counter_button[i].addEventListener("click",function(e){
        count = e.currentTarget.dataset.number
        console.log(count)
        if(e.currentTarget.innerText >0){
            e.currentTarget.innerText -= 1
        }
        
    })
    repeat_button[i].addEventListener("click",function(){
        counter_button[i].innerHTML = count
    })
}
},400)

// let inner = document.querySelectorAll(".inner");
