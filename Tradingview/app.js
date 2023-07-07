new TradingView.widget(
    {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "240",
        "timezone": "PST/PDT",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "watchlist": [
            "NASDAQ:AAPL",
            "AMEX:VOO",
            "NASDAQ:NKE",
            "NASDAQ:AMD"
        ],
        "details": true,
        "hotlist": true,
        "calendar": true,
        "studies": [
            "STD;SMA"
        ],
        "container_id": "chart",
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650"
    }
);