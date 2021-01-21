const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

// automatically focus on the textarea
textArea.focus()

textArea.addEventListener('keyup', (e) => {
    // get value of the event object
    createTags(e.target.value)

    // when the Enter is pressed remove tags from textarea
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''}, 10)
        
        randomSelect()
    }
})

function createTags(input) {
    // remove white spaces
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    // create span elements in #tags
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 10
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            removeHighlight(randomTag)
        }, 200)
    }, 200)

    setTimeout(() => {
        // stop interval
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 200)
    }, times*200)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function removeHighlight(tag) {
    tag.classList.remove('highlight')
}