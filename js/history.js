const buttons = document.querySelectorAll(".complete-button");

const taskNumberElement = document.getElementById("task-number");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.target.classList.add("bg-blue-100");

    const currentTask = Number(taskNumberElement.innerText);

    taskNumberElement.innerText = currentTask - 1;

    const totalNumberElement = document.getElementById("total-task");
    const currentTottalTask = Number(totalNumberElement.innerText);
    totalNumberElement.innerText = currentTottalTask + 1;

    event.target.disabled = true;
  });
});
