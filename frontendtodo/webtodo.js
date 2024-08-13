let addtask = document.getElementById("add");
let deletetask = document.getElementById("delete");
let inp = document.getElementById("input");
const url = "http://localhost:3000/";

addtask.addEventListener("click", addinfo);
async function addinfo(e) {
  e.preventDefault();
  const res = await fetch(url, {
    method: "POST",
    mode: "no-cors", // Change 'non-cors' to 'no-cors' or another valid value
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     name:"Oways"
    }),
  })

  console.log(res);
  const data = await res.json();
  inp.value = data.info;
}