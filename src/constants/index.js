import about from "../assets/img/about.jpg";
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";


export const headerNav = [
  {
    title: "intro",
    url: "#intro"
  },
  {
    title: "skill",
    url: "#skill"
  },
  {
    title: "site",
    url: "#site"
  },
  {
    title: "portfolio",
    url: "#port"
  },
  {
    title: "contact",
    url: "#contact"
  }
];

export const introText = {
  title: "web front-end developer",
  desc: [""],
  img: about
}

export const skillText = [
  {
    title: "웹 개발자가 되고싶은 최 동훈 입니다.",
    desc: "비록 전공자는 아니지만 웹 개발자의 꿈을 갖고서 끊임없이 노력했습니다."
  },
  {
    title: "5개월의 부트캠프 과정을 수료했습니다.",
    desc: "멋쟁이 사자처럼에서 프론트앤드 스쿨9기 과정을 수료하기까지 많은 지식을 쌓았습니다."
  },
  {
    title: "나 자신에게 엄격하자",
    desc: "부트캠프 수료 이후에도 자기개발에는 끝이 없기에 더 많은 지식을 쌓으려 노력합니다."
  }
]

export const siteText = [
  {
    text: ["make", "site compliant with", "webstandard"],
    title: "비트를 이용한 포트폴리오 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-vite",
    view: "https://port2023-vite.netlify.app",
    info: [
      "site coding",
      "production period : seven days",
      "use stack : HTML5/CSS3, CSS Variable, Vite",
    ],
  },
  {
    text: ["make", "site compliant with", "react.js"],
    title: "리액트를 이용한 포트폴리오 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-react",
    view: "https://port2023-react.netlify.app",
    info: [
      "site coding",
      "production period : seven days",
      "use stack : HTML5/CSS3, CSS Variable, react",
    ],
  },
  {
    text: ["make", "site compliant with", "next.js"],
    title: "넥스트를 이용한 포트폴리오 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-next",
    view: "https://port2023-next.netlify.app",
    info: [
      "site coding",
      "production period : seven days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
  {
    text: ["make", "site compliant with", "next.js"],
    title: "넥스트를 이용한 부동산 사이트 제작",
    code: "https://github.com/pitepan3/practice-next.js",
    view: "https://port2023-vue.netlify.app",
    info: [
      "site coding",
      "production period : one month",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  }
];

export const portText = [
  {
    num: "01",
    title: "HTML",
    desc: "웹 프론트앤드의 가장 기본적인 HTML을 쉽게 다룸으로써, 가장 이상적인 트리구조를 갖추도록 항상 노력하고 있습니다. 다른 개발자가 볼 경우에도 쉽게 이해할 수 있도록 가독성 좋은 코드를 구성하도록 합니다.",
    img: port01,
    code: "https://github.com/kimsangjunv1/-React-Portfolio",
    name: "김상* 포트폴리오",
  },
  {
    num: "02",
    title: "CSS",
    desc: "HTML 다음 단계인 CSS를 잘 다룸으로써, 사용자에게 재미를 줄 수 있는 기술이라고 생각합니다. 좋은 정보를 전달함에 있어서 눈이 즐거우면 더욱 잘 전달될 수 있다고 생각하기 때문에 사용자의 눈이 즐거운 정보전달이 되도록 노력하겠습니다.",
    img: port02,
    code: "https://github.com/seolhee313/PORTFOLIO-REACT",
    name: "천설* 포트폴리오",
  },
  {
    num: "03",
    title: "JavsScript",
    desc: "JavaScript 어쭈구 ",
    img: port03,
    code: "https://github.com/seolhee313/PORTFOLIO-REACT",
    name: "천설* 포트폴리오",
  },
  {
    num: "04",
    title: "React",
    desc: "React 어쭈구",
    img: port04,
    code: "https://github.com/dlgnsrb227/portfolio-next",
    name: "이훈* 포트폴리오",
  },
  {
    num: "05",
    title: "Vite / Next.js",
    desc: "Vite / Next.js 어쭈구",
    img: port05,
    code: "/",
    name: "박준* 포트폴리오",
  },
  {
    num: "06",
    title: "협동력",
    desc: "협동력 어쭈구",
    img: port07,
    code: "/",
    name: "포트폴리오",
  },
  {
    num: "07",
    title: "친화력",
    desc: "친화력 어쭈구",
    img: port09,
    code: "/",
    name: "포트폴리오",
  },
  // {
  //   num: "10",
  //   title: "앞으로의 계획 / 입사 후 포부",
  //   desc: "입사 후에도 현재 상황에 안주하지 않고 주도적인 학습을 통해 끊임없는 자기계발을 통해 풀스텍 개발자가 될수 있도록 노력하겠습니다. 또한, 시간이 흘러 후배가 들어온다면 부끄러운 선배가 아닌 멘토같은, 팀에 꼭 필요한 인재가 되겠습니다. ",
  //   img: port10,
  //   code: "/",
  //   name: "포트폴리오",
  // },
];

export const contactText = [
  {
    link: "https://github.com/pitepan3",
    title: "GitHub: pitepan3",
  },
  {
    link: "mailto:pitepan3@naver.com",
    title: "mail : pitepan3@naver.com",
  },
];

export const footerText = [
  {
    title: "youtube",
    desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/@Webstoryboy",
  },
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/webstoryboy",
  },
  {
    title: "blog",
    desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
    link: "https://webstoryboy.co.kr",
  },
  {
    title: "gsap",
    desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
  },
  {
    title: "react",
    desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-react",
  },
  {
    title: "vue",
    desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-vue",
  },
  {
    title: "next",
    desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-next",
  },
];