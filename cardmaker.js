//Elements
const container = {
    openTag: '<div class="cardContainer">',
    divClose: '</div>',
    rowOpen: '<div class="row">',
    colOpen: '<div class="col-md-6">'
}

//Methods
const buildCard = () => {
    let card = getData()
    if (validateFields(card)) {
        buildContainer(card)
    }
    else {
        generateMessage('blankFields', 'attention')
    }
}

const buildContainer = card => {
    let target = document.getElementById('result')
    target.innerHTML =
        container.openTag +
        container.rowOpen +
        container.colOpen +

        buildInnerCard(card) +

        container.divClose +
        container.divClose +
        container.divClose
}

const buildInnerCard = card => {

    return (
        '<div class="Card">' +
        '<div class="CardTitle">' +
        card.monsterName +
        getType(card.type) +
        '</div>' +
        '<div class="CardLevel">' +
        getStars(card.level) +
        '</div>' +
        '<div class="StarContainer">' +
        getPicture(card.url) +
        '</div>' +
        '<div class="StarContainer">' +
        getDesc(card.description) +
        '</div>' +
        '<div class="StarContainer">' +
        getAtkAndDef(card.atk, card.def) +
        '</div>' +
        '</div>'
    )
}

const getData = () => {
    let inputFields = document.getElementsByTagName('input')
    let card = {
        monsterName: inputFields[0].value,
        description: inputFields[1].value,
        type: inputFields[2].value,
        level: inputFields[3].value,
        atk: inputFields[4].value,
        def: inputFields[5].value,
        url: inputFields[6].value
    }
    return card
}

const getStars = amount => {
    let stars = ''
    for (i = 0; i < amount; i++) {
        stars += '<div class="Star"><span class="glyphicon glyphicon-star" style="color: orange" /></div>'
    }
    return `<div class="StarContainer">${stars}</div>`
}

const getPicture = url => {
    return `<img src="${url}" class="CardPicture" />`
}

const getType = type => `<span>${type}</span>`

const getDesc = desc => `<div class="CardDesc">${desc}</div>`

const getAtkAndDef = (atk, def) => `<div class="Power">Attack: ${atk}</div><div class="Power">Defense: ${def}</div>`