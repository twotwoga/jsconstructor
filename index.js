const model = [
    { type: 'title', value: 'Hello World from JS' },
    { type: 'title', value: 'here wo go with some text' },
    {
        type: 'colums', value: [
            '11111111111',
            '22222222222',
            '33333333333'
        ]
    }
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if (block.type === 'title') {
        html = 
    } else if (block.type === 'text') {
        html = `
            <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
            </div>
        `
    } else if (block.type === 'colums') {

    }

    $site.insertAdjacentHTML('beforeend', html)




})

function title(block) {
    return `
            <div class="row">
            <div class="col-sm">
            <h1>${block.value}</h1>
            </div>
            </div> 
            `

}