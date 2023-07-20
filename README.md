This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


function goToDashboard() {
  
}

function login(email, password, callback) {
  // toda mi ejecución
  callback()
}

login("ejemplo@ejemplo.com", "123456", goToDashboard)

// // Función declarativa
// function login() {

// }

// // función de expresión
// const login = function() {

// }

// // función flecha o arrow function
// const login = () => {

// }

callback

function functionName() {
  console.log("Hola bb")
}

functionName();

(function() {
    console.log("Hola bb")
})()


// Función declarativa
// función de expresión
// función flecha o arrow function
// callbacks
// Promesas
// eventos bloqueantes (sincronico)
// eventos no blqueantes (asincronico)
// javascript es mono hilo - multihilo
// polling
// Pilas y Colas
// timers (setTimeout, setImmediate)
// event loop
// IIFE
// parametros y argumentos

function hello() {
  console.log("hola mundo")
}

setTimeout(hello, 500)
setImmediate(hello)

const promise = new Promise(
  (resolve, reject) => {
    try {
      resolve("Hola")
    } catch {
      reject("error")
    }
  }
)

promise
.then(
  (result) => {
    console.log(result)
  }
)
.catch(
  (error) => {
    console.log(error)
  }
)

// .then saber si todo esta okay 
// .catch saber si algo salio mal
