# Backend do chat em tempo real

Este projeto é o back-end do **chat em tempo real** desenvolvido em **Node.js** com **Web Socket**.  
Ele permite você conversar com outras pessoas em tempo real quando integrado com seu front-end.

---

## Tecnologias usadas

- **Node js** – Servidor web.
- **Web Socket** - Tecnologia responsável por transmitir as mensagens em tempo real.

---

## Requerimentos

- **Node.js** – A partir da versão 22.
- **npm** – A partir da versão 10.

---

## Variáveis de ambiente (.env)

```bash
PORT=8080
```

---

## Passo a passo para rodar localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Maycon40/back-end-chat-tempo-real.git
cd back-end-chat-tempo-real
```

### 2️⃣ Copiar a variável de ambiente

```bash
cp env.example .env
```

### 3️⃣ Instalar as dependências

```bash
npm i
```

### 4️⃣ Subir o servidor web

```bash
npm run dev
```

---

## Observações

- O front-end precisa está rodando para que o chat funcione.
- O front-end do chat está no sequinte repositório: https://github.com/Maycon40/chat-tempo-real.

