puts "Erasing old data"

Userchoice.destroy_all
Userstory.destroy_all
Choice.destroy_all
User.destroy_all
Story.destroy_all
Event.destroy_all

puts "Creating Users"

u1 = User.create(
    username:"K", 
    password:"test", 
    name:"Karter", 
    image_url:""
)

puts "Creating Stories"

s1 = Story.create(
    name:"Home Sweet Home", 
    description:
    "You are home alone in your home in the middle of nowhere, when you hear a scraping at the door. 
    
    Can you survive the night?",
    image_url:"https://images.unsplash.com/photo-1531057228999-37933ba12c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    trigger_warnings: "gore, stalking, and other horror elements"
)

puts "Creating User Stories"

us1 = Userstory.create(
    user_id: u1.id, 
    story_id: s1.id,
    left_off: 2
)

puts "Creating Events"

e1 = Event.create(
    story_id: s1.id,
    name:"May 13, 1980, 7pm",
    short_description: "After your best friend leaves, you sit alone in your empty home and hear a scraping sound at the door.",
    long_description: 
    "Usually the rain would be calming, but tonight you are alone in the house again against your better judgement. 

    The house is otherwise quiet and it reminds you that you are in the middle of nowhere with no neighbors around for miles. 
    No one would be able to hear you scream.

    Sitting on the couch in the living room, you curl up with a blanket and book and try to read.

    You hear a scraping sound at the door.",
    image_url: "",
    sound_effect:"",
    delay:5
)

e2 = Event.create(
    story_id: s1.id,
    name: "A cautious investigation of the scraping at the door",
    short_description: "You look out the window to see nothing but now the scraping is at the window you were just looking out of.",
    long_description: 
    "You have seen too many horror movies to even think about opening the door at night but your curiosity gets the better of you, so you peek out the window. 
    
    There is nothing there. 
    
    Creepy, but not surprising. There has been a lot of weird noises lately but you have not yet seen a cause.

    There is another scraping sound, this time by the window. 
    
    You realize now that you did not reset the blinds after you looked out the window.
    You can’t stop your head from turning to look at the window.

    Nothing is there except… 

    You squint your eyes to make it out:

    “I see you” is scrawled on the window in marker.",
    image_url: "",
    sound_effect:"",
    delay:5
)

e3 = Event.create(
    story_id: s1.id,
    name: "Into the kitchen",
    short_description: "You decided to go to the kitchen to escape, but the sound follows.",
    long_description: "Your kitchen is sparse, but perhaps there might be something there that could help.

    You immediately turn to go to the kitchen, not daring to look out the other windows on your way, even as the banging on the windows follows you there. 
    
    You can feel their eyes on you as you enter the kitchen. The one window in the kitchen above the sink may not give a full view of the kitchen, but it would be enough to see that you are in here.",
    image_url:"",
    sound_effect:"",
    delay:0
)

e4 = Event.create(
    story_id: s1.id,
    name: "Arm yourself",
    short_description: "You decided to arm yourself, but all you found was a steak knife. Then power and the phone line gets cut.",
    long_description: "You look in your kitchen drawers trying to find something big enough and sharp enough to be a weapon but the best you can find is a small butter knife. Deeming it useless, you put it back in the drawer.

    Considering the weapon option, you decide to call 911 anyway.
    
    As soon as you pick up the phone, the lights go out. You know that it will be only a matter of seconds until they find the phone line and cut that too. You have just enough time to dial 911 before the land line also goes dead.",
    image_url:"",
    sound_effect:"",
    delay:0    
)

e5 = Event.create(
    story_id: s1.id,
    name:"Into the garage",
    short_description: "You decide to go to the garage, grabbing the keys to your car but now they’ve gotten in.",
    long_description: "With no other option, you grab your keys from the hook and hurry into the garage, closing and blocking the door behind you with the largest piece of furniture you could find. You know it probably won’t do any good, but it makes you feel better.

    There is a slight pause in the distant banging in the kitchen, long enough for you to relax for a second.
        
    Then you hear glass breaking in the kitchen. They’ve gotten in.",
    image_url:"",
    sound_effect:"",
    delay:0      
)

