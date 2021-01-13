class CardCosplay {
    #_name;
    #_src;
    #_alt;
    #_src2;
    #_alt2;
    #_description;
    #_material;
    #_parent;

    constructor(name, src, alt, src2, alt2, description, material, parent) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.src2 = src2;
        this.alt2 = alt2;
        this.description = description;
        this.material = material;
        this.parent = document.querySelector('.cosplay__project');
    }

    get name() {
        return this.#_name;
    }
    set name(nameValue) {
        this.#_name = nameValue;
    }

    get src() {
        return this.#_src;
    }
    set src(srcValue) {
        this.#_src = srcValue;
    }

    get alt() {
        return this.#_alt;
    }
    set alt(altValue) {
        this.#_alt = altValue;
    }

    get src2() {
        return this.#_src2;
    }
    set src2(src2Value) {
        this.#_src2 = src2Value;
    }

    get alt2() {
        return this.#_alt2;
    }
    set alt2(alt2Value) {
        this.#_alt2 = alt2Value;
    }

    get description() {
        return this.#_description;
    }
    set description(descriptionValue) {
        this.#_description = descriptionValue;
    }

    get material() {
        return this.#_material;
    }
    set material(materialValue) {
        this.#_material = materialValue;
    }

    get parent() {
        return this.#_parent;
    }
    set parent(parentValue) {
        this.#_parent = parentValue;
    }

    createCardCosplay() {
        let elem = document.createElement('div');
        elem.classList.add('card');
        elem.innerHTML = `
        
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="card__title">
            <h3>${this.name}</h3>
            <div class="card__title__image">
                <img src="${this.src}" alt="${this.alt}">
                <img src="${this.src2}" alt="${this.alt2}">
            </div>
        </div>
        <div class="card__description">
            <h3>Description:</h3>
            <p>${this.description}</p>
            <h3>Material:</h3>
            <p>${this.material}</p>
            <input class="card__description__btn" type="button" value="More" onclick="more()">
        </div>
        
        `;
        this.parent.append(elem);
    }
}

let cards = [
    {
        name: 'Lostvein',
        src: 'img/lostvein.jpg',
        alt: 'lostvein',
        src2: 'img/lost.jpg',
        alt2: 'lostvein',
        description: '...',
        material: 'Wood'
    },
    {
        name: 'Lostvein',
        src: 'img/lostvein.jpg',
        alt: 'lostvein',
        src2: 'img/lost.jpg',
        alt2: 'lostvein',
        description: '...',
        material: 'Wood'
    },
    // {
    //     name: 'Lostvein',
    //     src: 'img/lostvein.jpg',
    //     alt: 'lostvein',
    //     src2: 'img/lost.jpg',
    //     alt2: 'lostvein',
    //     description: '...',
    //     material: 'Wood'
    // },
    // {
    //     name: 'Lostvein',
    //     src: 'img/lostvein.jpg',
    //     alt: 'lostvein',
    //     src2: 'img/lost.jpg',
    //     alt2: 'lostvein',
    //     description: '...',
    //     material: 'Wood'
    // },
    // {
    //     name: 'Lostvein',
    //     src: 'img/lostvein.jpg',
    //     alt: 'lostvein',
    //     src2: 'img/lost.jpg',
    //     alt2: 'lostvein',
    //     description: '...',
    //     material: 'Wood'
    // },
    {
        name: 'Lostvein',
        src: 'img/lostvein.jpg',
        alt: 'lostvein',
        src2: 'img/lost.jpg',
        alt2: 'lostvein',
        description: '...',
        material: 'Wood'
    }
]

let card;

for (let i = 0; i < cards.length; i++) {
    card = new CardCosplay(
        cards[i]['name'],
        cards[i]['src'],
        cards[i]['alt'],
        cards[i]['src2'],
        cards[i]['alt2'],
        cards[i]['description'],
        cards[i]['material'],
        '.cosplay__project').createCardCosplay();
} 


let cart = document.querySelector('.card');
let btnReset = document.querySelector('.input-style');
let children;

function more() {
    cart.classList.remove('card');
    cart.classList.add('big-card');

    cartInput = document.createElement('input');
    cartInput.classList.add('input-style');
    cartInput.type = 'button';

    cart.appendChild(cartInput);

    if(cart.classList.contains('big-card')) {
        cartInput.onclick = function() {
            cart.classList.add('card');
            cart.classList.remove('big-card');
            children = cart.lastChild;
            cart.removeChild(children);
        }
    }
}

class CardInWorkCosplay {
    #_names;
    #_srcs;
    #_alts;
    #_descriptions;
    #_parents;

