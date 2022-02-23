const ME = {
  name: "Tao Zhou",
  email: "iamzhoutao92@gmail.com",
  tel: "+19196275224",
  github: "taoalpha",
  // website: "https://taoalpha.github.io",
  location: "Zurich, Switzerland",
};

const Experiences = {
  Working: [
    {
      name: "Software Engineer, Google",
      desc: `Worked on various products and teams.
      - Working on bringing Chat to other products like Gmail etc.
      - Previously on Gerrit, an open-source code review tool where I am a top contributor in 2021.`,
      skills: ["TypeScript", "JS/HTML/CSS", "Angular", "Polymer", "Java"],
      duration: "2018.12 - present",
    },
    {
      name: "Software Engineer, Amazon AWS",
      desc: `- Led the frontend team for directory service, secrets manager.
             - Delivered two new services (AWS Single Sign On, AWS Secrets Manager), one upgrade on an existing service (AWS DirectoryService).`,
      skills: ["JavaScript", "HTML/CSS", "Node", "Shell", "AngularJS"],
      duration: "2017.10 - 2018.11",
    },
    {
      name: "Software Engineer, Scaled Inference",
      desc: `Led the development of the SDK for Node.js and JavaScript, customer facing debugger, and internal testing framework.`,
      skills: ["JavaScript", "HTML/CSS", "Node", "Ampersand", "Python"],
      duration: "2016.07 - 2017.09",
    },
    {
      name: "Full Stack Engineer / Product Manager",
      desc: `- During working holiday at New Zealand, I built several business internal websites.
             - As a product manager in SoGou, I led the Image Search product team, delivered several new features.
             - As an internship at Zhihu, the largest Q&A community in China, contributed to enhancing the experience of internal search.
            `,
      skills: ["JavaScript", "HTML/CSS", "Python/Django", "PHP(WordPress)"],
      duration: "2012.11 - 2015.05",
    },
    {
      name: "Product Manager, Zhihu.com & SoGou.com",
      desc: ``,
      skills: ["Product Management", "Data Analysis", "Python"],
      duration: "2012.11 - 2013.2, 2013.04 - 2014.10",
      hide: true,
    },
  ],
  Project: [
    {
      name: "Beautiful Colors",
      desc: "A simple app to learn all kinds of colors, built with Expo.",
      skills: ["React Native", "React"],
      duration: "2021-08 - present",
      link: "https://expo.dev/@taotao/beautifulcolors",
    },
    {
      name: "Poem & Ci & Lyrics",
      desc: "A react native app for people to read Chinese poems / ci / lyrics.",
      skills: ["React Native", "React", "Swift"],
      duration: "2018-05 - 2020-01",
      link: "https://github.com/taoalpha/shiciyu",
    },
    {
      name: "NPM Trending",
      desc: `Built a crawler to crawl and listen to the updates of npm to generate daily report on trending and dependencies`,
      skills: ["Node", "MongoDB"],
      duration: "2016.12 - 2017.12",
      link: "https://taoalpha.github.io/npm-trending/?date=2022-02-22",
    },
    {
      name: "XiaoBao - Vocabulary Builder",
      desc: "A simple vocabulary builder app.",
      skills: ["React", "Express", "Node"],
      duration: "2018-03 - 2018-06",
      link: "https://github.com/taoalpha/xiaobao-server",
      hide: true,
    },
    {
      name: "Personal Blog",
      desc: `Created an open-source theme for a static site generator, hexo.js, and used in my personal blog.`,
      skills: ["Node", "Static Site Generator"],
      duration: "2013.06 - present",
      hide: true,
    },
    {
      name: "Others",
      desc: `I love creating things and I have created quite a few sites / apps since 2013:
            A fully functional chrome app RSS reader(feedpusher) and extension
            A wechat subscription to rss feed converter(WeiRSS with over 650 stars), etc
            `,
      skills: ["Node", "Python", "ML"],
      duration: "2013.06 - present",
    },
  ],
  Education: [
    {
      name: "M.P.S Information Science, Cornell University",
      courses: [
        "Machine Learning",
        "Algorithm",
        "Database System",
        "Software Engineering",
        "Advance Game Design",
      ],
      duration: "2015.07 - 2016.07",
    },
    {
      name: "B.S Environment Engineering, Tsinghua University",
      duration: "2009.08 - 2013.07",
    },
  ],
};

const Templates = {
  Working: (props) => `
    <li>
        <h3> ${props.link ? `<a href="${props.link}">${props.name}</a>` : props.name} <span> ${props.duration} </span></h3>
        <p> ${props.desc} </p>
        <p><strong>Skills: </strong> ${props.skills.join(", ")}, etc</p>
    </li>
    `,
  Education: (props) => `
        <li>
            <h3> ${props.name} <span> ${props.duration} </span></h3>
            ${
              props.courses
                ? `<p><strong>Courses: </strong> ${props.courses.join(
                    ","
                  )}, etc</p>`
                : ""
            }
        </li>
    `,
  Project: (props) => Templates.Working(props),
  Me: (props) => `
    <li>
      <i class="fas fa-envelope"></i>
      <a href="mailto:${props.email}">${props.email}</a>
    </li>
    ${
      props.website
        ? `
    <li>
      <i class="fas fa-folder"></i>
      <a href="${props.website}">${props.website}</a>
    </li>`
        : ""
    }
    ${
      props.github
        ? `
    <li>
      <i class="fab fa-github"></i>
      <a href="https://github.com/${props.github}">Github: ${props.github}</a>
    </li>` : ""}
    <li>
      <i class="fas fa-phone"></i>
      <a href="tel:${props.tel}">${props.tel}</a>
    </li>
    <li>
      <i class="fas fa-map-marker-alt"></i>
      ${props.location}
    </li>`,
    Title: (props) => `
        <h1>${props.name}</h1>
        <h2>Passionate Software Engineer <span>Web Enthusiast</span> </h2>
    `
};

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function initTemplate(name) {
  let container = document.querySelector(`ul[template='${name}']`);
  let key = name[0].toUpperCase() + name.slice(1);
  container.innerHTML = Experiences[key]
    .filter((props) => !props.hide)
    .map((props) => Templates[key](props))
    .join("\n");
}

ready(() => {
  ["working", "project", "education"].forEach((name) => initTemplate(name));
  document.querySelector("ul[template='me']").innerHTML = Templates.Me(ME);
  document.querySelector("section[template='title']").innerHTML = Templates.Title(ME);
});
