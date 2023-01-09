import {ApiKey} from "./api-env.js";

if (typeof window !== 'undefined') {
    window.require = function () {
    };
    window.exports = {};
}

// ViewModel KnockOut
var vm = function () {
    //---Variáveis locais
    var self = this;
    self.baseUri = ko.observable('https://rest.coinapi.io');
    self.error = ko.observable('');
    self.iconArray = ko.observableArray([
        {
            name: "Bitcoin",
            id: "BTC",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/4caf2b16a0174e26a3482cea69c34cba.png"
        },
        {
            name: "Ethereum",
            id: "ETH",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/604ae4533d9f4ad09a489905cce617c2.png"
        },
        {
            name: "Litecoin",
            id: "LTC",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/a201762f149941ef9b84e0742cd00e48.png"
        },
        {
            name: "Ripple",
            id: "XRP",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/ba90bcb0cafb4801ac5dd310f47d6411.png"
        },
        {
            name: "Dogecoin",
            id: "DOGE",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/63e240f3047f41c791796784bc719f63.png"
        },
        {
            name: "Solana",
            id: "SOL",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Solana_logo.png/252px-Solana_logo.png"
        },
        {
            name: "Cardano",
            id: "ADA",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/2701173b1b7740f286939659359e225c.png"
        },
        {
            name: "Uniswap",
            id: "UNI",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png"
        },
    ]);
    self.currentCoin = ko.observable('BTC');
    self.currentData = ko.observableArray([]);
    self.chart = ko.observable('');

    self.closeModal = function () {
        $('#coinData').fadeOut('fast');
        $('#main').fadeIn('slow').removeClass('d-none');
        self.chart().destroy();
    }

    self.openModal = function (e) {
        self.currentCoin(e.id);
        $.when(activate("month")).done(function () {
            self.createChart(self.currentData(), "price_high", "price_low")
        });
        $('#main').fadeOut('fast');
        $('#coinData').fadeIn('slow').removeClass('d-none');
    }

    self.formatDate = function (date) {
        if (date < 10) {
            return "0" + date
        }
        return date.toString();
    }

    self.calculateStartTime = function (timePeriod) {
        let date = new Date();
        let minute = date.getMinutes();
        let hour = date.getHours();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (timePeriod === "year") {
            year -= 1;
        } else if (timePeriod === "month") {
            month -= 1;
            if (month === 0) {
                year -= 1;
                month = 12;
            }
        } else if (timePeriod === "day") {
            day -= 1;
            if (day === 0) {
                month -= 1;
                day = 31;
            }
        } else if (timePeriod === "hour") {
            hour === 0 ? hour = 23 : hour -= 1;
        } else {
            console.log("Wrong timeperiod: " + timePeriod)
        }
        return year + "-" + self.formatDate(month) + "-" + self.formatDate(day) + "T" + self.formatDate(hour) + ":" + self.formatDate(minute) + ":00";
    }

    self.updateChart = function (targetId, timeInHours) {
        targetId === "highLow" && self.updateChartData(self.chart(), "price_high", "price_low", timeInHours);
        targetId === "openClose" && self.updateChartData(self.chart(), "price_open", "price_close", timeInHours);
        targetId === "volume" && self.updateChartData(self.chart(), "volume_traded", null, timeInHours);
        targetId === "trades" && self.updateChartData(self.chart(), "trades_count", null, timeInHours);
    }

    self.changeChartData = function (viewModel, event, givenId = "") {
        var targetId = event.target.id ? event.target.id : givenId;
        if (!event.target.classList.contains("active")) {
            // change active button
            $(".filterBtn").removeClass("active");
            $(event.target).addClass("active");
            // For time label updates also
            let hourObj = $('.hourBtn').toArray().filter(item => $(item).hasClass('active'))[0].id;
            var timeInHours = hourObj !== "hour" && hourObj !== "day";
            // update chart
            self.updateChart(targetId, timeInHours)
        }
    }

    self.changeChartTime = function (viewModel, event) {
        if (!event.target.classList.contains("active")) {
            // change active button
            $(".hourBtn").removeClass("active");
            $(event.target).addClass("active");
            var timeInHours = event.target.id !== "hour" && event.target.id !== "day";
            $.when(activate(event.target.id)).done(function () {
                let targetId = $('.filterBtn').toArray().filter(item => $(item).hasClass('active'))[0].id;
                // update chart
                self.updateChart(targetId, timeInHours);
            });
        }
    }

    // timePeriod options: 1MIN=hour, 15MIN=day, 1DAY = month, 7DAY = year
    function activate(timePeriod) {
        var period_id = null;
        if (timePeriod === "hour") period_id = "1MIN";
        if (timePeriod === "day") period_id = "15MIN";
        if (timePeriod === "month") period_id = "1DAY";
        if (timePeriod === "year") period_id = "7DAY";
        var startTime = self.calculateStartTime(timePeriod);
        var path = self.baseUri() + "/v1/ohlcv/BITFINEX_SPOT_" + self.currentCoin() + "_USD/history?period_id=" + period_id + "&time_start=" + startTime;
        return self.ajaxHelper(path).done(function (data) {
            self.currentData(data);
        })
    }

    self.ajaxHelper = function (url) {
        console.log("sending POST")
        $.post()
        return $.ajax({
            type: "POST",
            url: 'php_wrapper.php',
            data: {'url': url},
            success: function (data) {
                console.log(data);
                return data;
            }
        });
        // return $.ajax({
        //     url: url,
        //     type: "GET",
        //     contentType: "application/jsonp",
        //     headers: {"X-CoinAPI-Key": ApiKey},
        //     success: function (data, textStatus, request) {
        //         return data;
        //     },
        //     error: function () {
        //         alert("Could not retrieve data! Try again in some time!");
        //     }
        // });
    }

    self.convertToDate = function (isoDate, toDate = true) {
        let date = isoDate.split("T"); //"2022-12-06T00:00:00"
        let year = date[0].slice(0, 4);
        let month = date[0].slice(5, 7);
        let day = date[0].slice(8, 10);
        let hours = date[1].slice(0, 2);
        let minutes = date[1].slice(3, 5);

        return toDate ? (day + "." + month + "." + year) : (hours + ":" + minutes);
    }

    self.formatLabel = function (param) {
        let split_param = param.split("_");
        let capitalizeFirst = split_param[0].charAt(0).toUpperCase();
        let capitalizeSecond = split_param[1].charAt(0).toUpperCase();
        let firstWord = capitalizeFirst + split_param[0].slice(1);
        let secondWord = capitalizeSecond + split_param[1].slice(1);
        return self.currentCoin() + " " + firstWord + " " + secondWord;

    }

    self.updateChartData = function (chart, param1, param2, dateFormat = true) {
        var chartLabel = dateFormat ? self.currentData().map(item => self.convertToDate(item.time_period_start)) : self.currentData().map(item => self.convertToDate(item.time_period_start, false));
        if (param1 != null && param2 != null) {
            chart.data.labels = chartLabel;
            chart.data.datasets = [
                {
                    label: self.formatLabel(param1) + " (USD)",
                    data: self.currentData().map(day => day[param1])
                },
                {
                    label: self.formatLabel(param2) + " (USD)",
                    data: self.currentData().map(day => day[param2])
                }
            ];
        } else {
            chart.data.labels = chartLabel;
            chart.data.datasets = [
                {
                    label: self.formatLabel(param1),
                    data: self.currentData().map(day => day[param1])
                }
            ];
        }
        chart.update();
    }

    self.createChart = function () {
        self.chart(new Chart(
            document.getElementById('coinGraph'),
            {
                type: 'line',
                data: {
                    labels: self.currentData().map(day => self.convertToDate(day.time_period_start)),
                    datasets: [
                        {
                            label: self.currentCoin() + ' Price High (USD)',
                            data: self.currentData().map(day => day["price_high"])
                        },
                        {
                            label: self.currentCoin() + " Price Low (USD)",
                            data: self.currentData().map(day => day["price_low"])
                        }
                    ],
                },
                options: {
                    responsive: true,
                }
            }
        ));
    }

};

$(document).ready(function () {
    ko.applyBindings(new vm());
});



