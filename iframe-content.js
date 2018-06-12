export const iframeContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Iframe with Quill</title>
    <link href="/node_modules/quill/dist/quill.snow.css" rel="stylesheet">
    <script src="/node_modules/quill/dist/quill.min.js"></script>
    <style>
        body {
            padding: 0;
            margin: 0;
            height: 500px;
        }

        #quill {
            height: 100%;
            max-height: calc(100% - 66px);
        }
    </style>
</head>

<body>
    <div id="quill"></div>

    <script>
        let options = [
            [
                {
                    header: [2, 3, 4, false]
                }
            ],
            ["bold", "italic", "strike"],
            ["link", "image", "video"],
            ["code-block"],
            [
                {
                    list: "ordered"
                },
                {
                    list: "bullet"
                },
                {
                    align: []
                }
            ],
            ["clean"]
        ];
        var quill = new Quill(document.querySelector("#quill"), {
            modules: {
                toolbar: options,
            },
            theme: "snow"
        });

        window.dispatchEvent(
            new CustomEvent("quill-ready", {
                bubbles: false
            })
        );

        function showModal() {
            window.dispatchEvent(
                new CustomEvent("show-modal", {
                    bubbles: false
                })
            );
        }

        quill.getModule('toolbar').addHandler('image', () => {
            showModal();
        });
    </script>
</body>
</html>
`;