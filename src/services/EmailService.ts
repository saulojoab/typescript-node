interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[]; // A ? significa não obrigatório.
}

interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

interface IMailService {
    sendMail(request: IMessageDTO): void
}

// DTO = Data Transfer Object (DDD)

export default class EmailService implements IMailService {
    sendMail({ to, message }: IMessageDTO ) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}