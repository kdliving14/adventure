puts "erasing old data"

Userchoice.destroy_all
Userstory.destroy_all
Inventory.destroy_all
Choice.destroy_all
User.destroy_all
Story.destroy_all
Event.destroy_all
Item.destroy_all

puts "creating Users"

u1 = User.create(
    username:"K", 
    password:"test", 
    name:"Karter", 
    image_url:"", 
    left_off: 2
)

u2 = User.create(
    username:"TEST", 
    password:"test", 
    name:"TEST", 
    image_url:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80", 
    left_off: 1
)

puts "creating Stories"

s1 = Story.create(
    name:"The Horror™", 
    description:"You are home alone in your home in the middle of nowhere, when the lights go out. You hear a scraping at the door. Gather items, make choices and see if you survive the night.",
    image_url:"https://images.unsplash.com/photo-1531057228999-37933ba12c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    trigger_warnings: "gore, stalking, and other horror elements"
)

puts "creating User Stories"

us1 = Userstory.create(
    user_id: u1.id, 
    story_id: s1.id
)

us2 = Userstory.create(
    user_id: u2.id, 
    story_id: s1.id
)

puts "creating Events"

e1 = Event.create(
    story_id: s1.id,
    name:"May 13, 1980, 7pm",
    short_description: "After your best friend leaves, you sit alone in your empty home and hear a scraping sound at the door.",
    long_description: "Usually the rain would be calming, but tonight you are alone in the house again against your better judgement. 
    The house is otherwise quiet and it reminds you that you are in the middle of nowhere with no neighbors around for miles. 
    No one would be able to hear you scream. \n
    \n 
    Sitting on the couch in the living room, you curl up with a blanket and book and try to read. \n
    \n 
    You hear a scraping sound at the door.",
    image_url: "",
    sound_effect:"",
    delay:5
)

e2 = Event.create(
    story_id: s1.id,
    name: "A cautious investigation of the scraping at the door",
    short_description: "You look out the window to see nothing but now the scraping is at the window you were just looking out of.",
    long_description: "You have seen too many horror movies to even think about opening the door at night but your curiosity gets the better of you, so you peek out the window. There is nothing there. Creepy, but not surprising. There has been a lot of weird noises lately but you have not yet seen a cause.\n 
    \n There is another scraping sound, this time by the window. You realize now that you did not reset the blinds when you looked.",
    image_url: "",
    sound_effect:"",
    delay:5
)

bad1 = Event.create(
    story_id: s1.id,
    name: "Bad End 1: An Unfortunate End",
    short_description: "You died",
    long_description: "Unfortunately now wasn't the time to be brave. Try again?",
    image_url:"",
    sound_effect:"",
    delay:0
)

puts "creating Choices"

c1 = Choice.create(
    event_id: e1.id,
    content: "Investigate the sound by looking out the window",
    image_url:"",
    item_needed: -1,
    next_event_id: e2.id
)

c2 = Choice.create(
    event_id: e1.id,
    content: "Investigate the sound by opening the door",
    image_url:"",
    item_needed: -1,
    next_event_id: bad1.id
)

puts "creating Items"

i1 = Item.create(
    event_id: e1.id,
    name: "Book",
    description: "An interesting biography of Jodie Foster.",
    image_url:"https://images.all-free-download.com/images/graphicwebp/old_book_clip_art_20190.webp"    
)

puts "creating Inventory"

inv1 = Inventory.create(
    userstory_id: u1.id,
    item_id: i1.id
)

puts "creating User Choices"

uc1 = Userchoice.create(
    user_id: u1.id,
    event_id: e1.id,
    choice_id: c1.id
)

uc2 = Userchoice.create(
    user_id: u2.id,
    event_id: e1.id,
    choice_id: c2.id
)

puts "Done!"