    constructor(names, srcs, alts, descriptions, parents) {
        this.names = names;
        this.srcs = srcs;
        this.alts = alts;
        this.descriptions = descriptions;
        this.parents = document.querySelector('.in-work__items');
    }

    get names() {
        return this.#_names;
    }
    set names(namesValue) {
        this.#_names = namesValue;
    }
s
    get srcs() {
        return this.#_srcs;
    }
    set srcs(srcsValue) {
        this.#_srcs = srcsValue;
    }

    get alts() {
        return this.#_alts;
    }
    set alts(altsValue) {
        this.#_alts = altsValue;
    }

    get descriptions() {
        return this.#_descriptions;
    }
    set descriptions(descriptionsValue) {
        this.#_descriptions = descriptionsValue;
    }

    get parents() {
        return this.#_parents;
    }
    set parents(parentsValue) {
        this.#_parents = parentsValue;
    }

    createCardInWorkCosplay() {
        let elems = document.createElement('div');
        elems.classList.add('item');
        elems.innerHTML = `
        
        <h3 class="item__title">${this.names}</h3>
        <div class="item__description">
            <img class="item__description__image" src="${this.srcs}" alt="${this.alts}">
            <h3 class="item__description__title">Description:</h3>
            <p class="item__description__text">${this.descriptions}</p>
        </div>
        
        `;
        this.parents.append(elems);
    }
}

let items = [
    {
        name: 'Lostvein',
        src: 'img/lostvein.jpg',
        alt: 'lostvein',
        description: '...'
    },
    {
        name: 'Lostvein',
        src: 'img/lostvein.jpg',
        alt: 'lostvein',
        description: '...'
    },
    {
        name: 'Lostvein',
        src: 'img/lostvein.jpg',
        alt: 'lostvein',
        description: '...'
    },
    {
        name: 'Lostvein',
        src: 'img/lostvein.jpg',
        alt: 'lostvein',
        description: '...'
    }
]

let item;

for (let i = 0; i < items.length; i++) {
    item = new CardInWorkCosplay(
        items[i]['name'],
        items[i]['src'],
        items[i]['alt'],
        items[i]['description'],
        '.in-work__items').createCardInWorkCosplay();
} 


let btnWood = document.getElementById('wood');
let millingCutter = document.querySelector('.assistant__power-tool__milling-cutter');
let enraver = document.querySelector('.assistant__power-tool__enraver');
let lshm = document.querySelector('.assistant__power-tool__lshm');
let eshm = document.querySelector('.assistant__power-tool__eshm');

btnWood.onclick = function() {
    if (millingCutter.classList.contains('new-position') == false && 
    enraver.classList.contains('new-position-two') == false && 
    lshm.classList.contains('new-position-three') == false && 
    eshm.classList.contains('new-position-four') == false) {
            setTimeout(function() {
                millingCutter.classList.add('new-position');
                enraver.classList.add('new-position-two');
                lshm.classList.add('new-position-three');
                eshm.classList.add('new-position-four');
            }, 100);
    }
    else {
        setTimeout(function () {
            millingCutter.classList.remove('new-position');
            enraver.classList.remove('new-position-two');
            lshm.classList.remove('new-position-three');
            eshm.classList.remove('new-position-four');
        }, 100);
    }
}

let millingCutterImage = document.querySelector('.assistant__power-tool__milling-cutter__image');
let millingCutterTitle = document.querySelector('.assistant__power-tool__milling-cutter__title'); 
let millingCutterText = document.querySelector('.assistant__power-tool__milling-cutter__text');

millingCutter.onclick = function() {
    if(millingCutter.classList.contains('test') == false) {
        millingCutter.classList.add('test');
        millingCutterImage.classList.add('test-2');
        millingCutterTitle.classList.add('test-3');
        millingCutterText.classList.add('test-4');
    }
    else {
        millingCutter.classList.remove('test');
        millingCutterImage.classList.remove('test-2');
        millingCutterTitle.classList.remove('test-3');
        millingCutterText.classList.remove('test-4');
    }
}

let enraverImage = document.querySelector('.assistant__power-tool__enraver__image');
let enraverTitle = document.querySelector('.assistant__power-tool__enraver__title');
let enraverText = document.querySelector('.assistant__power-tool__enraver__text');

enraver.onclick = function () {
    if (enraver.classList.contains('test') == false) {
        enraver.classList.add('test');
        enraverImage.classList.add('test-2');
        enraverTitle.classList.add('test-3');
        enraverText.classList.add('test-4');
    }
    else {
        enraver.classList.remove('test');
        enraverImage.classList.remove('test-2');
        enraverTitle.classList.remove('test-3');
        enraverText.classList.remove('test-4');
    }
}