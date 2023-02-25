// import { editTask } from "../index";
// function moreButton(idClicked, lists) {
//   lists.forEach((list) => {
//     if (list.childNodes[2].firstChild.id === idClicked) {
//       const elem = document.createElement('div');
//       elem.className = 'click-more';
//       let el = document.createElement('button');
//       el.classList = 'delete fa-sharp fa-solid fa-trash';
//       el.id = idClicked;
//       el.onclick = deleteTask;
//       elem.appendChild(el);
//       el = document.createElement('button');
//       el.classList = 'edit fa-regular fa-pen-to-square';
//       el.id = idClicked;
//       el.onclick = editTask;
//       elem.appendChild(el);
//       list.replaceChild(elem, list.childNodes[2]);
//     }
//   });
// }

// export default function clickedBtn(e) {
//   const idClicked = e.target.id;
//   moreButton(idClicked);
// }
