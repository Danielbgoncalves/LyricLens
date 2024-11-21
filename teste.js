
let text = 
`<html>
        <body>
            <br>amor</br>
            <h1>Bem-vindo</h1>
            <p>Isso é um exemplo.</p>
        </body>
</html>`

function scrapingWeb(a){
    a = a.replace(/<br\s*\/?>/g, '\n');
    a = a.replace(/<\/?[^>]+(>|$)/g, ' ');

    console.log(a);
}

scrapingWeb(text);