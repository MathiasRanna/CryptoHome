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
            name: "Dash",
            id: "DASH",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/73fb6d7915a24f51930809b9e2b84c8f.png"
        },
        {
            name: "Cardano",
            id: "ADA",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/2701173b1b7740f286939659359e225c.png"
        },
        {
            name: "Monero",
            id: "XMR",
            image: "https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/e342d99d4648423e9fb5f68785dd2adf.png"
        },
    ]);
    self.currentCoin = ko.observable('BTC');
    self.currentData = ko.observableArray([
        {
            "time_period_start": "2023-01-06T16:47:00.0000000Z",
            "time_period_end": "2023-01-06T16:48:00.0000000Z",
            "time_open": "2023-01-06T16:47:01.5760000Z",
            "time_close": "2023-01-06T16:47:47.4530000Z",
            "price_open": 16813,
            "price_high": 16813,
            "price_low": 16810,
            "price_close": 16810,
            "volume_traded": 1.42419374,
            "trades_count": 8
        },
        {
            "time_period_start": "2023-01-06T16:48:00.0000000Z",
            "time_period_end": "2023-01-06T16:49:00.0000000Z",
            "time_open": "2023-01-06T16:48:50.6600000Z",
            "time_close": "2023-01-06T16:48:50.6600000Z",
            "price_open": 16810,
            "price_high": 16813,
            "price_low": 16810,
            "price_close": 16813,
            "volume_traded": 0.019,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T16:49:00.0000000Z",
            "time_period_end": "2023-01-06T16:50:00.0000000Z",
            "time_open": "2023-01-06T16:49:28.1160000Z",
            "time_close": "2023-01-06T16:49:37.4940000Z",
            "price_open": 16812,
            "price_high": 16814,
            "price_low": 16812,
            "price_close": 16814,
            "volume_traded": 0.04487,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T16:50:00.0000000Z",
            "time_period_end": "2023-01-06T16:51:00.0000000Z",
            "time_open": "2023-01-06T16:50:03.7810000Z",
            "time_close": "2023-01-06T16:50:57.4500000Z",
            "price_open": 16812,
            "price_high": 16819,
            "price_low": 16812,
            "price_close": 16819,
            "volume_traded": 0.79610824,
            "trades_count": 10
        },
        {
            "time_period_start": "2023-01-06T16:51:00.0000000Z",
            "time_period_end": "2023-01-06T16:52:00.0000000Z",
            "time_open": "2023-01-06T16:51:32.8390000Z",
            "time_close": "2023-01-06T16:51:56.1130000Z",
            "price_open": 16821,
            "price_high": 16823,
            "price_low": 16821,
            "price_close": 16823,
            "volume_traded": 1.6,
            "trades_count": 7
        },
        {
            "time_period_start": "2023-01-06T16:52:00.0000000Z",
            "time_period_end": "2023-01-06T16:53:00.0000000Z",
            "time_open": "2023-01-06T16:52:01.3370000Z",
            "time_close": "2023-01-06T16:52:57.9330000Z",
            "price_open": 16824,
            "price_high": 16827,
            "price_low": 16824,
            "price_close": 16827,
            "volume_traded": 0.98207583,
            "trades_count": 8
        },
        {
            "time_period_start": "2023-01-06T16:53:00.0000000Z",
            "time_period_end": "2023-01-06T16:54:00.0000000Z",
            "time_open": "2023-01-06T16:53:04.2170000Z",
            "time_close": "2023-01-06T16:53:52.8690000Z",
            "price_open": 16827,
            "price_high": 16829,
            "price_low": 16827,
            "price_close": 16829,
            "volume_traded": 0.69655263,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T16:54:00.0000000Z",
            "time_period_end": "2023-01-06T16:55:00.0000000Z",
            "time_open": "2023-01-06T16:54:00.5180000Z",
            "time_close": "2023-01-06T16:54:48.1860000Z",
            "price_open": 16827,
            "price_high": 16827,
            "price_low": 16821,
            "price_close": 16825,
            "volume_traded": 0.07107313,
            "trades_count": 5
        },
        {
            "time_period_start": "2023-01-06T16:55:00.0000000Z",
            "time_period_end": "2023-01-06T16:56:00.0000000Z",
            "time_open": "2023-01-06T16:55:02.3670000Z",
            "time_close": "2023-01-06T16:55:24.3760000Z",
            "price_open": 16827,
            "price_high": 16828,
            "price_low": 16827,
            "price_close": 16828,
            "volume_traded": 0.36807849,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T16:56:00.0000000Z",
            "time_period_end": "2023-01-06T16:57:00.0000000Z",
            "time_open": "2023-01-06T16:56:06.4940000Z",
            "time_close": "2023-01-06T16:56:55.6490000Z",
            "price_open": 16825,
            "price_high": 16826,
            "price_low": 16823,
            "price_close": 16826,
            "volume_traded": 1.31090194,
            "trades_count": 14
        },
        {
            "time_period_start": "2023-01-06T16:57:00.0000000Z",
            "time_period_end": "2023-01-06T16:58:00.0000000Z",
            "time_open": "2023-01-06T16:57:14.7890000Z",
            "time_close": "2023-01-06T16:57:56.1140000Z",
            "price_open": 16825,
            "price_high": 16827,
            "price_low": 16825,
            "price_close": 16826,
            "volume_traded": 0.72175,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T16:58:00.0000000Z",
            "time_period_end": "2023-01-06T16:59:00.0000000Z",
            "time_open": "2023-01-06T16:58:37.3290000Z",
            "time_close": "2023-01-06T16:58:58.5740000Z",
            "price_open": 16826,
            "price_high": 16828,
            "price_low": 16826,
            "price_close": 16827,
            "volume_traded": 0.79222,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T16:59:00.0000000Z",
            "time_period_end": "2023-01-06T17:00:00.0000000Z",
            "time_open": "2023-01-06T16:59:16.7940000Z",
            "time_close": "2023-01-06T16:59:49.4630000Z",
            "price_open": 16827,
            "price_high": 16827,
            "price_low": 16823,
            "price_close": 16823,
            "volume_traded": 0.09424588,
            "trades_count": 7
        },
        {
            "time_period_start": "2023-01-06T17:00:00.0000000Z",
            "time_period_end": "2023-01-06T17:01:00.0000000Z",
            "time_open": "2023-01-06T17:00:09.9460000Z",
            "time_close": "2023-01-06T17:00:43.7890000Z",
            "price_open": 16827,
            "price_high": 16829,
            "price_low": 16827,
            "price_close": 16829,
            "volume_traded": 0.10087857,
            "trades_count": 7
        },
        {
            "time_period_start": "2023-01-06T17:01:00.0000000Z",
            "time_period_end": "2023-01-06T17:02:00.0000000Z",
            "time_open": "2023-01-06T17:01:03.2750000Z",
            "time_close": "2023-01-06T17:01:54.6150000Z",
            "price_open": 16827,
            "price_high": 16835,
            "price_low": 16827,
            "price_close": 16832,
            "volume_traded": 2.28172492,
            "trades_count": 10
        },
        {
            "time_period_start": "2023-01-06T17:02:00.0000000Z",
            "time_period_end": "2023-01-06T17:03:00.0000000Z",
            "time_open": "2023-01-06T17:02:07.8750000Z",
            "time_close": "2023-01-06T17:02:56.6080000Z",
            "price_open": 16832,
            "price_high": 16832,
            "price_low": 16829,
            "price_close": 16829,
            "volume_traded": 0.07393,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T17:03:00.0000000Z",
            "time_period_end": "2023-01-06T17:04:00.0000000Z",
            "time_open": "2023-01-06T17:03:22.6900000Z",
            "time_close": "2023-01-06T17:03:22.6900000Z",
            "price_open": 16829,
            "price_high": 16829,
            "price_low": 16829,
            "price_close": 16829,
            "volume_traded": 0.00235332,
            "trades_count": 1
        },
        {
            "time_period_start": "2023-01-06T17:04:00.0000000Z",
            "time_period_end": "2023-01-06T17:05:00.0000000Z",
            "time_open": "2023-01-06T17:04:02.8420000Z",
            "time_close": "2023-01-06T17:04:57.3460000Z",
            "price_open": 16830,
            "price_high": 16830,
            "price_low": 16829,
            "price_close": 16829,
            "volume_traded": 0.02167,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:05:00.0000000Z",
            "time_period_end": "2023-01-06T17:06:00.0000000Z",
            "time_open": "2023-01-06T17:05:09.6930000Z",
            "time_close": "2023-01-06T17:05:33.1640000Z",
            "price_open": 16831,
            "price_high": 16831,
            "price_low": 16829,
            "price_close": 16829,
            "volume_traded": 0.98203861,
            "trades_count": 5
        },
        {
            "time_period_start": "2023-01-06T17:06:00.0000000Z",
            "time_period_end": "2023-01-06T17:07:00.0000000Z",
            "time_open": "2023-01-06T17:06:01.5520000Z",
            "time_close": "2023-01-06T17:06:04.6410000Z",
            "price_open": 16828,
            "price_high": 16828,
            "price_low": 16828,
            "price_close": 16828,
            "volume_traded": 0.08159707,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T17:07:00.0000000Z",
            "time_period_end": "2023-01-06T17:08:00.0000000Z",
            "time_open": "2023-01-06T17:07:08.4480000Z",
            "time_close": "2023-01-06T17:07:42.9630000Z",
            "price_open": 16826,
            "price_high": 16826,
            "price_low": 16825,
            "price_close": 16826,
            "volume_traded": 0.24776829,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:08:00.0000000Z",
            "time_period_end": "2023-01-06T17:09:00.0000000Z",
            "time_open": "2023-01-06T17:08:00.4930000Z",
            "time_close": "2023-01-06T17:08:17.9750000Z",
            "price_open": 16826,
            "price_high": 16826,
            "price_low": 16824,
            "price_close": 16825,
            "volume_traded": 0.45660172,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:09:00.0000000Z",
            "time_period_end": "2023-01-06T17:10:00.0000000Z",
            "time_open": "2023-01-06T17:09:37.5060000Z",
            "time_close": "2023-01-06T17:09:41.8620000Z",
            "price_open": 16827,
            "price_high": 16827,
            "price_low": 16827,
            "price_close": 16827,
            "volume_traded": 0.03261,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T17:10:00.0000000Z",
            "time_period_end": "2023-01-06T17:11:00.0000000Z",
            "time_open": "2023-01-06T17:10:06.6170000Z",
            "time_close": "2023-01-06T17:10:58.5030000Z",
            "price_open": 16826,
            "price_high": 16826,
            "price_low": 16826,
            "price_close": 16826,
            "volume_traded": 0.04159,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:11:00.0000000Z",
            "time_period_end": "2023-01-06T17:12:00.0000000Z",
            "time_open": "2023-01-06T17:11:08.9610000Z",
            "time_close": "2023-01-06T17:11:11.2070000Z",
            "price_open": 16826,
            "price_high": 16826,
            "price_low": 16826,
            "price_close": 16826,
            "volume_traded": 0.00838,
            "trades_count": 2
        },
        {
            "time_period_start": "2023-01-06T17:12:00.0000000Z",
            "time_period_end": "2023-01-06T17:13:00.0000000Z",
            "time_open": "2023-01-06T17:12:00.5120000Z",
            "time_close": "2023-01-06T17:12:54.3950000Z",
            "price_open": 16825,
            "price_high": 16825,
            "price_low": 16821,
            "price_close": 16822,
            "volume_traded": 3.1115408,
            "trades_count": 12
        },
        {
            "time_period_start": "2023-01-06T17:13:00.0000000Z",
            "time_period_end": "2023-01-06T17:14:00.0000000Z",
            "time_open": "2023-01-06T17:13:00.5290000Z",
            "time_close": "2023-01-06T17:13:25.5930000Z",
            "price_open": 16822,
            "price_high": 16822,
            "price_low": 16822,
            "price_close": 16822,
            "volume_traded": 1.07708962,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T17:14:00.0000000Z",
            "time_period_end": "2023-01-06T17:15:00.0000000Z",
            "time_open": "2023-01-06T17:14:13.2130000Z",
            "time_close": "2023-01-06T17:14:52.4110000Z",
            "price_open": 16822,
            "price_high": 16822,
            "price_low": 16821,
            "price_close": 16822,
            "volume_traded": 0.04628676,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T17:15:00.0000000Z",
            "time_period_end": "2023-01-06T17:16:00.0000000Z",
            "time_open": "2023-01-06T17:15:08.3730000Z",
            "time_close": "2023-01-06T17:15:57.5910000Z",
            "price_open": 16821,
            "price_high": 16821,
            "price_low": 16817,
            "price_close": 16817,
            "volume_traded": 4.09643068,
            "trades_count": 13
        },
        {
            "time_period_start": "2023-01-06T17:16:00.0000000Z",
            "time_period_end": "2023-01-06T17:17:00.0000000Z",
            "time_open": "2023-01-06T17:16:13.3590000Z",
            "time_close": "2023-01-06T17:16:57.6480000Z",
            "price_open": 16816,
            "price_high": 16816,
            "price_low": 16813,
            "price_close": 16814,
            "volume_traded": 0.98293928,
            "trades_count": 9
        },
        {
            "time_period_start": "2023-01-06T17:17:00.0000000Z",
            "time_period_end": "2023-01-06T17:18:00.0000000Z",
            "time_open": "2023-01-06T17:17:07.0590000Z",
            "time_close": "2023-01-06T17:17:54.0270000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16813,
            "price_close": 16814,
            "volume_traded": 0.48480078,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:18:00.0000000Z",
            "time_period_end": "2023-01-06T17:19:00.0000000Z",
            "time_open": "2023-01-06T17:18:44.4140000Z",
            "time_close": "2023-01-06T17:18:59.9080000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.00845,
            "trades_count": 2
        },
        {
            "time_period_start": "2023-01-06T17:19:00.0000000Z",
            "time_period_end": "2023-01-06T17:20:00.0000000Z",
            "time_open": "2023-01-06T17:19:03.2560000Z",
            "time_close": "2023-01-06T17:19:51.1630000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16813,
            "price_close": 16814,
            "volume_traded": 0.02371,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:20:00.0000000Z",
            "time_period_end": "2023-01-06T17:21:00.0000000Z",
            "time_open": "2023-01-06T17:20:01.0630000Z",
            "time_close": "2023-01-06T17:20:57.9310000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 2.04176039,
            "trades_count": 17
        },
        {
            "time_period_start": "2023-01-06T17:21:00.0000000Z",
            "time_period_end": "2023-01-06T17:22:00.0000000Z",
            "time_open": "2023-01-06T17:21:03.6670000Z",
            "time_close": "2023-01-06T17:21:47.4950000Z",
            "price_open": 16814,
            "price_high": 16817,
            "price_low": 16814,
            "price_close": 16817,
            "volume_traded": 0.80443,
            "trades_count": 10
        },
        {
            "time_period_start": "2023-01-06T17:22:00.0000000Z",
            "time_period_end": "2023-01-06T17:23:00.0000000Z",
            "time_open": "2023-01-06T17:22:16.6010000Z",
            "time_close": "2023-01-06T17:22:58.1200000Z",
            "price_open": 16818,
            "price_high": 16818,
            "price_low": 16817,
            "price_close": 16817,
            "volume_traded": 0.28068749,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T17:23:00.0000000Z",
            "time_period_end": "2023-01-06T17:24:00.0000000Z",
            "time_open": "2023-01-06T17:23:09.0970000Z",
            "time_close": "2023-01-06T17:23:46.3820000Z",
            "price_open": 16816,
            "price_high": 16819,
            "price_low": 16814,
            "price_close": 16819,
            "volume_traded": 7.48230179,
            "trades_count": 18
        },
        {
            "time_period_start": "2023-01-06T17:24:00.0000000Z",
            "time_period_end": "2023-01-06T17:25:00.0000000Z",
            "time_open": "2023-01-06T17:24:03.2650000Z",
            "time_close": "2023-01-06T17:24:56.0990000Z",
            "price_open": 16816,
            "price_high": 16817,
            "price_low": 16815,
            "price_close": 16817,
            "volume_traded": 0.18092297,
            "trades_count": 9
        },
        {
            "time_period_start": "2023-01-06T17:25:00.0000000Z",
            "time_period_end": "2023-01-06T17:26:00.0000000Z",
            "time_open": "2023-01-06T17:25:42.7370000Z",
            "time_close": "2023-01-06T17:25:54.3880000Z",
            "price_open": 16820,
            "price_high": 16820,
            "price_low": 16820,
            "price_close": 16820,
            "volume_traded": 0.01708823,
            "trades_count": 2
        },
        {
            "time_period_start": "2023-01-06T17:26:00.0000000Z",
            "time_period_end": "2023-01-06T17:27:00.0000000Z",
            "time_open": "2023-01-06T17:26:02.6990000Z",
            "time_close": "2023-01-06T17:26:51.7090000Z",
            "price_open": 16820,
            "price_high": 16821,
            "price_low": 16819,
            "price_close": 16821,
            "volume_traded": 0.15941,
            "trades_count": 8
        },
        {
            "time_period_start": "2023-01-06T17:27:00.0000000Z",
            "time_period_end": "2023-01-06T17:28:00.0000000Z",
            "time_open": "2023-01-06T17:27:25.1860000Z",
            "time_close": "2023-01-06T17:27:50.6050000Z",
            "price_open": 16818,
            "price_high": 16818,
            "price_low": 16816,
            "price_close": 16816,
            "volume_traded": 0.06373399,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:28:00.0000000Z",
            "time_period_end": "2023-01-06T17:29:00.0000000Z",
            "time_open": "2023-01-06T17:28:20.5660000Z",
            "time_close": "2023-01-06T17:28:20.5660000Z",
            "price_open": 16817,
            "price_high": 16817,
            "price_low": 16817,
            "price_close": 16817,
            "volume_traded": 0.00563901,
            "trades_count": 1
        },
        {
            "time_period_start": "2023-01-06T17:29:00.0000000Z",
            "time_period_end": "2023-01-06T17:30:00.0000000Z",
            "time_open": "2023-01-06T17:29:19.1560000Z",
            "time_close": "2023-01-06T17:29:37.0020000Z",
            "price_open": 16820,
            "price_high": 16820,
            "price_low": 16820,
            "price_close": 16820,
            "volume_traded": 0.03494,
            "trades_count": 2
        },
        {
            "time_period_start": "2023-01-06T17:30:00.0000000Z",
            "time_period_end": "2023-01-06T17:31:00.0000000Z",
            "time_open": "2023-01-06T17:30:08.1740000Z",
            "time_close": "2023-01-06T17:30:45.4550000Z",
            "price_open": 16820,
            "price_high": 16823,
            "price_low": 16820,
            "price_close": 16823,
            "volume_traded": 0.02619,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T17:31:00.0000000Z",
            "time_period_end": "2023-01-06T17:32:00.0000000Z",
            "time_open": "2023-01-06T17:31:00.3410000Z",
            "time_close": "2023-01-06T17:31:54.6190000Z",
            "price_open": 16823,
            "price_high": 16824,
            "price_low": 16822,
            "price_close": 16823,
            "volume_traded": 1.73023271,
            "trades_count": 12
        },
        {
            "time_period_start": "2023-01-06T17:32:00.0000000Z",
            "time_period_end": "2023-01-06T17:33:00.0000000Z",
            "time_open": "2023-01-06T17:32:05.2940000Z",
            "time_close": "2023-01-06T17:32:23.2640000Z",
            "price_open": 16824,
            "price_high": 16824,
            "price_low": 16824,
            "price_close": 16824,
            "volume_traded": 0.80722,
            "trades_count": 5
        },
        {
            "time_period_start": "2023-01-06T17:33:00.0000000Z",
            "time_period_end": "2023-01-06T17:34:00.0000000Z",
            "time_open": "2023-01-06T17:33:09.3180000Z",
            "time_close": "2023-01-06T17:33:44.0840000Z",
            "price_open": 16821,
            "price_high": 16822,
            "price_low": 16821,
            "price_close": 16821,
            "volume_traded": 1.7556289,
            "trades_count": 9
        },
        {
            "time_period_start": "2023-01-06T17:34:00.0000000Z",
            "time_period_end": "2023-01-06T17:35:00.0000000Z",
            "time_open": "2023-01-06T17:34:14.3070000Z",
            "time_close": "2023-01-06T17:34:51.1330000Z",
            "price_open": 16821,
            "price_high": 16821,
            "price_low": 16817,
            "price_close": 16818,
            "volume_traded": 0.41847659,
            "trades_count": 7
        },
        {
            "time_period_start": "2023-01-06T17:35:00.0000000Z",
            "time_period_end": "2023-01-06T17:36:00.0000000Z",
            "time_open": "2023-01-06T17:35:01.2560000Z",
            "time_close": "2023-01-06T17:35:38.7080000Z",
            "price_open": 16817,
            "price_high": 16817,
            "price_low": 16815,
            "price_close": 16815,
            "volume_traded": 0.01974845,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:36:00.0000000Z",
            "time_period_end": "2023-01-06T17:37:00.0000000Z",
            "time_open": "2023-01-06T17:36:00.5060000Z",
            "time_close": "2023-01-06T17:36:51.0460000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.15250954,
            "trades_count": 8
        },
        {
            "time_period_start": "2023-01-06T17:37:00.0000000Z",
            "time_period_end": "2023-01-06T17:38:00.0000000Z",
            "time_open": "2023-01-06T17:37:14.2100000Z",
            "time_close": "2023-01-06T17:37:44.1950000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16813,
            "price_close": 16813,
            "volume_traded": 0.14172849,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T17:38:00.0000000Z",
            "time_period_end": "2023-01-06T17:39:00.0000000Z",
            "time_open": "2023-01-06T17:38:18.1570000Z",
            "time_close": "2023-01-06T17:38:36.0300000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16813,
            "price_close": 16814,
            "volume_traded": 0.0376425,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T17:39:00.0000000Z",
            "time_period_end": "2023-01-06T17:40:00.0000000Z",
            "time_open": "2023-01-06T17:39:02.7880000Z",
            "time_close": "2023-01-06T17:39:29.7290000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.04446,
            "trades_count": 3
        },
        {
            "time_period_start": "2023-01-06T17:40:00.0000000Z",
            "time_period_end": "2023-01-06T17:41:00.0000000Z",
            "time_open": "2023-01-06T17:40:34.7490000Z",
            "time_close": "2023-01-06T17:40:55.1950000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.02186229,
            "trades_count": 2
        },
        {
            "time_period_start": "2023-01-06T17:41:00.0000000Z",
            "time_period_end": "2023-01-06T17:42:00.0000000Z",
            "time_open": "2023-01-06T17:41:00.3790000Z",
            "time_close": "2023-01-06T17:41:55.8890000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.10459,
            "trades_count": 4
        },
        {
            "time_period_start": "2023-01-06T17:42:00.0000000Z",
            "time_period_end": "2023-01-06T17:43:00.0000000Z",
            "time_open": "2023-01-06T17:42:05.0140000Z",
            "time_close": "2023-01-06T17:42:52.1130000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.13762,
            "trades_count": 12
        },
        {
            "time_period_start": "2023-01-06T17:43:00.0000000Z",
            "time_period_end": "2023-01-06T17:44:00.0000000Z",
            "time_open": "2023-01-06T17:43:40.6020000Z",
            "time_close": "2023-01-06T17:43:47.4930000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.00738,
            "trades_count": 2
        },
        {
            "time_period_start": "2023-01-06T17:44:00.0000000Z",
            "time_period_end": "2023-01-06T17:45:00.0000000Z",
            "time_open": "2023-01-06T17:44:12.6940000Z",
            "time_close": "2023-01-06T17:44:46.9190000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16813,
            "price_close": 16814,
            "volume_traded": 0.13151,
            "trades_count": 5
        },
        {
            "time_period_start": "2023-01-06T17:45:00.0000000Z",
            "time_period_end": "2023-01-06T17:46:00.0000000Z",
            "time_open": "2023-01-06T17:45:05.0240000Z",
            "time_close": "2023-01-06T17:45:57.7050000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.06037717,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T17:46:00.0000000Z",
            "time_period_end": "2023-01-06T17:47:00.0000000Z",
            "time_open": "2023-01-06T17:46:04.3000000Z",
            "time_close": "2023-01-06T17:46:36.2640000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.21807032,
            "trades_count": 6
        },
        {
            "time_period_start": "2023-01-06T17:47:00.0000000Z",
            "time_period_end": "2023-01-06T17:48:00.0000000Z",
            "time_open": "2023-01-06T17:47:08.1450000Z",
            "time_close": "2023-01-06T17:47:14.9200000Z",
            "price_open": 16814,
            "price_high": 16814,
            "price_low": 16814,
            "price_close": 16814,
            "volume_traded": 0.03320078,
            "trades_count": 2
        }
    ]);
    self.chart = ko.observable('');

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

    self.updateChart = function (targetId, timeInHours){
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
        var path = self.baseUri() + "/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=" + period_id + "&time_start=" + startTime;
        return self.ajaxHelper(path).done(function (data) {
            self.currentData(data);
        })
    }

    self.ajaxHelper = function (url) {
        return $.ajax({
            url: url,
            type: "GET",
            headers: {"X-CoinAPI-Key": "C6D2ABAB-BF85-4ABC-8643-1E119B7C5113"},
            success: function (data) {
                return data;
            },
            error: function () {
                alert("Could not retrieve data! Try again in some time!");
            }
        })
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
                            label: 'BTC Price High (USD)',
                            data: self.currentData().map(day => day["price_high"])
                        },
                        {
                            label: "BTC Price Low (USD)",
                            data: self.currentData().map(day => day["price_low"])
                        }
                    ]
                }
            }
        ));
    }

    // $.when(activate("month")).done(self.createChart(self.currentData(), "price_high", "price_low"));
};

$(document).ready(function () {
    ko.applyBindings(new vm());
});



