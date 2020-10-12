import { Request, Response } from 'express';
import EmailService from './../services/EmailService';

const users = [
    { nome: 'Saulo', email: 'alo@saulojoab.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
               name: 'Saulo Joab', 
               email: 'alo@saulojoab.com'
            },
            message: { 
                subject: 'teste', 
                body: 'isso é um teste' 
            }
        });

        return res.send('sucesso');
    }
}