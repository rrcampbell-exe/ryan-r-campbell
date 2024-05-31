import React from 'react'
import { CodeSpan, NotificationBanner, CodeBlock } from '../../../../../components'
import { Link } from 'react-router-dom'

const LetThereBeLightDark = () => {
  return (
    <>
      <NotificationBanner
        type='tip'
        title='Already have some familiarity with CSS and accessibility?'
        text={<>You can skip ahead to the demo by <a href='#demo'>clicking here</a>.</>}
        colorScheme='cool'
      />
      <h2>From the Light (Mode), Darkness</h2>
      <p>Among the more <a href='https://www.theverge.com/2021/1/20/22240864/new-white-house-website-dark-mode-accessibility' rel='noopener noreferrer' target='_blank'>popular</a> <a href='https://www.techradar.com/how-to/zoom-dark-mode' rel='noopener noreferrer' target='_blank'>trends</a> in UI/UX in the last few years is the build-out of dark modes to create a more robust and accessible online experience. Think you're unfamiliar with the idea of dark mode? That may not be as true as you think.</p>
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
      <h2 id='demo'>The What and How-To of It All</h2>
      <p><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark' rel='noopener noreferrer' target='_blank'>light-dark()</a> is a CSS function that allows you to easily implement light and dark themes on your site. It requires no JavaScript, no third-party packages, and no additional HTML elements. In other words, it can be implemented only with vanilla CSS, making it, as I mentioned earlier, about as light-weight as light-weight can be.</p>
      <h3>Spin Up a New App</h3>
      <p>For the purposes of this exploration, let's spin up a new React app called <em>theme-machine</em> with Vite.</p>
      <p><b>Note:</b> You may be prompted to install Vite when running the first command. If you are, do so.</p>
      <CodeBlock 
        code={`npm create vite@latest theme-machine -- --template react
code theme-machine`}
      />
      <p>Once you've got your app open in your IDE, be sure to install the necessary dependencies before running the app.</p>
      <CodeBlock 
        code={`npm i && npm run dev`}
      />
      <p>Now head to <CodeSpan text='http://localhost:5173' /> in your browser to see the Vite template in action. If you're an acolyte of the darkness like me—by which I mean you have already set your OS to prefer dark mode—you'll notice that the Vite template is already in dark mode.</p>
      <div className='image-gallery'>
        <div className='image-and-caption'>
          <img src='/post-content/2024/05/vite-template-dark-mode.png' alt='The Vite template in dark mode' />
          <em>The dark mode Vite template</em>
        </div>
        <div className='image-and-caption'>
          <img src='/post-content/2024/05/vite-template-light-mode.png' alt='The Vite template in light mode' />
          <em>The light mode Vite template</em>
        </div>
      </div>
      <p>If the Vite React template is already preference-responsive out of the box, we're done, right? Ha! Only if you plan to turn your back on <CodeSpan text='light-dark()' />!</p>
      <p>As it turns out, the Vite React template achieves a similar effect to <CodeSpan text='light-dark()' /> by implementing the <CodeSpan text='prefers-color-scheme' /> media query instead. This can be seen in portions of the <CodeSpan text='index.css' /> file the template generates below.</p>
      <CodeBlock 
        code={`:root {
  ...
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

...

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`}
        showLineNumbers={false}
      />
      <p>We could call it quits here, yes, and say we implemented both a light mode and a dark mode, but... we haven't yet done it with <CodeSpan text='light-dark()' />, which, you know, is the entire point of the post, so let's pivot away from <CodeSpan text='prefers-color-scheme' /> and instead, at long last, implement <CodeSpan text='light-dark()' />.</p>
      <h3>Turning On (or Off!) the Lights: Implementing light-dark()</h3>
      <p>To truly make this app our own, let's visit <CodeSpan text='src/App.jsx' /> in our <CodeSpan text='theme-machine' /> app and replace it with the following code.</p>
      <CodeBlock 
        code={`import './App.css'

function App() {
  return <h1>It's me, your pal light-dark()</h1>
}

export default App`}
      />
      <p>Next, replace the contents of <CodeSpan text='src/index.css' /> with the following code.</p>
      <CodeBlock 
        code={`:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color-scheme: light dark;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
`}
      />
      <p>Alright, let's take a look at our browser and inspect our work so far.</p>
      <p>We removed the <CodeSpan text='prefers-color-scheme' /> media query, yes, but if the app still appears in dark mode for you—which it should if that's the preference you've set at the OS level—that's to be expected at this juncture.</p>
      <p>How? Why? Let's explore.</p>
      <p>It turns out, setting <CodeSpan text='color-scheme: light dark' /> at the <CodeSpan text=':root' /> level is enough to trigger some responsive behavior in the browser, <em>even if you haven't set additional color-related styles of your own.</em> This is achieved by the browser applying its user-agent styles to the <CodeSpan text=':root' /> pseudo-class, which in turn apply to the rest of the page.</p>
      <p>But we're not here to rely on the browser's default styles, are we? No, we're here to implement <CodeSpan text='light-dark()' />! To do this, let's add some <CodeSpan text='color' /> and <CodeSpan text='background-color' /> styles to the <CodeSpan text='body' /> element styles in <CodeSpan text='App.css' />, at long last making use of <CodeSpan text='light-dark()' />.</p>
      <CodeBlock 
        code={`body {
  /* BEHOLD, LIGHT-DARK() AT LAST */
  color: light-dark(midnightblue, aliceblue);
  background-color: light-dark(aliceblue, midnightblue);  

  /* STYLES THAT WERE HERE BEFORE */
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
`}
      />
      <NotificationBanner
        type='tip'
        title='Color Me (Un)Surprised'
        text={<><CodeSpan text='light-dark()' /> accepts more than named colors as arguments! You can use hex codes, RGB values, HSL values, or even custom properties.</>}
        colorScheme='cool'
      />
      <p>In your browser, you should now see one of the following, depending on your OS's color scheme preference.</p>
      <div className='image-gallery'>
        <div className='image-and-caption'>
          <img src='/post-content/2024/05/light-dark-dark-mode.png' alt='The theme-machine app in dark mode' />
          <em>The theme-machine app in dark mode</em>
        </div>
        <div className='image-and-caption'>
          <img src='/post-content/2024/05/light-dark-light-mode.png' alt='The theme-machine app in light mode' />
          <em>The theme-machine app in light mode</em>
        </div>
      </div>
      <h2>How It Works and Testing Both Themes</h2>
      <p>As one might surmise from the implementation above, <CodeSpan text='light-dark()' /> takes two arguments, with the first of these accounting for the color that should be used in light mode, and the second representing the color to display in dark mode. The function then returns the appropriate color based on the user's preference. In the case of the <CodeSpan text='body' /> element in our app, the text color is <CodeSpan text='midnightblue' /> in light mode and <CodeSpan text='aliceblue' /> in dark mode, while the background color is <CodeSpan text='aliceblue' /> in light mode and <CodeSpan text='midnightblue' /> in dark mode.</p>
      <NotificationBanner
        type='tip'
        title='Fun Fact'
        text={<><CodeSpan text='light-dark()' /> can be used with any CSS property that accepts a color value, not just <CodeSpan text='color' /> and <CodeSpan text='background-color' />!</>}
        colorScheme='cool'
      />
      <p>To test both themes, you could, yes, change your operating system's preference (or, if you embrace dynamic color scheme preference, wait for the sun to go up or come down, depending on the time of day), but that's a bit of a hassle. Instead, you can use the browser's developer tools to simulate each theme.</p>
      <p>In Chrome, this can be achieved by opening your dev tools, clicking the three dots in the top right corner, selecting "More tools," then "Rendering," and finally selecting the color scheme you'd like to simulate in the "emulate CSS media feature prefers-color-scheme" dropdown. You should see the page's styles update to reflect the selected color scheme the moment you select the option you'd like to simulate from the dropdown.</p>
      <div className='image-gallery'>
        <div className='image-and-caption'>
          <img src='/post-content/2024/05/light-dark-dev-tools.png' alt="The location of the prefers-color-scheme toggle in Chrome's dev tools" />
          <em>The location of the prefers-color-scheme toggle in Chrome's dev tools</em>
        </div>
      </div>
      <h2>Congratulations and Cautions</h2>
      <p>You did it! You've successfully implemented <CodeSpan text='light-dark()' /> and know how to test it out for yourself.</p>
      <p>That said, <strong>maybe don't start slapping it in all of your apps quite yet.</strong></p>
      <p>Why? Because as of the date of publication for this post, <CodeSpan text='light-dark()' /> has only just become available to all of the most popular browsers. <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark' noopener noreferrer target='_blank'>MDN indicates</a> it's available in all of the below browsers, though only in the latest versions of them.</p>
      <div className='image-gallery'>
        <div className='image-and-caption'>
          <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark#browser_compatibility' noopener noreferrer target='_blank'>
            <img src='/post-content/2024/05/light-dark-availability.png' alt='A table that displays the availability of light-dark() as of May 2024' />
          </a>
          <em>As of May 2024, <CodeSpan text='light-dark()' /> is available in most browsers, though only in some of the latest versions of them.</em>
        </div>
      </div>
      <p>Beyond browser limitations, it should be noted that <CodeSpan text='light-dark()' /> is also always tied to a user's color scheme preference, which means there's no innate way to let users toggle between light and dark mode when they visit your site. And, as we explored above, providing users with a toggle is important for any developer who wants to maximize their site's accessibility.</p>
      <p>This is among the reasons I ultimately chose to forego the use of <CodeSpan text='light-dark()' /> when rebuilding this site. Providing users with the ability to toggle between light mode and dark mode was an important feature for me to provide, personally, but if you're looking to provide some baseline responsiveness with respect to your site's color scheme, <CodeSpan text='light-dark()' /> is, as stated previously, a light-weight, CSS-native approach that will get you to MVP expeditiously.</p>
      <p>Just keep in mind that the <em>M</em> in <em>MVP</em> stands for <em>minimum</em> viable product, and I like to think that, whenever possible, we should strive for a little more than <em>minimum</em>, whether we're in the dark or the light.</p>
    </>
  )
}

export default LetThereBeLightDark
