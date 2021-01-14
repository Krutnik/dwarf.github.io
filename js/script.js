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
let screwdriver = document.querySelector('.assistant__power-tool__screwdriver');
let jigsaw = document.querySelector('.assistant__power-tool__jigsaw');
let multiTool = document.querySelector('.assistant__power-tool__multi-tool');
let circularSaw = document.querySelector('.assistant__power-tool__circular-saw');

btnWood.onclick = function() {
    if (millingCutter.classList.contains('new-position') == false && 
        enraver.classList.contains('new-position-two') == false && 
        lshm.classList.contains('new-position-three') == false && 
        eshm.classList.contains('new-position-four') == false &&
        screwdriver.classList.contains('new-position-five') == false &&
        jigsaw.classList.contains('new-position-six') == false &&
        multiTool.classList.contains('new-position-seven') == false &&
        circularSaw.classList.contains('new-position-eight') == false) {

        setTimeout(function() {
            millingCutter.classList.add('new-position');
            enraver.classList.add('new-position-two');
            lshm.classList.add('new-position-three');
            eshm.classList.add('new-position-four');
            screwdriver.classList.add('new-position-five');
            jigsaw.classList.add('new-position-six');
            multiTool.classList.add('new-position-seven');
            circularSaw.classList.add('new-position-eight');
        }, 100);
    }
    else {
        setTimeout(function () {
            millingCutter.classList.remove('new-position');
            enraver.classList.remove('new-position-two');
            lshm.classList.remove('new-position-three');
            eshm.classList.remove('new-position-four');
            screwdriver.classList.remove('new-position-five');
            jigsaw.classList.remove('new-position-six');
            multiTool.classList.remove('new-position-seven');
            circularSaw.classList.remove('new-position-eight');
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

let lshmImage = document.querySelector('.assistant__power-tool__lshm__image');
let lshmTitle = document.querySelector('.assistant__power-tool__lshm__title');
let lshmText = document.querySelector('.assistant__power-tool__lshm__text');

lshm.onclick = function () {
    if (lshm.classList.contains('test') == false) {
        lshm.classList.add('test');
        lshmImage.classList.add('test-2');
        lshmTitle.classList.add('test-3');
        lshmText.classList.add('test-4');
    }
    else {
        lshm.classList.remove('test');
        lshmImage.classList.remove('test-2');
        lshmTitle.classList.remove('test-3');
        lshmText.classList.remove('test-4');
    }
}
let eshmImage = document.querySelector('.assistant__power-tool__eshm__image');
let eshmTitle = document.querySelector('.assistant__power-tool__eshm__title');
let eshmText = document.querySelector('.assistant__power-tool__eshm__text');

eshm.onclick = function () {
    if (eshm.classList.contains('test') == false) {
        eshm.classList.add('test');
        eshmImage.classList.add('test-2');
        eshmTitle.classList.add('test-3');
        eshmText.classList.add('test-4');
    }
    else {
        eshm.classList.remove('test');
        eshmImage.classList.remove('test-2');
        eshmTitle.classList.remove('test-3');
        eshmText.classList.remove('test-4');
    }
}
let screwdriverImage = document.querySelector('.assistant__power-tool__screwdriver__image');
let screwdriverTitle = document.querySelector('.assistant__power-tool__screwdriver__title');
let screwdriverText = document.querySelector('.assistant__power-tool__screwdriver__text');

screwdriver.onclick = function () {
    if (screwdriver.classList.contains('test') == false) {
        screwdriver.classList.add('test');
        screwdriverImage.classList.add('test-2');
        screwdriverTitle.classList.add('test-3');
        screwdriverText.classList.add('test-4');
    }
    else {
        screwdriver.classList.remove('test');
        screwdriverImage.classList.remove('test-2');
        screwdriverTitle.classList.remove('test-3');
        screwdriverText.classList.remove('test-4');
    }
}
let jigsawImage = document.querySelector('.assistant__power-tool__jigsaw__image');
let jigsawTitle = document.querySelector('.assistant__power-tool__jigsaw__title');
let jigsawText = document.querySelector('.assistant__power-tool__jigsaw__text');

jigsaw.onclick = function () {
    if (jigsaw.classList.contains('test') == false) {
        jigsaw.classList.add('test');
        jigsawImage.classList.add('test-2');
        jigsawTitle.classList.add('test-3');
        jigsawText.classList.add('test-4');
    }
    else {
        jigsaw.classList.remove('test');
        jigsawImage.classList.remove('test-2');
        jigsawTitle.classList.remove('test-3');
        jigsawText.classList.remove('test-4');
    }
}
let multiToolImage = document.querySelector('.assistant__power-tool__multi-tool__image');
let multiToolTitle = document.querySelector('.assistant__power-tool__multi-tool__title');
let multiToolText = document.querySelector('.assistant__power-tool__multi-tool__text');

multiTool.onclick = function () {
    if (multiTool.classList.contains('test') == false) {
        multiTool.classList.add('test');
        multiToolImage.classList.add('test-2');
        multiToolTitle.classList.add('test-3');
        multiToolText.classList.add('test-4');
    }
    else {
        multiTool.classList.remove('test');
        multiToolImage.classList.remove('test-2');
        multiToolTitle.classList.remove('test-3');
        multiToolText.classList.remove('test-4');
    }
}
let circularSawImage = document.querySelector('.assistant__power-tool__circular-saw__image');
let circularSawTitle = document.querySelector('.assistant__power-tool__circular-saw__title');
let circularSawText = document.querySelector('.assistant__power-tool__circular-saw__text');

circularSaw.onclick = function () {
    if (circularSaw.classList.contains('test') == false) {
        circularSaw.classList.add('test');
        circularSawImage.classList.add('test-2');
        circularSawTitle.classList.add('test-3');
        circularSawText.classList.add('test-4');
    }
    else {
        circularSaw.classList.remove('test');
        circularSawImage.classList.remove('test-2');
        circularSawTitle.classList.remove('test-3');
        circularSawText.classList.remove('test-4');
    }
}

let btnPlastic = document.getElementById('plastic');
let glueGun = document.querySelector('.assistant__power-tool__glue-gun');
let technicalHairDryer = document.querySelector('.assistant__power-tool__technical-hair-dryer');

btnPlastic.onclick = function () {
    if (glueGun.classList.contains('new-position-two') == false &&
        enraver.classList.contains('new-position') == false &&
        multiTool.classList.contains('new-position-four') == false &&
        technicalHairDryer.classList.contains('new-position-three') == false) {

        setTimeout(function () {
            glueGun.classList.add('new-position-two');
            enraver.classList.add('new-position');
            multiTool.classList.add('new-position-four');
            technicalHairDryer.classList.add('new-position-three');
        }, 100);
    }
    else {
        setTimeout(function () {
            glueGun.classList.remove('new-position-two');
            enraver.classList.remove('new-position');
            multiTool.classList.remove('new-position-four');
            technicalHairDryer.classList.remove('new-position-three');
        }, 100);
    }
};

let glueGunImage = document.querySelector('.assistant__power-tool__glue-gun__image');
let glueGunTitle = document.querySelector('.assistant__power-tool__glue-gun__title');
let glueGunText = document.querySelector('.assistant__power-tool__glue-gun__text');

glueGun.onclick = function () {
    if (glueGun.classList.contains('test') == false) {
        glueGun.classList.add('test');
        glueGunImage.classList.add('test-2');
        glueGunTitle.classList.add('test-3');
        glueGunText.classList.add('test-4');
    }
    else {
        glueGun.classList.remove('test');
        glueGunImage.classList.remove('test-2');
        glueGunTitle.classList.remove('test-3');
        glueGunText.classList.remove('test-4');
    }
}
let technicalHairDryerImage = document.querySelector('.assistant__power-tool__technical-hair-dryer__image');
let technicalHairDryerTitle = document.querySelector('.assistant__power-tool__technical-hair-dryer__title');
let technicalHairDryerText = document.querySelector('.assistant__power-tool__technical-hair-dryer__text');

technicalHairDryer.onclick = function () {
    if (technicalHairDryer.classList.contains('test') == false) {
        technicalHairDryer.classList.add('test');
        technicalHairDryerImage.classList.add('test-2');
        technicalHairDryerTitle.classList.add('test-3');
        technicalHairDryerText.classList.add('test-4');
    }
    else {
        technicalHairDryer.classList.remove('test');
        technicalHairDryerImage.classList.remove('test-2');
        technicalHairDryerTitle.classList.remove('test-3');
        technicalHairDryerText.classList.remove('test-4');
    }
}


let btnMetall = document.getElementById('metall');
let ushm = document.querySelector('.assistant__power-tool__angle-grinder');
let tocylinder = document.querySelector('.assistant__power-tool__tocylinder');
let compressor = document.querySelector('.assistant__power-tool__compressor');


btnMetall.onclick = function () {
    if (ushm.classList.contains('new-position-four') == false &&
        enraver.classList.contains('new-position-five') == false &&
        multiTool.classList.contains('new-position') == false &&
        tocylinder.classList.contains('new-position-two') == false &&
        compressor.classList.contains('new-position-three') == false) {

        setTimeout(function () {
            ushm.classList.add('new-position-four');
            tocylinder.classList.add('new-position-two');
            compressor.classList.add('new-position-three');
            enraver.classList.add('new-position-five');
            multiTool.classList.add('new-position');
        }, 100);
    }
    else {
        setTimeout(function () {
            ushm.classList.remove('new-position-four');
            tocylinder.classList.remove('new-position-two');
            compressor.classList.remove('new-position-three');
            enraver.classList.remove('new-position-five');
            multiTool.classList.remove('new-position');
        }, 100);
    }
}

let ushmImage = document.querySelector('.assistant__power-tool__angle-grinder__image');
let ushmTitle = document.querySelector('.assistant__power-tool__angle-grinder__title');
let ushmText = document.querySelector('.assistant__power-tool__angle-grinder__text');

ushm.onclick = function () {
    if (ushm.classList.contains('test') == false) {
        ushm.classList.add('test');
        ushmImage.classList.add('test-2');
        ushmTitle.classList.add('test-3');
        ushmText.classList.add('test-4');
    }
    else {
        ushm.classList.remove('test');
        ushmImage.classList.remove('test-2');
        ushmTitle.classList.remove('test-3');
        ushmText.classList.remove('test-4');
    }
}
let tocylinderImage = document.querySelector('.assistant__power-tool__tocylinder__image');
let tocylinderTitle = document.querySelector('.assistant__power-tool__tocylinder__title');
let tocylinderText = document.querySelector('.assistant__power-tool__tocylinder__text');

tocylinder.onclick = function () {
    if (tocylinder.classList.contains('test') == false) {
        tocylinder.classList.add('test');
        tocylinderImage.classList.add('test-2');
        tocylinderTitle.classList.add('test-3');
        tocylinderText.classList.add('test-4');
    }
    else {
        tocylinder.classList.remove('test');
        tocylinderImage.classList.remove('test-2');
        tocylinderTitle.classList.remove('test-3');
        tocylinderText.classList.remove('test-4');
    }
}
let compressorImage = document.querySelector('.assistant__power-tool__compressor__image');
let compressorTitle = document.querySelector('.assistant__power-tool__compressor__title');
let compressorText = document.querySelector('.assistant__power-tool__compressor__text');

compressor.onclick = function () {
    if (compressor.classList.contains('test') == false) {
        compressor.classList.add('test');
        compressorImage.classList.add('test-2');
        compressorTitle.classList.add('test-3');
        compressorText.classList.add('test-4');
    }
    else {
        compressor.classList.remove('test');
        compressorImage.classList.remove('test-2');
        compressorTitle.classList.remove('test-3');
        compressorText.classList.remove('test-4');
    }
}