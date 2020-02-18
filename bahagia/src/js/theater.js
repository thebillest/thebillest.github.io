function startTheater() {
  // INITIAL DOC BODY COLOR
  document.body.classList.add('dark')

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
      }
    })

  // OUR SCRIPT
  theater
    // ACTORS
    //      william:  the dope
    //          kia:  the beaut
    //         date:  the time
    .addActor('william', { speed: 0.8, accuracy: 1.0 })
    .addActor('kia', { speed: 0.8, accuracy: 1.0 })
    .addActor('date', { speed: 0.1, accuracy: 1.0 })

    // SCENE PROGRESSION
    .addScene('date:Jan 1, 2019')
    .addScene('william:Kia.', 600)
    .addScene('kia:What?', 400)
    .addScene('william:I am your father.', 400)
    .addScene('kia:Nooo...', -3, '!!! ', 600, 'No! ', 600)
    .addScene('kia:That\'s not true!', 600)
    .addScene('kia:That\'s impossible!', 400)
    .addScene('date:Feb 10, 2019')
    .addScene('william:Search your feelings.', 1600)
    .addScene('william:You know it to be true.', 1000)
    .addScene('kia:Noooooooo! ', 600, 'No!', 400)
    .addScene('william:Kia.', 600)
    .addScene('date:Aug 5, 2019')
    .addScene('william:You can destroy the Emperor.', 1600)
    .addScene('william:He has foreseen this. ', 800)
    .addScene('william:It is your destiny.', 1600)
    .addScene('william:Join me.', 800)
    .addScene('william:Together we can rule the galaxy.', 800)
    .addScene('william:As father and son.', 1600)
    .addScene('william:Come with me. ', 800)
    .addScene('william:It is the only way.', 2000)

    // RELIVE IT
    .addScene(theater.replay.bind(theater))
}