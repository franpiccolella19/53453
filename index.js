// jshint ignore: start
import antlr4 from 'antlr4';
import JSSubsetLexer from './generated/JSSubsetLexer.js';
import JSSubsetParser from './generated/JSSubsetParser.js';
import CustomJSSubsetVisitor from './CustomJSSubsetVisitor.js';
import fs from 'fs';
import readline from 'readline';

const { CharStreams, CommonTokenStream } = antlr4;

// ─── Listener de errores personalizado ────────────────────────────────────────

class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        const token = offendingSymbol ? `'${offendingSymbol.text}'` : '';
        this.errors.push({ line, column, msg, token });
    }
}

// ─── Lectura desde teclado ─────────────────────────────────────────────────────

async function leerDesdeConsola() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        let acumulado = '';
        console.log('Ingrese el codigo (presione Ctrl+D para finalizar):');
        rl.on('line', linea => { acumulado += linea + '\n'; });
        rl.on('close', () => resolve(acumulado));
    });
}

// ─── Funcion principal ─────────────────────────────────────────────────────────

async function main() {
    const separador = '═'.repeat(57);
    const linea     = '─'.repeat(57);

    console.log(`\n${separador}`);
    console.log('  ANALIZADOR — Sublenguaje JavaScript  |  Tema 39568_15');
    console.log(`${separador}\n`);

    // 1. Leer la entrada
    let input = '';
    let archivoEntrada = 'input.txt';

    if (process.argv[2]) {
        archivoEntrada = process.argv[2];
    }

    try {
        input = fs.readFileSync(archivoEntrada, 'utf8');
        console.log(`📄  Archivo: ${archivoEntrada}`);
    } catch {
        input = await leerDesdeConsola();
        archivoEntrada = '<stdin>';
    }

    console.log(`${linea}`);
    console.log('CODIGO FUENTE:');
    console.log(`${linea}`);
    console.log(input.trimEnd());

    // 2. Primera pasada: lexer para obtener todos los tokens
    const charStream1  = CharStreams.fromString(input);
    const lexer1       = new JSSubsetLexer(charStream1);
    const lexerErrLis  = new ErrorListener();
    lexer1.removeErrorListeners();
    lexer1.addErrorListener(lexerErrLis);

    const tokenStream1 = new CommonTokenStream(lexer1);
    tokenStream1.fill();                   // fuerza la tokenizacion completa

    // 3. Tabla de Lexemas-Tokens
    console.log(`\n${linea}`);
    console.log('TABLA DE LEXEMAS - TOKENS');
    console.log(`${linea}`);
    console.log(`${'LEXEMA'.padEnd(22)}${'TOKEN'.padEnd(14)}LINEA`);
    console.log(`${linea}`);

    const nombresTokens = JSSubsetLexer.symbolicNames;

    for (const tok of tokenStream1.tokens) {
        if (tok.type === antlr4.Token.EOF) continue;
        const lexema     = tok.text;
        const nombreTok  = nombresTokens[tok.type] || `<tipo ${tok.type}>`;
        console.log(`${lexema.padEnd(22)}${nombreTok.padEnd(14)}${tok.line}`);
    }

    // 4. Segunda pasada: parser para construir el arbol
    const charStream2     = CharStreams.fromString(input);
    const lexer2          = new JSSubsetLexer(charStream2);
    const parserErrLis    = new ErrorListener();
    lexer2.removeErrorListeners();
    lexer2.addErrorListener(parserErrLis);

    const tokenStream2 = new CommonTokenStream(lexer2);
    const parser       = new JSSubsetParser(tokenStream2);
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrLis);

    const arbol = parser.program();

    // parserErrLis ya captura errores del lexer2, lexerErrLis solo se usa para la tabla
    const todosLosErrores = [...parserErrLis.errors];

    // 5. Resultado del Analisis Lexico y Sintactico
    console.log(`\n${linea}`);
    console.log('ANALISIS LEXICO Y SINTACTICO');
    console.log(`${linea}`);

    if (todosLosErrores.length > 0) {
        console.log('RESULTADO: Entrada INVALIDA — se encontraron errores:\n');
        for (const e of todosLosErrores) {
            const token = e.token ? ` (token: ${e.token})` : '';
            console.log(`  → Linea ${e.line}, columna ${e.column}${token}: ${e.msg}`);
        }
    } else {
        console.log('RESULTADO: Entrada VALIDA — sin errores lexicos ni sintacticos.');
    }

    // 6. Arbol de Analisis Sintactico (CST en texto)
    console.log(`\n${linea}`);
    console.log('ARBOL DE ANALISIS SINTACTICO (CST)');
    console.log(`${linea}`);

    const cst = arbol.toStringTree(parser.ruleNames);
    console.log(cst);

    // 7. Interpretacion (solo si no hay errores)
    if (todosLosErrores.length === 0) {
        console.log(`\n${linea}`);
        console.log('INTERPRETACION — SALIDA DEL PROGRAMA');
        console.log(`${linea}`);

        try {
            const visitante = new CustomJSSubsetVisitor();
            visitante.visit(arbol);
        } catch (err) {
            console.error(`\nError semantico: ${err.message}`);
        }
    }

    console.log(`\n${separador}\n`);
}

main().catch(err => {
    console.error('Error fatal al ejecutar el analizador:', err);
    process.exit(1);
});
