class CardCosplay {
    #_name;
    #_src;
    #_alt;
    #_src2;
    #_alt2;
    #_description;
    #_material;
    #_onclick;
    #_parent;

    constructor(name, src, alt, src2, alt2, description, material, onclick, parent) {
        this.name = name;
        this.src = src;
        this.alt = alt;
        this.src2 = src2;
        this.alt2 = alt2;
        this.description = description;
        this.material = material;
        this.onclick = onclick;
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

    get onclick() {
        return this.#_onclick;
    }
    set onclick(onclickValue) {
        this.#_onclick = onclickValue;
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
        </div>
        <input class="card__btn" type="button" value="more" onclick="${this.onclick}">
        
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
        description: 'Лоствейн - небольшой одноручный меч, изогнутый к острию и имеющий на своей гарде эмблему дракона. Серебристое лезвие меча можно отличить от тёмно- зелёного основания при помощи линии закалки, сквозь которую сделано пять отверстий одинакового диаметра.На боку основания есть вырезы в виде полумесяца.',
        material: 'Меч выполнен полностью из дерева, красил эмалью, рисунок дракона карандашом выводил, рукоят взял зеленую ленту 20мм ленту',
        onclick: 'more()'
    },
    {
        name: 'Gilgamesh',
        src: 'img/gilgamesch.jpg',
        alt: 'gilgamesh',
        src2: 'img/gilgamesh-3.png',
        alt2: 'gilgamesh',
        description: 'Истинное имя Арчера — Гильгамеш, великий король, наполовину человек (отец — Лугальбанда, король города Урук), наполовину — бог (мать — богиня Нинсун). Правил городом-государством шумеров Урук, который был столицей древней Месопотамии. Он был на две трети богом и на треть человеком, и никто другой в мире не мог сравниться с ним. Он был деспотом, обладающим высокой божественностью и верившим в свою непобедимость. Он не просто выдуманная легенда, а, как говорят, действительно существовал и правил пять тысяч лет назад. Он был Королём Героев (英雄王, Eiyū Ō?, англ. King of Heroes), который обладал всеми вещами в мире. История о нём записана в старейшей эпической поэме, Эпосе о Гильгамеше, в которой Гильгамеш изображён героем, которому суждено стать королём и совершить великие подвиги, двигаясь навстречу своей судьбе и справляясь с проблемами вместе со своим лучшим другом Энкиду.',
        material: 'Броня и меч из пвх, у меча имеется подсветка, парик заказной, также как и линзы, под броней обычный синий костюм',
        onclick: 'regh()'
    },
    {
        name: 'Grove pugalo',
        src: 'img/grove-pugalo.png',
        alt: 'grove pugalo',
        src2: 'img/pugalo2.jpg',
        alt2: 'grove pugalo',
        description: 'Пугало (англ. Scarecrow) — суперзлодей вселенной DC Comics. В детстве, когда Джонатан Крейн был ещё школьником, над ним издевались все его «знакомые». Однако Крейн обладал развитым умом. В студенческом возрасте он поступил в Готэмский университет на факультет психологии. Вскоре после отличной учёбы в университете Крейн стал профессором Аркхэмской клиники, однако его коллеги обнаружили профессора за опытами, проводимыми над обычными людьми. Его просто-напросто выгнали из Аркхэма. Движимый желанием отомстить за все свои обиды, обладающий навыками химии Крейн изобрёл галлюциогенный газ. Только Крейн начал осуществлять свой план, напав на бывших коллег профессоров, как на его пути встали Бэтмен и Робин. Профессора Крейна несколько раз сажали в тюрьму за преступления связанные с запугиванием людей.',
        material: 'Пвх трубы и шланги, немного бинтов, иглы из спиц для вязания, состав жидкость под секртеом)))',
        onclick: 'more2()'
    },
    {
        name: 'Mjolnir',
        src: 'img/molot.jpg',
        alt: 'мjolnir',
        src2: 'img/moltor.jpg',
        alt2: 'мjolnir',
        description: 'Мьёльнир (англ. Mjolnir) — боевой молот Тора. Тор носит молот Мьёльнир, выкованный из металла уру. Молот является практически неразрушимым, как земной металл адамантий, который покрывает скелет Росомахи, и сочетает в себе множество чар, наложенных на него Одином. Орудие может выдержать температуру солнца, взрывы, достаточные для уничтожения планет, и содержит в себе энергию, которой хватит, чтобы уничтожить целую галактику. Мьёльнир также даёт Тору множество способностей, например, управление фундаментальными силами вселенной, такими как электромагнитный спектр, гравитация и т.д .Но судя по обьяснениям Одина, Мльёнир лишь является инструментом, позволяющим контролировать внутреннюю мощь громовержцев.',
        material: 'Выполнен полностью из дерева, верхушка с надписью сделана на пластике, на рукояти два слоя ткань, мягкая основа и кожзам',
        onclick: 'more3()'
    },
    {
        name: 'Thunder Harley Quinn',
        src: 'img/thunder-hq.png',
        alt: 'thunder Harley Quinn',
        src2: 'img/hq.jpg',
        alt2: 'thunder Harley Quinn',
        description: 'Харли Квинн, ранее известная как доктор Харлин Ф. Квинзель, — бывший психиатр, ныне одна из противников Бэтмена, ставшая преступницей из-за любви к своему пациенту, психопату-убийце Джокеру. Впервые она появилась в сериале "Batman: The Animated Series", в эпизоде "Услуга Джокеру", где сыграла роль помощницы клоуна-принца. Её прозвище очень похоже по звучанию на слово «арлекин».',
        material: 'Основа из дерева, молот полностью оклеен в пленку, добавлены элементы декора',
        onclick: 'more4()'
    },
    {
        name: 'Katana shinobu kocho',
        src: 'img/katana.jpg',
        alt: 'katana shinobu kocho',
        src2: 'img/schinobu-kocho.jpeg',
        alt2: 'katana shinobu kocho',
        description: 'Цветок в форме с 4 лепестками; Лепесток имеет ядро цвета морской волны с оранжевой каймой.',
        material: 'Лезвие из металла, рукоят состовная из дерева и пластика, краска эмаль и лента на рукоятку зеленая 50мм',
        onclick: 'more5()'
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
        cards[i]['onclick'],
        '.cosplay__project').createCardCosplay();
} 


let cart = document.querySelector('.card');
let btnReset = document.querySelectorAll('.input-style');
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
function regh() {
    cart.classList.remove('card');
    cart.classList.add('big-card');

    cartInput = document.createElement('input');
    cartInput.classList.add('input-style');
    cartInput.type = 'button';

    cart.appendChild(cartInput);

    if (cart.classList.contains('big-card')) {
        cartInput.onclick = function () {
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
            <div>
                <h3 class="item__description__title">Description:</h3>
                <p class="item__description__text">${this.descriptions}</p>
            </div>
        </div>
        
        `;
        this.parents.append(elems);
    }
}

let items = [
    {
        name: 'Amon',
        src: 'img/amon.jpg',
        alt: 'amon',
        description: '<p>Амон - из аниме Аватар: Легенда об Корре.</p> <p>Амон, ранее Ноатак - маг воды и маг крови из Северного Племени Воды, владеющий уникальной техникой блокировать магические способности других магов. Он является сыном в прошлом известного преступника Якона и старшим братом бывшего советника Тарлока. В 170 году ПГ, скрывая свою истинную личность и способности к магии, Амон возглавил революцию против магов.</p>'
    },
    {
        name: 'Bolter',
        src: 'img/bolter.jpg',
        alt: 'bolter',
        description: '<p>Болтер (штурмовой пистолет космодесантника) из вселенной <span class="eng-text">Warhammer</span></p><p>Бoлтер — вид ствольного огнестрельного оружия, стреляющего саморазгоняющимися на траектории (в отличии от быстро теряющих скорость стабберных выстрелов) «болтами» — активно-реактивными снарядами, существующими во множестве вариаций и калибров, которые с огромной силой взрываются при попадании в цель, разрывая её на части изнутри.</p>'
    },
    {
        name: 'Sword Estarossa',
        src: 'img/estarossa.jpeg',
        alt: 'sword estarossa',
        description: 'Эстаросса – элитный воин Клана Демонов, подчиняется непосредственно Королю Демонов, член Десяти Заповедей. На самом деле Эстароссы никогда не существовало.'
    },
    {
        name: 'Fan Temari',
        src: 'img/fan.jpeg',
        alt: 'fan temari',
        description: '<p>Гиганский веер Темари из аниме Наруто.</p> <p>Гигантский Складной Веер, которым владеет Темари, – это гигантский японский военный веер, который имеет три фиолетовых круга вдоль своего металлического корпуса, которые она называет "звездами". Сила создаваемых ею порывов ветра определяется количеством показанных звезд (одна из них-самая слабая, три-самые сильные).</p>'
    },
    {
        name: 'Sword Helbram',
        src: 'img/helbram.jpeg',
        alt: 'sword helbram',
        description: '<p>Хельбрам - фей, лучший друг Кинга из аниме Семь Смертных Грехов</p><p>Хельбрам - лучший друг Арлекина. Был убит самим Кингом 700 лет назад. После битвы в Лионесе мог появляться в виде духа перед Кингом, если тот надевал на голову шлем. Также Хельбрам может стать видимым для кого-то, если захочет. Ещё его могут видеть другие Короли Фей, как например, когда его видел Глоксиния, хотя Хельбрам не хотел ему показываться.</p>'
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

let textHidden = document.querySelector('.text-info');

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
            textHidden.classList.add('hidden');
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
            textHidden.classList.remove('hidden');
            millingCutter.classList.remove('new-position');
            enraver.classList.remove('new-position-two');
            lshm.classList.remove('new-position-three');
            eshm.classList.remove('new-position-four');
            screwdriver.classList.remove('new-position-five');
            jigsaw.classList.remove('new-position-six');
            multiTool.classList.remove('new-position-seven');
            circularSaw.classList.remove('new-position-eight');
            millingCutter.classList.remove('test');
            enraver.classList.remove('test');
            lshm.classList.remove('test');
            eshm.classList.remove('test');
            screwdriver.classList.remove('test');
            jigsaw.classList.remove('test');
            multiTool.classList.remove('test');
            circularSaw.classList.remove('test');
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
            textHidden.classList.add('hidden');
            glueGun.classList.add('new-position-two');
            enraver.classList.add('new-position');
            multiTool.classList.add('new-position-four');
            technicalHairDryer.classList.add('new-position-three');
        }, 100);
    }
    else {
        setTimeout(function () {
            textHidden.classList.remove('hidden');
            glueGun.classList.remove('new-position-two');
            enraver.classList.remove('new-position');
            multiTool.classList.remove('new-position-four');
            technicalHairDryer.classList.remove('new-position-three');
            glueGun.classList.remove('test');
            technicalHairDryer.classList.remove('test');
            enraver.classList.remove('test');
            multiTool.classList.remove('test');
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
            textHidden.classList.add('hidden');
            ushm.classList.add('new-position-four');
            tocylinder.classList.add('new-position-two');
            compressor.classList.add('new-position-three');
            enraver.classList.add('new-position-five');
            multiTool.classList.add('new-position');
        }, 100);
    }
    else {
        setTimeout(function () {
            textHidden.classList.remove('hidden');
            ushm.classList.remove('new-position-four');
            tocylinder.classList.remove('new-position-two');
            compressor.classList.remove('new-position-three');
            enraver.classList.remove('new-position-five');
            multiTool.classList.remove('new-position');
            ushm.classList.remove('test');
            tocylinder.classList.remove('test');
            compressor.classList.remove('test');
            enraver.classList.remove('test');
            multiTool.classList.remove('test');
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