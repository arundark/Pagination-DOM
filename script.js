const url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";
const data1 = fetch(url)
  .then((data) => data.json())
  .then((data) => appendAnchor(data));

let pagination = document.querySelector("#pagination");
console.log(pagination);

function appendAnchor(data) {
  let first = document.createElement("a");
  first.href = "#";
  first.innerText = "first";
  pagination.append(first);

  let previous = document.createElement("a");
  previous.href = "#";
  previous.innerText = "previous";
  pagination.append(previous);

  for (let i = 1; i < 10; i++) {
    let anchor = document.createElement("a");
    anchor.href = "#";
    anchor.innerText = data[i].id;
    pagination.append(anchor);
  }
}
