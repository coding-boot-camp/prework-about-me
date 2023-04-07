let QUERY = encodeURIComponent('*[_type == "post"]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${import.meta.env.VITE_SANITY_DATASET}?query=${QUERY}`;

fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    let list = document.querySelector('ul');
    let firstListItem = document.querySelector('ul li');

    if (result.length > 0) {
      // remove the placeholder content
      list.removeChild(firstListItem);

      result.forEach((post) => {
        // create a list element for each post
        let listItem = document.createElement('li');

        // add the post name as the text content
        listItem.textContent = post?.name;

        // add the item to the list
        list.appendChild(listItem);
      });
      let pre = document.querySelector('pre');
      // add the raw data to the preformatted element
      pre.textContent = JSON.stringify(result, null, 2);
    }
  })
  .catch((err) => console.error(err));