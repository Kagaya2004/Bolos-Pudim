export default function handler(req, res) {
    // Captura o texto enviado pelo frontend
    const { text } = req.query;

    // Puxa o número de telefone da variável de ambiente segura na Vercel
    // Se a variável não existir (como em testes locais), usa um número de fallback vazio para não quebrar
    const numero = process.env.NUMERO_WHATSAPP || ""; 

    if (!text) {
        return res.status(400).send("Texto da mensagem não fornecido.");
    }

    // Constrói a URL oficial do WhatsApp com o número oculto
    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(text)}`;

    // Faz o redirecionamento (Status 302) do cliente para o WhatsApp
    res.redirect(302, urlWhatsApp);
}