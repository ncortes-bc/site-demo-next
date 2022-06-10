import { readFileSync, readdirSync } from 'fs';
import path from 'path';

export default function getArticles() {
    let articles = readdirSync('articles');

    articles = articles.map((file) => {
        try {
            file = readFileSync(path.join('articles', file));
            file = JSON.parse(file.toString());
            return file;
        }
        catch {
            return {content:"",link:"",};
        }
    });
    console.log(articles);
    return articles ? articles : {};
}