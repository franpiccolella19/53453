grammar JSSubset;

// ============================================================
// Reglas Sintacticas (Parser Rules)
// ============================================================

program
    : statement* EOF
    ;

statement
    : arrayDeclaration
    | forStatement
    | consoleStatement
    ;

arrayDeclaration
    : LET ID ASSIGN LBRACKET expressionList? RBRACKET SEMI
    ;

expressionList
    : expression (COMMA expression)*
    ;

forStatement
    : FOR LPAREN assignmentStatement expression SEMI assignmentStatement RPAREN block
    ;

assignmentStatement
    : ID ASSIGN expression
    ;

consoleStatement
    : CONSOLE DOT LOG LPAREN expression RPAREN SEMI
    ;

block
    : LBRACE statement* RBRACE
    ;

expression
    : term ((ADD | SUB | MUL | DIV) term)*
    ;

term
    : ID                           # termId
    | NUMBER                       # termNum
    | LPAREN expression RPAREN     # termParen
    ;

// ============================================================
// Reglas Lexicas (Lexer Rules)
// ============================================================

// Palabras clave (deben ir antes de ID)
LET      : 'let'     ;
FOR      : 'for'     ;
CONSOLE  : 'console' ;
LOG      : 'log'     ;

// Operadores
ADD      : '+'  ;
SUB      : '-'  ;
MUL      : '*'  ;
DIV      : '/'  ;
ASSIGN   : '='  ;

// Delimitadores
SEMI     : ';'  ;
COMMA    : ','  ;
DOT      : '.'  ;
LPAREN   : '('  ;
RPAREN   : ')'  ;
LBRACKET : '['  ;
RBRACKET : ']'  ;
LBRACE   : '{'  ;
RBRACE   : '}'  ;

// Literales
NUMBER   : [0-9]+                  ;
ID       : [a-zA-Z][a-zA-Z0-9_]*  ;

// Espacios en blanco (ignorados)
WS       : [ \t\r\n]+ -> skip     ;
