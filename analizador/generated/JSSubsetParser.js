// Generated from JSSubset.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JSSubsetListener from './JSSubsetListener.js';
import JSSubsetVisitor from './JSSubsetVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0017d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0007\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\"",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004)\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u00051\n\u0005\f\u0005\u000e\u00054\u000b",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0007\tM\n\t\f\t\u000e\tP\u000b\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0007\nW\n\n\f\n\u000e\nZ\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000bb\n\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0002\u0003\u0003\u0002\u0007\n\u0002b\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0004!\u0003\u0002\u0002\u0002\u0006#\u0003",
    "\u0002\u0002\u0002\b-\u0003\u0002\u0002\u0002\n5\u0003\u0002\u0002\u0002",
    "\f>\u0003\u0002\u0002\u0002\u000eB\u0003\u0002\u0002\u0002\u0010J\u0003",
    "\u0002\u0002\u0002\u0012S\u0003\u0002\u0002\u0002\u0014a\u0003\u0002",
    "\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0002\u0017\u0016\u0003\u0002",
    "\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003\u0002",
    "\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0002",
    "\u0002\u0003\u001d\u0003\u0003\u0002\u0002\u0002\u001e\"\u0005\u0006",
    "\u0004\u0002\u001f\"\u0005\n\u0006\u0002 \"\u0005\u000e\b\u0002!\u001e",
    "\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002! \u0003\u0002",
    "\u0002\u0002\"\u0005\u0003\u0002\u0002\u0002#$\u0007\u0003\u0002\u0002",
    "$%\u0007\u0016\u0002\u0002%&\u0007\u000b\u0002\u0002&(\u0007\u0011\u0002",
    "\u0002\')\u0005\b\u0005\u0002(\'\u0003\u0002\u0002\u0002()\u0003\u0002",
    "\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0007\u0012\u0002\u0002+,\u0007",
    "\f\u0002\u0002,\u0007\u0003\u0002\u0002\u0002-2\u0005\u0012\n\u0002",
    "./\u0007\r\u0002\u0002/1\u0005\u0012\n\u00020.\u0003\u0002\u0002\u0002",
    "14\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u00023\t\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000256\u0007",
    "\u0004\u0002\u000267\u0007\u000f\u0002\u000278\u0005\f\u0007\u00028",
    "9\u0005\u0012\n\u00029:\u0007\f\u0002\u0002:;\u0005\f\u0007\u0002;<",
    "\u0007\u0010\u0002\u0002<=\u0005\u0010\t\u0002=\u000b\u0003\u0002\u0002",
    "\u0002>?\u0007\u0016\u0002\u0002?@\u0007\u000b\u0002\u0002@A\u0005\u0012",
    "\n\u0002A\r\u0003\u0002\u0002\u0002BC\u0007\u0005\u0002\u0002CD\u0007",
    "\u000e\u0002\u0002DE\u0007\u0006\u0002\u0002EF\u0007\u000f\u0002\u0002",
    "FG\u0005\u0012\n\u0002GH\u0007\u0010\u0002\u0002HI\u0007\f\u0002\u0002",
    "I\u000f\u0003\u0002\u0002\u0002JN\u0007\u0013\u0002\u0002KM\u0005\u0004",
    "\u0003\u0002LK\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003",
    "\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OQ\u0003\u0002\u0002\u0002",
    "PN\u0003\u0002\u0002\u0002QR\u0007\u0014\u0002\u0002R\u0011\u0003\u0002",
    "\u0002\u0002SX\u0005\u0014\u000b\u0002TU\t\u0002\u0002\u0002UW\u0005",
    "\u0014\u000b\u0002VT\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002\u0002",
    "XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u0013\u0003\u0002",
    "\u0002\u0002ZX\u0003\u0002\u0002\u0002[b\u0007\u0016\u0002\u0002\\b",
    "\u0007\u0015\u0002\u0002]^\u0007\u000f\u0002\u0002^_\u0005\u0012\n\u0002",
    "_`\u0007\u0010\u0002\u0002`b\u0003\u0002\u0002\u0002a[\u0003\u0002\u0002",
    "\u0002a\\\u0003\u0002\u0002\u0002a]\u0003\u0002\u0002\u0002b\u0015\u0003",
    "\u0002\u0002\u0002\t\u0019!(2NXa"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class JSSubsetParser extends antlr4.Parser {

    static grammarFileName = "JSSubset.g4";
    static literalNames = [ null, "'let'", "'for'", "'console'", "'log'", 
                            "'+'", "'-'", "'*'", "'/'", "'='", "';'", "','", 
                            "'.'", "'('", "')'", "'['", "']'", "'{'", "'}'" ];
    static symbolicNames = [ null, "LET", "FOR", "CONSOLE", "LOG", "ADD", 
                             "SUB", "MUL", "DIV", "ASSIGN", "SEMI", "COMMA", 
                             "DOT", "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", 
                             "LBRACE", "RBRACE", "NUMBER", "ID", "WS" ];
    static ruleNames = [ "program", "statement", "arrayDeclaration", "expressionList", 
                         "forStatement", "assignmentStatement", "consoleStatement", 
                         "block", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSSubsetParser.ruleNames;
        this.literalNames = JSSubsetParser.literalNames;
        this.symbolicNames = JSSubsetParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSSubsetParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSSubsetParser.LET) | (1 << JSSubsetParser.FOR) | (1 << JSSubsetParser.CONSOLE))) !== 0)) {
	            this.state = 20;
	            this.statement();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(JSSubsetParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSSubsetParser.RULE_statement);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JSSubsetParser.LET:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.arrayDeclaration();
	            break;
	        case JSSubsetParser.FOR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.forStatement();
	            break;
	        case JSSubsetParser.CONSOLE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayDeclaration() {
	    let localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSSubsetParser.RULE_arrayDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(JSSubsetParser.LET);
	        this.state = 34;
	        this.match(JSSubsetParser.ID);
	        this.state = 35;
	        this.match(JSSubsetParser.ASSIGN);
	        this.state = 36;
	        this.match(JSSubsetParser.LBRACKET);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSSubsetParser.LPAREN) | (1 << JSSubsetParser.NUMBER) | (1 << JSSubsetParser.ID))) !== 0)) {
	            this.state = 37;
	            this.expressionList();
	        }

	        this.state = 40;
	        this.match(JSSubsetParser.RBRACKET);
	        this.state = 41;
	        this.match(JSSubsetParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSSubsetParser.RULE_expressionList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.expression();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===JSSubsetParser.COMMA) {
	            this.state = 44;
	            this.match(JSSubsetParser.COMMA);
	            this.state = 45;
	            this.expression();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSSubsetParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(JSSubsetParser.FOR);
	        this.state = 52;
	        this.match(JSSubsetParser.LPAREN);
	        this.state = 53;
	        this.assignmentStatement();
	        this.state = 54;
	        this.expression();
	        this.state = 55;
	        this.match(JSSubsetParser.SEMI);
	        this.state = 56;
	        this.assignmentStatement();
	        this.state = 57;
	        this.match(JSSubsetParser.RPAREN);
	        this.state = 58;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JSSubsetParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(JSSubsetParser.ID);
	        this.state = 61;
	        this.match(JSSubsetParser.ASSIGN);
	        this.state = 62;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JSSubsetParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(JSSubsetParser.CONSOLE);
	        this.state = 65;
	        this.match(JSSubsetParser.DOT);
	        this.state = 66;
	        this.match(JSSubsetParser.LOG);
	        this.state = 67;
	        this.match(JSSubsetParser.LPAREN);
	        this.state = 68;
	        this.expression();
	        this.state = 69;
	        this.match(JSSubsetParser.RPAREN);
	        this.state = 70;
	        this.match(JSSubsetParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JSSubsetParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(JSSubsetParser.LBRACE);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSSubsetParser.LET) | (1 << JSSubsetParser.FOR) | (1 << JSSubsetParser.CONSOLE))) !== 0)) {
	            this.state = 73;
	            this.statement();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this.match(JSSubsetParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JSSubsetParser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.term();
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSSubsetParser.ADD) | (1 << JSSubsetParser.SUB) | (1 << JSSubsetParser.MUL) | (1 << JSSubsetParser.DIV))) !== 0)) {
	            this.state = 82;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << JSSubsetParser.ADD) | (1 << JSSubsetParser.SUB) | (1 << JSSubsetParser.MUL) | (1 << JSSubsetParser.DIV))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 83;
	            this.term();
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JSSubsetParser.RULE_term);
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case JSSubsetParser.ID:
	            localctx = new TermIdContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.match(JSSubsetParser.ID);
	            break;
	        case JSSubsetParser.NUMBER:
	            localctx = new TermNumContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(JSSubsetParser.NUMBER);
	            break;
	        case JSSubsetParser.LPAREN:
	            localctx = new TermParenContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
	            this.match(JSSubsetParser.LPAREN);
	            this.state = 92;
	            this.expression();
	            this.state = 93;
	            this.match(JSSubsetParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JSSubsetParser.EOF = antlr4.Token.EOF;
JSSubsetParser.LET = 1;
JSSubsetParser.FOR = 2;
JSSubsetParser.CONSOLE = 3;
JSSubsetParser.LOG = 4;
JSSubsetParser.ADD = 5;
JSSubsetParser.SUB = 6;
JSSubsetParser.MUL = 7;
JSSubsetParser.DIV = 8;
JSSubsetParser.ASSIGN = 9;
JSSubsetParser.SEMI = 10;
JSSubsetParser.COMMA = 11;
JSSubsetParser.DOT = 12;
JSSubsetParser.LPAREN = 13;
JSSubsetParser.RPAREN = 14;
JSSubsetParser.LBRACKET = 15;
JSSubsetParser.RBRACKET = 16;
JSSubsetParser.LBRACE = 17;
JSSubsetParser.RBRACE = 18;
JSSubsetParser.NUMBER = 19;
JSSubsetParser.ID = 20;
JSSubsetParser.WS = 21;

JSSubsetParser.RULE_program = 0;
JSSubsetParser.RULE_statement = 1;
JSSubsetParser.RULE_arrayDeclaration = 2;
JSSubsetParser.RULE_expressionList = 3;
JSSubsetParser.RULE_forStatement = 4;
JSSubsetParser.RULE_assignmentStatement = 5;
JSSubsetParser.RULE_consoleStatement = 6;
JSSubsetParser.RULE_block = 7;
JSSubsetParser.RULE_expression = 8;
JSSubsetParser.RULE_term = 9;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_program;
    }

	EOF() {
	    return this.getToken(JSSubsetParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_statement;
    }

	arrayDeclaration() {
	    return this.getTypedRuleContext(ArrayDeclarationContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_arrayDeclaration;
    }

	LET() {
	    return this.getToken(JSSubsetParser.LET, 0);
	};

	ID() {
	    return this.getToken(JSSubsetParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(JSSubsetParser.ASSIGN, 0);
	};

	LBRACKET() {
	    return this.getToken(JSSubsetParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(JSSubsetParser.RBRACKET, 0);
	};

	SEMI() {
	    return this.getToken(JSSubsetParser.SEMI, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterArrayDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitArrayDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitArrayDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSSubsetParser.COMMA);
	    } else {
	        return this.getToken(JSSubsetParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(JSSubsetParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(JSSubsetParser.LPAREN, 0);
	};

	assignmentStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentStatementContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentStatementContext,i);
	    }
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(JSSubsetParser.SEMI, 0);
	};

	RPAREN() {
	    return this.getToken(JSSubsetParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_assignmentStatement;
    }

	ID() {
	    return this.getToken(JSSubsetParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(JSSubsetParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(JSSubsetParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(JSSubsetParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(JSSubsetParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(JSSubsetParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(JSSubsetParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(JSSubsetParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(JSSubsetParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(JSSubsetParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSSubsetParser.ADD);
	    } else {
	        return this.getToken(JSSubsetParser.ADD, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSSubsetParser.SUB);
	    } else {
	        return this.getToken(JSSubsetParser.SUB, i);
	    }
	};


	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSSubsetParser.MUL);
	    } else {
	        return this.getToken(JSSubsetParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSSubsetParser.DIV);
	    } else {
	        return this.getToken(JSSubsetParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_term;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TermIdContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(JSSubsetParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterTermId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitTermId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitTermId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSSubsetParser.TermIdContext = TermIdContext;

class TermParenContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(JSSubsetParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(JSSubsetParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterTermParen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitTermParen(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitTermParen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSSubsetParser.TermParenContext = TermParenContext;

class TermNumContext extends TermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(JSSubsetParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterTermNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitTermNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSSubsetVisitor ) {
	        return visitor.visitTermNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JSSubsetParser.TermNumContext = TermNumContext;


JSSubsetParser.ProgramContext = ProgramContext; 
JSSubsetParser.StatementContext = StatementContext; 
JSSubsetParser.ArrayDeclarationContext = ArrayDeclarationContext; 
JSSubsetParser.ExpressionListContext = ExpressionListContext; 
JSSubsetParser.ForStatementContext = ForStatementContext; 
JSSubsetParser.AssignmentStatementContext = AssignmentStatementContext; 
JSSubsetParser.ConsoleStatementContext = ConsoleStatementContext; 
JSSubsetParser.BlockContext = BlockContext; 
JSSubsetParser.ExpressionContext = ExpressionContext; 
JSSubsetParser.TermContext = TermContext; 
