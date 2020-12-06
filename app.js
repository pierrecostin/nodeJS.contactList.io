const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let urlTab = req.url.split('/');
    let nomFichier = "." + req.url ;
    let data;


    try{ //  si l'utilisateur demande une ressource inexistante
        switch (urlTab[1]){
        case "css" :
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "" :
            nomFichier = "./index.html";
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "accueil" :
            nomFichier = "./Accueil.html";
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "elimination" :
            nomFichier = "./Elimination.html";
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "fabrication" :
            nomFichier = "./Fabrication.html";
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "solution" :
            nomFichier = "./Solution.html";
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "utilisation":
            nomFichier = "./Utilisation.html";
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "js" :
            data = fs.readFileSync(nomFichier, 'utf8');
            res.write(data);
            res.end();
        break;
        case "images":
            let fichier = fs.readFileSync(nomFichier);
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(fichier, 'binary');
        break;
        default :
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>Not Found</h1>");
        }




    }catch(err){ // si l'utilisateur demande une ressource inexistante
        console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>Not Found</h1>");
    }




});


server.listen(4200);


