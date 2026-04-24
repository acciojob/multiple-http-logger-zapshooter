const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];
// Don't change the above line
// Write your code here

const fetchAll = async () => {
  const promises = urls.map(url => fetch(url).then(res => res.json()));
  const responses = await Promise.all(promises);
  responses.forEach(data => console.log(data));
};

fetchAll();