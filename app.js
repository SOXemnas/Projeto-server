import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send(`
    <hl>Titulo do meu servidor</hl>
    Meu primeiro servidor Typescript
    `);
})

app.get('/livros', (req: Request, res:Response) => {
    res.send(livros)
})

app.get('/livros/id'), (req: Request, res: Response) => {
    const livro = livros.find((l) => l.id === parseInt(req.params.id));
    if (!livro) {
        return res.status(404).json({mensagem: 'Livro não encontrado'});
    }
    res.send (livro);
}

app.post('/Livros', (req: Request,res: Response) => {
    const novoLivro = {
        id: livros.length + 1,
        nome: req.body.nome,
        ano: req.body.ano
    }
    livros.push(novoLivro)
    res.status(201).json(novoLivro)
})
const porta: number = 3000;

app.listen(porta, () => {
    console.log(`Servidor on no endereço http://localhost:${porta}`);
})

const livros: Array<any> = [
    {
        id: 1,
        nome: 'Senhor dos anéis',
        ano: 2000,
    },
    {
        id: 2,
        nome: 'Alice no pais das maravilhas',
        ano: 1998,
    }
]