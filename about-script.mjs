// import cors from "cors";
// import express from "express";
// const app = express();
// app.use(cors());
//Blog Array

const blogs = [
  {
    id: 1,
    dateStr: `19<sup>th</sup>July '24`,
    content: `<p>Today marks the start of my 100 days coding challenge. Currently I
              know a little bit of HTML, some bit of Javascript including dom
              manipulation and apis and very litle Java. The website infront of
              you is an implementation of said skills. The biggest problem in
              learning these languages has been consistency.Before I can build a
              decent foundation in one, as soon as I get bored I switch to
              another comparatively more interesting language and hence my
              skillset includes a bit of everything ie: webdev (HTML & JS) and
              DSA's (Java). However things won't work this way. I plan to become
              consistent and will only switch to learning another language no
              matter how tempting, only once I have finished the current one. I
              brushed up my basics in HTML for todays day and look forward to
              doing the same for sometime before I can start CSS.<br />
              Heres to day 1 and 99 more to come!!!</p>`,
  },

  {
    id: 2,
    dateStr: `20<sup>th</sup>July '24`,
    content: `<p>
    Today marks the second day of the challenge, and I'd say im off to
              a decent start. Today I finished revising everything I had to in
              HTML and started CSS in which I did ID's , classes , combining
              selectors and some other basic stuff. I know I said I will not
              switch between languages quickly but theres only so much one can
              do in HTML. For the coming week I plan to build a good grip over
              HTML and CSS by studying the two and starting projects while
              constantly updating this one too. Today I tweaked with the CSS of
              the buttons of the website and added delays along with borders
              which make the buttons look simple and clean. Overall I'm happy
              with how the day turned out and look forward to building and
              carrying the momentum ahead. Here's to another productive day!!!</p>`,
  },

  {
    id: 3,
    dateStr: `21<sup>st</sup>July '24`,
    content: `<p>
    Today's day was a bit wonky, I dove deep into CSS concepts like
              Pseudo classes, Inheritance, Universal selectors, and some bit of
              theory related to inheritance. I had some trouble in styling
              hyperlinks specifically when I selected the linked anchor
              elements. As of today I haven't been able to solve or understand
              that problem but will hopefully have it resolved it in a couple of
              days with the help of stackoverflow and chatgpt. As far as this
              website is concerned I'm trying to add dates next to the day and
              also am attempting to make collapsible text boxes. That should
              take sometime given where I am at, but I feel I should be able to
              roll out these updates with dates soon. Other than that its
              another day in the bag and another step closer.
    </p>`,
  },

  {
    id: 4,
    dateStr: `22<sup>nd</sup>July '24`,
    content: `<p>
    Today marks another productive day and was also a pretty fun one.
              I got up early at 6am and was at my table by 7am. I studied the
              css box model today in which I covered both theory and
              application.The box model also helped me in implementing dates on
              my page which I did using the inline box model which was exactly
              what I needed. I also used chrome's dev tools to further
              understand the box model which was super helpful. What made the
              day fun was meeting my grandma at her club in tardeo and spending
              time with her. The best part was being able to balance work with
              fun and it felt really awarding. So yes I can feel the momentum
              building up and the grind is coming alive!!!
    </p>`,
  },

  {
    id: 5,
    dateStr: `23<sup>rd</sup>July '24`,
    content: `<p>
            Not the day I wanted it to be. I did manage to complete the css
              box model today but I hoped to do more. A big reason for today's
              outcome was not getting up on time in the morning. Apparently
              waking up early and starting on time makes much more of a
              difference than one anticipates. I also stumbled on the fact that
              I didn't need to create separate classes to style my paragraphs
              and could simply do it all under the pre-existing p description
              box in my css file. Anyways, with the CSS box model done, I shall
              move to layouts tomorrow, hopefully wake up on time and have a
              much more productive day.
            </p>`,
  },

  {
    id: 6,
    dateStr: `24<sup>th</sup>July '24`,
    content: `<p>
            Another productive day indeed.Today I finally started layouts in
              CSS which included floating layouts. It was a little tricky to
              wrap my mind around, but I feel I have understood most of it.
              Floating layouts by themselves weren't that hard, the tricky part
              was this trick called "clearing floats". So basically if all the
              elements in a container are floating elements, that particular
              container's height collapses and it's float needs to be cleared.
              Will be starting with flexboxes tomorrow but I'll definitely be
              reviewing today's work tomorrow and making sure I've understood
              everything properly. Also related to the CSS change I made
              yesterday, turns out it wasn't the right choice. It made my
              landing page's paragraphs also inline elements which was not
              needed. So I changed that part of the code but ran into another
              issue with the dates. Apparently if my text goes too close to the
              dates, the dates get pushed down which isn't ideal. I haven't
              figured out a solution yet, but the short term solution is making
              sure that my daily log texts don't end anywhere near the date 😅.
              Will definitely work on this and figure it out as soon as
              possible. Other than that, great day. As Carlos Sainz would say,
              Vamoss!!!!
            </p>`,
  },

  {
    id: 7,
    dateStr: `25<sup>th</sup>July '24`,
    content: `<p>
            What a day, what a day indeed!!!! I couldn't get much out of the
              day in terms of seeing lectures, but what I did do was apply all
              that knowledge to my webpage. I added a Nav bar, and an About
              section as well. I did all of this using concepts and properties
              like float and flexbox which I learn't on previous days. I mean I
              did start seeing a lecture today, but then I had to go see my
              grandma who came to Chembur to meet me and my sister. We hung out,
              talked, discussed stuff and had a lot of fun. As soon as I came
              back, instead of resuming my flexbox lectures, I started applying
              that knowledge to my page to implement a Nav Bar and an About
              section. Overall I am very happy with how the results turned out
              even though there is some alignment left to do. Normally I
              wouldn't get up till everything's done, but I need to give the
              laptop to my sister. What a day indeed and lets carry forward this
              momentum!!.
            </p>`,
  },

  {
    id: 8,
    dateStr: `26<sup>th</sup>July '24`,
    content: `<p>
            This was a picture perfect day for me. So my day started pretty
              early at 12am in the night when I wasn't getting sleep. So I
              started working on aligining the items on my page including the
              Nav bar elements and the About section. Took me some time, but it
              was sooo rewarding. Soon after I proceeded to add the Nav bar to
              all my pages and doing so was the most satisfying part of working
              on this website. I still need to optimise my flexboxes and make
              the site mobile friendly, but being able to pull this off with
              minimal flexbox knowledge is priceless. I did run into many
              problems which I tried Chat gpt'ing but even that didn't work. So
              I had to eventually figure everything out on my own and it was an
              amazing experience. The day didn't end there though, I was up by
              11am and I completed my flexbox lectures in the day. They were by
              far the smoothest lectures I have watched, maybe because I worked
              on the concept myself the last night. Today's day was a perfect
              balance between lectures and application and was in all senses
              picture perfect!!
            </p>`,
  },

  {
    id: 9,
    dateStr: `27<sup>th</sup>July '24`,
    content: `<p>
              Another super productive day! I wrapped up CSS grids which were
              super simple to use and enabled me to implement 2 dimensional
              layouts in this site with ease. Switching the layout from flexbox
              to grid was frictionless and I was very impressed with how
              identical the final layout turned out to be in comparison to the
              original one. With layouts finished I started with some bit of Web
              design rules & guidelines in which I covered basic typography and
              color theory slightly. Switching to web-design after doing layouts
              for some time is a slight hiccup, but I'm sure that very soon I'll
              get the hang of it. Here's to another great day!!
            </p>`,
  },

  {
    id: 10,
    dateStr: `28<sup>th</sup>July '24`,
    content: `<p>
              A day I never thought would come. Today I was up by 6am on my own
              and surprisingly I picked up my mechanics textbook and started
              studying. I didn't even realise how quickly those 2 hours passed
              by and they were pretty fun. In mechanics I started with a chapter
              around resolution of vectors, in which we resolve forces into
              respective components. Doing that reminded me a lot about PRI sir,
              my physics teacher in coaching class, who taught us very
              enthusiastically. Thanks to him I was able to surf through
              previous year questions with ease and had a good time. Then I had
              to go to pick my grandfather up at the train station after which I
              came home. I helped out a fellow with his buggy navbar and fingers
              crossed my solution works. It was related to what I had learn't
              about layouts in CSS and hopefully my solution will work. Why am I
              writing all this down? Because as a consequence of this all
              combined with my sister needing the macbook for her debate, I
              could barely code today, I mean I did do some more color theory
              and I did help another person in his bugs but other than that
              nothing. So bit of a disappointing day in terms of coding, but
              super productive in terms of being helpful and college studies.<br />
              <br />
              Today marks the 10th day of my challenge and todays day didn't go
              as planned for such a milestone given that I didn't think I'd make
              it this far. So after having done HTML and mostly CSS for 10 days
              straight, from tomorrow onwards I plan on starting with JavaScript
              for atleast an hour daily along with the usual CSS.<br />That
              being said, I'm off to the store to find the best price I can for my
              desired laptop!!!
            </p>`,
  },

  {
    id: 11,
    dateStr: `29<sup>th</sup>July '24`,
    content: `<p>
              Today was a funny day. I got up early around 6am and then fell
              back asleep at 8 to finally get up at 12:30 in the afternoon. My
              sister did have her school today so I did have the macbook all to
              myself for the morning, but it didn't make much of a difference as
              I eventually fell asleep. I got up to find out that I won't be
              able to use the mac for the rest of the day as my sister needed
              it. In other words, today's day stank. What sucked even more that
              my grandma was departing for the us tonight. My sister had decided
              that she will go to the airport, which meant that I could have the
              macbook to myself in the evening to do my work.<br /><br />
              This sucked because I had a difficult decison to make. I could
              either go to the airport to see my grandma and break my coding
              streak or I could stay at home, maxmise my time with the macbook
              but not be able to see her. Eventually I decided to stay at home
              because I could feel the momentum I had built over the past 10
              days. Till the very last minute I was going to stay at home. I
              didn't want to wrong my grandma of the right of seeing her
              grandson for the few times she does, and then as I was writing
              javascript while my parents got ready to leave, it clicked.....
              maybe I could do both.<br /><br />
              Before I knew it I was convincing my mother to let me carry the
              macbook with me in the car, so I could do the work I wanted to.
              Initially she frowned upon the idea, but out of nowhere I saw
              myself pushing it with all I had. She eventually gave in and here
              I am, logging today's day while I'm in the car.<br /><br />
              Inspite of today's day being the kind it was, I was able to clock
              about an hour worth of JavaScript and might be able to do some
              more in the car. Arya, this is you, this is why you chose this
              path and it is this very nature which defines you. Striving to
              come up with the most optimal solution for any problem is what
              you're good at even if it's at the very last minute. I want you
              and the reader to know that its never over and never will be, as
              victor frankl once said:<br />
              <em
                >Everything can be taken from a man but one thing: the last of
                the human freedoms—to choose one's attitude in any given set of
                circumstances, to choose one's own way.</em
              >
            </p>`,
  },

  {
    id: 12,
    dateStr: `30<sup>th</sup>July '24`,
    content: `<p>
              Today was a tough day. I got up around 8 expecting to get the
              macbook to code, but as I saw my sister using it on my table, I
              knew it wasn't possible so I just fell asleep again and got up at
              12. At 12 too she was in the midst of her work so I didn't trouble
              her. Majority of my day went just lying on my bed, reading books
              and scrolling on my phone with nothing productive to do. There
              came a point where I started believing that I won't get the
              macbook today which is when I started pushing my dad to buy my
              macbook for me today. I faced resistance as expected and really
              couldn't do much. At 6 in the evening, I started accepting the
              fact that my streak might come to an end today which is when it
              clicked, that I could do my work on my dad's laptop. As
              inconvenient as it was, I managed to do 90 minutes worth of
              Javascript in which I practiced DOM manipulation. As of writing
              today's blog, I still have about another 90 minutes of Javascript
              to do before I can call it a day, and I look forward to doing it.
            </p>`,
  },

  {
    id: 13,
    dateStr: `31<sup>st</sup>July '24`,
    content: `<p>
              Today's day was a decent one. I had the macbook to myself for
              sufficient time and I chose to implement DOM manipulation in
              changing pages and modifying the blog page. Well things didn't go
              as per plan. First I deleted the about section's html file and
              made it so that the about section appears on the landing page
              itself by disabling the container element. Basically I tried
              replacing redirecting with dom manipulation. Why you may ask?
              Because for some reason dom manipulation works only on one page.
              My main goal is to restructure and re-design the blog page, such
              that the page is a table of dates and days and on clicking on each
              day a modal shows up which contains that particular days blog.
              Again this sounds easy in theory and mostly it is, but for that I
              need to be able to apply dom manipulation to multiple html pages
              or find a way around it. Because I didn't know this at the time of
              pushing the changed about section to my github, I had to come back
              to my code and re-add the file inshort reverse a commit. That's
              another thing I need to figure out, how to go back commits and
              deploy that version to production. So todays day wasn't the best
              when it came to problem solving, what it was great at was
              identifying the problems.
            </p>`,
  },

  {
    id: 14,
    dateStr: `1<sup>st</sup>August '24`,
    content: `<p>
              Umm another not so productive day. I couldn't get the macbook
              today for long as my sister needed it for her debate, even the
              other laptop wasn't at home so I could't get much work done. With
              the little time that I had the macbook for, I managed to get the
              hang of desiging accordions which I once wanted to (maybe still
              will) implement on this page. I still need to figure out how to
              make it work in terms of functionality and I might just have found
              the solution today. Again I need to give the macbook to my sister
              so I couldn't deep dive into these solutions. Let's hope I get my
              own macbook soon enough.
            </p>`,
  },

  {
    id: 15,
    dateStr: `2<sup>nd</sup>August '24`,
    content: `<p>
              A day which was much more productive than I thought it would be. I
              expected to have the macbook to myself today because I was under
              the impression that my sister had school in the morning, but turns
              out I was wrong. So the second I got up I sat straight on my desk
              and started without wasting a second. Today I studied the theory
              of Javascript most of which revolved around how it works behind
              the scenes, so stuff like, execution contexts, scope, hoisting,
              tdz, variable environments etc etc. Before I could do a sizeable
              number of lectures I had to hand over the macbook to my sister. I
              then proceeded to while away time and before I knew it it was 5pm
              and my sister was taking a break. I got back at it and completed
              most of the theory I had to. I still have to do some theory
              related to the 'this' keyword, arrow functions and primitives, but
              I'll do that on the other laptop as I have to hand over the
              macbook back to my sister. So an unexpectedly productive day!
            </p>`,
  },

  {
    id: 16,
    dateStr: `3<sup>rd</sup>August '24`,
    content: `<p>
              Today was the best. I had the macbook to myself for the entire day
              as a result of which it was a super productive day. I effectively
              did Javascript for 5 hours today. Most of this time was devoted to
              doing theory which I was doing yesterday. I wasn't confident with
              what I had learnt yesterday so I chose to do all the theory
              lectures once again. This was a tough pill to swallow initially,
              but I'm so happy I did. Repeating theory was by far the best
              decision I've made in these 100 days. I understood the concepts
              much better than I did yesterday and I'm sure it'll pay off well.
              Today was also the first lecture of a live Web-dev + Devops course
              I've taken up. The instructor dove into basic html concepts, which
              weren't a problem and were a good refresher of concepts. After
              having a not so productive last few days, today's day was a big
              boost in momentum, and was super fun!!!
            </p>`,
  },

  {
    id: 17,
    dateStr: `4<sup>th</sup>August '24`,
    content: `<p>
             Another great day. I spent most of my day (by day I mean at 2am in
              the morning) building a clone of visual studio code's landing page
              as an assignment and was surprisingly able to pull it off. I spent
              the other half of the day (in the afternoon) further optimising
              the site and then working on this one too. The outcome and
              experience was really rewarding and resulted in a super productive
              day. For the coming week, I plan to complete asynchronous
              javascript, promises callbacks and some other stuff too. The other
              non-coding commitment for the coming week is to start hitting the
              pool. I really want to start going to the gym and pool, but get so
              tired (especially after gym) that I never end up being consistent.
              So to start off with, I shall go to the pool everyday in the
              evening for 2 weeks. Once that goal is complete I'll start going
              to the gym also. So great day and let's make this happen!
            </p>`,
  },

  {
    id: 18,
    dateStr: `5<sup>th</sup>August '24`,
    content: `<p>
              What a day, what a day indeed. For context, I was up by 5 am as I
              slept only for 4 hours. I proceeded to make myself a cup of coffee
              after which I sat down to do build something I've always wanted to
              for this page, accordions!!<br />
              <br />
              So I pulled up my sandbox file at 6 am and within an hour and a
              half I had functional accordions, which changed their headings on
              hovering as well. Now the tough part was implementing them on my
              existing page, the layouts of which were pretty messy. While
              manually wrapping all 17 blog elements was a task, I never could
              have anticipated how exhausting layouts were going to be. Before I
              knew it all my blog elements were wrapped in the necessary divs
              and now I had to work on the layout, this took by far the most
              time. Again, it's something which could've been done in 15
              minutes, but thanks to the pre-existing messy layout of my page,
              this was a nightmare. It took me so long to finally get the layout
              of the accordions correct, that for a second I forgot that I still
              had to implement functionality. Thankfully that wasn't as tough as
              I anticipated. Instead of figuring out dynamic dom manipulation
              (the kind which fetches urls of various html pages), I simply
              created a separate Javascript file for the blog page and that
              seemed to do the trick.

              <br /><br />This took me a grand total of 6 hours, from
              prototyping to implementation. Most of which went in figuring out
              the layout. But I still wasn't done. For some reason, the body
              content of my blog page was smaller from the right side than it
              should've been. The difference was about 10 to 15 pixels, but
              blatantly obvious. For the remainder of the day I tried
              everything, from layouts, to display types to everything you could
              possibly imagine but nothing seemed to work. I eventually fell
              asleep. Even once I was awake, nothing changed. So seeing that
              nothing was working, I decided to structure my CSS code file page
              wise, hoping I could delete unnecessary code and maybe in doing so
              fix things. And it worked!!!!! What was wrong? It was the
              scroll-bar, I had set the scroll-bar's background to transparent
              which created a transparent track of the scroll-bar's width which
              was the problem.<br /><br />

              After all the effort that went into a fairly simple task, I could
              finally breathe a sigh of relief. This was so rewarding, soo
              rewarding I can't even put it into words. So after roughly
              <b>8 hours</b> of coding, yes <b>8</b> I finally have functional
              accordions on my blog page, just the way I wanted.<br /><br />
              Today's day was just epic!!!!
            </p>`,
  },

  {
    id: 19,
    dateStr: `6<sup>th</sup>August '24`,
    content: `<p>
              So people have finally started noticing my page. I recently put up
              the link to my website on the discord server from my Javascript
              class and people have started reaching out to me. Receiving
              feedback, suggestions and appreciation feels so good and really
              goes to justify the effort im putting in gaining these skills. For
              todays work I looked into making my page responsive to page
              resizing. So for now the page resizes itself uptill a certain
              threshold. Will definitely improve on this and make the experience
              better. Whats more important is implementing a good color scheme
              for my page and making accordion transitions smoother. For
              tomorrows agenda, I'll start working on the color scheme of my
              page and maybe dive into asynchronous javascript. Vamos!!
            </p>`,
  },

  {
    id: 20,
    dateStr: `7<sup>th</sup>August '24`,
    content: `<p>
              I'm finally 20 days in!! It's still hard to articulate the fact
              that I have been committed to this challenge for so long and only
              feel the momentum building. For todays task, I learnt a little
              about arrays and objects in Javascript and how to destructure
              them. The topic is much more interesting than it seems on the face
              of it. It terms of this website, I have good news and bad news. I
              figured out how to make my website responsive to a wide array of
              devices without having to hard code pixel values. The bad news is
              that for now only the Landing page and Blog page resize themselves
              responsively while I need to fix the About section. The reason for
              this is that like I have mentioned many times before, my css files
              are super messy. In order to make my landing page responsive I had
              to toy with a lot of ideas and finally settled for one which sets
              the vh of my page to 91.4%. Again I'm not happy with how messy the
              css files are and for tomorrows task I'll make it a point to clean
              them up and also make the fix the about section. As far as color
              schemes are concerned, I really wish I looked into them today but
              I simply didn't get the time to. Will definitely look into them
              soon enough and try implementing a new color scheme before day 30.
              For now, heres to day 20!!!
            </p>`,
  },

  {
    id: 21,
    dateStr: `8<sup>th</sup>August '24`,
    content: `<p>
              They say it takes 21 days to make or break any habit, and on the
              21<sup>st</sup> day of the challenge I can agree to some part of
              that. Yes, doing something for 21 days straight does help making
              it a habit, but that has nothing to do with momentum. 21 days only
              make you want to do your task, however the momentum is completely
              in your hands. During these 21 days there have been days that have
              been super productive and motivating and at the same time there
              have been days which haven't been the best. Today was one such
              day. As I said yesterday, I did manage to clean my css files up
              however I couldn't get much out of the day in terms of lectures. I
              shall try doing atleast 2 hours of lectures in addition to
              maintaining this project and will also have to start studying for
              my 1<sup>st</sup>
              semester engineering exams. Here's to doing justice to both.
            </p>`,
  },

  {
    id: 22,
    dateStr: `9<sup>th</sup>August '24`,
    content: `<p>
              Not the day I hoped for. Instead of doing JavaScript I learnt how
              to make carousels and pagation in html and css. Not much I can say
              about the day, nor much I can defend. Just that I got away with
              the bare minimum and need to work on my consistency in terms of
              quality.
            </p>`,
  },

  {
    id: 23,
    dateStr: `10<sup>th</sup>August '24`,
    content: `<p>
              A decently productive day. Today I learnt some more components in
              html section like a hero section, more pagation and some tables.
              The interesting part was when my instructor started Asynchronous
              functions in my live JavaScript class. I thought Async JavaScript
              will be complicated, but I understood today's concepts fairly
              well. I'll admit I did get confused with the order of occurence in
              the call stack of an Async function which took less time vs CPU
              task which took longer, but soon understood the concept. Basically
              even if an Asynchronous JavaScript function takes lesser time than
              a CPU intensive task which could take longer, the Async function
              gets put in the call back queue and only gets called once the CPU
              intensive task which took longer gets over. I will certainly dive
              deeper in the Asynchronous nature of Javascript before starting
              with promises tomorrow, but this was pretty fun!
            </p>`,
  },

  {
    id: 24,
    dateStr: `11<sup>th</sup>August '24`,
    content: `<p>
              Today's Javascript was a tricky one to digest. Compared to what I
              did yesterday, today's area of study was aimed at a completely
              different level. So my instructor introduced classes to us in the
              first half an hour of the lecture, which wasn't tough to
              understand as I had done them before in C++ and Java. He did this
              to explain the concept of inbuilt classes in Javascript
              specifically Promises. Promises were tough to understand at first
              and even tougher once you actually managed to. It took me some
              time, but I was able to understand Promises through the example my
              instructor gave in which he promisified timeout functions. This
              did boost my confidence because I managed to understand this on my
              own before the instructors explanation. Soon when I attempted to
              make my own Promises was when it dawned on me that there was still
              a lot left to learn. So that's exactly what I plan on doing. Over
              the next week I will pay attention to both Asynchronous JavaScript
              and Promises. Another side-quest I'd like to work on will be
              creating my own Promise class. This was something my instructor
              gave as an assignment, he did mention it was a tough one, but I'd
              like to see how much I can manage on my own.
            </p>`,
  },

  {
    id: 25,
    dateStr: `12<sup>th</sup>August '24`,
    content: `<p>
              A decently productive day. Today's coding started with resolving
              an issue which someone from my live class raised on github. They
              pointed out that whenever the day element was hovered on, it
              switched to the date but while doing so pushed the other elements
              below it slightly. I must admit that this was an issue I
              overlooked while implementing accordions, so when someone pointed
              it out, it sure was embarassing to say the least. I then proceeded
              to solve the issue early in the morning (by early I mean at
              midnight) and soon figured (by browsing other similar issues) that
              this was because of my super tag which makes the 'th' in the date
              smaller and aligns it at the top. Of all the possible solutions
              available to me, I chose to set the line height of the super tag
              to zero. This ensured that no other element was affected and also
              solved the issue. Throughout the day, I did manage to do some html
              and css but couldn't do Javascript. This is something I want to
              change. So from now, my focus will be Javascript because I feel
              over the past 25 days, I have absorbed the necessary html and css
              knowledge, especially css because ultimately I'll be shifting to
              tailwind and react. With that being said, this is 25% of the
              challenge done and I'm just getting started baby!
            </p>`,
  },

  {
    id: 26,
    dateStr: `13<sup>th</sup>August '24`,
    content: `<p>
              Couldn't get much out of the day in terms of quantity, but I did
              manage to understand promises better. I dove into some videos on
              the internet and then tested my knowledge by writing my own
              promises. I still need to start working on creating my own promise
              class, but that'll take time considering I've just started
              digesting promises. So again, I wish today were more productive
              but all I can do is give my all tomorrow.
            </p>`,
  },

  {
    id: 27,
    dateStr: `14<sup>th</sup>August '24`,
    content: `<p>
              Not the most productive day, but definitely a memorable and
              relieving one. We went to drop our mami to the airport today which
              took some time and my college allotment was also due to come
              today. Cut story short I made it into the Computer Engineering
              Branch of Thadomal Shahani Engineering College in Bandra based on
              a percentile of 94.43, a state rank of 16815 out of over 300,000
              candidates. Not the proudest result I could've hoped for
              considering that I'm able to go to that college based on a
              reserved quota, but one to learn a ton from. The past two years
              were terrible for me in terms of my mental state and emotional
              well being, so taking that into consideration this was damage
              control and honestly the best I could've hoped for. I just got off
              of the phone with my grandma (who helped me a ton through these 2
              years) and hearing her happiess, my parent's happiness, my
              grandfather's joy and my sister's subtle look of a "job well done
              Arya" really put things into perspective. I will make the most of
              this opportunity and at the end of these 4 years, bring home
              either a placement offer or a masters acceptance letter that's the
              best not just in bombay but in india. These are big words for a
              person who only managed to code for an hour today, but summarize
              my feelings just the way I would like to. <br /><br />
              This one's for all of those who stood by my side when I needed it
              most and especially for those select few who wronged me and put me
              on this trajectory. I will make you regret your actions and will
              pray to god that you're always reminded of the fact that you
              wronged the right person.
            </p>`,
  },

  {
    id: 28,
    dateStr: `15<sup>th</sup>August '24`,
    content: `<p>
              Another fabulous day. Today I got up and did a bit of Javascript
              for an hour or so. Managed to look into object and array
              destructuring. Then me and my parents set off to get me my laptop.
              It took us the rest of the day to find the best deal but we
              managed to. As of now I just finished configuring my new macbook.
              This involved downloading and configuring git, nodejs, npm,
              homebrew and all that jazz. I wish I could've done more coding
              today, but am happy that I managed to configure my macbook and can
              now focus on coding entirely. I'll always remember today.
            </p>`,
  },

  {
    id: 29,
    dateStr: `16<sup>th</sup>August '24`,
    content: `<p>
              A decent day. Today I went to my college to confirm my admission,
              and with god's grace the process was seamless. The staff (faculty)
              was very sweet and polite to me and guided me every step of the
              way even though I was super annoying when it came to clarifying
              and re-clarifying my doubts. This took most of the day, but
              somehow I managed to do some Javascript today. Today I learnt
              about the spread and rest operator. Operators which are basically
              used to unwrap and wrap data from/in iterable entities like
              arrays, strings and even non-iterable entities like objects. I
              then proceeded to start working on a new layout and user interface
              for my blog site. Currently the blog page uses accordions
              (expandable text boxes), which are cool but after sometime make
              you scroll the page to access the rest of them. To improve this
              experience I have decided to implement modals (buttons) which
              reveal a textbox containing the blog content in the middle of the
              screen. It is indeed a cool concept, but much more complicated
              than accordions. Anyways this is what I'm upto and I must admit,
              it is pretty fun. Also my college starts from the 26th of August
              so I will try to maximise the coming week in terms of coding and
              learning as much as I possibly can. Peace!!
            </p>`,
  },

  {
    id: 30,
    dateStr: `17<sup>th</sup>August '24`,
    content: `<p>
              Today was a good day. I managed to develop a prototype for the
              modals of the blog page and it works just fine. This is something
              which will take time but so far it looks pretty promising. I have
              managed to make it functional while maintaing the view-port height
              of the page. This is something I'm looking forward to
              implementation, but that will be a super tedious process because
              it will involve wrapping 30 days of data in 30 separately new
              elements. Yes 30. Today is day 30 and this challenge has been
              super amazing this far and I'm looking forward to doing much more
              with it.
            </p>`,
  },

  {
    id: 31,
    dateStr: `18<sup>th</sup>August '24`,
    content: `<p>
              A decent-ish day. Today I dove into how I can create a delete
              elements using dom manipulation. Not the easiest thing to digest,
              especially when you're trying to do it with multiple elements
              dynamically, but definitely a powerful technique (atleast till I
              start with react). I did work a little bit on the modal layout as
              well, but ultimately came to the conclusion that it'll be super
              tricky to implement that design using simple css (without
              bootstrap or tailwind), and even once I do, a nightmare to keep
              updating using html. So unless I figure that out I won't switch to
              a modal interface. Yes, it is definitely better than accordions,
              but super challenging using the basic knowledge I have. I'll not
              stop however, and try to come up with a solution.<br />
              Tomorrow I head to Indore to meet my cousin sisters for a week,
              right after which my college will start. So I'm looking forward to
              a fun yet productive week ahead (because I'll carry my laptop and
              continue my streak). So let's end the longest vacation of my life
              on high note!!
            </p>`,
  },

  {
    id: 32,
    dateStr: `19<sup>th</sup>August '24`,
    content: `<p>
              I am really, really happy with today's progress. Today's
              raksha-bandhan and this year I made my mind up to pay my sisters
              in Indore a visit and have them tie me my rakhi. A rakhi they've
              always wanted to but have never been able to tie. What makes this
              day special is that I didn't imagine I'd be able to pull some work
              off because of travelling. But I've managed to surprise myself.
              Today I worked on the landing page of this website. I did this to
              improve the count-down container which was previously using an api
              call. This was a pullback because the api was pretty unreliable
              and many times failed to return data resulting in an error. So I
              tried my hand at the inbuilt Date class, and I'm pleased to report
              that I have managed to pull it off. Again I'm sure this is a
              pretty basic task, but I pulled this off without any chatgpt,
              without any stackoverflow and without any help. All I did, was
              like any other developer, use the mdn documentation of the Date
              class and somehow managed to make my code work in a fairly
              optimised manner.<br /><br />
              What's more impressive is the fact that I did all of this not at
              my table, but at the airport and in the plane, flying at 40,000 ft
              over sea level, all while sipping on complementary diet coke!!. To
              anyone getting mad at me for overstating a small task let me make
              myself clear again. I am not saying that I cracked the nuclear
              warcodes while travelling, I'm saying I (or my habits to be
              precise) managed to beat my lethargy and got work done even though
              2 month's ago something like this would sound absurd to my lazy
              self (or even my parents if they read this).<br /><br />
              I am very happy to see the efforts of my habits compound, to see
              myself stick to something and most importantly to be enjoying the
              process.<br />
              This was day 32 and 68 more to come!!!
            </p>`,
  },

  {
    id: 33,
    dateStr: `20<sup>th</sup>August '24`,
    content: `<p>
              The day's just keep getting better don't they. Yesterday I managed
              to revamp my day's countdown and today I managed to add more to
              it. Earlier if you visited the landing page of my website, all you
              would see is a paragraph tag which indicated how many days were
              left for my challange to get over. This tag was ofcourse dynamic,
              and updated itself everytime you visited the page or refreshed it
              (using dom manipulation). Today I further improved this feature by
              adding a literal countdown timer which updates in real time every
              second as time passes by. This timer can be accessed by hovering
              over the container and looks clean. I am pretty happy with what
              I'm able to do considering the fact that im only referring to mdn
              documentation and vs code popups. <br />
              So that is another day and I can't wait to see what I do
              tomorrow!!!
            </p>`,
  },

  {
    id: 34,
    dateStr: `21<sup>st</sup>August '24`,
    content: `<p>
              Another good day. Today I didn't do much interms of learning, but
              I did improve the functionality of my accordions in terms of
              design. Earlier if you used accordions, the arrow wouldn't react
              to the state of the accordion. Now they change themselves
              depending on the state of the accordion. It's a relatively simple
              change and the implementation is even simpler, however
              implementing this on 33 items wasn't a task as much as it was
              tedious. So I'm happy with being able to maintain my consistency,
              but now I have run out of things to improve on this website. Maybe
              I'll work on a modal layout, or maybe I'll learn tailwind or
              bootstrap. Anyways, today was fun and decently productive in terms
              of quality, in terms of quantity not so much.
            </p>`,
  },

  {
    id: 35,
    dateStr: `22<sup>nd</sup>August '24`,
    content: `<p>
              Today's day wasn't as productive as the ones before it, for two
              reasons. Most of today was spent sightseeing Mahu (a village my
              grandfather once lived in) and visiting areas around it. These
              places were really beautiful but I had it at the back of my mind
              of what will I do today. Yes I need to learn Javascript, but this
              environment isn't the best for learning, however implementing
              concepts to my website isn't a problem (I've run out of ideas
              honestly). So we came back home in the evening around 7 pm and I
              immediately started bootstrap. One thing I always knew was that
              scaling this website from amateur to professional would't be
              possible without a css framework. As bootstrap isn't a hard
              framework to learn, I tried my luck with it. No doubt it is super
              simple and with css knowledge it's super easy, but for some reason
              my bootstrap code wouldn't implement container breakpoints. This
              was funny because for some reason the same breakpoints seemed to
              work fine with columns and rows but not with containers. Took me
              quite some time to figure out what was wrong, but I have returned
              empty handed. I'll look into this with some more drive and make
              sure I find out what's wrong. Other than that, this is all I did
              today, and hopefully will be able to figure this out and do more
              tomorrow.
            </p>`,
  },

  {
    id: 36,
    dateStr: `23<sup>rd</sup>August '24`,
    content: `<p>
              A decently productive day. I figured out what went wrong with my
              bootstrap. I messed up in linking the bootstrap cdn's. Apparently
              the version number of the cdn in the link tag was different
              (placed in the header) and that of the script src tag (placed in
              body) was different. I don't know how this enabled other bootstrap
              functions to work, but once I fixed this, everything seemed to
              work properly. Today I did a little bit more of bootstrap and
              proceeded to try my hand at making a timer using Javascript. I'm
              almost there but somethings need to be figured out. Other than
              that I fly back home tomorrow and college starts next week. Lets
              keep the momentum going.
            </p>`,
  },

  {
    id: 37,
    dateStr: `24<sup>th</sup>August '24`,
    content: `<p>
              So I finally managed to make my timer work. I was able to finish
              it last night after updating yesterday's blog late at night around
              1 am so technically I did it today itself. Other than that I came
              across a bug in which the timer sped itself up if the start button
              was clicked while the timer was active. I chose to solve this
              problem during the day and even managed to, but not at home, once
              again flying at 30,000 feet above sea level, in a pressurised
              metal tube, completely out of my comfort zone all while sipping on
              coke! I solved this issue using boolean logic and managed to pull
              it off. But then again, more the solving the bug, the environment
              in which I did this was what impressed me the most. <br /><br />
              Right now the captain has instructed us to prepare for landing so
              I'm finishing this blog as soon as I can, but this trip to Indore
              and the consistency I was able to maintain with coding all
              throughout my trip without breaking my streak is what is really
              satistfying and rewarding. This also gives me the confidence in
              believing that I will be able to manage and balance coding with
              college once it begins. So on that note, I'm fastening my seatbelt
              and looking forward to keeping this going!
            </p>`,
  },

  {
    id: 38,
    dateStr: `25<sup>th</sup>August '24`,
    content: `<p>
              Today's day was a mixed bag but before I tell you about today, let
              me talk about yesterday. Yesterday's blog was written around 5pm
              when I was airborne in the flight and pushed to the repository as
              soon as I came home. I then proceeded to attend my live Javascript
              class (which happens on weekends) in which I learnt about node.js,
              how to initialise javascript files using npm, external and
              internal dependencies, version control, cli's (command line
              interface) and stuff along those lines. Yes this was a lot to
              digest, not in terms of difficulty but in terms of quantity. Today
              I had the second class in which I dove into https servers, what
              are their components like methods, routes, ports, IP's, domains,
              status codes etc etc. Again this wasn't complex but too much in
              terms of quantity at once. The highlight of today was creating my
              own https server using express which was fun. I will take the
              following week to digest everything I learnt over these two days
              and as a added goal also try to go over dom manipulation. All of
              this was very fun and interesting but I really do need to go over
              this that too especially in depth. <br />
              <br />
              So my college begins from tomorrow and I couldn't be more excited
              for it. I will make sure to balance coding with college at the
              same time enjoy my college life too! Here's to carrying forward
              the momentum of the past 38 days ahead!!!
            </p>`,
  },

  {
    id: 39,
    dateStr: `26<sup>th</sup>August '24`,
    content: `<p>
              Another fabulous day. Today was my first day of college and it
              couldn't have been better. I reached college pretty early and to
              my surprise found some other fellow batchmates who were also
              early. We waited for roughly an hour since thats how early we
              were, but got to know each other a bit and had someone to talk to
              about lectures and their experiences/expectations. The classes
              were good, today we were greeted by our mechanics and math
              faculty, who gave us an introduction about the subject and told us
              a little about the college. In addition to this I was lucky enough
              to get company on my way back home and more importantly company
              who taught me how to use trains. All in all this was a splendid
              experience and I can't wait to get to know my college, batchmates
              and subjects better. <br />
              <br />
              Coming to the point, since I had college from 9am to 12pm and came
              home by 2pm, half of my day was over and I needed to code in order
              to meet my daily coding goal. This was particularly tricky because
              I fell asleep and woke up at 6pm with more of my day wasted. So I
              mustered some courage, washed my face and sat down around 10pm to
              learn more about cli's (command line interfaces). I had built one
              earlier in my class, but didn't understand it well. The earlier
              cli, counted the number of words in a file and returned the total
              number of words by taking an input of the path in the terminal. It
              also displayed a help section (using the commander library) which
              is where most of the cli learning took place. Today instead of
              further trying to digest the previous cli, I created my own from
              scratch. This cli would return the sum of n digits, would display
              a help section if needed and work like the previous one flawlessly
              using commander. However there is still work left to be done. I
              need to add more functionality to this cli, so instead of being
              able to perform only one task, it can perform multiple tasks if
              needed (one at a time) and display the function names in the help
              section which can actually be used.<br />
              <br />
              I will also be trying to set a minimum time for coding from now.
              Till now I would on average code daily (not tutorials but actual
              coding and debugging) for about 90 minutes daily. I want to be
              able to do this for 3 hours minimum but that is a huge gap to
              cover. So from tomorrow I will try to code for atleast 2 hours
              minimum and once I'm used to the routine, try bumping it up to 3.
              That's it for today and I can't wait to improve my consistency.
            </p>`,
  },

  {
    id: 40,
    dateStr: `27<sup>th</sup>August '24`,
    content: `<p>
              An okay-ish day. Today I tried coding for about two hours but
              could only manage about an hour and a half of productive coding.
              In that time I did some bootstrap and some JavaScript concepts.
              Most productive part of today was fixing the flexbox layout of my
              page. Basically I wanted my landing page to be unscrollable and my
              footer to be at the bottom of the page. But for some reason, my
              footer would place itself below the viewport and become visible on
              some scrolling. I fixed this by correctly adding the flexbox
              layout to the whole body itself instead of the main content,
              something I hadn't figured out back then. I then tried to add a
              progress bar to my page, which would show the days to 100 days of
              code visually in the form of a progress bar. This was relatively
              easy to implement and add functionality to and I also made it so
              that it didn't affect the positioning of other elements. However
              for some reason I am yet to figure out how to change the colors of
              the progress bar. All in all I wish today was more productive, but
              am happy I was able to do what I did.
            </p>`,
  },

  {
    id: 41,
    dateStr: `28<sup>th</sup>August '24`,
    content: `<p>
              Another decently productive day. Today I managed to finally
              restart Javascript after a long break and could revise the last
              concepts I did with it. Not node js or cli's but data structures
              and modern operators. I rewatched the lectures I last saw of this
              section and will be seeing more after finishing today's blog. I
              can finally recollect everything I did back then and it's all
              coming to me. Today I also hung out with some college batchmates
              at a popular joint in bandra (candies) and had a lot of fun. I did
              come back and sleep, but resumed coding as soon as I could. Again
              I would've squeezed more out of today if I could, but I'm happy I
              was able to revise past concepts and still have the capacity to do
              more. Heres to day 41!!
            </p>`,
  },

  {
    id: 42,
    dateStr: `29<sup>th</sup>August '24`,
    content: `<p>
              A great day is the most accurate way to define today. In college
              we were greeted and taught by some fantastic professors of
              Chemistry and Math. This was fun as they were not only friendly
              and sweet, but knew how to deliver their subject well. After
              college me and my friends both took off to the other college
              building where we met our seniors who were super friendly and
              supportive too. They were in the middle of an event but were still
              sweet enough to give us time and talk to us which felt warm. Why
              am I mentioning this? BECAUSE THEY WERE MEMBERS OF THE CODING CLUB
              I WANT TO JOIN. This is a big deal for me especially because I
              have been super inclined to this area of technology for as long as
              I can remember. They shared their numbers with me and gave us
              guidance which was super super worth it.<br /><br />
              Soon after coming home I took some rest and got to coding when I
              could. Today I looked into the rest operator of Javascript, how it
              can be used in arrays, objects and functions and how it works in
              tandem with the spread operator. To my surprise the OR (||) and
              AND (&&) operators were also something to learn. Yes I know their
              logic but today I learnt of how OR returns truthy values while AND
              returns falsy values. In addition to this I also learnt about the
              nullish coalesing operator, which almost works exactly like OR
              except it also returns falsy values like 0 but shortcircuits over
              null values. I have coded for rougly an hour and a half today and
              will do doing some more because I'm yet to solve an assignment
              which is a bit tricky. Hopefully I'll be able to get it done
              today. Fingers crossed.
            </p>`,
  },

  {
    id: 43,
    dateStr: `30<sup>th</sup>August '24`,
    content: `<p>
              Another great day indeed. Today I had my first programming class
              in college and boy was it fun. Our principal explained the pseudo
              code to us for most of the lecture and then asked us to execute
              the code ourselves. We had to do this in C and thankfully I was
              able to pull this off because I had previously done C++ in
              highschool. Yes the syntax is slightly different, C has some extra
              keywords and different ones which C++ doesn't, but it wasn't a
              problem for me because thanfully I managed to read some C code
              before class. This enabled me to finish my program and then
              complete another additional one way before time. I then helped my
              friends and the overall experience was fun because I knew my stuff
              well. <br />
              <br />
              I started with more of Javascript at home in which I covered stuff
              like Optional Chaining, enhancing object literals and mainly
              looping arrays and objects using the "For Of" loop which was super
              easy and simple. So with some coding done in college (even though
              it was pretty rudimentary) and much more done at home (easily over
              2 hours), I am satisfied with today's progress. As I'm having my
              weekends off, I will be maximising them in terms of quality and
              quantity. More importantly I have come across a key functionality
              I would like to add to my page. It is moderately advanced for me
              given that I'm just getting my hands dirty with JavaScript, but is
              a big feature I'd like to add to my website to improve user
              interface. I will spend the rest of tonight researching about it
              and maybe even prototyping it in my sandbox file. Other than that,
              I'm pretty happy and can't wait to bring my ideas to life.
            </p>`,
  },

  {
    id: 44,
    dateStr: `31<sup>st</sup>August '24`,
    content: `<p>
              By far the most productive day I've had ever since the day I made accordions. Today was the day I sat down to introduce yet again another key functionality (atleast from my perspective and experience) to my website, Introducing a sorting functionality. As I mentioned yesterday, I was confused whether should the elements be present in ascending or descending order. As both seemed equally necessary I chose to add a feature which would give the choice to the user. Much like I anticipated yesterday, this feature was going to need a lot of work, and it did. Not just because I hadn't done anything like this before, but also because I had 43 blog elements to work with.<br><br>
              For reference I started my work at 11am in the morning and got done at 8pm in the evening. So I worked on this for the entire day (I obviously took short breaks in the middle) and have been able to do it. In order to do this I had to introduce dynamic doms which created html elements themselves each time the page is loaded. In lay-man's terms, I moved from a hard-coded html approach to a more DRY principle oriented (do not repeat yourself) approach. This includes creating a basic skeleton of the html element, having it fetch data from an array (which stores the blog data) and then create elements by looping over itself and the array. Again this was only one part of the puzzle, which merely stored data in a different way, the other part was to sort it. Somehow I was able to figure this one out as well and I had everything done by 4pm.<br><br> I was happy to pull this off except my happiness was short lived, why? Because everytime you sorted the elements, it affected their functionality and made the accordions unusable. The next 4 hours were spent figuring out how to fix this. I knew that it was a rendering issue so I tried all permutations and combinations of restructuring my code but couldn't come up with a solution. The key was storing all of the accordion functionality in the render function, not by itself but wrapped in a function which gets called each time you render. This is done so that functionality of the accordions is restored everytime you sort the elements which obviously have to get rendered after that in order for the changes to be shown.<br><br> I know I have delved into unnecessary detail, but I stuck to doing my work all day long, and by the end of the day I managed to figure it out. This makes me extremely proud and hopeful of the fact that this field is meant for me, and I for it.
            </p>`,
  },

  {
    id: 45,
    dateStr: `1<sup>st</sup>September '24`,
    content: `<p>
              Today is a big day for me. Not because it's my 18<sup>th</sup> birthday, not because I got my learners license, not because it is also Carlos Sainz's birthday. But because today marks the 45<sup>th</sup> day of my 100 days of code. 45 days of consistency, dicipline and results which have built and overtime improved this website. I'm really thankful to everyone who followed my instagram story link to land up on this page. This page isn't a flex of basic skills, but is a testament of my consistency and devotion to coding. I can't even comprehend overseeing all this when I first built the website. Today I'll be learning maps, sets and string operations in Javascript and that should take most of my time.
              <br><br>
              Usually I blog after I've finished coding for the day, but I wanted people to read this and I wanted to thank you for taking out time to follow a nerd's story. I blog on this website daily about my progress and ocassionally roll out sizeable features. All I ask from you is your feedback and critisism. You can leave the rest to me, because this is my calling, is becoming my identity and is something I am deeply satisfied and proud about.<br><br> Here's to turning 18 and 55 more days of consistency. 
            </p>`,
  },

  {
    id: 46,
    dateStr: `2<sup>nd</sup>September '24`,
    content: `<p>
              Not too happy with today's progress other than the fact that I got away with the bare minimum. I did some maps in Javascript, like iterating through them, various ways to set values to them and also how to leverage keys of different data types. I wanted to do more but for some reason couldn't. I also fixed a bug related to the sorting feature. This was more of a visual one than a functional one. So because the words 'Oldest' and 'Latest' have different number of characters, each time someone clicked them, it would shift the nav elements to either side. I fixed this using absolute positioning and was somehow able to do it with relative ease. I will definitely work harder tomorrow and try not to have dry days like today.
            </p>`,
  },

  {
    id: 47,
    dateStr: `3<sup>rd</sup>September '24`,
    content: `<p>
              Compared to the past few days, todays day was much more productive. I was able to sit at my desk in front of my laptop and do Javascript for over 2 hours which meets my daily goal. Didn't code much other than learning, but today I learnt about when and how to use various data types like maps, objects, arrays, sets etc. Other than that I learnt about strings today and how important they are. Strings are one of the most basic primitive data types not just in Javascript but in all of programming. We thereby sometimes take them for granted and forget their importance, an importance I learnt today. This was particularly fun because I learnt how to mask card numbers, the kind which mask your card details and only show the last 4 digits. This was a cool application and I could've never imagined it came from a string method. Other than learning I also figured that the change I introduced in yesterday's css wasn't ideal. This is because it uses a hardcoded pixel value which makes the margin of links different on different devices. Again this can be fixed easily and I will do this tomorrow using a percentage value, however now I have started to understand the importance of an external css library. I am yet to come across the need of an external library in Javascript however am feeling the need for it in css badly. Once I am satisfied with my Javascript progress I will take out time to start learning bootstrap which should be pretty helpful. Anyways that was a little about today and was a decent day.
            </p>`,
  },

  {
    id: 48,
    dateStr: `4<sup>th</sup>September '24`,
    content: `<p>
              A great day, not just in terms of coding, but also in terms of advice (Yes Priyansh). Today I tried to excuse myself from college a little early because I knew I had too much on my plate. Not only did I wish to do some BEE but also clock some decent hours of coding. Today I learnt about higher order functions in Javascript and how useful they are. Not only this but I also practiced some string methods and brushed up on maps. But other than this, by far the highlight of the day was the advice I received. This wasn't just advice about college, but advice on how I should approach things in terms of coding (mainly through problem solving), and a little insight on how web dev is super saturated as of now. No doubt it is an amazing way to introduce someone to coding, but coding is more about problem solving, solving real problems than it is about web desiging. Both are necessary and both have their own place, just that one is slightly easier and less valued while the other is far superior not just in value but also in terms of the learning curve.<br><br>
              So here I am figuring out what to do next. As of today I have a good command over the basics of Javascript and am fluent enough to be able to use documentation effectively, is this enough? <b>ABSOLUTELY NOT!</b> So this is what I plan on doing. As my senior rightly said, that balancing coding with college pressure will be the true test of my discipline, I shall do exactly this. <br><br>
              Because I have built a strong command over Javascript, it would be foolish to desert it without learning some libraries like react or run time environments like node js. As my college will be starting in full swing from next week, I will start giving it attention as well. Not just academics but events, networking, making friends and building a disciplined routine. From what I've learnt from my senior, web dev is relatively light in terms of complexity and is less demanding. I will try balancing it with my college work, and web dev being light, it'll be the best way to build discipline in these early stages of college. Much like lifting weights at the gym, you don't lift the heavy ones on day 1, you start with the lighter ones and then amp it up from there. This is the analogy I would follow, and will try optimising it by the end of the first semester of my college.<br><br>
              If all goes to plan, by new years I will be comfortable with balancing coding with college and will then be able to kick off the actual coding and real world problem solving. This will either include DSAS or other stuff I don't know about yet, but this is the plan.<br><br>
              Priyansh if you've read my blog this far, I'm really really thankful for your genuine and raw advice. I told you I'm not buttering you up and then I wrote this blog which sums up our conversation. Am I a hypocrite? I'm trying not to be. Am I honest, this is what I try my best to be. So thank you once again, and I hope you ace the events you're organizing in college.
            </p>`,
  },

  {
    id: 49,
    dateStr: `5<sup>th</sup>September '24`,
    content: `<p>
              Another decently productive day. Today I covered more about functions in Javascript and mainly on how we can modify the "this" keyword as per our need. Basically whenever we call a function (method) from an object and that object uses the "this" keyword, the functionality of the "this" keyword can get disturbed if the function is being assigned to another variable or is being used as a callback function. This issue is resolved by using 3 methods called, Apply, Call and Bind. These methods help us basically hardcode what the "this" keyword points to and make it possible to assign such functions as callbacks or variables. They also help us hardcode some arguments in case they are repititive, and thereby improve the abstraction of the code (I hope thats the correct way to put it). Other than I used these methods on objects, their methods and was able to gain some confidence in using them. In doing so I also gained confidence using "String Methods" which were not difficult, but many in number. Tomorrow as I'm having my C programming class, I will try reading a bit about it and hopefully be able to execute code for the questions assigned to me.
            </p>`,
  },

  {
    id: 50,
    dateStr: `6<sup>th</sup>September '24`,
    content: `<p>
              Today's day 50. Day 50 of 100 means I am at the halfway point of my challenge, and what better way to highlight this day than a class on C programming. This lecture was taken by our pricipal who took it last week as well. This was a noteworthy class because I was able to answer the pricipals questions correctly, point out errors in code and complete not just the 3 assignments assigned to me, but another 2 just in time! So this was an extremely productive programming class. Well I couldn't code much at home as I was occupied with preparations for ganpati, but have managed to chock out an hour in which I will be experimenting with "Immediately Invoked Functions" and "Closures" in javascript. So an okay-ish day, and heres to making the remaining half of the challenge just as memorable if not more.
            </p>`,
  },

  {
    id: 51,
    dateStr: `7<sup>th</sup>September '24`,
    content: `<p>
              My streak has come to an end...
            </p>`,
  },
];

