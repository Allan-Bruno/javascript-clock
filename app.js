const getNewDate = () => {
  const container = document.getElementById("container");
  let time = new Date();
  container.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
};
setInterval(getNewDate, 1000);
