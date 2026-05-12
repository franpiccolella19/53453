// jshint ignore: start
import JSSubsetVisitor from './generated/JSSubsetVisitor.js';

/**
 * Visitor personalizado que implementa la semantica del sub-lenguaje JavaScript.
 * Extiende la interfaz generada por ANTLR para agregar interpretacion.
 */
export default class CustomJSSubsetVisitor extends JSSubsetVisitor {

    constructor() {
        super();
        this.memory = new Map(); // almacena variables <nombre, valor>
    }

    // ─── Programa ──────────────────────────────────────────────────────────────

    visitProgram(ctx) {
        return this.visitChildren(ctx);
    }

    visitStatement(ctx) {
        return this.visitChildren(ctx);
    }

    // ─── Declaracion de Array ──────────────────────────────────────────────────

    visitArrayDeclaration(ctx) {
        const nombre = ctx.ID().getText();
        let valores = [];

        if (ctx.expressionList()) {
            valores = this.visit(ctx.expressionList());
        }

        this.memory.set(nombre, valores);
        return valores;
    }

    visitExpressionList(ctx) {
        return ctx.expression().map(expr => this.visit(expr));
    }

    // ─── Sentencia for ─────────────────────────────────────────────────────────

    visitForStatement(ctx) {
        // Inicializacion
        this.visit(ctx.assignmentStatement(0));

        // Iteracion con limite de seguridad para evitar loops infinitos
        let iteraciones = 0;
        const MAX_ITER = 10000;

        while (iteraciones++ < MAX_ITER) {
            const condicion = this.visit(ctx.expression());
            if (!condicion) break;
            this.visit(ctx.block());
            this.visit(ctx.assignmentStatement(1)); // actualizacion
        }

        if (iteraciones >= MAX_ITER) {
            console.warn('  ⚠ Limite de iteraciones alcanzado (10000)');
        }

        return null;
    }

    // ─── Asignacion ────────────────────────────────────────────────────────────

    visitAssignmentStatement(ctx) {
        const nombre = ctx.ID().getText();
        const valor = this.visit(ctx.expression());
        this.memory.set(nombre, valor);
        return valor;
    }

    // ─── console.log ───────────────────────────────────────────────────────────

    visitConsoleStatement(ctx) {
        const valor = this.visit(ctx.expression());

        if (Array.isArray(valor)) {
            console.log(`[ ${valor.join(', ')} ]`);
        } else {
            console.log(valor);
        }

        return null;
    }

    // ─── Bloque ────────────────────────────────────────────────────────────────

    visitBlock(ctx) {
        return this.visitChildren(ctx);
    }

    // ─── Expresion Aritmetica ──────────────────────────────────────────────────

    visitExpression(ctx) {
        // Un solo termino sin operadores
        if (!ctx.children || ctx.children.length === 1) {
            return this.visit(ctx.term(0));
        }

        // Multiples terminos: term op term op term ...
        let resultado = this.visit(ctx.term(0));

        for (let i = 1; i < ctx.children.length; i += 2) {
            const op = ctx.children[i].getText();
            const derecha = this.visit(ctx.children[i + 1]);

            switch (op) {
                case '+': resultado = resultado + derecha; break;
                case '-': resultado = resultado - derecha; break;
                case '*': resultado = resultado * derecha; break;
                case '/':
                    if (derecha === 0) throw new Error('Division por cero');
                    resultado = Math.trunc(resultado / derecha);
                    break;
                default:
                    throw new Error(`Operador desconocido: ${op}`);
            }
        }

        return resultado;
    }

    // ─── Terminos ──────────────────────────────────────────────────────────────

    visitTermId(ctx) {
        const nombre = ctx.ID().getText();
        if (!this.memory.has(nombre)) {
            throw new Error(`Variable '${nombre}' no definida. Asegurese de declararla antes de usarla.`);
        }
        return this.memory.get(nombre);
    }

    visitTermNum(ctx) {
        return parseInt(ctx.NUMBER().getText(), 10);
    }

    visitTermParen(ctx) {
        return this.visit(ctx.expression());
    }
}
