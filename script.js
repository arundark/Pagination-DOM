const url =
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

fetch(url)
  .then((data) => data.json())
  .then((data) => {
    displayPageNav(data);
    displayItems();
  });

let arrayData;
let totalItems;

const displayPageNav = (data) => {
  arrayData = data;
  totalItems = data.length;
  let pagination = ``;
  const perPage = 10;
  const pages = Math.ceil(totalItems / perPage);

  for (let i = 1; i <= pages; i++) {
    pagination += `<a href="#" onClick="displayItems(${i},${perPage})" >${i}</a>`;
  }

  document.getElementById("pagination").innerHTML = pagination;
};

const displayItems = (page = 1, perPage = 10) => {
  const trimStart = (page - 1) * perPage;
  const trimEnd = trimStart + perPage;

  const slicedItems = arrayData.slice(trimStart, trimEnd);

  const html = slicedItems.map(
    (item) =>
      `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
      </tr>`
  );

  document.querySelector("#container tbody").innerHTML = html.join("");
};
