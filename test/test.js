
 // createCardCosplay() {
    //     let elem = document.createElement('div');
    //     elem.classList.add('card');
    //     elem.innerHTML = `

    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //     <div class="card__title">
    //         <h3>${this.name}</h3>
    //         <div class="card__title__image">
    //             <img src="${this.src}" alt="${this.alt}">
    //             <img src="${this.src2}" alt="${this.alt2}">
    //         </div>
    //     </div>
    //     <div class="card__description">
    //         <h3>Description:</h3>
    //         <p>${this.description}</p>
    //         <h3>Material:</h3>
    //         <p>${this.material}</p>
    //     </div>
    //     <input class="card__btn" type="button" value="more" onclick="${this.onclick}">

    //     `;
    //     this.parent.append(elem);
    // }


// let cart = document.querySelector('.card');
// let btnReset = document.querySelectorAll('.input-style');
// let children;

// function more() {
//     cart.classList.remove('card');
//     cart.classList.add('big-card');

//     cartInput = document.createElement('input');
//     cartInput.classList.add('input-style');
//     cartInput.type = 'button';

//     cart.appendChild(cartInput);

//     if(cart.classList.contains('big-card')) {
//         cartInput.onclick = function() {
//             cart.classList.add('card');
//             cart.classList.remove('big-card');
//             children = cart.lastChild;
//             cart.removeChild(children);
//         }
//     }
// }

// function more() {
//     for(let i = 0; i < cart.length; i++) {
//         cart.classList.remove('card');
//         cart.classList.add('big-card');

//         cartInput = document.createElement('input');
//         cartInput.classList.add('input-style');
//         cartInput.type = 'button';

//         cart.appendChild(cartInput);

//         if (cart.classList.contains('big-card')) {
//             cartInput.onclick = function () {
//                 cart.classList.add('card');
//                 cart.classList.remove('big-card');
//                 children = cart.lastChild;
//                 cart.removeChild(children);
//             }
//         }
//     }
// }

// let btnNew = document.getElementById('regh');

// btnNew.onclick = function() {
//     cart.classList.remove('card');
//     cart.classList.add('big-card');

//     cartInput = document.createElement('input');
//     cartInput.classList.add('input-style');
//     cartInput.type = 'button';

//     cart.appendChild(cartInput);

//     if (cart.classList.contains('big-card')) {
//         cartInput.onclick = function () {
//             cart.classList.add('card');
//             cart.classList.remove('big-card');
//             children = cart.lastChild;
//             cart.removeChild(children);
//         }
//     }
// }

let test = document.querySelectorAll('.card__btn');

function onclick() {
    for (let i = 0; i < test.length; i++) {
        console.log(test);

        if (test[1].onclick) {
            console.log(`hi`);
        }
    }

    return test;
}