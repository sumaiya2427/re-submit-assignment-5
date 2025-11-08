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

    // history tittle and time

    const historyElement = document.getElementById("history-tittle");

    const taskTittleElement = document.createElement("p");
    taskTittleElement.classList.add(
      "p-2",
      "bg-[#F4F7FF]",
      "my-3",
      "rounded-sm"
    );
    taskTittleElement.innerText =
      "You have Complete The Fix Mobile Button Issue";
    historyElement.appendChild(taskTittleElement);
    // -------------------------------
    event.target.disabled = true;
  });
});
