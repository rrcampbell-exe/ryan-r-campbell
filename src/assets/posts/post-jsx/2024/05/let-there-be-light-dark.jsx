import React from 'react'
import { TextAndImage, Quote, Bash, CodeSpan } from '../../../../../components'
import { Link } from 'react-router-dom'
import { CodeBlock, sunburst } from 'react-code-blocks'

const LetThereBeLightDark = () => {
  return (
    <>
      {/* ADD SOMETHING UP HERE THAT LETS FOLKS SKIP DOWN TO THE DEMO IF THEY JUST WANT THE CODE */}

      <h2>From the Light (Mode), Darkness</h2>
      <p>Among the more <a href='https://www.theverge.com/2021/1/20/22240864/new-white-house-website-dark-mode-accessibility' rel='noopener noreferrer' target='_blank'>popular</a> <a href='https://www.techradar.com/how-to/zoom-dark-mode' rel='noopener noreferrer' target='_blank'>trends</a> in UI/UX in the last few years is the build-out of dark modes to create a more robust and accessible online experience. Unfamiliar with the idea of dark mode? That may not be as true as you think.</p>
      <p>In the upper-right hand corner of this page, you'll see either a sun or moon-and-stars icon. Clicking or tapping that icon will fundamentally change the site's appearance, shifting it to either the more traditional white-out background with black text or to an experience that is comprised of light text against a dark background. The latter, which I made the default experience as part of my <Link to='/2024/05/03/welcome-to-the-new-ryan-r-campbell'>recent site migration</Link>, is what is known as <b>dark mode</b>.</p>
      <h2>Dark Mode as a Matter of Accessibility</h2>
      <p>One thing you may notice in shifting between light and dark mode is, quite simply, <em>how it feels</em>. If you don't believe me, try a couple of toggles for yourself now. You may notice that, after a few seconds of engaging with the site in light mode, your eyes strain to endure the blast of light.</p>
      <p>Now imagine staring at light-mode-only interfaces for forty hours per week (longer if you count all that time staring at your phone while doing, well, literally anything). Oof. Ouch. Those poor, poor eyes.</p>
      <p>Even if you're not feeling the strain personally, you don't have to take your own experience (or my word) as gospel. <a href='https://www.boia.org/blog/dark-mode-can-improve-text-readability-but-not-for-everyone' rel='noopener noreferrer' target='_blank'>The Bureau of Internet Accessibility</a>, for example, cites that dark mode "has substantial benefits," and <a href='https://www.perkins.org/resource/dark-or-white-choosing-dark-mode-for-low-vision/' rel='noopener noreferrer' target='_blank'>Perkins School for the Blind</a> adds that "[dark mode] can be especially beneficial for users with low vision and light sensitivity."</p>
      <p>It would seem, then, that dark mode shouldn't be an alternative, but rather <em>the standard</em>. Why provide a mode toggle at all?</p>
      <h2>Do Not Go Brusquely Into that Good Night</h2>
      <p>As it turns out, despite its benefits, dark mode can cause trouble for some users, including those with dyslexia, which could affect as much as 17% of the U.S. population according to <a href='https://dyslexiahelp.umich.edu/answers/faq' rel='noopener noreferrer' target='_blank'>the University of Michigan's Dyslexia Help Center</a>.</p>
      <p>It seems, then, that offering users the option to choose between a light mode and a dark mode is the way to go, but <b>how does one add a dark mode to their site?</b></p>
      <h2>Let There Be light-dark()</h2>
      <p>Before we explore <CodeSpan text='light-dark()' />—one of the latest ways to add a secondary mode to one's site—I should note that <CodeSpan text='light-dark()' /> is <b>not</b> how I ultimately chose to implement dark mode via the toggle at the top of the page. We'll explore the reasons why I opted for a distinct approach later, but <CodeSpan text='light-dark()' /> does offer a light-weight, CSS-native approach to making dark mode available to your site's users, so it's worth knowing how to take advantage of it.</p>
      <p>Alright, all of that said, I think we're ready for the how-to.</p>
      <h2>The What and How-To of It All</h2>
      <p><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark' rel='noopener noreferrer' target='_blank'>light-dark()</a> is a CSS function that allows you to easily implement light and dark themes on your site. It requires no JavaScript, no third-party packages, and no additional HTML elements. In other words, it can be implemented only with vanilla CSS, making it, as I mentioned earlier, about as light-weight as light-weight can be.</p>
      <h3>Spin Up a New App</h3>
      <p>For the purposes of this exploration, let's spin up a new React app called <em>theme-machine</em> with Vite.</p>
      <p><b>Note:</b> You may be prompted to install Vite when running the first command. If you are, do so.</p>
      <Bash 
        text={`npm create vite@latest theme-machine -- --template react
code theme-machine`}
        showLineNumbers={false}
      />
      <p>Once you've got your app open in your IDE, be sure to install the necessary dependencies before running the app.</p>
      <Bash 
        text={`npm i && npm run dev`}
        showLineNumbers={false}
      />
      <p>Now head to <CodeSpan text='http://localhost:5173' /> in your browser to see the Vite template in action. If you're an acolyte of the darkness like me—by which I mean you have already set your OS to prefer dark mode—you'll notice that the Vite template is already in dark mode.</p>
      {/* TODO: make image gallery to handle and display groups of images */}
      <div>
        <img src='/post-content/2024/05/vite-template-dark-mode.png' alt='The Vite template in dark mode' />
        <em>The dark mode Vite template</em>
        <img src='/post-content/2024/05/vite-template-light-mode.png' alt='The Vite template in light mode' />
        <em>The light mode Vite template</em>
      </div>
    </>
  )
}

export default LetThereBeLightDark
