// INITIAL DOC BODY COLOR
document.body.classList.add('dark')

function startTheater() {
  // CALL THEATERJS
  var theater = theaterJS()

  // CALLBACKS (changes colors, adjusts according to CSS)
  theater
    .on('type:start, erase:start', function () {
      theater.getCurrentActor().$element.classList.add('actor__content--typing')
    })
    .on('type:end, erase:end', function () {
      theater.getCurrentActor().$element.classList.remove('actor__content--typing')
    })
    .on('type:start, erase:start', function () {
      if (theater.getCurrentActor().name === 'date') {
        document.body.classList.replace(document.body.classList.item(0), 'dark')
      } else if (theater.getCurrentActor().name === 'kia') {
        document.body.classList.replace(document.body.classList.item(0), 'herFav')
      } else if (theater.getCurrentActor().name === 'william'){
        document.body.classList.replace(document.body.classList.item(0), 'hisFav')
      } else if (theater.getCurrentActor().name === 'story'){
        document.body.classList.replace(document.body.classList.item(0), 'dark')
      }
    })

  // OUR SCRIPT
  theater
    // ACTORS
    //      william:  the dope
    //          kia:  the beaut
    //         date:  the time
    //        story:  the recap
    .addActor('story', { speed: 0.02, accuracy: 1.0 })
    .addActor('date', { speed: 0.2, accuracy: 1.0 })
    .addActor('kia', { speed: 0.6, accuracy: 1.0 })
    .addActor('william', { speed: 0.6, accuracy: 1.0 })

    // SCENE PROGRESSION
    .addScene('story:snippets from year two.')
    .addScene('date:Jan 1, 2019')
    .addScene('william:Kia.', 600)
    .addScene('kia:What?', 400)

    // THE END
    .addScene('kia:<3', 600)
    .addScene('william:<3', 400)
    .addScene('date:fin.')
    .addScene('story:reliving our second year in 3...', -4, '2...', -4, '1...')

    // RELIVE IT
    .addScene(theater.replay.bind(theater))
}