e6 = Event.create(
    story_id: s1.id,
    name:"The big escape?",
    short_description:"You decide to try and drive away but with the power out, your garage door won’t open. They are banging on the door now.",
    long_description: "You won’t be able to open the garage door what with the power being out, so the only choice is to plow through the solid wood garage door and hope it doesn’t damage the car too badly.

    You start up the car and the pounding on the door gets more intense up until you plow through the garage door.
    
    You made it out of the garage, but the car looks to be severely damaged.",
    image_url:"",
    sound_effect:"",
    delay:0
)

call = Event.create(
    story_id: s1.id,
    name:"Call 911",
    short_description:"You decide to call 911 but the power and the landline gets cut.",
    long_description:"You manage to dial and tell the 911 operator your address before the power gets cut and a “help!” before the landline gets cut as well. 

    While you hope they got the message, you can’t rely on police to get here in time as it takes you at least an hour to get to town from here. 
    
    All you have to do is survive long enough for them to get here.",
    image_url:"",
    sound_effect:"",
    delay:0
)

bedroom = Event.create(
    story_id:s1.id,
    name:"Into the bedroom",
    short_description:"You decide to head into your bedroom. You hear glass breaking from the living room, and footsteps nearing the door.",
    long_description:"You rush to your bedroom, closing and locking the door behind you. 

    The house is quiet for a moment.
    
    Then the power goes out. You can only assume that if they got to the power box and cut the power, then they also cut the phone lines.
    
    Another long pause.
    
    You hear glass breaking in the living room and footsteps nearing the door to the bedroom.",
    image_url:"",
    sound_effect:"",
    delay:0
)

bed_hide = Event.create(
    story_id:s1.id,
    name:"Maybe if you close your eyes, they won't see you.",
    short_description:"You decide to hide yourself the best you can in the bedroom. The footsteps draw nearer and a note is slid under the door.",
    long_description:"You tuck yourself under the bed as best as you can and wait with bated breath. You hear the footsteps come closer until they stop at the door.

    A paper is pushed under the door and you can hear footsteps retreat.
    
    You carefully pick up the paper.
    
    “It’s so boring when you hide, come play with me.”
    
    A chill runs down your spine as you realize this wasn’t a coincidence. The writing on the note matches the note on the flowers you got last week.",
    image_url:"",
    sound_effect:"",
    delay:0
)

leave_hid = Event.create(
    story_id:s1.id,
    name:"Hide and seek is not as fun as you remember.",
    short_description:"You decide to leave the room. You can hear him in the kitchen... counting.",
    long_description:"You leave the room. You can hear faint noises from the kitchen that sound like… counting? As you sneak against the wall, you can just barely see him leaning against a counter, eyes closed and counting like he’s playing hide and seek.

    He’s placed himself perfectly, blocking the front door and the garage door.",
    image_url:"",
    sound_effect:"",
    delay:0
)

office_hid = Event.create(
    story_id:s1.id,
    name:"It's a little too late to be writing your will and testament.",
    short_description:"You decide to go to your office, but he hears you so you hop out the one window.",
    long_description:"As quietly as you can, you tip toe your way to the office. The door makes a seemingly thunderous creak as you close it. 

    Slowly you turn to look at him and you can see one eye open staring at you. A grin spreads across his face as he starts to run toward you.
    
    You slam the door as fast as you can, locking it as you hear the thump of his full weight against the door.
    
    Thankfully the office has the one window that is big enough to fit through so you launch yourself out the window right as you hear the door start to crack.",
    image_url:"",
    sound_effect:"",
    delay:0
)

bed_arm = Event.create(
    story_id:s1.id,
    name:"Armed to the Teeth",
    short_description:"You decide to arm yourself. The footsteps draw nearer and a note is slid under the door. You tried to shoot, but the gun was empty.",
    long_description:"You decide to grab the gun you keep by your bed. Carefully aiming it at the door you wait until you can see their shadow from under the door. You pull the trigger. 

    The click of the gun’s chamber seems to echo. It’s empty.
    
    As you rush to get it loaded, a paper is pushed under the door and you can hear footsteps retreat from the door.
    
    You carefully pick up the paper.
    
    “It’s so boring when you hide, come play with me.”
    
    A chill runs down your spine as you realize this wasn’t a coincidence. The writing on the note matches the note on the flowers you got last week.",
    image_url:"",
    sound_effect:"",
    delay:0
)

