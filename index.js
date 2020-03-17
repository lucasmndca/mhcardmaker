window.onload = () => {
    preloadPages()
}
//Elements

const header = {
    tagOpen: '<div class="row">',
    tagClose: '<hr/></div>',
    iconOpen: '<h2><span class="glyphicon glyphicon-',
    iconClose: '"></span>&nbsp;',
    icon: '',
    title: '</h2>'
}

const form = {
    rowOpen: '<div class="row">',
    colOpen: `<div class="col-md-`,
    divClose: '</div>',
    inputOpen: '<input class="form-control" ',
    tagClose: '>',
    selectOpen: '<select>',
    optionOpen: '<option>',
    optionClose: '</option>',
    selectClose: '</select>'
}

const button = {
    rowOpen: '<div class="row">',
    divClose: '</div>',
    buttonOpen: '<button class="btn btn-',
    iconOpen: '<span class="glyphicon glyphicon-',
    iconClose: '"/>',
    closeButton: '</button>'
}

//Methods
const preloadPages = () => {
    let url = window.location.href
    url.includes('#library') ? loadLibrary() : loadHomePage()
}

const setActiveLink = page => {
    const links = document.getElementsByTagName('li')
    if (page === 'home') {
        links[0].className = 'active'
        links[1].className = ''
    } else {
        links[0].className = ''
        links[1].className = 'active'
    }
}

const loadHomePage = () => {
    const main = document.getElementById('main')
    const mainLib = document.getElementById('mainLib')
    mainLib.innerHTML = ''
    main.innerHTML = 
    '<div class="container" style="margin-top:30px">' +
        getHeader('Card Maker', 'duplicate') +
        getInput('text', 'Monster Name', '', '12', true, true) +
        getInput('text', 'Card Description', '', '4', true) +
        getInput('text', 'Type (e.g: Flying Wyvern)', '', '4') +
        getInput('number', 'Level (0-10)', 10, '4', false, true, 10) +
        getInput('number', 'Attack Points', '', '4', true) +
        getInput('number', 'Defense Points', '', '4') +
        getInput('text', 'Picture URL', '', '4', false, true) +
        '<div class="col-md-3">' +
        getButton('primary', 'ok', true, false, 'buildCard()') +
        getButton('danger', 'remove', false, true) +
        '</div>' +
    '</div>'
    setActiveLink('home')
}

const loadLibrary = () => {
    const main = document.getElementById('main')
    const mainLib = document.getElementById('mainLib')
    let result = document.getElementById('result')
    main.innerHTML = ''
    result.innerHTML = ''
    mainLib.innerHTML = 
        '<div class="container" style="margin-top:30px">' +
            getHeader('Library', 'book')
            '<div class="row">' +
                '<div class="col-md-12">EAE</div>'
            '</div>'
        '</div>'
        setActiveLink('lib')
}

const getHeader = (title, icon) => {
    let pageHeader = {...header}
    pageHeader.title = title
    pageHeader.icon = icon
    return (pageHeader.tagOpen + 
        pageHeader.iconOpen + 
        pageHeader.icon +
        pageHeader.iconClose +
        pageHeader.title + 
        pageHeader.tagClose)
}

const getInput = (type, placeholder, max, colSize, openRow, closeRow) => {
    let pageForm = {...form}
    let newRow = null
    let newCloseRow = null
    let min = ''
    type ? type = `type="${type}"` : null 
    placeholder ? placeholder = `placeholder="${placeholder}"` : null
    colSize ? colSize = `${colSize}"` : colSize = '12"'
    openRow ? newRow = pageForm.rowOpen : newRow = ''
    closeRow ? newCloseRow = pageForm.divClose : newCloseRow = ''
    max ? max = `max=${max}` : null

    return(newRow +
        pageForm.colOpen +
        colSize +
        pageForm.tagClose +
        pageForm.inputOpen +
        type +
        placeholder +
        max +
        min +
        pageForm.tagClose +
        pageForm.divClose +
        newCloseRow
        )
}

const getButton = (buttonType, icon, isRowOpen, isRowClose, event) => {
    let row = {...form}
    let pageButton = {...button}
    let newRow = null
    let newCloseRow = null
    isRowOpen ? newRow = row.rowOpen : newRow = ''
    isRowClose ? newCloseRow = row.divClose : newCloseRow = ''
    event ? event = `onclick=${event}` : null
    buttonType = buttonType + '" ' || 'primary"'

    return(
        newRow +
        pageButton.buttonOpen +
        buttonType +
        event +
        '>' +
        pageButton.iconOpen +
        icon +
        pageButton.iconClose +
        pageButton.closeButton +
        newCloseRow
    )
}