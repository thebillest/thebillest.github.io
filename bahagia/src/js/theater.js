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
      if (theater.getCurrentActor().name === 'scene') {
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
    //         scene:  the plot
    //        story:  the recap
    .addActor('story', { speed: 0.4, accuracy: 1.0 })
    .addActor('scene', { speed: 0.4, accuracy: 1.0 })
    .addActor('kia', { speed: 1.0, accuracy: 1.0 })
    .addActor('william', { speed: 1.0, accuracy: 1.0 })

    // SCENE PROGRESSION
    .addScene('story:snippets from year two.')
    .addScene('scene:   ')

    // SCENE 1
    .addScene('scene:A Year Ago...')
    .addScene('william:Actually get prepped.', 1200)
    .addScene('william:something incoming shortly 🙃', 1200)
    .addScene('william:...hopefully >.>', 1200)
    .addScene('kia:Omg', 1200)
    .addScene('kia:What is happeijg', 1200)
    .addScene('kia:Happening', 1200)
    .addScene('william:so', 1200)
    .addScene('william:I\'ll be outside in 5', 1200)
    .addScene('william:jk', 1200)
    .addScene('william:http://williamalfano.com/wnk-timeline/index.html', 1200)
    .addScene('kia:You were writing something, i started opening it', 1200)
    .addScene('kia:Should i wait??', 1200)
    .addScene('kia:I just left the page real quick', 1200)
    .addScene('william:LOL', 1200)
    .addScene('william:omg rip', 1200)
    .addScene('kia:Lol halpwhatdoido', 1200)
    .addScene('william:the site has a splash screen', 1200)
    .addScene('william:I tested it on various platforms', 1200)
    .addScene('william:but you never know with edge cases', 1200)
    .addScene('kia:I am using opera', 1200)
    .addScene('william:oh', 1200)
    .addScene('william:LOL', 1200)
    .addScene('kia:LOL tis a joke', 1200)
    .addScene('william:I\'m done', 1200)
    .addScene('kia:Okay now', 1200)
    .addScene('kia:let me see what this is all about and enjoy your hard work pls c:', 1200)
    .addScene('william:Ps', 1200)
    .addScene('william:Opera works', 1200)
    .addScene('william:;)', 1200)
    .addScene('kia:You jerk', 1200)
    .addScene('kia:You absolute jerk', 1200)
    .addScene('kia:I can\'t believe you\'d do that to someone you care about', 1200)
    .addScene('kia:You made me cry', 1200)
    .addScene('william:20000+ messages', 1200)
    .addScene('william:multiple hangouts', 1200)
    .addScene('william:and even more phone calls later...', 1200)
    .addScene('william:there isn\'t a comet in this universe that\'d keep me from you', 1200)
    .addScene('kia:<3 you big sweetie', 1200)

    // SCENE 2
    .addScene('scene:A Not-So-Silent Movie')
    .addScene('kia:Can you send the link again pretty pls?', 1200)
    .addScene('william:*sends A Silent Voice link*', 1200)
    .addScene('kia:Ok ready!', 1200)
    .addScene('kia:Countdown?', 1200)
    .addScene('william:one sec', 1200)
    .addScene('kia:Okie', 1200)
    .addScene('william:ok', 1200)
    .addScene('william:3', 1200)
    .addScene('william:2', 1200)
    .addScene('william:1', 1200)
    .addScene('william:go!', 1200)
    .addScene('william:swag walk', 1200)
    .addScene('kia:I love the ragtag boys vibe already', 1200)
    .addScene('william:Haha knew you would', 1200)
    .addScene('william:Tag hanging out of his shirt <3', 1200)
    .addScene('kia:Hair goals', 1200)
    .addScene('kia:I love that pink mauvey color', 1200)
    .addScene('william:"Haha knew you would"', 1200)
    .addScene('william:the new girl AND she can\'t hear :(', 1200)
    .addScene('kia:It\'s gotta be uber tough', 1200)
    .addScene('william:jerk', 1200)
    .addScene('william:he\'s dead to me', 1200)
    .addScene('kia:What is wrong with him she literally did nothing', 1200)
    .addScene('william:o...m...g', 1200)
    .addScene('kia:Wait', 1200)
    .addScene('kia:This kid', 1200)
    .addScene('kia:WHY', 1200)
    .addScene('kia:OMG', 1200)
    .addScene('william:...', 1200)

    // SCENE 3
    .addScene('scene:The Cherry On Top')
    .addScene('kia:Ok soooo my parents are inviting you to our bday dinner :P', 1200)
    .addScene('kia:it\'s gonna be chill yaknow!', 1200)
    .addScene('kia:Sorry for the last minute notice!', 1200)
    .addScene('kia:in the stretch of stores near Foodtown!', 1200)
    .addScene('william:Ok!', 1200)
    .addScene('kia:Omg foodtown is no more', 1200)
    .addScene('kia:It\'s super crowded lol', 1200)
    .addScene('william:This is fine...', 1200)
    .addScene('kia:LOL', 1200)
    .addScene('kia:Thank you again, for coming to my birthday dinner and for all the goodies :)', 1200)
    .addScene('kia:i had an amazing birthday and you were the cherry on top', 1200)
 
    // SCENE 4
    .addScene('scene:Rice Water Hair?')
    .addScene('kia:I am need to do a hair rinse anyway so i resolve also be a moment', 1200)
    .addScene('kia:You\'re probably like ???', 1200)
    .addScene('kia:Its a rice water thing... i’m trying to get my hair in tip top shape', 1200)
    .addScene('william:wait wat? LOL', 1200)
    .addScene('william:I ❤️ u so much ', 1200)
    .addScene('kia:LOL ❤️❤️❤️', 1200)
    .addScene('kia:My voice: ˢᵉᵉ ʸᵃ ˢᵒᵒⁿ', 1200)
    .addScene('william:ugh, I miss you and your stinkin’ voice', 1200)
    .addScene('kia:Miss you too and see you soon! Omg!', 1200)
    .addScene('kia:“See you soon”', 1200)
    .addScene('kia:Those are good words', 1200)
    .addScene('kia:Together', 1200)

    // SCENE 5
    .addScene('scene:Sleepy Bus Rides')
    .addScene('william:That bus ride was ❤️', 1200)
    .addScene('william:snuck in a few forehead kisses :p', 1200)
    .addScene('kia:❤️❤️❤️', 1200)
    .addScene('kia:Thank you for holding onto my head 🥺', 1200)
    .addScene('kia:What time is boarding?', 1200)
    .addScene('william:We\'re boarding in 15, most likely', 1200)
    .addScene('kia:Anyway, today was wonderful ❤️', 1200)

    // SCENE 6
    .addScene('scene:An Extra Week Can\'t Hurt')
    .addScene('kia:Hello :) how’s it going?', 1200)
    .addScene('william:Hey! Apparently, the A/C got fixed, but I’m still skeptical.', 1200)
    .addScene('william:Tidied up all your clothes and what not that were laying around', 1200)
    .addScene('kia:Omg thank you❤️❤️❤️', 1200)
    .addScene('william:Hbu? How’s the new gig ? :p', 1200)
    .addScene('kia:It’s good so far :) i just had lunch with my team lead and we got sushi!', 1200)
    .addScene('william:Pssst', 1200)
    .addScene('william:Rebooking flight right now 👀 ', 1200)
    .addScene('kia:Omg!! To when??', 1200)
    .addScene('william:Sunday morning 👀 👀', 1200)
    .addScene('kia:O m g omg', 1200)

    // SCENE 7
    .addScene('scene:Cutie In The Pics')
    .addScene('william:so. many. pics.', 1200)
    .addScene('kia:Sooo many', 1200)
    .addScene('william:lots of you drinkin’ tea 😆', 1200)
    .addScene('william:uploading for tonight: fin', 1200)
    .addScene('william:I can keep going, just gettin’ tired', 1200)
    .addScene('kia:Nope don’t keep going!', 1200)
    .addScene('kia:It’s like “to be continued...”', 1200)
    .addScene('kia:except i know exactly what happens next lol', 1200)
    .addScene('william:*posts pic of a cutie aka you*', 1200)
    .addScene('william:you’re so pretty it’s ridiculous', 1200)
    .addScene('kia:You’re pretty... handsome yourself :)', 1200)

    // SCENE 8
    .addScene('scene:The Update Drill')
    .addScene('william:heyo! just giving ya a prebed update.', 1200)
    .addScene('william:Picked up some food today in preparation for Ramadan.', 1200)
    .addScene('kia:I need prebed updates, bed updates, presleep updates, sleep updates as well', 1200)
    .addScene('kia:and well you know the drill', 1200)

    // SCENE 9
    .addScene('scene:The Study Of Droology')
    .addScene('william:*pic of chicken mandi*', 1200)
    .addScene('kia:That chicken is srsly droolworthy', 1200)
    .addScene('william:You\'re srsly droolworthy', 1200)
    .addScene('kia:How dare you equate me to a piece of MEAT', 1200)
    .addScene('kia:Jk :p', 1200)
    .addScene('kia:It\’s very nice that you perceive me as droolworthy 😅', 1200)
    .addScene('william:throwin’ “droolworthy” around like this is startin’ to get me hungry... 👀', 1200)

    // SCENE 10
    .addScene('scene:Hug Per Credit Ratio')
    .addScene('william:does $10 Poshmark cred get me a real hug?', 1200)
    .addScene('kia:It gets you an IOU 😂 a ☔️ check, if you will', 1200)
    .addScene('kia:All jokes aside', 1200)
    .addScene('kia:i’m happy with the progress we’re making.', 1200)
    .addScene('kia:It’s definitely tuff but we’re doin’ it!', 1200)
    .addScene('william:I’m happy with us too 😌', 1200)

    // THE END
    .addScene('scene:fin.')
    .addScene('kia:<3', 1200)
    .addScene('william:<3', 400)
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