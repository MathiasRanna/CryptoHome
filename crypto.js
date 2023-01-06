if (typeof window !== 'undefined') {
    window.require = function () {
    };
    window.exports = {};
}

// ViewModel KnockOut
var vm = function () {
    //---Variáveis locais
    var self = this;
    // self.baseUri = ko.observable('https://rest.coinapi.io');
    self.error = ko.observable('');
    self.iconArray = ko.observableArray([
        {name: "Bitcoin", id: "BTC", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/4caf2b16a0174e26a3482cea69c34cba.png"},
        {name: "Ethereum", id: "ETH", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/604ae4533d9f4ad09a489905cce617c2.png"},
        {name: "Litecoin", id: "LTC", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/a201762f149941ef9b84e0742cd00e48.png"},
        {name: "Ripple", id: "XRP", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/ba90bcb0cafb4801ac5dd310f47d6411.png"},
        {name: "Dogecoin", id: "DOGE", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/63e240f3047f41c791796784bc719f63.png"},
        {name: "Dash", id: "DASH", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/73fb6d7915a24f51930809b9e2b84c8f.png"},
        {name: "Cardano", id: "ADA", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/2701173b1b7740f286939659359e225c.png"},
        {name: "Monero", id: "XMR", image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/e342d99d4648423e9fb5f68785dd2adf.png"},
    ]);
    const headers = {"X-CoinAPI-Key": "C6D2ABAB-BF85-4ABC-8643-1E119B7C5113"};

    self.activate = function () {
        var path = self.baseUri() + "/v1/assets/icons/60";
        self.ajaxHelper(path).done(function (data) {
            console.log(data);
            self.iconArray(data);
        })
    }

    self.ajaxHelper = function (url){
        console.log("Starting ajax call to " + url);
        return $.ajax({
            url: url,
            type: "GET",
            headers: {"X-CoinAPI-Key": "C6D2ABAB-BF85-4ABC-8643-1E119B7C5113"},
            success: function (data){
                return data;
            },
            error: function (){
                alert("Could not retrieve data! Try again in some time!");
            }
        })
    }

    // self.activate();
    console.log("VM initialized!");
};

$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});


function createChart(charType, dataApi, chartId, param1, param2, title, smallTitle) {
    const ctx = document.getElementById(chartId);
    const currData = dataApi.map(item => item.Medals.filter(medal => medal.MedalName === smallTitle && medal.Counter));
    console.log();

    new Chart(ctx, {
        type: charType,
        data: {
            labels: dataApi.map(item => item.CountryName),
            datasets: [{
                label: smallTitle,
                data: currData.map(item => item.map(item => item.Counter)),
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title
                }
            }
        }

    });

}