let emojisCode= [
    128512,
    128525,
    129303, 
    128640,
    127881,
    127752,
    127829,
    127928,
    128214,
    127757, 
    9889,
    129412
]

let arr = []
let emojisGallery = document.getElementById('emojisGallery')

for (const code of emojisCode){
    arr.push(`
        <p id="emj">
            <span>${String.fromCodePoint(code)}</span><br>
            <code>${code}</code>
         </p>
    `)
}

emojisGallery.innerHTML = arr.join('')