leave_arm = Event.create(
    story_id:s1.id,
    name:"Armed and Ready",
    short_description:"Gun in hand, you decide to leave the bedroom. You can hear him in the kitchen… counting.",
    long_description:"Loaded and ready this time, you leave the room. You can hear faint noises from the kitchen that sound like… counting? As you sneak against the wall, you can just barely see him leaning against a counter, eyes closed and counting like he’s playing hide and seek.

    He’s placed himself perfectly, blocking the front door and the garage door.",
    image_url:"",
    sound_effect:"",
    delay:0
)

office_arm = Event.create(
    story_id:s1.id,
    name:"It’s a little too late to be writing your will and testament but at least you’re prepared.",
    short_description:"You decide to go to your office, but he hears you.",
    long_description:"As quietly as you can, you tip toe your way to the office. The door makes a seemingly thunderous creak as you close it. 

    Slowly you turn to look at him and you can see one eye open staring at you. A grin spreads across his face as he starts to run toward you.
    
    You slam the door as fast as you can, locking it as you hear the thump of his full weight against the door.
    
    He’s seemingly using his body as a battering ram, and it’s starting to work. The door is cracking.",
    image_url:"",
    sound_effect:"",
    delay:0
)

outside_arm = Event.create(
    story_id:s1.id,
    name:"Time to Run",
    short_description:"You decide to hop out the window but you’re not out of the woods yet.",
    long_description:"Thankfully this window is big enough to fit through and can actually open, so you launch yourself out the window.

    You can still hear him body slamming the door and you reach for the gun in your belt but realize you dropped it in the office.",
    image_url:"",
    sound_effect:"",
    delay:0
)

draw = Event.create(
    story_id: s1.id,
    name: "It's a draw",
    short_description: "You decide that the car isn’t that badly damaged and drive it away anyway. You may have escaped, but they are still out there looking for you.",
    long_description: "The scraping of the bumper on the ground is sure to need attention eventually but thankfully the tires and engine are still intact enough to be usable.

    You speed off down the driveway toward civilization. You glance in your rearview mirror out of habit and see the silhouette of a smaller masculine frame standing in the driveway watching you leave.
    
    You may have gotten away but you can still feel his eyes on you wherever you go.
    
    The End",
    image_url:"",
    sound_effect:"",
    delay:0
)

bad1 = Event.create(
    story_id: s1.id,
    name: "Bad End 1: A Quick End",
    short_description: "You died",
    long_description: 
    "Unfortunately now wasn't the time to be brave. 
    
    As soon as you opened the door, you were hit over the head with a rock and killed.
    
    Try again?",
    image_url:"",
    sound_effect:"",
    delay:0
)

bad2 = Event.create(
    story_id: s1.id,
    name: "Bad End 2: Not so well hidden",
    short_description: "You died.",
    long_description: "Unfortunately, your hiding spot was not good enough.

    He found you quickly and beat you to death.
    
    Try again?",
    image_url:"",
    sound_effect:"",
    delay:0
)

bad3 = Event.create(
    story_id: s1.id,
    name: "Bad End 3: Not quite quick enough",
    short_description: "You died",
    long_description:"With the bumper smushed into the back and scraping on the ground, you have little hope that it will work short distance, let alone long distance. 

    You decide to run.
    
    You make it about halfway down the driveway before you are tackled and beaten to death.
    
    Try again?",
    image_url:"",
    sound_effect:"",
    delay:0
)

bad4 = Event.create(
    story_id:s1.id,
    name:"Bad End 4: Brought a fist to a gun fight",
    short_description:"You died",
    long_description:"It is significantly easier to climb out a window than it is to climb in, especially since the window is higher off the ground outside than it is inside.

    You’re about halfway through the window when he finally breaks down the door. It takes him a second to regain his balance after throwing himself through the door.
    
    You can almost reach the gun, even with half your body out the window, but he grabs it first.
    
    At close range, he doesn’t miss.
    
    Try again?",
    image_url:"",
    sound_effect:"",
    delay:0
)

