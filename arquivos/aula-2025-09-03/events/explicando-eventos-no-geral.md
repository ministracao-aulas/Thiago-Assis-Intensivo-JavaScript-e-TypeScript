# Processo síncrono, assíncrono e orientado a eventos

Diferença entre **processo síncrono, assíncrono e orientado a eventos**.
> É importante reforçar que, em programação, eventos são uma forma de **desacoplar responsabilidades**: você não precisa enfiar tudo no mesmo fluxo, pode disparar uma "mensagem" que outros pedaços do sistema vão ouvir e reagir.

Aqui vai um exemplo:

---

## Apresentando um problema

Imagina que temos um sistema de posts, onde cada usuário tem um **saldo** para poder criar publicações.

```
saldo inicial: 10
```

---

### Exemplo de ação **síncrona**

Tudo acontece em sequência, dentro do mesmo fluxo.
O tempo total cresce conforme adicionamos mais tarefas.

```
envia payload -> API (cadastro de post) (
    verificar se tem saldo .......... 3s
    cadastrar no DB ................. 1s
    debitar do saldo ................ 3s
    notificar o usuário ............. 2s
    notificar seguidores (cada um) .. 0.5s por seguidor
    retornar o post ................ 0.2s
)

Tempo total: no mínimo 9s (sem contar seguidores)
```

➡️ Problema: o usuário fica esperando **todas** as etapas finalizarem antes de receber a resposta.

---

### Exemplo de ação **assíncrona (forma 1)**

Algumas tarefas são empurradas para segundo plano.
Assim, o fluxo principal fica mais rápido, mas ainda há uma certa mistura de responsabilidades.

```
envia payload -> API (cadastro de post) (
    verificar se tem saldo .......... 3s
    cadastrar no DB ................. 1s
    segundo_plano(debitar saldo) .... 0.5s
    segundo_plano(notificar usuário)  0.5s
    segundo_plano(notificar segs) ... 0.5s
    retornar o post ................. 0.2s
)

Tempo total: ~6s
```

➡️ Melhor, mas ainda existe acoplamento: a API precisa saber quem notificar, como debitar etc.

---

### Exemplo de ação **orientada a eventos (forma 2)**

Agora, a API **só dispara um evento** e não precisa se preocupar com o que acontece depois.
Cada ouvinte (listener) reage ao evento de forma independente.

```
envia payload -> API (cadastro de post) (
    verificar se tem saldo .......... 3s
    cadastrar no DB ................. 1s
    dispara_evento("post_criado", dados) .. 0.5s
    retornar o post ................. 0.2s
)

Tempo total: ~4-5s
```

E em outro lugar do sistema:

```
ouvinte_de_evento("post_criado", dados) {
    debitar do saldo ................. 3s
    notificar usuário ................. 2s
    notificar seguidores (cada um) .... 0.5s
}
```

➡️ Vantagem: o fluxo principal fica limpo e rápido.
➡️ Flexibilidade: se amanhã você quiser adicionar "enviar e-mail", basta criar um **novo ouvinte**. Não é necessário mexer no código de criação do post.

---

### Pontos importantes para o aluno levar

1. **Síncrono** → tudo no mesmo fluxo, lento, mas previsível.
2. **Assíncrono** → algumas coisas em paralelo, melhora a performance.
3. **Eventos** → desacoplamento total. O fluxo principal só dispara um evento e não se preocupa com quem vai reagir.

--------------------------
### Pseudocódigo em **JavaScript bem simples**

Não vamos usar nada avançado, só o essencial para ele perceber a diferença entre os três modelos.

---

# 🔹 Exemplo 1 – Fluxo Síncrono

```js
function criarPost(dados) {
  console.log("Verificando saldo... (3s)");
  console.log("Salvando no banco... (1s)");
  console.log("Debitando saldo... (3s)");
  console.log("Notificando usuário... (2s)");
  console.log("Notificando seguidores... (0.5s cada)");

  return { ...dados, id: 1 };
}

const post = criarPost({ titulo: "Meu primeiro post" });
console.log("Post criado:", post);
```

➡️ Tudo acontece em **sequência**.
➡️ O usuário só recebe resposta **depois de tudo terminar**.

---

# 🔹 Exemplo 2 – Fluxo Assíncrono (usando `setTimeout`)

Aqui simulamos **tarefas em paralelo**.

```js
function criarPost(dados) {
  console.log("Verificando saldo... (3s)");
  console.log("Salvando no banco... (1s)");

  // jogamos algumas ações para o "segundo plano"
  setTimeout(() => console.log("Debitando saldo... (3s)"), 0);
  setTimeout(() => console.log("Notificando usuário... (2s)"), 0);
  setTimeout(() => console.log("Notificando seguidores... (0.5s cada)"), 0);

  return { ...dados, id: 1 };
}

const post = criarPost({ titulo: "Post assíncrono" });
console.log("Post criado:", post);
```

➡️ O usuário recebe o post **mais rápido**.
➡️ Mas a função ainda tem que **saber tudo** que precisa ser feito.

---

# 🔹 Exemplo 3 – Orientado a Eventos (com `EventEmitter`)

Aqui entra o conceito de **eventos**.
O fluxo principal só dispara um **evento** e quem estiver ouvindo decide o que fazer.

```js
const EventEmitter = require("events");
const eventos = new EventEmitter();

function criarPost(dados) {
  console.log("Verificando saldo... (3s)");
  console.log("Salvando no banco... (1s)");

  // disparamos o evento
  eventos.emit("post_criado", dados);

  return { ...dados, id: 1 };
}

// ouvintes do evento
eventos.on("post_criado", (dados) => {
  console.log("Debitando saldo... (3s)");
});

eventos.on("post_criado", (dados) => {
  console.log("Notificando usuário... (2s)");
});

eventos.on("post_criado", (dados) => {
  console.log("Notificando seguidores... (0.5s cada)");
});

const post = criarPost({ titulo: "Post com eventos" });
console.log("Post criado:", post);
```

➡️ O fluxo principal só sabe que precisa **emitir um evento**.
➡️ Novos comportamentos podem ser adicionados **sem alterar `criarPost`**.

---

## 🧠 Conclusão

1. **Síncrono** → fácil de entender, mas lento.
2. **Assíncrono** → mais rápido, mas ainda acoplado.
3. **Eventos** → o código fica organizado, desacoplado e extensível.

-----------------------------
