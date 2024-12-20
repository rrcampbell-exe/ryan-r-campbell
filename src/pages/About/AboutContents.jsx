import React from 'react'
import { Link } from 'react-router-dom'
import { Quote, TextAndImage } from '../../components'

export const ShortStory = ({ setIsShortStory }) =>
  <div data-testid='short-story'>
    <h2>a little bit of this, a little bit of that</h2>
    <div>
      <p>Author. Technologist. Podcast. Blogger. The list goes on.</p>
      <p>In an adult life of transitions from pizza-slinging pyscholinguist to international sales support to international book awards finalist, it'd be easy to view the bounce-about nature of my path as that of a wanderer.</p>
      <p>And, with a career spanning industries including agriculture, medical devices, regulatory affairs, and publishing, I'd be hard pressed to tell you you're wrong. But, if there's anything I've learned in my travels—both physical and professional—it's that to wander is wonderful, but to wander with a sense of wonder is, if you'll pardon the excessive alliteration, <em>wondrous</em>.</p>
      <p>It's in following that sense of wonder that I've been most comfortable over the years. Whether interviewing dozens (a hundred? more?) of authors and publishing professionals for <Link to='/podcasts'>the Writescast Network</Link>, immersing myself in the <Link to='/author'>writing of another manuscript</Link>, or unthreading <Link to='/tech'>twisted tangles of code</Link>, curiosity and wonder have served me well as binary north stars.</p>
      <p>So, go on: cultivate <em>your</em> curiosity. Walk with that sense of wonder. Do some exploring of your own and learn all there is to learn.</p>
      <p>And, if you're really up for it, consider reading <span className='story-toggle-span' onClick={() => { setIsShortStory(false); window.scrollTo(top) }}>the extended version of the story so far</span>. I think you might like what you find.</p>
    </div>
  </div>

