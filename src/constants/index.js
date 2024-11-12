import about1 from "../assets/img/about1.jpeg";
import html from "../assets/img/html.PNG";
import css from "../assets/img/css.PNG";
import js from "../assets/img/js.PNG";
import react from "../assets/img/react.PNG";
import next from "../assets/img/next.PNG";
import together from "../assets/img/together.PNG";
import socialskill from "../assets/img/socialskill.PNG";
import effort from "../assets/img/effort.PNG";

export const headerNav = [
  {
    title: "top",
    url: "#intro"
  },
  {
    title: "intro",
    url: "#skill"
  },
  {
    title: "site",
    url: "#site"
  },
  {
    title: "description",
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
  img: about1
}

export const skillText = [
  {
    title: "웹/앱 개발자가 되고싶은 최 동훈 입니다.",
    desc: "비록 전공자는 아니지만 웹/앱 개발자의 꿈을 갖고서 끊임없이 배우고, 노력하겠습니다."
  },
  {
    title: "5개월의 부트캠프 과정을 수료했습니다.",
    desc: "멋쟁이 사자처럼에서 프론트앤드 스쿨9기 과정을 수료했고, 많은 지식을 쌓았습니다."
  },
  {
    title: "나 자신에게 엄격하자",
    desc: "나 자신에 대한 기준을 높이고, 자기개발에 많은 시간을 투자하려 노력하겠습니다."
  }
]

export const siteText = [
  {
    text: ["make", "site compliant with", "next.js"],
    title: "넥스트를 이용한 포트폴리오 사이트 제작(react와 vite로도 만들어보았습니다)",
    code: "https://github.com/pitepan3/Port-next",
    view: "https://port-next-donghoon.netlify.app/",
    info: [
      "site coding",
      "production period : seven days",
      "use stack : HTML5/CSS3, Scss Variable, next.js",
    ],
  },
  {
    text: ["넥스트를 이용한 부동산 사이트 제작"],
    title: "카카오, 네이버 로그인/로그아웃 기능과 공공데이터 포털 부동산 실거래 오픈api를 이용하여 법정동코드 좌표의 거래 정보들을 표현해보았습니다.(배포시 api키 오류가 있습니다. 추후 해결 예정입니다.)",
    code: "https://github.com/pitepan3/practice-next.js",
    view: "https://hoons-realestate.netlify.app",
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
    img: html,
    name: "HTML 설명",
  },
  {
    num: "02",
    title: "CSS",
    desc: "HTML 다음 단계인 CSS를 잘 다룸으로써, 사용자에게 재미를 줄 수 있는 기술이라고 생각합니다. 좋은 정보를 전달함에 있어서 눈이 즐거우면 더욱 잘 전달될 수 있다고 생각하기 때문에 사용자의 눈이 즐거운 정보전달이 되도록 노력하겠습니다.",
    img: css,
    name: "CSS 설명",
  },
  {
    num: "03",
    title: "JavsScript",
    desc: "JavaScript는 React를 배우기 위한 첫 발걸음이라고 생각합니다. JS가 React를 배움에 있어서 버팀목이라고 생각하기 때문입니다. React => Vite / Next.js 등을 많이 사용하겠지만, 기본인 JS도 꾸준한 공부를 해야한다 생각합니다.",
    img: js,
    name: "JavsScript 설명",
  },
  {
    num: "04",
    title: "React",
    desc: "가장 기본적인 라이브러리인 React를 잘 다뤄야 한다고 생각합니다. 탄탄한 기본이 앞으로의 발전에 많은 도움이 될 것이라고 생각하기 때문입니다.",
    img: react,
    name: "React 설명",
  },
  {
    num: "05",
    title: "Vite / Next.js",
    desc: "VIte / Next.js 등의 사용 경험이 있습니다. 다양한 프레임워크를 다룰 수 있다는 것은 다양한 환경에 잘 적응할 수 있다는 강점이라고 생각합니다. 앞으로 더욱 다양한 프레임워크를 다룰 수 있도록 노력하겠습니다.",
    img: next,
    name: "Vite / Next.js 설명",
  },
  {
    num: "06",
    title: "협동력",
    desc: "협동력은 팀 프로젝트에서 가장 중요한 부분이라고 생각합니다. 자신만의 의견을 내세우고 고집하기 보다는 서로의 의견을 존중해주고 반영함으로써 팀워크가 생기고, 업무 효율을 끌어올릴 수 있다고 생각합니다.",
    img: together,
    name: "협동력 설명",
  },
  {
    num: "07",
    title: "친화력",
    desc: "사회생활에 있어 가장 중요한 부분중 하나는 친화력이라고 생각합니다. 친화력을 바탕으로 팀원들과의 원만한 대인관계를 유지하고, 자연스럽게 팀 활동에 있어 업무 효율이 올라갈 것이라고 생각합니다.",
    img: socialskill,
    name: "친화력 설명",
  },
  {
    num: "08",
    title: "앞으로의 계획 / 입사 후 포부",
    desc: "입사 후에도 현재 상황에 안주하지 않고 주도적인 학습을 통해 끊임없는 자기계발을 통해 풀스텍 개발자가 될수 있도록 노력하겠습니다. 또한, 시간이 흘러 후배가 들어온다면 부끄러운 선배가 아닌 멘토같은, 팀에 꼭 필요한 인재가 되겠습니다. ",
    img: effort,
    name: "포트폴리오",
  },
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