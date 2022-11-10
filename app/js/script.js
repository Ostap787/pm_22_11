//const { task } = require("gulp");

//const { task } = require("gulp");


$("#sidebar").first().sidebar("attach events", ".ui.icon.item .bars");


// $(".checkbox").on('click', 'input[type="checkbox"]', function () {
//   $(this).next('label').toggleClass('highlight', this.checked);
// });

////////////////////////////////////////////////////////////
const ctx1 = document.getElementById("myChart1").getContext("2d");
const gradientStroke = ctx1.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(1, "#3f51b5");
gradientStroke.addColorStop(0.7, "#3f51b5");
gradientStroke.addColorStop(0.1, "#ff9f00");
gradientStroke.addColorStop(0, "#4baf4f");
gradientStroke.addColorStop(0.6, "#e54919");
gradientStroke.addColorStop(0.4, "#e54919");
gradientStroke.addColorStop(0.3, "#ff9f00");
const myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
        datasets: [
            {
                label: "Line",
                borderColor: gradientStroke,
                pointHoverBorderWidth: 1,
                pointRadius: 0,
                fill: false,
                borderWidth: 10,
                pointHoverRadius: 4,
                data: [60, 53, 55, 54, 56, 45, 61, 52, 59, 50, 58],
                type: "line",
                order: 1,
            },
            {
                label: "Bar",
                data: [70, 70, 70, 70, 70, 70, 70, 70],
                backgroundColor: "white",
                order: 2,
            },
        ],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
    linearGradientLine: true,
    options: {
        tooltips: {
            mode: "nearest",
            intersect: false,
            yAlign: null,
            xAlign: "center",
            borderColor: "#3f51b5",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            borderWidth: 9,

            callbacks: {
                label: function (t, d) {
                    var xLabel = d.datasets[t.datasetIndex].label;
                    var yLabel = t.yLabel / 80;
                    if (t.datasetIndex === 1) return false;
                    else if (t.datasetIndex === 0)
                        return xLabel + "%" + yLabel.toFixed(2);
                },
            },
        },
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    barPercentage: 0.97,
                    categoryPercentage: 1,
                },
            ],
            yAxes: [
                {
                    stacked: true,
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
    },
});

////////////////////////////////////////////////////////////

const ctx3 = document.getElementById("myChart3").getContext("2d");
const myChart3 = new Chart(ctx3, {
    type: "bar",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                borderWidth: -2,
                label: "Customers",
                backgroundColor: "#3f40b5",
                hoverBackgroundColor: "#4640c9",
                data: [470, 230, 235, 235, 500, 390, 480, 480, 480, 400, 480, 480],
            },
            {
                borderWidth: -2,
                label: "Users",
                backgroundColor: "#3f53b5",
                hoverBackgroundColor: "#4680c9",
                data: [270, 50, 60, 70, 160, 130, 300, 180, 205, 150, 150, 170],
            },
        ],
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: false,
                    },
                },
            ],
            yAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
    },
});

///////////////////
const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
    type: "pie",
    data: {
        labels: ["Chrome", "Safari", "Firefox"],
        datasets: [
            {
                data: [64, 24, 12],
                backgroundColor: ["#3f51b5", "#00ffff", " #4baf4f"],
                borderWidth: 0,
            },
        ],
    },
    options: {
        rotation: 1,
        responsive: false,
        title: {
            display: true,
            padding: 5,
        },
        legend: {
            display: true,
            position: "right",
            labels: {
                boxWidth: 20,
                fontColor: "#111",
                padding: 20,
            },
        },
    },
});

/////////////////////////////////

$(".ui.right.aligned.header").each(function () {
    $(this)
        .prop("Counter", 0.0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
});

$(".count1").each(function () {
    $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: parseFloat($(this).text()),
            },
            {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                    $(this).text(now.toFixed(3) + "K");
                },
            }
        );
});

// $(".count1").on("click", function () {
//   $(this).css("color", "red");
// });

function updateCounterDisplay() {
    var count = $(".todo-container").length;
    $(".counter-display").text(count);
}

$(document).ready(function () {
    addListenerToAddTask();
    addListenerToDeleteAllTasks();
    addListenerToToggleAllTasks();
    as();
});
function addListenerToAddTask() {
    $(".ui.blue.button").click(function () {
        var valueTask = $(".input-task").val();
        if (!valueTask.trim()) {
            alert("Please, enter your text!");
            return false;
        }
        var containerTodo =
            "<div class='todo-container' style='height:36px'>  <input type='checkbox'><label>" +
            valueTask +
            "</label><button class='delete-task'>Delete</button></div>";
        $(".todos-container").append(containerTodo);
        $(".input-task").val("");
        addListenerToDeleteTask();
        updateCounterDisplay();
    });
}

function addListenerToDeleteTask() {
    $(".delete-task").click(function () {
        $(this).parents(".todo-container").remove();
        updateCounterDisplay();
    });
}

function addListenerToDeleteAllTasks() {
    $(".delete-all-tasks").click(function () {
        $(".todos-container").empty();
        updateCounterDisplay();
    });
}

function addListenerToToggleAllTasks() {
    $(".toggle-all-tasks").click(function () {
        $(".todo-container > input[type=checkbox]").prop("checked", true);
    });
}

function as() {
    $(".all-tasks").click(function () {
        $(".todo-container > input[type=checkbox]").prop("checked", false);
    });
}

////////////////////////////////////////

$(".ui.green.button.all").click(function () {
    $.ajax({
        url: "/js/data.json",
        method: "get",

        success: function (response) {
            console.log(response);
            //
            for (let index = 0; index < response["tasks"].length; index++) {
                var checked = response["tasks"][index]["completed"];
                console.log(checked);
                var containerTodo =
                    `<div class='todo-container' style='height:36px'>  <input type='checkbox' ${
                        checked ? "checked=true" : ""
                    }><label>` +
                    response["tasks"][index]["description"] +
                    "</label><button class='delete-task'>Delete</button></div>";
                $(".todos-container").append(containerTodo);
                $(".input-task").val("");
                addListenerToDeleteTask();
                updateCounterDisplay();
            }

            $(".ui.green.button.all").click(function () {
                $(".todos-container").empty();
                updateCounterDisplay();
            });

            //
        },
    });
});