bad5 = Event.create(
    story_id:s1.id,
    name:"Bad End 5: Together forever",
    short_description:"You died",
    long_description:"Your palms start to sweat as you position yourself in front of the door, aiming center mass with the gun.

    Before you’re able to pull the trigger he makes it through the door, barreling into you and the gun slips from your hands. 
    
    You wrestle to try and get him off you, but he gets the upper hand.
    
    He pins your arms down with his legs, grinning. His hands start to squeeze your neck.
    
    You try to wriggle free but he’s stronger and heavier than he looks.
    
    You manage to get one arm out of his grasp but the gun is out of reach.
    
    You notice a pen on the ground, just within reach.
    
    Your fingertips just barely grasp it but you don’t have much time, your vision is blurry and starting to grow dark around it’s edges.
    
    You summon your last bit of strength just before you pass out and lodge the pen right in his jugular.
    
    You hear is a gurgling, choking, laugh. 
    
    “That’s why I love you.”
    
    The End.",
    image_url:"",
    sound_effect:"",
    delay:0
)

good1 = Event.create(
    story_id: s1.id,
    name:"Neutral Ending 1: Ready and Waiting",
    short_description:"You decide to wait for them to come back. You are armed and ready, they were not.",
    long_description:"You decide to wait for them. Your gun is loaded and you are ready for them this time.

    You wait for what feels like 10 minutes before you hear the footsteps coming closer to the room.
    
    You wait until you see his shadow under the door.
    
    You aim center mass and pull the trigger.
    
    The bullet goes straight through the door and hits the figure on the other side. They stumble back, tripping over their feet as they try to regain balance. You can hear them slide against the opposite wall. Briefly your eyes meet through the bullet hole in the door. He almost seems happy. Your heart pounds in your ears as you back away from the door and sit in the corner, waiting.
    
    It’s quiet on the other side of the door. It has been quiet for the past hour but you hadn’t gotten up the nerve to look out the bullet hole. 
    
    Now it was time to move.
        
    The End",
    image_url:"",
    sound_effect:"",
    delay:0
)

good2 = Event.create(
    story_id:s1.id,
    name:"Neutral Ending 2: Armed Confrontation",
    short_description:"You brought a gun to a fist fight. Not hard to say who won.",
    long_description:"You walk up as quietly as you can. You aim the gun center mass. 

    A floorboard creaks.
    
    His eyes pop open. You can see the grin on his face before he reaches behind him to get something out of his belt. 
    
    You shoot.
    
    He tries to speak but can’t get the words out. He holds the gunshot wound with one hand as he starts to walk to you. His other hand is still trying to pull out whatever it is from his belt.
    
    You pull the trigger again, this time hitting him in the neck. You can feel the blood splatter onto your hands as blood starts to pour out of the wound.
    
    He finally gets the thing from his belt but not before he slides to the ground blank eyed and grinning.
    
    You observe him for a few moments, gun still trained on him, waiting for him to move but he doesn’t. You move his hand a bit to get whatever it was out of his hands.
    
    It’s a flower.
    
    The End",
    image_url:"",
    sound_effect:"",
    delay:0
)

good3 = Event.create(
    story_id: s1.id,
    name: "Good Ending: A Harrowing Escape",
    short_description:"You decide to take your chances and hope you can out run him. You had enough of a head start to make it into town and survive the night.",
    long_description:"You book it toward the trees, hoping to god he hasn’t yet figured out that you’ve made it out.

    The distant thumping of the door fades away, as you concentrate on running through the trees toward town.
    
    You slip a couple of times, scraping your knees and hands due to wet ground and you get soaked to the bone from the rain, but you have never been happier to see the lights of a still open 7/11.
    
    Gasping your way through your tale of horror, the teller calls the cops. When they finally arrive 20 minutes later, you are safely escorted to the police station.
    
    The next day you were informed that your stalker was found dead in your bed clutching the gun you had stored in your nightstand.
    
    You never went back to that house.
    
    The End",
    image_url:"",
    sound_effect:"",
    delay:0
)

puts "Creating Choices"

c1 = Choice.create(
    event_id: e1.id,
    content: "Investigate the sound by looking out the window",
    image_url:"",
    item_needed: 0,
    next_event_id: e2.id
)

c2 = Choice.create(
    event_id: e1.id,
    content: "Investigate the sound by opening the door",
    image_url:"",
    item_needed: 0,
    next_event_id: bad1.id
)

c3 = Choice.create(
    event_id:e3.id,
    content:"Grab a knife",
    image_url:"",
    item_needed:0,
    next_event_id:e4.id
)

c4 = Choice.create(
    event_id:e3.id,
    content:"Call 911",
    image_url:"",
    item_needed:0,
    next_event_id:call.id
)

c5 = Choice.create(
    event_id:e4.id,
    content:"Go to garage",
    image_url:"",
    item_needed:0,
    next_event_id:e5.id
)