export const LongStory = () =>
  <div data-testid='long-story'>
    <TextAndImage 
    jsx={
        `
          <h2>call me ishmael</h2>
          <p>On second thought, don't. I've had enough nicknames for one lifetime; the list needn't grow longer.</p>
          <p>That I've had as many nicknames as there are stars in the sky is likely unsurprising, at least not when juxtaposed against the jack-of-all-trades theme that runs throughout this site.</p>
          <p>And why shouldn't that be the case? The truth is I've been a bit of everything. Pizza-slinging psycholinguist? Check. Soccer-playing polyglot? You know it. Even in my youth, I was somehow both the kid with the lead in the school musical and a member of the state-championship-winning track team.</p>
          <p>Go figure.</p>
          <p>Ultimately, it's taken me a long time to understand—and to embrace—myself as an all-of-the-above person, and the only way to understand that for yourself is to see the story in sum, or at least the story as I've experienced it.</p>
        `
      }
      src='/personal-photos/ryan-r-campbell-book-signing-beloit.jpeg'
      caption='Signing books at a 2019 event in Beloit, Wisconsin' 
    />
    <div>
      <h2>big plans</h2>
      <p>The year is 2012, and a bright-eyed boy by the name of, well, it's me. We're talking about me. Anyway, I graduated from college with big plans: I was heading to Brazil for three months to teach English and Spanish, and, once I returned, I planned to continue my independent language studies and apply to MIT's graduate program in psycholinguistics.</p>
      <p>To think I'd be accepted wasn't unreasonable; I was a high-achieving student who had graduated from UW-Madison with a double major in Spanish and linguistics (with honors in the major!), and my junior- and senior-year hobbies consisted almost entirely of devouring the works of Chomsky, Ladefoged, and Pinker. I'd even written my honors thesis on the very approachable (and not at all unreasonable to bring up casually at dinner parties) topic of the psychological representations of underspecified vowels amongst speakers of languages that feature vowel harmony. Yeehaw!</p>
      <p>Simply put, a world of opportunity was waiting for me, if only I had the determination to seize it.</p>
      <p>As I saw it, things were going to work out precisely as planned (definitely! for sure! no doubt about it!), beginning with that three-month stint in Brazil.</p>
      <Quote text='Things were going to work out precisely as planned... no doubt about it!' />
    </div>
    <div>
      <h2>southward bound</h2>
      <p>Has this ever happened to you? You head to another country for three months to teach a couple of languages, but then when you get there, it turns out there is no job and you've just moved like 4,000 miles almost entirely for the sake of it? <em>Has this ever happened to you?</em></p>
      <p>Yeah, it happened to me.</p>
      <p>I'd spent the previous year preparing for this trip, taking accelerated Portuguese-language courses and setting aside whatever cash I could from my pizza delivery gig to save up for this southbound excursion, but I learned in a matter of days after my arrival that the opportunity I'd been preparing myself for was not, shall we say, as advertised.</p>
      <p>At this point, I had two options. I could either instantly incinerate what savings I had remaining and move forward my return flight to the U.S.—where I'd presumably be cast into the fires of a good-old-fashioned post-graduation job search—or I could <em>slowly</em> incinerate what savings I had remaining and stay in Brazil, forging friendships and deepening my foreign-language fluency.</p>
      <p>It's worth noting that only one of these options also came with diesel-strength espresso, and viewed through that lens, my choice was more or less made for me. Brazil it was!</p>
      <p>In a surprise to absolutely no one, three months of largely unstructured time—fueled by copious amounts of the aforementioned espresso—led to interesting outcomes, the most notable of which was that <b>I finally got around to writing that novel I'd been talking about for years</b>.</p>
    </div>
    <TextAndImage 
      jsx={`
        <h2>the great american novel</h2>
        <p>Ah, yes. The Great American Novel. You know, the novel everyone writes when they sit down to write a novel, especially if it's their first. How hard could it be, right?</p>
        <p>That the novel in question does not figure among <a href='/books'>my published works</a> should tell you precisely how hard it is.</p>
        <p>Naivete aside, over the course of those three months, I did write something vaguely resembling a manuscript, a dream I'd had since I was in elementary school. I thought for sure that once I returned to the U.S., I'd not only land my first Real Job™, but I'd also apply to grad school and, naturally, get a novel published on the side.</p>
        <p>This is not at all what transpired.</p>
      `}
      src='/post-content/2024/04/sao-carlos-bedroom-office.jpeg'
      caption='My bedroom and office in Brazil, where I wrote my first novel-length manuscript. Yes, the mattress just flopped down onto the floor. (2012)'
      imageOnLeft
    />
    <div>
      <h2>best laid plans</h2>
      <p>Life comes at you fast, as they say, and I'm not sure life has ever come at me much more quickly than in my first few months back stateside.</p>
      <p>After a fruitless series of interviews in the quest for the fabled Real Job™, I relented and returned to my pizza guy gig (which, I would later recognize, was a Real Job™ in its own right, but we don't have time for that right now). In between late night pizza delivery shifts, I wrote. Like, <em>all the time</em>. I even carried a back-pocket-sized notepad with me to write on when it wasn't practical to bust out my laptop.</p>
      <p>I also sought community. Through the University of Wisconsin-Madison's Continuing Studies in Writing program, I enrolled in courses, connected with a critique group, and dedicated myself to attending it every other Saturday morning for years. It turned out I had far more to learn than I ever could have imagined, but I remained determined to see my work through to publication.</p>
      <p>However, after two years of dedicated practice and study (and countless attempts to attract a literary agent to represent me and my work), I felt no closer to seeing my words in print, and the late-night pizza operation was finally taking its toll. Oh, and that psycholinguistics program at MIT... whatever happened to that?</p>
      <p>Clearly on the verge of a quarter-life crisis, I did what any reasonable person in my position would do: I quit my job and went back to Brazil. <em>Vambora!</em></p>
    </div>
    <TextAndImage 
      jsx={`
        <h2>trade-offs, trade-ups</h2>
        <p>My second stint in South America coincided perfectly with the 2014 World Cup, which Brazil hosted. After taking a month to rekindle my affinity for radioactive espresso and <em>futebol</em>, I concocted a plan: this time when I returned home, I'd focus not on my dream of becoming an author, but rather on the practicalities of becoming a real life adult who, I deeply hoped, would finally find himself one of those Real Jobs™ everyone kept going on about.</p>
        <p>This, again, did not go as planned. It seemed that after a couple of additional years in the service industry, employers had me pegged as a lifer. More frustrated than ever, I coped by, you guessed it, returning to writing as much as I could in between job hunting and attempting to up-skill (my first flirtation with JavaScript!).</p>
        <p>Then, on a late summer day in 2014, fate intervened, by which I mean the HR department of an agricultural firm. To support their sales in Latin America, they were in desperate need of someone who spoke Spanish and Portuguese, which, wouldn't you know it, were two skills I just so happened to have.</p>
        <p>Imagine, now, a montage: me, struggling to settle into my first Real Job™ (is this really what everyone does for 40 hours a week until they retire or die?), learning the ins and outs of livestock and feed scales (not to mention the associated vocabulary in Spanish and Portuguese), jumping from the world of agriculture to a similar job in the field of medical devices (and, again, learning the associated vocabulary in Spanish and Portuguese), transitioning from sales support to international regulatory affairs, being offered a publishing contract for a novel—</p>
        <p>Wait. What? <em>Being offered a publishing contract for a novel?</em></p>
      `}
      src='/post-content/2024/04/ryan-r-campbell-drinks-mate.jpeg'
      caption="Testing the hypothesis that if one drinks enough mate, all of life's problems go away (2014)"
    />
    <div>
      <h2>rise of all things bookish</h2>
      <p>Yup, there was no keeping me away from those novels I'd been working on. Despite the daily grind, I'd still been at the hustle: getting up early to write before work, writing on my lunch breaks, writing when I got home, still attending those critique groups on the weekends... the list goes on. It's also during this window that I founded <Link to='/podcasts'>the Writescast Network</Link>, which introduced me to hundreds of other authors and industry professionals over its four years in operation.</p>
      <p>With a publishing contract signed (and a couple of others on their way to my inbox), I left the world of Real Jobs™ behind to finally commit to my ✨<em>Dream Job</em>✨.</p>
      <p>The following years consisted of book launches, platform-building, speaking gigs, and coaching other authors in their pursuit of publication. For a brief time, I taught through the University of Wisconsin-Madison's Continuing Studies in Writing program and served on the board of the Wisconsin Writers Association. Oh, and my wife and I founded Kill Your Darlings Candle Company, which, as its mission statement would tell you, sustainably illuminated the lives of readers, writers, and their communities.</p>
      <p>At long last, I was living the life I was meant to be living all along! Everything was exactly as it should have been. Perfect, really. Great. Good. Wonderful. Fine.</p>
      <p>Why are you making that face? <em>I said everything was <b>fine</b></em>.</p>
    </div>
    <div>
      <h2>everything was fine (or not)</h2>
      <p>Like everyone else, I was not immune to the vagaries of the pandemic, during which one personal revelation hit me particularly hard: the path I was on was no longer sustainable, assuming it ever had been at all.</p>
      <p>In the same way that the pizza delivery job's late night hours eventually chased me from the service industry, the round-the-clock maintenance of my work as an author, podcaster, writing coach, and business owner had more or less ground my soul into dust, and that's without mention of a truth I'd been ignoring for years—</p>
      <p><em>I'd had a much easier time supporting myself as a pizza delivery driver than was ever going to be the case as an author.</em></p>
      <p>More disillusioned than ever, I had to shake things up, and I knew I'd have to try something different. No amount of running away to Brazil was going to save me, not this time.</p>
      <Quote text='No amount of running away to Brazil was going to save me, not this time.' />
    </div>
    <div>
      <h2>enter bootcamp</h2>
      <p>No, not the military kind, the <em>coding</em> kind. In assessing how to align my interests and skill set, I realized my background in linguistics and language learning—along with how much I'd enjoyed building websites for all of my entrepreneurial endeavors in the preceding years—might make me the perfect candidate to learn the languages of the web in pursuit of an entirely new career.</p>
      <p>This time, however, my attempt to up-skill would be no mere flirtation with JavaScript. To make the most of the opportunity, I had to commit.</p>
      <p>For the next six months, I dropped (almost) everything. The hours previously spent writing, podcasting, and teaching were replaced with hours of coding, committing, and learning. For the first time since college, I felt truly immersed in and challenged by an educational experience, and I look back now realizing how much I loved every minute of it.</p>
      <p>The risk I'd taken to make this transition had paid off, or at least it would so long as I landed myself a job after the bootcamp's completion.</p>
      <p>Fortunately, after countless interviews and a handful of offers, I accepted a position at a financial services and insurance firm in Milwaukee, about 90 miles east of where my wife and I lived outside of Madison.</p>
    </div>
    <TextAndImage 
      jsx={
          `
            <h2>the only constant is change</h2>
            <p>So, we packed up and moved, somehow managing to sell the candle company along the way and, for my part, publishing another novel while I settled into a new life in a new city with a new job in a new industry.</p>
            <p>As one might expect, this transition was not without some bumps along the way, and plenty of secondary consequences accompanied the move. After seven years playing on the same soccer team, I had to bid the Men of the Night's Watch adieu and look for a team in the Milwaukee area with which I could ply that particular trade. We had to sweat it out while we waited for the sale of our Madison-area condo to close, and my wife had to adjust to the now fully-remote version of her own job.</p>
            <p>And our cats Hashtag and Rhaegar, well, they were fine, honestly. They're cats.</p>
          `
        }
      src='/personal-photos/ryan-r-campbell-kyd-hat-in-car.jpeg'
      caption='Heading out on a candle delivery run for KYD Candle Co. (2020)' 
      imageOnLeft
    />
    <TextAndImage 
      jsx={
          `
            <p>Perhaps the biggest adjustment for me was my return to full-time employment outside of the home. After years of focusing on my own projects and workflows, I was thrust into the world of Jira boards and Agile development, and I learned rather quickly there are things no coding bootcamp can prepare you for.</p>
            <p>But, just as I dedicated myself to getting the absolute most out of my bootcamp experience, I embraced the challenges of my new career as well, all while finding ways to apply my skill set from publishing in the software engineering space. After only seven months as an associate engineer, my commitment to squashing security vulnerabilities, developing documentation for Kubernetes namespace migrations, and starting a company-internal podcast to improve cross-functional communication had earned me a promotion (more on what I've done in the software engineering space can be found in the "boasts" section of <Link to='/tech'>the tech hub</Link>).</p>
            <p>In my current role, I continue to complement my burgeoning technical repetoire with skills from my past by speaking at company events, representing my teams in Hackathon presentations, and writing on tech topics for the company-internal blog.</p>
          `
        }
      src='/personal-photos/ryan-r-campbell-new-york-podcast.jpg'
      caption='Hosting a company-internal podcast in New York in November 2023' 
    />
    <div>
      <h2>stability, or something like it</h2>
      <p>A few years into this new life in Milwaukee, I'm happy to report I'm finally finding the balance I've been in search of all these years. I'm embracing the idea that it's okay to be more than one thing. We contain multitudes, as they say; there's little sense in pretending otherwise. That's why, whenever you change pages on this site, the title associated with my name at the top of the page changes, too. Am I an author? Yes. A technologist? Yes. A blogger and podcaster and community builder and soccer player and pet padre and polyglot and—? <em>Yes, yes, yes.</em></p>
      <p>So, if ever you find yourself wondering who—or which of some subset of <em>who</em>s—you are, choose not to define yourself as any one of these; choose <em>all of the above</em>. It won't be easy—we can't be everything to everyone all of the time—but it will mean you can bring the most of yourself to the world every day, and that has to count for something.</p>
      <p>Besides, if whatever you're doing isn't working out, there's nothing a trip to Brazil won't fix.</p>
    </div>
  </div>

