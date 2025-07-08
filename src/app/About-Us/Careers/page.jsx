"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function CareersPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "What are TA’s core values?",
      content: `These are not just words on our website. Our core values are foundational to who we are as a company and the success of our team. We strive to achieve our highest potential and are dedicated to making a consistent effort to grow in these areas.

Be transparent
Being transparent is being honest and sharing the reality of a situation, even when it’s hard to hear. Examples include:
- Asking for help and taking ownership when something isn’t going as planned.
- Giving honest, constructive feedback to help each other learn and grow
- Proactively sharing information.
This results in every team member empowering one another and aligning within and across departments to do their best work.

Challenge mediocrity
Challenging mediocrity is bringing ideas to the table. Improving an imperfect process. Examples include:
- Thinking outside the box.
- Questioning “why?” with the intent to improve.
- Working harder, smarter, and more efficiently than the status quo.
The result is that our team, company, and clients improve every day.

Crave knowledge
Craving knowledge is asking questions and digging to find the best possible solutions. Examples include:
- Learning a new skill, language, talent, or hobby and not stopping there.
- Shadowing a team member who does something you’re interested in learning more about.
- Identifying knowledge gaps within yourself and following your curiosity, because the more you know the more our business grows.
This results in our team continuously learning, growing, developing, and producing experts in our field.

Make calculated decisions
Making calculated decisions is analyzing trends and diving deeper into your knowledge base. Examples include:
- Leaning on data to support your research and ideas.
- Looking for ways to improve efficiency and processes where they lack.
- Thinking 3 steps ahead and staying agile as you navigate new paths.
This results in our team using facts, data, and intelligence to guide our business, making us well-rounded and prepared for contingencies.

Value each other
Valuing each other is doing something to make someone else’s day more productive or fulfilling because when one of us wins, we all win. Examples include:
- Pitching in with administrative or project tasks.
- Giving back to our community through both financial contributions and volunteering our time.
- Recognizing and speaking kindly about one another.
- Supporting one another both personally and professionally.
This results in our team being friendly, genuine, welcoming, helpful, attentive, and willing to roll up our sleeves for the greater good.`,
    },
    {
      title: "What makes someone thrive at TA?",
      content: `A growth mindset
Our team is dedicated to growth and actively seeks opportunities to learn and develop. We see failure as lessons learned. We stay curious and expand our knowledge and skill sets beyond our current capabilities.

Adaptability
We are always ready to embrace new information and pivot our focus. We are a fast-growing, privately held company and base our decisions on constant feedback and data. Our plans and goals will change so we welcome opportunities for our roles and responsibilities to adapt with us.

A team-first mentality
We help each other out and organize our days with the big picture in mind. We all work toward a common goal, prioritizing collaboration and open communication. We don’t let titles, location, gender, background, etc. define who gets invited to the table. Your voice and authentic individual ideas are valued and taken seriously.

Intrinsic motivation
We are self-starters and find motivation naturally. We are driven, hold ourselves accountable, and require minimal oversight to remain productive and committed. Due to this, we provide flexibility and autonomy day to day while trusting team members to communicate accordingly. We know what is needed to get the job done.

Resiliency
We navigate ambiguous situations and find innovative ways to overcome challenges regardless of our limitations. Instead of limiting ourselves with “I can’t”, “I don’t know how”, or “Is it possible?”, we ask ourselves ” What would it take?”

Proactivity
We go beyond the immediate tasks at hand to push our goals forward. We expect everyone to be proactive, take initiative to make the most of their work week, spot opportunities for improvement, and take it upon themselves to enact change or make something better.`,
    },
    {
      title: "What is TA’s work environment like?",
      content: `Engaging
We believe work is more fun when you know and are known by the people you work with. This can look like being a mentor, directly messaging a colleague to tell them they did a good job, sharing in a meeting, or helping someone out when they need it most. With events like an annual company talent show and virtual happy hours, we don’t take ourselves too seriously and encourage one another through life’s ups and downs.

Fast-paced
We move fast! We have a bias toward taking action and value progress over perfection. Projects and tasks move quickly providing you a way to make an increased impact. We pivot often based on business needs and thrive where we embrace the unknown. We’re all about getting out of our comfort zones, introducing new ideas, and questioning the status quo. There will be learning opportunities when we’re innovating and moving fast!

Supportive
Growth varies for everyone, and we’re here to support you, whether you’re an individual contributor or a leader. You will have opportunities to develop new skills, carve your own niche in the business, participate in one of our Employee Resource Groups, ascend to a leadership role, or explore new paths within the organization. We’re invested in your career journey however that looks.

Global
Our workforce spans the globe across four continents, representing a rich tapestry of cultures, backgrounds, and perspectives. We enjoy the benefits of cross-cultural collaboration, an array of global perspectives, language diversity, and the commitment to cultural sensitivity. We are continuously adapting the way we work, communicate, collaborate, give back, and have fun, to align with being a remote-first organization.

Committed to DE&I
We recognize that diversity extends beyond the color of our skin to include ethnicities, gender identities, sexual orientations, abilities, cultural backgrounds, experiences, and skills. Our way of operating is to allow our teammates to show up as themselves every day. We ask our team to equally respect individual differences, and do their best to embrace and amplify the shining light of others. We protect one another by creating inclusive, safe spaces and holding a high standard of trust and respect for individual contributors as well as leaders. By doing this, we have created an environment where people feel valued, trusted, and connected.`,
    },
    {
      title: "Is TechnologyAdvice the company for you?",
      content: `We have big goals ahead and need an extraordinary team to achieve them, so if you read this and get just as excited as we are, the opportunities are endless!`,
    },
  ];
  const testimonials = [
    {
      text: `There are endless opportunities to explore and advance your career at TechnologyAdvice. The company invests a lot of training and time into it’s team members and it’s apparent that you get what you put in. If you want growth, opportunity, and an exciting fast-paced environment, TA is the right place for you.`,
    },
    {
      text: `You will grow really fast at TA and learn a lot quickly. You will learn how to challenge yourself and stretch your capabilities. The organization is goal driven and focused. The team is fun and my colleagues are great to work with and people are friendly.`,
    },
    {
      text: `I have never been a part of a company that is as positive as TechnologyAdvice. TA’s management lives by the 5 core values, and this trickles down throughout the entire organization.`,
    },
  ];
  const awards = [
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/award-inc-5000.png', alt: 'Inc. 5000 6-Time Award Winner' },
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/award-next.png', alt: '2019 Winner Next Awards' },
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/award-500.png', alt: 'Deloitte Technology Fast 500' },
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/award-forbes.png', alt: 'Forbes America\'s Best Startup Employers 2021' },
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/award-nbj.png', alt: 'NBA Small Business Award Recipient' },
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/award-best-workplaces.png', alt: 'Inc. Best Workplaces 2021' },
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/Built-In-2-1.png', alt: 'Top Workplaces Tennessee' },
    { src: 'https://assets.technologyadvice.com/uploads/2024/06/Built-In-2.png', alt: 'Top Workplaces USA' },
  ];
  const benefits = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.158V18a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18v-3.842M12 1.5v12m0 0-3.75-3.75M12 13.5l3.75-3.75"
          />
        </svg>
      ),
      title: 'Career development',
      description:
        'Explore virtually endless career opportunities with development meetings, DE&I events, book clubs, Emerging Leaders and Leadership Academy, and more!',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.835 3 8.25c0 7.219 2.912 11.241 11.125 15.113a9.75 9.75 0 0 0 2.494-1.285c.79-.523 1.16-1.121 1.16-1.121L21 8.25Z"
          />
        </svg>
      ),
      title: 'Health and wellness',
      description:
        'Enjoy comprehensive health, dental, and vision benefits, plus other great additionals like Headspace and fitness reimbursements.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.002 6.002 0 0 0 1.58-1.425 18.067 18.067 0 0 1 5.865 3.125M12 18a6.002 6.002 0 0 0-1.58-1.425 18.067 18.067 0 0 1-5.865 3.125M12 18V6A3.003 3.003 0 0 0 6 6h2.25c.51 0 .935.347 1.076.839A6 6 0 0 1 12 6M12 18h.375a3 3 0 0 0 2.26-5.435M12 18H11.625A3 3 0 0 1 9.365 12.565m-2.26-5.435A3 3 0 0 0 6 6c0-1.657 1.343-3 3-3h.75a3 3 0 0 1 3 3v.375c0 .621.504 1.125 1.125 1.125h1.5a3 3 0 0 1 3 3v.375h-.75A3.001 3.001 0 0 0 15 12c0 .621.504 1.125 1.125 1.125H18c1.657 0 3-1.343 3-3V6.75A.75.75 0 0 0 20.25 6H12"
          />
        </svg>
      ),
      title: 'Learning and development',
      description:
        'Company-wide access to on-demand learning management systems and training.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
      title: 'Mentorship',
      description:
        'Gain a mentee or mentor (or both!) as part of a formalized mentorship program.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ), // Using a generic user icon here as the original looks like two linked people, which might be a custom icon. Replace with actual icon if available.
      title: 'Team activities',
      description:
        'Company-wide hackathons, in-person, and virtual events.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25H18.75A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
      title: 'Paid time off',
      description:
        'Enjoy work-life balance with generous paid time off.',
    },
  ];
  const coreValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4.5 16.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM19.5 16.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      ),
      title: 'Be transparent',
      description:
        'As stakeholders of TA, we deserve to have honest, open, & consistent information about our business. Every employee, no matter the level on the org chart, practices transparency about their work.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.375c.068.038.129.093.182.158l2.992 3.007a.75.75 0 1 1-1.06 1.06L14.474 16.7c-.069-.06-.12-.129-.158-.2l-1.33-2.217a.75.75 0 0 0-.203-.277 1.5 1.5 0 0 1-.722-.977L9.236 9.873A8.75 8.75 0 0 0 7.5 7.5c0-4.004 3.003-7.25 6.702-7.25C18.2 0.25 21 3.5 21 7.5c0 1.626-.54 3.076-1.5 4.25a.75.75 0 0 0 .203.277l1.33 2.217c.069.06.12.129.158.2l2.992 3.007a.75.75 0 1 1-1.06 1.06L18.41 14.533c-.068-.038-.129-.093-.182-.158l-1.33-2.217a.75.75 0 0 0-.203-.277 1.5 1.5 0 0 1-.722-.977L9.236 9.873Z" />
        </svg>
      ),
      title: 'Challenge mediocrity',
      description:
        'We attack our goals with passion & a sense of urgency. We hold each other accountable & produce results above & beyond expectations.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.966 48.966 0 0 1 12 21.75c2.305 0 4.535-.295 6.735-.856m-1.72-1.033a48.96 48.96 0 0 0-10.618 0m10.618 0v.2c0 2.109-.969 3.993-2.564 5.25S12.378 24 12 24c-.378 0-2.07-.468-3.676-1.725S5.25 18.2 5.25 16.125v-.2M12 21.75c-2.305 0-4.535-.295-6.735-.856m0 0a48.805 48.805 0 0 1-1.378-3.695m1.378 3.695L7.5 21.493m-.491-11.347a60.436 60.436 0 0 1-.491-6.347m-1.996-.007a60.436 60.436 0 0 1-.491-6.347" />
        </svg>
      ),
      title: 'Crave knowledge',
      description:
        'At TechnologyAdvice we continually increase our knowledge, deepen our understanding, & invest in our personal and professional growth.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25H18.75A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      ),
      title: 'Make calculated decisions',
      description:
        'We combine data with cross-team collaboration & balance diligence with speed to ensure prudent & tactical decisions that grow our business.',
    },
  ];

  return (
    <>
      <div className="bg-[#0E1F1C] min-h-screen text-white px-8 md:px-16 py-12">
        <nav className="text-sm mb-8">
          <span className="text-gray-400">🏠 Home &gt; </span>
          <span className="font-semibold">Careers</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s grow together
        </h1>

        <p className="text-lg md:w-3/4 mb-4">
          We’re TechnologyAdvice – the team behind a portfolio of leading B2B tech publications.
          If you’re here, it’s because all of our brands share a common mission – and a single team driving them forward.
        </p>

        <p className="text-lg md:w-3/4 mb-8">
          At TechnologyAdvice, you’ll work alongside a diverse group of passionate individuals who love growing as professionals and learning new things.
          No two days are exactly the same here, and you’ll face opportunities to expand your skill set, step outside of your comfort zone,
          and contribute to the best group you’ll ever work with.
        </p>

        <div className="mb-8">
          <a href="#" className="font-semibold hover:text-[#ffd800]">
            Subscribe to our Talent Community →
          </a>
        </div>

        <button
          className="bg-[#ffd800] text-black px-8 py-3 rounded-full font-semibold mb-12 hover:opacity-90 transition"
        >
          Apply Now
        </button>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="rounded-xl overflow-hidden w-full md:w-1/2">
            <Image
              src="https://assets.technologyadvice.com/uploads/2024/06/ta-careers.png"
              alt="Team working together"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          {/* Assuming you want another image here, if not, remove this div and adjust styling */}
          <div className="rounded-xl overflow-hidden w-full md:w-1/2">
            <Image
              // You can use a different image for the second slot here
              src="https://assets.technologyadvice.com/uploads/2024/06/another-career-image.png" // Placeholder, replace with actual image if needed
              alt="Another team photo"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Removed the empty div className="mt-8"></div> as it appeared redundant */}

        <div className="flex flex-wrap gap-8 mt-4 text-[#ffd800] font-semibold">
          <a href="/culture" className="hover:underline">Culture</a>
          <a href="/opportunities" className="hover:underline">Opportunities</a>
          <a href="/faqs" className="hover:underline">FAQs</a>
        </div>
      </div>

      <div className="bg-white min-h-screen text-black px-8 md:px-16 py-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Culture Compass</h2>

        <p className="text-lg md:w-3/4 mb-4">
          At TechnologyAdvice we believe our success starts with attracting, hiring, and developing amazing people for our team. In sharing who we are and how we work, we’re giving you insight into our culture so you can make sure it’s a match for you. Our Culture Compass was created to be remarkably explicit and transparent about our unique culture to give you the best opportunity to thrive in our environment and reach your full potential.
        </p>

        <p className="text-lg md:w-3/4 mb-8">
          We want TA to be the place for you and hope our culture resonates with you! If not, that’s okay. We believe in ensuring that everyone understands and aligns with our team’s goals, fostering a collective sense of purpose that drives our actions and dedication.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="border-t py-4">
            <div
              onClick={() => toggleSection(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <span className="text-green-600 text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-4 whitespace-pre-wrap">{section.content}</div>
            )}
          </div>
        ))}
      </div>

      <section className="bg-white px-8 md:px-16 py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          What our team members have to say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#0E1F1C] text-white p-8 rounded-3xl flex-1"
            >
              <div className="flex gap-4">
                <span className="text-green-400 text-4xl">“</span>
                <div className="border-l-2 border-green-400 pl-4">
                  <p className="text-lg font-medium whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Awards</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 flex items-center justify-center rounded-lg shadow-sm h-40"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={award.src}
                    alt={award.alt}
                    layout="fill"
                    objectFit="contain"
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0E1F1C] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center sm:text-left">
            Benefits of working on our team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="bg-gray-800 rounded-full p-4 mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-base text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E1F1C] mb-12">
            Core values
          </h2>

          <div className="space-y-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-xl flex items-center justify-center mr-6">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0E1F1C] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-700">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Picture yourself at TechnologyAdvice
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Image 1 */}
            <div className="flex-1">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://assets.technologyadvice.com/uploads/2023/06/APAC-Outing-768x510.jpeg"
                  alt="Team members wearing crowns"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex-1">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://assets.technologyadvice.com/uploads/2023/06/Bucket-List-Benefit-768x432.jpg"
                  alt="Person skydiving"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows (as seen in the image, assuming they are interactive) */}
          <div className="mt-8 flex gap-4">
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}