import React from 'react'
import { Link } from 'react-router-dom'
import { NotificationBanner } from '../../../../../components'

const PassionMeetsCraft = () => {
  return (
    <>
      <NotificationBanner
        type='announcement'
        title={<>This is part three of three in the <em>passionate craftsman</em> series.</>}
        text={<>You can <Link className='banner-link' to='/blog/passionate-craftsman'>find the full series here</Link>.</>}
      />
      <p>In the first two parts of <a href='/blog/passionate-craftsman'>this series</a>, we explored <a href='/2024/05/31/dont-follow-your-passion-become-the-passionate-craftsman'>the pitfalls of the passion hypothesis</a> and the strengths—and limitations—of <a href='/2024/06/22/why-skill-triumphs-over-passion-the-craftsman-mindset'>the craftsman mindset</a>. Along the way, we examined how passion alone can lead to burnout and frustration, while an over-reliance on skill-building can erode fulfillment if pursued without regard for personal autonomy or joy.</p>
      <p>Now, in this final installment, I'd like to propose a new way forward: a marriage of passion and craft that leverages the best of both approaches to create a sustainable, fulfilling career. Below, I'll lay out five principles for integrating passion into a craft-driven framework, drawing on lessons from both my experience and Cal Newport's <em>So Good They Can't Ignore You</em>.</p>
      <h2>1. The Confluence of Mastery and Passion</h2>
      <p>The allure of “following your passion” can be intoxicating. Who wouldn't want to leap out of bed every morning, driven by the idea of doing what they love? But as we've seen, passion alone is often an insufficient foundation for a career. Without mastery, passion is like relying on kindling alone to fuel a fire—it may burn brightly for a time, but it will fizzle without fuel to sustain it long term.</p>
      <p>Mastery, on the other hand, creates value. By developing rare and valuable skills, you accumulate what Newport calls “career capital,” the currency that allows you to negotiate for the autonomy, flexibility, and meaning that self-determination theory argues many of us rely on for fulfillment in our work.</p>
      <p>And though passion may nudge us down a particular path, it doesn't always have to lead the way; it can follow you—complementing your pursuit of mastery to become that sustaining fuel—as you burn more brightly, becoming so good they can't ignore you.</p>
      <h2>2. Choose Objective Fields When Possible—Or Redefine Success in Subjective Ones</h2>
      <p>Some careers offer clearer paths to success than others. In software engineering, for example, the criteria for success are often objective: does your code work? Does it scale? Is it secure?</p>
      <p>By contrast, fields like publishing thrive on subjectivity; success can depend on timing, taste, and luck as much as skill or effort.</p>
      <p>This doesn't mean you should abandon subjective fields entirely—especially if they hold your interest—but it's important to redefine success in those areas. Instead of focusing on external sources of validation (e.g., book deals or landing on a bestsellers list), pivot instead to embracing the pride that comes from creating the work itself or connecting with a community of like-minded creators. In all cases, understanding the dynamics of your chosen field will help you align your efforts with achievable outcomes.</p>
      <h2>3. Balance Craft and Personal Fulfillment</h2>
      <p>The craftsman mindset teaches us to double down on skill-building, but skill alone doesn't guarantee satisfaction. As I've learned, investing in the wrong opportunities—no matter how lucrative or well-aligned with your skillset—can erode autonomy and leave you feeling unmoored.</p>
      <p>To counter this, balance your pursuit of craft with personal fulfillment. This might mean saying no to projects that don't align with your values or carving out time for passion projects that reignite your sense of purpose.</p>
      <p>With respect to my work as a software engineer, I've found immense value in blocking off Friday afternoons for what I call Exploration Afternoons, where I work on pet projects that excite me and expand my skills in directions that feel meaningful.</p>
      <p>Meanwhile, in my capacity as an author and blogger, I still find value in reading, writing, and reflection in the mornings as I drink my coffee to start the day. Whether what I write or read ultimately leads to content that is consumable by others is irrelevant; it's in the notion that I've taken the time to stimulate my curiosity that I find the most value.</p>
      <h2>4. Integrate Passion into Craft</h2>
      <p>While passion may not be a reliable career compass on its own, it can complement and enhance your work when thoughtfully applied. By bringing your unique perspectives and external passions to your field, you can stand out from the crowd and create a career that feels authentically yours.</p>
      <p>For example, my love of storytelling has shaped how I approach software engineering, particularly when presenting technical ideas to colleagues or advocating for user-friendly solutions. Your passions don't have to align perfectly with your job description to add value—they just have to be integrated in a way that feels natural and impactful.</p>
      <h2>5. Leverage Autonomy, Competence, and Relatedness</h2>
      <p>At the heart of self-determination theory lie three psychological needs: autonomy (control over your work), competence (mastery of your craft), and relatedness (connection with others). The craftsman mindset aligns well with these principles, but it's up to you to ensure your work supports all three.</p>
      <p>Take autonomy, for instance. I regained a sense of control over my time and focus by leaving behind ventures that demanded more than they gave and transitioning into a field where deliberate practice yields tangible results. Competence followed as I honed my skills, and relatedness grew as I found peers who shared my interests and values.</p>
      <p>Whether you're in publishing, tech, or another field entirely, designing your career around these principles can maximize both satisfaction and sustainability.</p>
      <h2>The Path Forward</h2>
      <p>So, where does this leave us? Should we abandon passion altogether in favor of pure pragmatism? Absolutely not. Passion has its place—it just shouldn't be the sole guide for your career. By combining the deliberate skill-building of the craftsman mindset with the joy and individuality of your passions, you can create a career that offers both purpose and satisfaction.</p>
      <p>And if it's true that the best things in life come from balance, then perhaps the real secret isn't to follow your passion, but to shape it—and yourself—along the way.</p>
    </>
  )
}

export default PassionMeetsCraft
