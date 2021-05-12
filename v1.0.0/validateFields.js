//Elements
const message = {
    openTag: '<div class="Message">',
    button: '<button class="btn btn-primary" onclick="closeMessage()">OK</button>',
    closeTag: '</div>'
}

const messageBackground = {
    openTag: '<div class="MessageBackground">',
    closeTag: '</div>'
}

//Methods
const validateFields = card => {
    if (card.monsterName && card.atk && card.def) {
        return true
    } else {
        return false
    }
}

const messages = type => {
    let message = ''
    switch (type) {
        case 'blankFields':
            message = blankFields
            break
        default:
            null
            break
    }
    buildMessage(message)
}

const generateMessage = (value, type) => {
    let body = document.getElementsByTagName('body')
    let title = type === 'attention' ? '<h2>Attention</h2><hr />' : ''
    let content = value && value === 'blankFields' ? blankFields : ''
    body[0].innerHTML +=
        messageBackground.openTag +
        message.openTag +
        title +
        content +
        message.button +
        message.closeTag +
        messageBackground.closeTag
}

let closeMessageIndex = 0

const closeMessage = () => {
    let target = document.getElementsByClassName('MessageBackground')
    for (let index = closeMessageIndex; index < target.length; index++) {
        target[index].style = 'animation: FadeOut 0.3s linear 0s !important;'
        setTimeout(() => {
            target[index].style = 'display: none !important;'
        }, 300);
        closeMessageIndex ++;
    }
}