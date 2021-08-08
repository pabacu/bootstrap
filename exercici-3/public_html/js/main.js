 /* eslint-disable */

 window.addEventListener('message', (message) => {
    if (message.data.css) {
      document.getElementById('styles').innerHTML = message.data.css
      updated = true
    }
    if (message.data.fonts && message.data.fonts.length > 0) {
      try {
        WebFont.load({
          google: {
            families: message.data.fonts,
          },
        })
      } catch (err) {
        console.log('There was an error with loading fonts: ' + err)
      }
    }
  }, false)

//   $('a').on('click', (event) => {
//     event.preventDefault()
//   })

  window.onload = () => {
    window.parent.postMessage({
      type: 'LOADED',
    }, '*')
  }

  /* eslint-enable */