//Rendering Function to implement dynamic doms

function blogRender(blogArray) {
  const accordionContainer = document.querySelector(".accordion");
  accordionContainer.innerHTML = "";

  blogArray.forEach((blog) => {
    const blogElement = document.createElement("div");
    blogElement.className = `item item-${blog.id}`;

    blogElement.innerHTML = `
    <h2 class = "day-number">${`Day ${blog.id}`}</h2>
    <h2 class = "date-number hidden">${blog.dateStr}</h2>
    <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon downwards">
            
             <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon upwards hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
          
          <div class = "content hidden"> ${blog.content}
          <h4>${blog.dateStr}</h4>
          </div>
          `;

    accordionContainer.appendChild(blogElement);
  });
  const footerEl = document.createElement("footer");
  footerEl.className = "blog-footer";
  footerEl.innerHTML = `&copy;2024-Arya IdnanI`;
  accordionContainer.append(footerEl);

  pageLoad();
}

function blogSort(order = "latest") {
  blogs.sort((a, b) => {
    if (order === "latest") {
      return b.id - a.id;
    } else if (order === "oldest") {
      return a.id - b.id;
    }
  });
  console.log("workss");
  blogRender(blogs);
}

blogRender(blogs); //Rendering
blogSort("latest"); //Initial Sorting

