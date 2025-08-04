const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Project Resloved!!!");
  }, 2000);
});

myPromise.then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
