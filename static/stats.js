/*
 * Copyright 2020 Miklos Vajna. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/* global Chart */

function getString(key) {
    return document.getElementById(key).getAttribute("data-value");
}

function addCharts(stats) {
    var daily = stats.daily;
    var dailytotal = stats.dailytotal;
    var monthly = stats.monthly;
    var monthlytotal = stats.monthlytotal;
    var topusers = stats.topusers;
    var usertotal = stats.usertotal;
    var progress = stats.progress;
    var trendlineOptions = {
        style: "rgba(255,105,180, .8)",
        lineStyle: "dotted",
        width: 2,
    };

    var dailyData = {
        // daily is a list of label-data pairs.
        labels: daily.map(x => x[0]),
        datasets: [{
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: daily.map(x => x[1]),
            trendlineLinear: trendlineOptions,
        }]
    };
    var dailyCtx = document.getElementById("daily").getContext("2d");
    new Chart(dailyCtx, {
        type: "bar",
        data: dailyData,
        options: {
            title: {
                display: true,
                text: getString("str-daily-title").replace("{}", progress.date),
            },
            scales: {
                xAxes: [{
                    ticks: { suggestedMin: 0, },
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-daily-x-axis"),
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-daily-y-axis"),
                    },
                }]
            },
            plugins: {
                datalabels: {
                    align: "top",
                    anchor: "end",
                }
            },
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
        }
    });

    var monthlyData = {
        // monthly is a list of label-data pairs.
        labels: monthly.map(x => x[0]),
        datasets: [{
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: monthly.map(x => x[1]),
            trendlineLinear: trendlineOptions,
        }]
    };
    var monthlyCtx = document.getElementById("monthly").getContext("2d");
    new Chart(monthlyCtx, {
        type: "bar",
        data: monthlyData,
        options: {
            title: {
                display: true,
                text: getString("str-monthly-title").replace("{}", progress.date),
            },
            scales: {
                xAxes: [{
                    ticks: { suggestedMin: 0, },
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-monthly-x-axis"),
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-monthly-y-axis"),
                    },
                }]
            },
            plugins: {
                datalabels: {
                    align: "top",
                    anchor: "end",
                }
            },
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
        }
    });

    var monthlytotalData = {
        // monthlytotal is a list of label-data pairs.
        labels: monthlytotal.map(x => x[0]),
        datasets: [{
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: monthlytotal.map(x => x[1]),
            trendlineLinear: trendlineOptions,
        }]
    };
    var monthlyTotalCtx = document.getElementById("monthlytotal").getContext("2d");
    new Chart(monthlyTotalCtx, {
        type: "line",
        data: monthlytotalData,
        options: {
            title: {
                display: true,
                text: getString("str-monthlytotal-title").replace("{}", progress.date),
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-monthlytotal-x-axis"),
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-monthlytotal-y-axis"),
                    },
                }]
            },
            plugins: {
                datalabels: {
                    align: "top",
                    anchor: "end",
                }
            },
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
        }
    });

    var dailytotalData = {
        // dailytotal is a list of label-data pairs.
        labels: dailytotal.map(x => x[0]),
        datasets: [{
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: dailytotal.map(x => x[1]),
            trendlineLinear: trendlineOptions,
        }]
    };

    var dailyTotalCtx = document.getElementById("dailytotal").getContext("2d");
    new Chart(dailyTotalCtx, {
        type: "line",
        data: dailytotalData,
        options: {
            title: {
                display: true,
                text: getString("str-dailytotal-title").replace("{}", progress.date),
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-dailytotal-x-axis"),
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-dailytotal-y-axis"),
                    },
                }]
            },
            plugins: {
                datalabels: {
                    align: "top",
                    anchor: "end",
                }
            },
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
        }
    });

    var topusersData = {
        // topusers is a list of label-data pairs.
        labels: topusers.map(x => x[0]),
        datasets: [{
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: topusers.map(x => x[1]),
        }]

    };
    var topUsersCtx = document.getElementById("topusers").getContext("2d");
    new Chart(topUsersCtx, {
        type: "bar",
        data: topusersData,
        options: {
            title: {
                display: true,
                text: getString("str-topusers-title").replace("{}", progress.date),
            },
            scales: {
                xAxes: [{
                    ticks: { suggestedMin: 0, },
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-topusers-x-axis"),
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-topusers-y-axis"),
                    },
                }]
            },
            plugins: {
                datalabels: {
                    align: "top",
                    anchor: "end",
                }
            },
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
        }
    });

    var usertotalData = {
        // usertotal is a list of label-data pairs.
        labels: usertotal.map(x => x[0]),
        datasets: [{
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: usertotal.map(x => x[1]),
        }]

    };
    var userTotalCtx = document.getElementById("usertotal").getContext("2d");
    new Chart(userTotalCtx, {
        type: "bar",
        data: usertotalData,
        options: {
            title: {
                display: true,
                text: getString("str-usertotal-title").replace("{}", progress.date),
            },
            scales: {
                xAxes: [{
                    ticks: { suggestedMin: 0, },
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-usertotal-x-axis"),
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-usertotal-y-axis"),
                    },
                }]
            },
            plugins: {
                datalabels: {
                    align: "top",
                    anchor: "end",
                }
            },
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
            },
        }
    });

    var progressData = {
        datasets: [{
            label: "Reference",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            data: [ progress.reference ],
        }, {
            label: "OSM",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            data: [ progress.osm ],
        }]

    };
    var progressCtx = document.getElementById("progress").getContext("2d");
    new Chart(progressCtx, {
        type: "horizontalBar",
        data: progressData,
        options: {
            title: {
                display: true,
                text: getString("str-progress-title").replace("{1}", progress.percentage).replace("{2}", progress.date),
            },
            scales: {
                xAxes: [{
                    ticks: { min: 0.0, },
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-progress-x-axis"),
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: getString("str-progress-y-axis"),
                    },
                }]
            },
            plugins: {
                datalabels: {
                    // eslint-disable-next-line no-unused-vars
                    formatter: function(value, context) {
                        // Turn 1000 into '1 000'.
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    }
                }
            },
            tooltips: {
                enabled: false,
            }
        }
    });
}

// eslint-disable-next-line no-unused-vars
document.addEventListener("DOMContentLoaded", function(event) {
    var statsJSON = "@PREFIX@/static/stats.json";
    window.fetch(statsJSON)
        .then((response) => {
            return response.json();
        })
        .then((stats) => {
            addCharts(stats);
        });
});

// vim: shiftwidth=4 softtabstop=4 expandtab:
