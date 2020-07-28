const renderIndex = (content) => {
    return `<html>
                <head>
                    <meta charset="utf-8">
                        <title>React blueprint template</title>
                    </meta>
                </head>
                <body>
                    <h1>Example</h1>
                    <div id="app">
                        <div>${content}</div>
                    </div>
                    <script src="/bundle.js"></script>
                </body>
            </html>`;
}

export default renderIndex;
