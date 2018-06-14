const juice = require('juice')
const fs = require('fs')

// juice(html, options)

juice.juiceFile('dist/index.html', {
    applyAttributesTableElements: false,
    applyHeightAttributes: false,
    applyWidthAttributes: false,
    applyStyleTags: true,
    extraCss: '',
    inlinePseudoElements: false,
    preserveFontFaces: true,
    preserveImportant: true,
    preserveMediaQueries: true,
    removeStyleTags: true,
    webResources: {},
    xmlMode: false,
    widthElements: [],
    heightElements: [],
    tableElements: [],
    nonVisualElements: [],
    excludedProperties: [],
}, function(err, html) {
    
    if (err) return console.log(err)

    fs.writeFile('dist/index.html', '<!-- Template Name: Ghost Follow Up -->' + html, function(err) {
        if (err) return console.log(err)
        console.log('Juice: style inlining completed.')
    })

})
