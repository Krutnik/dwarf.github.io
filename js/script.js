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
        <h3>${this.name}</h3>
        <div class="card-image">
            <img src="${this.src}" alt="${this.alt}">
            <img src="${this.src2}" alt="${this.alt2}">
        </div>
        <h3>Description:</h3>
        <p>${this.description}</p>
        <h3>Material:</h3>
        <p>${this.material}</p>
        <input class="btn" type="button" value="More" onclick="more()">
        
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
    // }
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
let btnReset = document.querySelector('.input-style')

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
            cartInput.classList.toggle('hidden');
            cart = document.removeChild('input');
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
        
        <h3>${this.names}</h3>
        <div>
            <img src="${this.srcs}" alt="${this.alts}">
            <h3>Description:</h3>
            <p>${this.descriptions}</p>
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
