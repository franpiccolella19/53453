# Analizador de Sublenguaje JavaScript — Tema 39568_15

**Materia:** Sintaxis y Semántica de Lenguajes de Programación  
**Institución:** UTN FRM  
**Herramienta:** ANTLR4 + JavaScript (Node.js)

---

## Descripción

Este proyecto implementa un analizador para un subconjunto reducido del lenguaje JavaScript, definido por la siguiente gramática en notación ECMAScript:

```
Program          ::= { Statement }
Statement        ::= ArrayDeclaration | ForStatement | ConsoleStatement
ArrayDeclaration ::= "let" Identifier "=" "[" [ ExpressionList ] "]" ";"
ExpressionList   ::= Expression { "," Expression }
ForStatement     ::= "for" "(" AssignmentStatement Expression ";" AssignmentStatement ")" Block
AssignmentStatement ::= Identifier "=" Expression
ConsoleStatement ::= "console" "." "log" "(" Expression ")" ";"
Block            ::= "{" { Statement } "}"
Expression       ::= Term { ("+" | "-" | "*" | "/") Term }
Term             ::= Identifier | Number | "(" Expression ")"
Identifier       ::= letter { letter | digit | "_" }
Number           ::= digit { digit }
letter           ::= "a" | ... | "z" | "A" | ... | "Z"
digit            ::= "0" | ... | "9"
```

El analizador realiza cuatro tareas:

1. **Análisis léxico y sintáctico** — valida la entrada e informa errores con número de línea y columna.
2. **Tabla de lexemas-tokens** — muestra cada lexema reconocido con su categoría y línea.
3. **Árbol de análisis sintáctico (CST)** — representación en texto del árbol concreto.
4. **Interpretación** — ejecuta el programa y muestra la salida, como lo haría un intérprete básico.

---

## Requisitos previos

| Herramienta | Versión mínima |
|-------------|----------------|
| Node.js     | 16 o superior  |
| npm         | 8 o superior   |
| Java (JRE)  | 1.8 o superior |

Verificar instalación:

```bash
node -v
npm -v
java -version
```

---

## Instalación

1. Clonar o descargar el repositorio.
2. Desde la carpeta raíz del proyecto, instalar dependencias:

```bash
npm install
```

---

## Estructura del proyecto

```
/
├── JSSubset.g4                    ← Gramática ANTLR4
├── index.js                       ← Programa principal
├── CustomJSSubsetVisitor.js       ← Visitor con semántica (intérprete)
├── antlr-4.9.2-complete.jar       ← Herramienta ANTLR
├── generated/                     ← Código generado automáticamente por ANTLR
│   ├── JSSubsetLexer.js
│   ├── JSSubsetParser.js
│   ├── JSSubsetListener.js
│   └── JSSubsetVisitor.js
├── input.txt                      ← Entrada por defecto
├── ejemplo1_valido.txt
├── ejemplo2_valido.txt
├── ejemplo3_invalido.txt
└── ejemplo4_invalido.txt
```

---

## Ejecución

### Con el archivo de entrada por defecto (`input.txt`):

```bash
npm start
```

### Con un archivo específico:

```bash
node index.js ejemplo1_valido.txt
node index.js ejemplo2_valido.txt
node index.js ejemplo3_invalido.txt
node index.js ejemplo4_invalido.txt
```

### Sin archivo (ingreso por teclado):

```bash
node index.js
```
> Escribir el código y presionar **Ctrl+D** (Linux/Mac) o **Ctrl+Z + Enter** (Windows) para finalizar.

---

## Ejemplos incluidos

### ejemplo1_valido.txt — Declaración de array y expresiones aritméticas

```javascript
let valores = [5, 10, 15];
console.log(5 + 10);
console.log(100 - 25);
```

**Salida esperada:**
```
15
75
```

---

### ejemplo2_valido.txt — Bucle `for` con contador

```javascript
let resultado = [];
for (contador = 5 contador; contador = contador - 1) {
    console.log(contador * 2);
}
console.log(3 + 4 * 2);
```

**Salida esperada:**
```
10
8
6
4
2
14
```

> ⚠ La gramática no soporta precedencia de operadores. Las expresiones se evalúan de izquierda a derecha.
> Así, `3 + 4 * 2` equivale a `(3 + 4) * 2 = 14`.

---

### ejemplo3_invalido.txt — Error sintáctico: falta `;`

```javascript
let numeros = [1, 2, 3]
console.log(10 + 5);
```

**Error reportado:**
```
→ Linea 2, columna 0 (token: 'console'): missing ';' at 'console'
```

---

### ejemplo4_invalido.txt — Error léxico: operador `%` no definido

```javascript
let arr = [1, 2, 3];
console.log(10 % 3);
```

**Errores reportados:**
```
→ Linea 2, columna 15: token recognition error at: '%'
→ Linea 2, columna 17 (token: '3'): extraneous input '3' expecting ')'
```

---

## Sintaxis del `for` en este lenguaje

La estructura del `for` en esta gramática es:

```
for ( <init> <condicion> ; <actualizacion> ) { <cuerpo> }
```

Ejemplo: el bucle corre mientras `contador` sea distinto de cero (valor verdadero).

```javascript
for (contador = 5 contador; contador = contador - 1) {
    console.log(contador);
}
```

---

## Regenerar el Lexer y Parser (opcional)

Si se modifica `JSSubset.g4`, regenerar los archivos con:

```bash
npm run generate
```

---

## Gramática ANTLR4 (`JSSubset.g4`)

Ver el archivo `JSSubset.g4` en la raíz del proyecto.
