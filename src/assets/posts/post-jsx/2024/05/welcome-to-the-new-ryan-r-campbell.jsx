import React from 'react'
import { TextAndImage, Quote } from '../../../../../components'

const WelcomeToTheNewRyanRCampbell = () => {
  return (
    <>
      <TextAndImage 
        jsx={
          `<h2>Well, I'm Back</h2>
          <p>It's been a while—nearly two years, to be exact—but golly, do I have some updates, one of which is the very site you're visiting now.</p>
          <p>But first, since most of you are more likely familiar with me as an author than anything else (at least at this point), let's start there.</p>
          <h2>Author Business</h2>
          <p>Hey, remember <em><a href='/books'>Scambait?</a></em> When I last posted, it had hardly been out for a month. Since then, your support and reviews have been wonderful to be on the receiving end of, and I'm thrilled to announce that (back in 2022), <em><b>Scambait</em> was named a finalist in the International Book Awards!</b></p>
          <p>Of books I've written, <em>Scambait</em> remains a favorite for me, personally, so it was deeply gratifying to see it get that recognition.</p>
          <p>In light of <em>Scambait</em>'s success, one might be wondering, "what's next?" or, given that it's been two years without a writerly update, "what happened?"</p>
          <p>Be patient. We're getting to that. Like, now.</p>`
        }
        src='/books/scambait/scambait-flat-cover-international-book-awards-readers-favorite-sticker.png'
        caption='The 2022 International Book Awards finalist in Humor & Satire'
      />
      <div>
        <h2>Business Business</h2>
        <p>Those of you who <a href='http://eepurl.com/dhBxcv' rel='noopener noreferrer' target='_blank'>subscribe my newsletter</a>, follow me on Twitch (or did back when I was still streaming), or otherwise know me from around the web may also recall that in late 2021, my wife and I moved from Madison to Milwaukee. You might also know this move was part of a career transition for me.</p>
        <p>For those who want to learn more, I documented all of that change extensively in the extended version of this site's <a href='/about'>new about page</a>, but one of the consequences of adapting to my new life as a full-time software engineer was that writing fell to the wayside.</p>
        <p>Like way-way-way to the wayside.</p>
        <Quote 
          text='... writing fell to the wayside. Like way-way-way to the wayside.'
        />
        <p>It pains me to share that since my last post in mid-May of 2022, I've sketched out ideas for novels, short stories, and even a poem or two, but when it comes to writing words in an actual manuscript, well, I have nothing to report.</p>
        <p>This is likely astonishing for those of you who recall I was at one time a strong advocate for <a href='/2017/08/25/finding-a-writing-routine'>writing every day</a> (or at least as close to every day as is possible), but at some point after <a href='/2022/05/19/from-conference-to-coffee-on-the-beach/'>that 2022 vacation to Puerto Rico</a>, I realized I could no longer sustain that intense writing regimen while remaining sufficiently focused on the new career I'd uprooted my life for. Simply put, something had to give.</p>
        <p>But it's not all bad news (I'll encourage you again to read the extended version of the story on the <a href='/about'>new about page</a> to better understand everything that went into making the move to Milwaukee a successful one).</p>
        <p>In fact, I'd say the break was a necessary one, and one that has me ready, again, to get back into the groove. A <em>new</em> groove.</p>
        <p>Please don't throw it off.</p>
      </div>
      <div>
        <h2>New Business</h2>
        <p>In my time away, I realized something: at one point, I'd become so caught up in the idea of being an author that I forsook so many other parts of myself in service of that singular identity. And that was, dare I say, not great.</p>
        <p>Like I detail throughout this new site and over on that <a href='/about'>new about page</a> (can you tell I want you to read it?), I've returned to embracing the idea of self as <em>more than</em>, by which I mean we are more than any one thing, idea, or act. We are <em>everything people</em>, and I felt it was time I start acting like it.</p>
        <p>Inspired by this notion to once again to clickity-clack at my keyboard, I decided enough was enough: I was no longer going to pay WordPress for something that, equipped with my new skills as a software engineer and web developer, I could do on my own.</p>
        <p>And so, this new site was born. From scratch. Bits and bytes HTML tags and all.</p>
      </div>
      <Quote 
        text="I'd become so caught up in the idea of a singular identity, and that was... not great."
      />
      <div>
        <h3>What To Expect</h3>
        <p><em>Everything</em> is about to become a very important word, or at least <em>everything</em> as I see it.</p>
        <p>As you bounce around this new site, you'll notice in the upper-left-hand corners that I change the descriptors under my name more often than a chameleon changes color (though I don't think they change color as often as we like to believe). This is intentional, and not, I hope, a defense mechanism (as is the case with chameleons).</p>
        <p>The topics, ideas, and identities I hint at in those page banners and on the site's landing page are precisely the matters we're going to explore here going forward. We'll talk tech, language, literature, and life, and we'll do it in ways that stimulate our curiosity and expand our understanding of ourselves and the universe we live in.</p>
        <p>That's the goal, anyway.</p>
      </div>
      <TextAndImage 
        imageOnLeft
        jsx={`
          <h3>The Philosophy Going Forward</h3>
          <p>To achieve that goal, we won't embrace a regular posting schedule; I want to ensure that what I'm sharing with you is more than something thrown together to meet a personally-imposed deadline.</p>
          <p>In this way, we'll focus more on quality than quantity, on purpose more than frequency.</p>
          <p>And, if some of the pursuits I'm kicking around prove to be worth their while, there might be some surprises in store for you, too.</p>
          <h3>A Work in Progress</h3>
          <p>In the meantime, I ask for your patience. Building this site from the ground up was no done-in-a-day task, and mapping the WordPress version to this new one was not without its tribulations.</p>
          <p>What this means from a visitor's perspective is that, for legacy blog posts, you may encounter awkward formatting or missing links. Images may be strangely sized (or missing altogether), and some previously available content may have been removed so that it can be refined and repurposed.</p>
          <p>I promise you, though, your patience will pay off. It's all for the better, in the end, because we're better when we're all of us—when we're <em>everything people</em>—and I'm so looking forward to the <em>everything</em> we'll discover together.</p>
        `}
        src='/favicon-2024-ryan-r-campbell.png'
        caption='Surprises incoming? Time will tell...'
      /> 
    </>
  )
}

export default WelcomeToTheNewRyanRCampbell
