# Push notification com Firebase Cloud Message

## Sobre o projeto

O projeto é uma demostração de uso do Firebase Cloud Message implementado com Java Maven e React.

## Links
### Guias
Página inicial do FCM
https://firebase.google.com/docs/cloud-messaging

Visão geral da arquitetura
https://firebase.google.com/docs/cloud-messaging/fcm-architecture

Firebase para admin (servidor)
https://firebase.google.com/docs/admin/setup

Firebase para cliente web
https://firebase.google.com/docs/web/setup

Quickstart JavaScript
https://github.com/firebase/quickstart-js

Quickstart Java
https://github.com/firebase/quickstart-java

Repo Admin Java
https://github.com/firebase/firebase-admin-java

API Java
https://firebase.google.com/docs/reference/admin/java/reference/packages

### Outros
https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=pt

https://medium.com/@sazzadsazib/how-to-send-notification-to-react-app-using-firebase-f257d4bdca28

https://stackoverflow.com/questions/62225339/how-to-use-process-env-in-a-react-service-worker#_=_

https://medium.com/@singh.pankajmca/fcm-integration-with-spring-boot-to-send-push-notification-from-server-side-1091cfd2cacf

https://stackoverflow.com/questions/58386934/web-firebase-messaging-onmessage-not-fired-but-background-notification-perfec

https://firebase.google.com/docs/cloud-messaging/js/receive


## Tecnologias utilizadas
### Back end
- Java
- Spring Boot
- Maven
- Firebase

### Front end
- React
- Firebase

## Como executar o projeto

### Back end
Pré-requisitos:
- Java 11
- Configurar variável de ambiente GOOGLE_APPLICATION_CREDENTIALS referenciando o arquivo chave gerado na plataforma do Firebase

```bash
# clonar repositório
git clone https://github.com/santosediego/poc-push-notifications.git

# entrar na pasta do projeto back end
cd back-end

# executar o projeto
./mvnw spring-boot:run
```

### Front end
Pré-requisitos:
- npm / yarn
- Configurar o aquivo public/firebase-messaging-sw.js e o arquivo src/App.tsx a constante firebaseConfig com a configuração do SDK gerada para o projeto no Firebase:

```javascript
const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };
```

```bash
# clonar repositório
git clone https://github.com/santosediego/poc-push-notifications.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

## Autor

[Nelio Alves](https://github.com/acenelio "Perfil GitHub Nelio Alves")

[Diego Santos](https://github.com/santosediego "Perfil GitHub Diego Santos")
