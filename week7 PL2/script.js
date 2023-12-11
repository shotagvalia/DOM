// 1. დაწერეთ ფუნქცია, რომელიც გამოიძახება ღილაკზე დაკლიკებისას და შეუცვლის პარაგრაფს ფერს იმის მიხედვით, თუ რას შემოიყვანს მომხმარებელი

// const para = document.getElementById("text");

// function changeColor() {
//   const color = prompt("Enter the color: ");
//   para.style.color = color;
// }

// 2. მოსთხოვეთ მომხმარებელს რიცხვი და შექმენით იმდენი span ტეგი p ტეგში, რამდენიც მომხმარებელმა შემოიყვანა. span-ში უნდა იყოს ჩაწერილი რიცხვები მიმდევრობით. (1-დან იუზერის რიცვის ჩათვლით)

// const number = parseInt(prompt("Enter the number: "));

// if (typeof number === "number" && number >= 1) {
//   generateElements();
// } else {
//   alert("wrong input");
// }

// function generateElements() {
//   for (let i = 1; i <= number; i++) {
//     const span = document.createElement("span");
//     span.textContent = i;

//     const para = document.createElement("p");
//     para.appendChild(span);

//     document.body.appendChild(para);
//   }
// }

// 3. მოცემული გვაქვს საიტების ობიექტების მასივი. თითოეულ ობიექტს აქვს ფროფერთები - name და link. დაწერეთ ფუნქცია, რომელიც შექმნის ახალ ელემენტებს და მათზე დაკლიკებისას გადაამისამართებს მომხმარებელს შესაბამის საიტზე.

let webPages = [
  {
    name: "bitcmap",
    link: "https://www.bitcamp.ge",
    id: "link-1",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/feed/",
    id: "link-2",
  },
  {
    name: "stackoverflow",
    link: "https://stackoverflow.com",
    id: "link-3",
  },
];

function gererateLinks() {
  webPages.forEach((webPage) => {
    const anchor = document.createElement("a");
    anchor.textContent = webPage.name;
    anchor.href = webPage.link;
    anchor.id = webPage.id;

    const para = document.createElement("p");
    para.appendChild(anchor);

    document.body.appendChild(para);
  });

  //   for (let i = 0; i < webPages.length; i++) {
  //     const anchor = document.createElement("a");
  //     anchor.textContent = webPages[i].name;
  //     anchor.href = webPages[i].link;
  //     anchor.id = webPages[i].id;

  //     const para = document.createElement("p");
  //     para.appendChild(anchor);

  //     document.body.appendChild(para);
  //   }
}

gererateLinks();