const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", () => {
  sortBtn.classList.toggle("oldest");
  sortBtn.classList.toggle("latest");

  if (!sortBtn.classList.contains("latest")) {
    sortBtn.textContent = "Oldest";
    blogSort("oldest");
  } else if (!sortBtn.classList.contains("oldest")) {
    sortBtn.textContent = "Latest";
    blogSort("latest");
  }
});

//Accordion Functionality

function pageLoad() {
  const itemSelector = document.querySelectorAll(".item");
  const daySelector = document.querySelectorAll(".day-number");
  const dateSelector = document.querySelectorAll(".date-number");
  const downIcon = document.querySelectorAll(".downwards");
  const upIcon = document.querySelectorAll(".upwards");

  for (let i = 0; i < itemSelector.length; i++) {
    itemSelector[i].addEventListener("click", function () {
      itemSelector[i].classList.toggle("active");
      downIcon[i].classList.toggle("hidden");
      upIcon[i].classList.toggle("hidden");
    });

    itemSelector[i].addEventListener("mouseenter", function () {
      daySelector[i].classList.toggle("hidden");
      dateSelector[i].classList.toggle("hidden");
    });

    itemSelector[i].addEventListener("mouseleave", function () {
      dateSelector[i].classList.toggle("hidden");
      daySelector[i].classList.toggle("hidden");
    });
  }
}
