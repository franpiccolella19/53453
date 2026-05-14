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
4. **Interpretación** — muestra el código fuente y lo ejecuta como lo haría un intérprete básico.

---

## Requisitos previos

| Herramienta | Versión mínima |
|-------------|----------------|
| Node.js     | 16 o superior  |
| npm         | 8 o superior   |
| Java (JRE)  | 1.8 o superior |

---

## Estructura del repositorio

```
53453/                          ← raíz del repositorio
├── README.md
├── gramatica.txt               ← gramática asignada en texto
├── ejemplo1_valido.txt
├── ejemplo2_valido.txt
├── ejemplo3_invalido.txt
├── ejemplo4_invalido.txt
└── analizador/                 ← proyecto Node.js
    ├── index.js
    ├── CustomJSSubsetVisitor.js
    ├── JSSubset.g4
    ├── package.json
    ├── antlr-4.9.2-complete.jar
    ├── input.txt
    ├── ejemplo1_valido.txt
    ├── ejemplo2_valido.txt
    ├── ejemplo3_invalido.txt
    ├── ejemplo4_invalido.txt
    └── generated/
        ├── JSSubsetLexer.js
        ├── JSSubsetParser.js
        ├── JSSubsetListener.js
        └── JSSubsetVisitor.js
```

---

## Pasos para ejecutar

### 1. Clonar el repositorio

```bash
git clone https://github.com/franpiccolella19/53453.git
```

### 2. Entrar a la carpeta del proyecto

```bash
cd 53453/analizador
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar con un ejemplo

```bash
node index.js ejemplo1_valido.txt
node index.js ejemplo2_valido.txt
node index.js ejemplo3_invalido.txt
node index.js ejemplo4_invalido.txt
```

### 5. Ejecutar con el archivo por defecto (input.txt)

```bash
npm start
```

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

### ejemplo2_valido.txt — Bucle for con contador

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

**Error reportado:**
```
→ Linea 2, columna 15: token recognition error at: '%'
```

---

## Sintaxis del `for` en este lenguaje

```
for ( <inicializacion> <condicion> ; <actualizacion> ) { <cuerpo> }
```

El loop se ejecuta mientras la condición sea distinta de cero. Ejemplo:

```javascript
for (i = 3 i; i = i - 1) {
    console.log(i);
}
```

Imprime: `3`, `2`, `1`