c6 = Choice.create(
    event_id:e4.id,
    content:"Hide in Kitchen",
    image_url:"",
    item_needed:0,
    next_event_id: bad2.id
)

c7 = Choice.create(
    event_id:e5.id,
    content:"Drive car",
    image_url:"",
    item_needed:0,
    next_event_id:e6.id
)

c8 = Choice.create(
    event_id:e5.id,
    content:"Hide in car",
    image_url:"",
    item_needed:0,
    next_event_id:bad2.id
)

c9 = Choice.create(
    event_id:e6.id,
    content:"Drive car away",
    image_url:"",
    item_needed:0,
    next_event_id:draw.id
)

c10 = Choice.create(
    event_id:e6.id,
    content:"Get out and run",
    image_url:"",
    item_needed:0,
    next_event_id:bad3.id
)

c11 = Choice.create(
    event_id:call.id,
    content:"Go to bedroom",
    image_url:"",
    item_needed:0,
    next_event_id:bedroom.id
)

c12 = Choice.create(
    event_id:bedroom.id,
    content:"Arm yourself",
    image_url:"",
    item_needed:0,
    next_event_id:bed_arm.id
)

c13 = Choice.create(
    event_id:bedroom.id,
    content:"Hide",
    image_url:"",
    item_needed:0,
    next_event_id:bed_hide.id
)

c14 = Choice.create(
    event_id:bed_hide.id,
    content:"Leave your hiding spot",
    image_url:"",
    item_needed:0,
    next_event_id:leave_hid.id
)

c15 = Choice.create(
    event_id: bed_hide.id,
    content:"Stay hidden",
    image_url:"",
    item_needed:0,
    next_event_id:bad2.id
)

c16 = Choice.create(
    event_id:leave_hid.id,
    content:"Hide elsewhere in the house",
    image_url:"",
    item_needed:0,
    next_event_id:bad2.id
)

c17 = Choice.create(
    event_id:leave_hid.id,
    content:"Go to your office",
    image_url:"",
    item_needed:0,
    next_event_id:office_hid.id
)

c18 = Choice.create(
    event_id:office_hid.id,
    content:"Hide outside",
    image_url:"",
    item_needed:0,
    next_event_id:bad2.id
)

c19 = Choice.create(
    event_id:office_hid.id,
    content:"Make a break for it",
    image_url:"",
    item_needed:0,
    next_event_id:good3.id
)

c20 = Choice.create(
    event_id:bed_arm.id,
    content:"Leave the room",
    image_url:"",
    item_needed:0,
    next_event_id:leave_arm.id
)

c21 = Choice.create(
    event_id:bed_arm.id,
    content:"Wait",
    image_url:"",
    item_needed:0,
    next_event_id:good1.id
)

c22 = Choice.create(
    event_id:leave_arm.id,
    content:"Go to kitchen",
    image_url:"",
    item_needed:0,
    next_event_id:good2.id
)

c23 = Choice.create(
    event_id:leave_arm.id,
    content:"Go to office",
    image_url:"",
    item_needed:0,
    next_event_id:office_arm.id
)

c24 = Choice.create(
    event_id:office_arm.id,
    content:"Go out the window",
    image_url:"",
    item_needed:0,
    next_event_id:outside_arm.id
)

c25 = Choice.create(
    event_id:office_arm.id,
    content:"Shoot him",
    image_url:"",
    item_needed:0,
    next_event_id:bad5.id
)

c26 = Choice.create(
    event_id:outside_arm.id,
    content:"Go back and get it",
    image_url:"",
    item_needed:0,
    next_event_id:bad4.id
)

c27 = Choice.create(
    event_id:outside_arm.id,
    content:"Make a break for it",
    image_url:"",
    item_needed:0,
    next_event_id:good3.id
)

c28 = Choice.create(
    event_id:e2.id,
    content: "Go to the kitchen",
    image_url:"",
    item_needed:0,
    next_event_id:e3.id
)

c29 = Choice.create(
    event_id:e2.id,
    content: "Go to the bedroom",
    image_url:"",
    item_needed:0,
    next_event_id:bedroom.id
)

puts "Creating User Choices"

uc1 = Userchoice.create(
    userstory_id: us1.id,
    event_id: e1.id,
    choice_id: c1.id
)

puts "Done!"