let personality =
 ["you are so  smart",
  " you are dumb",
  " very clever", 
  " very lazy",
  "most intelligent",
  "you loser",
  "you are superb",
  "very good",
  "so bad",
  ];
function checkIt() {
    let name = document.querySelector('input').value;
    let random = Math.floor(Math.random() * personality.length);

    alert(personality[random]);
}