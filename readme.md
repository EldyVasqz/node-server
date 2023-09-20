¿Qué sucedio al usar async y await?
Al usar async y await, el programa espera de manera sincrónica a que se resuelvan las promesas antes de continuar con la ejecución. Esto hace que el flujo de la app sea más fácil de seguir y entender.

¿Qué sucedio al usar el método then()?
Al usar este metodo, el programa sigue siendo asincrónico, y se deben encadenar las promesas para controlar el flujo del programa. Las promesas se resuelven o rechazan en segundo plano, y se proporcionan funciones de callback para manejar los resultados o errores.

¿Qué diferencias encontraste entre async, await y el método then()?
- Hace que el código sea más legible y se asemeja a una ejecución síncrona, lo que facilita el control del flujo del programa.
- El método .then() se utiliza para encadenar promesas y controlar el flujo de manera más explícita.

En conclusion async/await es una forma más moderna y legible de manejar promesas en comparación con el método .then(), pero ambos métodos pueden ser útiles dependiendo de la situación.