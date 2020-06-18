/*
type Type =
    | "audio"
    | "template"
    | "video"
    | "image"
    | "text"
    | "flex"
    | "location"
    | "sticker"
    | "undefined";
const type: Type = "flex";
const bubble: 'bubble' = "bubble";
*/

export const content = {
    "type": "text",
    "text": "",
    "size": "xs",
    "gravity": "top",
    "weight": "regular"
}

export const flexMsg = {
    "type": "flex",
    "altText": "テイクアウト注文",
    "contents": {
        "type": "bubble",
        "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                /*{
                    "type": "text",
                    "text": "name",
                    "weight": "regular",
                    "size": "sm",
                    "color": "#AAAAAA"
                },*/ {
                    "type": "text",
                    "text": "ご注文内容",
                    "size": "sm",
                    "weight": "bold",
                    "color": "#AAAAAA"
                }]
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                        "type": "text",
                        "text": "メインフード",
                        "size": "sm",
                        "gravity": "top",
                        "weight": "bold"
                    }]
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                        "type": "text",
                        "text": "サイドメニュー",
                        "size": "sm",
                        "weight": "bold",
                        "gravity": "top",
                    }]
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                        "type": "text",
                        "text": "ドリンクメニュー",
                        "size": "sm",
                        "weight": "bold",
                        "gravity": "top",
                    }]
                },
                {
                    "type": "separator"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                        "type": "text",
                        "text": "合計",
                        "weight": "bold",
                        "size": "sm",
                        "gravity": "top",
                    },
                    {
                        "type": "separator"
                    },
                    {
                        "type": "text",
                        "text": "800円",
                        "size": "sm"
                    }
                    ]
                }
            ]
        }
    }
}
