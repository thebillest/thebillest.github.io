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
    .addActor('date', { speed: 0.05, accuracy: 1.0 })
    .addActor('kia', { speed: 0.6, accuracy: 1.0 })
    .addActor('william', { speed: 0.6, accuracy: 1.0 })

    // SCENE PROGRESSION
    .addScene('story:snippets from year two.')
    .addScene('date:   ')
    .addScene('date:February 25, 2019')
    .addScene('william:Actually get prepped.', 600)

    // Scene 1
    .addScene('william:something incoming shortly 🙃', 600)
    .addScene('william:...hopefully >.>', 600)
    .addScene('kia:Omg', 600)
    .addScene('kia:What is happeijg', 600)
    .addScene('kia:Happening', 600)
    .addScene('william:so', 600)
    .addScene('william:I\'ll be outside in 5', 600)
    .addScene('william:jk', 600)
    .addScene('william:http://williamalfano.com/wnk-timeline/index.html', 600)
    .addScene('kia:You were writing something, i started opening it', 600)
    .addScene('kia:Should i wait??', 600)
    .addScene('kia:I just left the page real quick', 600)
    .addScene('william:LOL', 600)
    .addScene('william:omg rip', 600)
    .addScene('kia:Lol halpwhatdoido', 600)
    .addScene('william:the site has a splash screen', 600)
    .addScene('william:I tested it on various platforms', 600)
    .addScene('william:but you never know with edge cases', 600)
    .addScene('kia:I am using opera', 600)
    .addScene('william:oh', 600)
    .addScene('william:LOL', 600)
    .addScene('kia:LOL tis a joke', 600)
    .addScene('william:I\'m done', 600)
    .addScene('kia:Okay now', 600)
    .addScene('kia:let me see what this is all about and enjoy your hard work pls c:', 600)
    .addScene('william:Ps', 600)
    .addScene('william:Opera works', 600)
    .addScene('william:;)', 600)
    .addScene('kia:You jerk', 600)
    .addScene('kia:You absolute jerk', 600)
    .addScene('kia:I can\'t believe you\'d do that to someone you care about', 600)
    .addScene('kia:You made me cry', 600)
    .addScene('william:20000+ messages', 600)
    .addScene('william:multiple hangouts', 600)
    .addScene('william:and even more phone calls later...', 600)
    .addScene('william:there isn\'t a comet in this universe that\'d keep me from you', 600)
    .addScene('kia:<3 you big sweetie', 600)

    // Scene 2
    .addScene('date:March 2, 2019')
    .addScene('kia:Can you send the link again pretty pls?', 600)
    .addScene('william:*sends A Silent Voice link*', 600)
    .addScene('kia:Ok ready!', 600)
    .addScene('kia:Countdown?', 600)
    .addScene('william:one sec', 600)
    .addScene('kia:Okie', 600)
    .addScene('william:ok', 600)
    .addScene('william:3', 600)
    .addScene('william:2', 600)
    .addScene('william:1', 600)
    .addScene('william:go!', 600)
    .addScene('william:swag walk', 600)
    .addScene('kia:I love the ragtag boys vibe already', 600)
    .addScene('william:Haha knew you would', 600)
    .addScene('william:Tag hanging out of his shirt <3', 600)
    .addScene('kia:Hair goals', 600)
    .addScene('kia:I love that pink mauvey color', 600)
    .addScene('william:"Haha knew you would"', 600)
    .addScene('william:the new girl AND she can't hear :(', 600)
    .addScene('kia:It\'s gotta be uber tough', 600)
    .addScene('william:jerk', 600)
    .addScene('william:he\'s dead to me, 600)
    .addScene('kia:What is wrong with him she literally did nothing', 600)
    .addScene('william:o...m...g', 600)
    .addScene('kia:Wait', 600)
    .addScene('kia:This kid', 600)
    .addScene('kia:WHY', 600)
    .addScene('kia:OMG', 600)
    .addScene('william:...', 600)

    // Scene 3
    .addScene('date:April 11, 2019')
    .addScene('kia:Ok soooo my parents are inviting you to our bday dinner :P', 600)
    .addScene('kia:it\'s gonna be chill yaknow!, 600)
    .addScene('kia:Sorry for the last minute notice!', 600)
    .addScene('kia:in the stretch of stores near Foodtown!', 600)
    .addScene('william:Ok!', 600)
    .addScene('kia:Omg foodtown is no more', 600)
    .addScene('kia:It\'s super crowded lol, 600)
    .addScene('william:This is fine...', 600)
    .addScene('kia:LOL', 600)
    .addScene('kia:Thank you again, for coming to my birthday dinner and for all the goodies :)', 600)
    .addScene('kia:i had an amazing birthday and you were the cherry on top', 600)
 
    // Scene 4
    .addScene('date:September 7, 2019')
    .addScene('kia:I am need to do a hair rinse anyway so i resolve also be a moment', 600)
    .addScene('kia:You\'re probably like ???', 600)
    .addScene('kia:Its a rice water thing... i’m trying to get my hair in tip top shape', 600)
    .addScene('william:wait wat? LOL', 600)
    .addScene('william:I ❤️ u so much ', 600)
    .addScene('kia:LOL ❤️❤️❤️', 600)
    .addScene('kia:My voice: ˢᵉᵉ ʸᵃ ˢᵒᵒⁿ', 600)
    .addScene('william:ugh, I miss you and your stinkin’ voice', 600)
    .addScene('kia:Miss you too and see you soon! Omg!', 600)
    .addScene('kia:“See you soon”', 600)
    .addScene('kia:Those are good words', 600)
    .addScene('kia:Together', 600)

    // Scene 5
    .addScene('date:September 21, 2019')
    .addScene('william:That bus ride was ❤️', 600)
    .addScene('william:snuck in a few forehead kisses :p', 600)
    .addScene('kia:❤️❤️❤️', 600)
    .addScene('kia:Thank you for holding onto my head 🥺', 600)
    .addScene('kia:What time is boarding?', 600)
    .addScene('william:We\'re boarding in 15, most likely', 600)
    .addScene('kia:Anyway, today was wonderful ❤️', 600)

    // Scene 6
    .addScene('date:November 4, 2019')
    .addScene('kia:Hello :) how’s it going?', 600)
    .addScene('william:Hey! Apparently, the A/C got fixed, but I’m still skeptical.', 600)
    .addScene('william:Tidied up all your clothes and what not that were laying around', 600)
    .addScene('kia:Omg thank you❤️❤️❤️', 600)
    .addScene('william:Hbu? How’s the new gig ? :p', 600)
    .addScene('kia:It’s good so far :) i just had lunch with my team lead and we got sushi!', 600)
    .addScene('william:Pssst', 600)
    .addScene('william:Rebooking flight right now 👀 ', 600)
    .addScene('kia:Omg!! To when??', 600)
    .addScene('william:Sunday morning 👀 👀', 600)
    .addScene('kia:O m g omg', 600)

    // Scene 7
    .addScene('date:November 22, 2019')
    .addScene('william:so. many. pics.', 600)
    .addScene('kia:Sooo many', 600)
    .addScene('william:lots of you drinkin’ tea 😆', 600)
    .addScene('william:uploading for tonight: fin', 600)
    .addScene('william:I can keep going, just gettin’ tired', 600)
    .addScene('kia:Nope don’t keep going!', 600)
    .addScene('kia:It’s like “to be continued...”', 600)
    .addScene('kia:except i know exactly what happens next lol', 600)
    .addScene('william:*posts pic of a cutie aka you*', 600)
    .addScene('william:you’re so pretty it’s ridiculous', 600)
    .addScene('kia:You’re pretty... handsome yourself :)', 600)

    // Scene 8
    .addScene('date:February 13, 2019')
    .addScene('william:does $10 Poshmark cred get me a real hug?', 600)
    .addScene('kia:It gets you an IOU 😂 a ☔️ check, if you will', 600)
    .addScene('kia:All jokes aside', 600)
    .addScene('kia:i’m happy with the progress we’re making.', 600)
    .addScene('kia:It’s definitely tuff but we’re doin’ it!', 600)
    .addScene('william:I’m happy with us too 😌', 600)

    // Scene 9
    .addScene('date:May 5, 2019')
    .addScene('william:heyo! just giving ya a prebed update.', 600)
    .addScene('william:Picked up some food today in preparation for Ramadan.', 600)
    .addScene('kia:I need prebed updates, bed updates, presleep updates, sleep updates as well', 600)
    .addScene('kia:and well you know the drill', 600)

    // Scene 10
    .addScene('date:May 5, 2019')
    .addScene('william:*pic of chicken mandi*', 600)
    .addScene('kia:That chicken is srsly droolworthy', 600)
    .addScene('william:You\'re srsly droolworthy', 600)
    .addScene('kia:How dare you equate me to a piece of MEAT', 600)
    .addScene('kia:Jk :p', 600)
    .addScene('kia:It\’s very nice that you perceive me as droolworthy 😅', 600)
    .addScene('william:throwin’ “droolworthy” around like this is startin’ to get me hungry... 👀', 600)


    // THE END
    .addScene('kia:<3', 600)
    .addScene('william:<3', 400)
    .addScene('date:fin.')
    .addScene('story:replaying our snippets in 3...', -4, '2...', -4, '1...')

    // RELIVE IT
    .addScene(theater.replay.bind(theater))
}

// Hijab Mode!
$("#us").click(function(){
  var imgSrc = $('#us').attr('src');
  if (imgSrc == 'src/etc/WnK_t.svg') {
    $('#us').attr('src', 'src/etc/WnKwh_t.svg');
  } else {
    $('#us').attr('src', 'src/etc/WnK_t.svg');
  }
});