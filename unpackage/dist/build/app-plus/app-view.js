var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-head'])
Z([3,'__e'])
Z([3,'l-search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'搜索']]]]]]]]]]])
Z([3,'l-icon-search'])
Z([3,'../../static/l-icon-search.png'])
Z([3,'l-search-input'])
Z([3,'精彩热搜：金光布袋戏《羽国志异》'])
Z([3,'l-holder'])
Z([3,'text'])
Z([3,''])
Z([3,'l-body'])
Z([1,true])
Z(z[2])
Z([3,'l-swiper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'轮播图']]]]]]]]]]])
Z([1,500])
Z([3,'#41bdb2'])
Z([3,'var(--c-bg-2)'])
Z(z[13])
Z([1,3000])
Z([3,'l-swiper-item'])
Z([3,'l-carousel-img'])
Z([3,'aspectFill'])
Z([[7],[3,'img']])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z([3,'l-body-tab'])
Z(z[2])
Z([3,'l-tab-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'榜单']]]]]]]]]]])
Z([3,'l-tab-item-img l-tab-item-img-1'])
Z([3,'../../static/book-mall/l-icon-book-mall-1.png'])
Z([3,'l-tab-item-value'])
Z([3,'榜单'])
Z(z[2])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'新书']]]]]]]]]]])
Z([3,'l-tab-item-img l-tab-item-img-2'])
Z([3,'../../static/book-mall/l-icon-book-mall-2.png'])
Z(z[36])
Z([3,'新书'])
Z(z[2])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'特价']]]]]]]]]]])
Z([3,'l-tab-item-img l-tab-item-img-3'])
Z([3,'../../static/book-mall/l-icon-book-mall-3.png'])
Z(z[36])
Z([3,'特价'])
Z(z[2])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navtoClssify']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'l-tab-item-img l-tab-item-img-4'])
Z([3,'../../static/book-mall/l-icon-book-mall-4.png'])
Z(z[36])
Z([3,'分类'])
Z([3,'l-view'])
Z([3,'l-h3'])
Z([3,'l-h3-title'])
Z([3,'好友在读'])
Z(z[2])
Z([3,'l-h3-more'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'好友在读的换一换']]]]]]]]]]])
Z([3,'换一换'])
Z([3,'l-icon-refresh'])
Z([3,'../../static/book-mall/l-icon-refresh.png'])
Z([3,'i'])
Z([3,'s'])
Z([1,2])
Z(z[69])
Z(z[2])
Z([3,'l-dl'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navtoDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'l-dt'])
Z(z[24])
Z([[7],[3,'bookimg']])
Z([3,'l-dd'])
Z([3,'l-dd-title'])
Z([3,'这个明星有些咸鱼'])
Z([3,'l-dd-content'])
Z([3,'重生平行世界，前世的疲惫，让李寒只想做一条安静的咸鱼。明星？出名？算了，虚无缥缈的东西！但是……他回家前写的一首主题曲却火了。我出名了？罢了，那就做一条明星中的咸鱼……'])
Z([3,'l-dd-footer'])
Z([3,'根据您读过的《离世人》推荐'])
Z(z[59])
Z(z[60])
Z(z[61])
Z([3,'最新上架'])
Z(z[2])
Z(z[64])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'最新上架的查看全部']]]]]]]]]]])
Z([3,'查看全部'])
Z([3,'l-icon-more'])
Z([3,'widthFix'])
Z([3,'../../static/l-icon-more.png'])
Z(z[69])
Z(z[70])
Z([[7],[3,'list']])
Z(z[69])
Z(z[2])
Z([3,'l-dl-view'])
Z(z[75])
Z([3,'l-dl-bg'])
Z([3,'l-dl-content'])
Z([3,'l-dt-view l-lay-gray'])
Z(z[24])
Z([[2,'?:'],[[6],[[7],[3,'s']],[3,'isShow']],[[7],[3,'bookimg']],[1,'']])
Z([3,'l-dd-view'])
Z([3,'l-dd-view-content'])
Z([3,'l-dd-view-title'])
Z([3,'l-dd-view-ta'])
Z([3,'三体：死神永生'])
Z([3,'l-dd-view-tb'])
Z([3,'作者：刘慈心'])
Z([3,'l-icon-dot'])
Z(z[95])
Z([3,'../../static/l-icon-dot.png'])
Z([3,'l-dd-view-footer'])
Z([3,'刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品'])
Z([3,'l-view l-view-not-border'])
Z(z[60])
Z(z[61])
Z([3,'热门分类'])
Z(z[2])
Z(z[64])
Z(z[54])
Z([3,'全部分类'])
Z(z[94])
Z(z[95])
Z(z[96])
Z([3,'l-list-classify'])
Z(z[69])
Z(z[70])
Z([1,4])
Z(z[69])
Z(z[2])
Z([3,'l-list-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'分类']]]]]]]]]]])
Z([3,'l-item_view'])
Z([3,'l-item__value'])
Z([3,'l-item__value-title'])
Z([3,'漫画杂志'])
Z([3,'l-item__value-sub'])
Z([3,'16196本'])
Z([3,'l-img-classify'])
Z(z[24])
Z([3,'../../static/classify/l-img-classify-1.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-fixed'])
Z([3,'l-status'])
Z([3,'l-head book-head'])
Z([3,'book-title'])
Z([3,'书架'])
Z([3,'book-menu'])
Z([3,'__e'])
Z([3,'l-icon-search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navtoSearch']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/icon/l-icon-search.png'])
Z([3,'margin-right:15rpx;'])
Z(z[8])
Z([3,'../../static/icon/i-icon-more.png'])
Z([3,'margin-left:15rpx;'])
Z([3,'l-placeholder'])
Z([3,'l-content'])
Z([3,'l-body l-ul'])
Z([3,'key'])
Z([3,'item'])
Z([1,20])
Z(z[18])
Z(z[7])
Z([3,'l-li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navtoDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'position:relative;overflow:hidden;'])
Z([3,'l-li-img'])
Z([3,'aspectFill'])
Z([[7],[3,'bookimg']])
Z([3,'book-new'])
Z([3,'new'])
Z([3,'l-li-txt'])
Z([3,'JavaScript高级程序设计（第三版）'])
Z([3,'l-add'])
Z([3,'l-add-view'])
Z([3,'l-icon-add'])
Z([3,'../../static/l-icon-add.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-head'])
Z([3,'__e'])
Z([3,'l-search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'搜索']]]]]]]]]]])
Z([3,'l-icon-search'])
Z([3,'../../static/l-icon-search.png'])
Z([3,'l-search-input'])
Z([3,'精彩热搜：金光布袋戏《羽国志异》'])
Z([3,'l-holder'])
Z([3,'text'])
Z([3,''])
Z([3,'l-body'])
Z([3,'i'])
Z([3,'s'])
Z([[7],[3,'list']])
Z(z[13])
Z([3,'l-list-item'])
Z([3,'l-item_view'])
Z([3,'l-item__value'])
Z([3,'l-item__value-title'])
Z([3,'漫画杂志'])
Z([3,'l-item__value-sub'])
Z([3,'16196本'])
Z([3,'l-img-classify l-lay-gray'])
Z([3,'aspectFill'])
Z([[2,'?:'],[[6],[[7],[3,'s']],[3,'isShow']],[1,'../../static/classify/l-img-classify-1.png'],[1,'#']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-body'])
Z([3,'i'])
Z([3,'s'])
Z([1,10])
Z(z[2])
Z([3,'__e'])
Z([3,'l-list-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'评论']]]]]]]]]]])
Z([3,'l-list-sub-content'])
Z([3,'l-list-c-head'])
Z([3,'三体的文风和细节描写简直赞'])
Z([3,'l-list-c-body'])
Z([3,'一直认为写作是件很耗费体力与脑力的事情，特别是从新构架一个新的世界，一个文明。这需要你有丰富的\n					直认为写作是件很耗费体力与脑力的事情，特别是从新构架一个新的世界，一个文明。这需要你有丰富的'])
Z([3,'l-list-c-foot'])
Z([3,'l-list-c-foot-l'])
Z([3,'l-list-c-foot-l-name'])
Z([3,'任飘渺'])
Z(z[2])
Z(z[3])
Z([1,4])
Z(z[2])
Z([3,'l-icon-star-blank'])
Z([3,'../../static/detail/l-icon-star-blank.png'])
Z(z[22])
Z([3,'../../static/detail/l-icon-star-blank-un.png'])
Z([3,'l-list-c-foot-r'])
Z([3,'l-icon-like'])
Z([3,'../../static/detail/l-icon-like.png'])
Z([3,'8'])
Z([3,'l-publish'])
Z([3,'l-form'])
Z(z[6])
Z([3,'l-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'keyword']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'尝试说点什么...'])
Z([3,'text'])
Z([[7],[3,'keyword']])
Z(z[6])
Z([3,'l-publish-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'publish']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'发送'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-body'])
Z([3,'l-dl'])
Z([3,'l-dt'])
Z([3,'aspectFill'])
Z([[7],[3,'bookimg']])
Z([3,'l-dd'])
Z([3,'l-dd-title'])
Z([3,'这个明星有些咸鱼'])
Z([3,'l-dd-sub'])
Z([3,'作者：刘慈欣'])
Z([3,'l-dd-content'])
Z([3,'重生平行世界，前世的疲惫，让李寒只想做一条安静的咸鱼。明星？出名？算了，虚无缥缈的东西！但是……他回家前写的一首主题曲却火了。我出名了？罢了，那就做一条明星中的咸鱼……'])
Z([3,'l-dd-footer'])
Z([3,'i'])
Z([3,'s'])
Z([1,5])
Z(z[14])
Z([3,'l-icon-star'])
Z([3,'../../static/l-icon-star.png'])
Z([3,'l-dd-grade'])
Z([3,'5.0'])
Z([3,'l-body-select'])
Z(z[14])
Z(z[15])
Z([[7],[3,'tab_list']])
Z(z[14])
Z([3,'__e'])
Z([3,'l-body-tab'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'share']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tab_list']],[1,'']],[[7],[3,'i']]]]]]]]]]]]]]]])
Z([[4],[[5],[[6],[[7],[3,'s']],[3,'className']]]])
Z([[6],[[7],[3,'s']],[3,'icon']])
Z([a,[[2,'+'],[[6],[[7],[3,'s']],[3,'title']],[1,'']]])
Z([3,'l-list'])
Z([3,'l-h3'])
Z([3,'l-h3-title'])
Z([3,'详情'])
Z([3,'l-list-view'])
Z([3,'与三体文明的战争使人类第一次看到了宇宙黑暗的真相，地球文明像一个恐惧的孩子，熄灭了寻友的篝火，在暗夜中发抖。自以为历经沧桑，其实刚刚蹒跚学步；自以为悟出了生存竞争的秘密，其实还远没有竞争的资格。'])
Z(z[33])
Z(z[34])
Z(z[35])
Z([3,'评论'])
Z(z[27])
Z([3,'l-h3-more'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navtoComment']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'全部评论'])
Z([3,'l-icon-more'])
Z([3,'widthFix'])
Z([3,'../../static/l-icon-more.png'])
Z([3,'l-list-content'])
Z([3,'l-list-sub-content'])
Z([3,'l-list-c-head'])
Z([3,'三体的文风和细节描写简直赞'])
Z([3,'l-list-c-body'])
Z([3,'一直认为写作是件很耗费体力与脑力的事情，特别是从新构架一个新的世界，一个文明。这需要你有丰富的\n						直认为写作是件很耗费体力与脑力的事情，特别是从新构架一个新的世界，一个文明。这需要你有丰富的'])
Z([3,'l-list-c-foot'])
Z([3,'l-list-c-foot-l'])
Z([3,'l-list-c-foot-l-name'])
Z([3,'任飘渺'])
Z(z[14])
Z(z[15])
Z([1,4])
Z(z[14])
Z([3,'l-icon-star-blank'])
Z([3,'../../static/detail/l-icon-star-blank.png'])
Z(z[64])
Z([3,'../../static/detail/l-icon-star-blank-un.png'])
Z([3,'l-list-c-foot-r'])
Z([3,'l-icon-like'])
Z([3,'../../static/detail/l-icon-like.png'])
Z([3,'8'])
Z([3,'l-body-fixed'])
Z(z[27])
Z([3,'l-handle-btn l-look-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navtoSection']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'试看(3章节)'])
Z(z[27])
Z([3,'l-handle-btn l-buy-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'您已经欠我69元了哦,记得来付款']]]]]]]]]]])
Z([3,'购买¥69.00'])
Z([[7],[3,'isShare']])
Z([3,'l-share'])
Z(z[27])
Z([3,'l-close'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'取消'])
Z(z[27])
Z([3,'l-share-img'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'分享到不知道哪里去了']]]]]]]]]]])
Z([3,'l-icon-share-list'])
Z([3,'../../static/detail/l-icon-share-list-1.png'])
Z(z[90])
Z([3,'../../static/detail/l-icon-share-list-2.png'])
Z(z[90])
Z([3,'../../static/detail/l-icon-share-list-3.png'])
Z(z[90])
Z([3,'../../static/detail/l-icon-share-list-4.png'])
Z([3,'l-share-btn'])
Z(z[27])
Z([3,'l-share-botton'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'分享所有']]]]]]]]]]])
Z([3,'primary'])
Z([3,'一键的分享到所有'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-fixed'])
Z([3,'l-status'])
Z([3,'l-head'])
Z([3,'__e'])
Z([3,'l-search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'搜索']]]]]]]]]]])
Z([3,'l-icon-search'])
Z([3,'../../static/l-icon-search.png'])
Z([3,'l-search-input'])
Z([3,'精彩热搜：金光布袋戏《羽国志异》'])
Z([3,'l-holder'])
Z([3,'text'])
Z([3,''])
Z(z[4])
Z([3,'l-nav-bookrack'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navto']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'书城'])
Z([3,'l-placeholder'])
Z([3,'l-body'])
Z([1,true])
Z(z[4])
Z([3,'l-swiper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'轮播图']]]]]]]]]]])
Z([1,500])
Z([3,'#41bdb2'])
Z([3,'var(--c-bg-2)'])
Z(z[20])
Z([1,3000])
Z([3,'l-swiper-item'])
Z([3,'l-carousel-img'])
Z([3,'aspectFill'])
Z([[7],[3,'img']])
Z(z[29])
Z(z[30])
Z(z[31])
Z(z[32])
Z([3,'l-main'])
Z([3,'l-h3'])
Z([3,'l-h3-title'])
Z([3,'好友在读'])
Z(z[4])
Z([3,'l-h3-more'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'好友在读的查看全部']]]]]]]]]]])
Z([3,'查看全部'])
Z([3,'l-icon-more'])
Z([3,'widthFix'])
Z([3,'../../static/l-icon-more.png'])
Z([3,'i'])
Z([3,'s'])
Z([[7],[3,'list']])
Z(z[48])
Z(z[4])
Z([3,'l-dl'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navtoDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'l-dt l-lay-gray'])
Z(z[31])
Z([[2,'?:'],[[6],[[7],[3,'s']],[3,'isShow']],[[7],[3,'bookimg']],[1,'#']])
Z([3,'l-dd'])
Z([3,'l-dd-title'])
Z([3,'这个明星有些咸鱼'])
Z([3,'l-dd-content'])
Z([3,'重生平行世界，前世的疲惫，让李寒只想做一条安静的咸鱼。明星？出名？算了，虚无缥缈的东西！但是……他回家前写的一首主题曲却火了。我出名了？罢了，那就做一条明星中的咸鱼……'])
Z([3,'l-dd-footer'])
Z([3,'l-dd-img'])
Z(z[31])
Z([3,'../../static/logo.png'])
Z(z[64])
Z(z[31])
Z(z[66])
Z(z[64])
Z(z[31])
Z(z[66])
Z([3,'3位好友在读'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'没有想法'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-fixed'])
Z([3,'l-status'])
Z([3,'l-head-title'])
Z([3,'我的'])
Z([3,'__e'])
Z([3,'l-icon-setting'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'设置']]]]]]]]]]])
Z([3,'../../static/l-icon-setting.png'])
Z([3,'l-placeholder'])
Z([3,'l-body'])
Z([3,'l-body-head'])
Z([3,'l-head-img'])
Z([3,'aspectFill'])
Z([3,'../../static/u\x3d1473750369,2904144947\x26fm\x3d26\x26gp\x3d0.jpg'])
Z([3,'l-head-intr'])
Z([3,'l-head-user'])
Z(z[5])
Z([3,'l-head-username'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'昵称']]]]]]]]]]])
Z([3,'任飘渺'])
Z([3,'l-head-city'])
Z(z[5])
Z([3,'l-head-city-txt'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'城市']]]]]]]]]]])
Z([3,'中国-成都'])
Z(z[5])
Z([3,'l-head-intr-txt'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'个性签名']]]]]]]]]]])
Z([3,'现在学东西晚吗? 种一棵树最好的时间是十年前，其次是现在。'])
Z([3,'l-ul'])
Z(z[5])
Z([3,'l-li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'账户']]]]]]]]]]])
Z([3,'l-li-left'])
Z([3,'l-icon-mine l-icon-mine-1'])
Z([3,'../../static/mine/l-icon-mine-1.png'])
Z([3,'账户'])
Z([3,'l-li-right'])
Z([3,'l-li-right-value'])
Z([3,'l-li-right-label'])
Z([3,'¥26.98'])
Z(z[5])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'我的书籍']]]]]]]]]]])
Z(z[34])
Z(z[35])
Z([3,'../../static/mine/l-icon-mine-2.png'])
Z([3,'我的书籍'])
Z(z[38])
Z(z[39])
Z([3,'16本'])
Z(z[40])
Z([3,'5本读完'])
Z(z[5])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'想读']]]]]]]]]]])
Z(z[34])
Z(z[35])
Z([3,'../../static/mine/l-icon-mine-3.png'])
Z([3,'想读'])
Z(z[38])
Z(z[39])
Z([3,'32本'])
Z(z[40])
Z([3,'5本已降价'])
Z(z[5])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'我的评论']]]]]]]]]]])
Z(z[34])
Z(z[35])
Z([3,'../../static/mine/l-icon-mine-4.png'])
Z([3,'我的评论'])
Z(z[38])
Z(z[39])
Z([3,'235条'])
Z(z[40])
Z([3,'125个赞 344个评论'])
Z(z[5])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'好友排名']]]]]]]]]]])
Z(z[34])
Z(z[35])
Z([3,'../../static/mine/l-icon-mine-5.png'])
Z([3,'好友排名'])
Z(z[38])
Z(z[39])
Z([3,'12名'])
Z(z[40])
Z([3,'48分钟阅读'])
Z(z[5])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'关注']]]]]]]]]]])
Z(z[34])
Z(z[35])
Z([3,'../../static/mine/l-icon-mine-6.png'])
Z([3,'关注'])
Z(z[38])
Z(z[39])
Z([3,'16人'])
Z(z[40])
Z([3,'15人关注我'])
Z(z[5])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$toast']],[[4],[[5],[1,'我的阅历']]]]]]]]]]])
Z(z[34])
Z(z[35])
Z([3,'../../static/mine/l-icon-mine-7.png'])
Z([3,'我的阅历'])
Z(z[38])
Z(z[39])
Z([3,'28小时'])
Z(z[40])
Z([3,'可兑换'])
Z([3,'l-li-right-label-color'])
Z([3,'5'])
Z([3,'读书币'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'l-fixed'])
Z([3,'l-status'])
Z([3,'l-head'])
Z([3,'第3章 了解古书的能力'])
Z([3,'l-placeholder'])
Z([3,'l-body'])
Z([3,'l-scroll'])
Z([3,'l-scroll-view'])
Z([3,'read-section jsChapterWrapper _section'])
Z([3,'432236890'])
Z([3,'_h3'])
Z(z[4])
Z([3,'_p'])
Z([3,'在得到古书的指引后，陈荣火立刻向下河村的方向走去。'])
Z(z[13])
Z([3,'一路上他小心翼翼，做贼一样四处查看，担心再遇到绿水湾大河蟹那样的恐怖生物。'])
Z(z[13])
Z([3,'他有些后悔，后悔自己太匆忙，进入这个世界之前都没事先准备些武器。'])
Z(z[13])
Z([3,'他下定决心吸取这次的教训，以后做什么事都要事先筹划好才行。'])
Z(z[13])
Z([3,'不过这么想着时，他念头忽然一动，伸手向自己的衣兜摸去，随着这一摸，他才发现，自己的手机竟然不见了。'])
Z(z[13])
Z([3,'甚至不止是手机，他随身携带的火机，小刀，还有其他东西，竟全都不见了。'])
Z(z[13])
Z([3,'唯一还在的，只有他身上的这套衣服。'])
Z(z[13])
Z([3,'难道进入众神世界，除了身上的衣服，不允许携带其他东西吗？'])
Z(z[13])
Z([3,'陈荣火心中一动。'])
Z(z[13])
Z([3,'他的这些东西揣在不同的衣兜里，怎么也不可能一下子全都丢了。'])
Z(z[13])
Z([3,'陈荣火紧了下拳头。'])
Z(z[13])
Z([3,'没了手机，其他东西也都消失不见，再一次让他真实感受到自己和原先的世界的距离，感受到了孤独和迷茫。'])
Z(z[13])
Z([3,'三百年……'])
Z(z[13])
Z([3,'我要想活过这三百年，必须得先找一个安身之地，同时也要尽快成为修炼者，获得可以自保的实力才行。'])
Z(z[13])
Z([3,'还有，我在这个世界的最大倚仗，可能就是我脑海里的古书了，知己知彼百战不殆，我也必须弄清这本古书都有哪些作用。'])
Z(z[13])
Z([3,'念头一动，陈荣火再次将意识落在了古书上。'])
Z(z[13])
Z([3,'这一次，他选择让古书将自己的信息显示了出来：'])
Z(z[13])
Z([3,'【神秘古书：由全知之书和封印之书两大神器融合而成，拥有两大神器的所有能力。'])
Z(z[13])
Z([3,'因器灵消逝，古书契约了新的宿主。'])
Z(z[13])
Z([3,'古书的能力会随着宿主实力的提高而逐渐解锁。'])
Z(z[13])
Z([3,'目前古书拥有能力1：鉴定，此能力可以堪破本质，鉴定一切事物，此能力属于古书本能，不需要消耗能量。'])
Z(z[13])
Z([3,'能力2：推演预测，此能力需要消耗能量，能量足够，可以推演和预测一切。'])
Z(z[13])
Z([3,'能力3：封印，古书目前开启封印页数为1，能量足够，可以用此封印页封印一切。'])
Z(z[13])
Z([3,'古书残余能量：2'])
Z(z[13])
Z([3,'宿主成为正式修炼者前，古书根据宿主实力的高低，每天最多积攒5点能量。'])
Z(z[13])
Z([3,'宿主成为正式修炼者后，可以用自身能量催动古书，届时古书每天积攒的能量，将会被宿主吸收，用以提升宿主的修炼速度。】'])
Z(z[13])
Z([3,'当看完古书的自我简介之后，陈荣火顿时眉头微皱。'])
Z(z[13])
Z([3,'之前他还以为自己可以仗着古书推演一切，譬如询问众神究竟是什么样的存在，自己又该如何成为修炼者之类的。'])
Z(z[13])
Z([3,'但是现在看来，这条路即使能够行得通，怕是也得等古书积攒大量能量才行。'])
Z(z[13])
Z([3,'同时遗憾的是，之前他使用古书的推演能力，推演人类聚集地时，也没有注意古书消耗了多少能量。'])
Z(z[13])
Z([3,'“现在古书只剩下两点能量，不能乱用。必须得等我确定安全之后，才能使用古书的推演能力。至于封印能力，目前来说对我的作用应该不大，暂时不用考虑。”'])
Z(z[13])
Z([3,'陈荣火心中沉吟，有了计划。'])
Z(z[13])
Z([3,'接着在了解了自身的底牌之后，他也开始加快速度，一路往前走去。'])
Z(z[13])
Z([3,'四里地路，他走了有二十分钟。'])
Z(z[13])
Z([3,'二十分钟后，前方一个破败的村庄出现在他眼中。'])
Z(z[13])
Z([3,'放眼望去，这个村庄虽然破败，但是也足有一百多户人家。'])
Z(z[13])
Z([3,'他知道，这多半就是之前古书所说的下河村了。'])
Z(z[13])
Z([3,'在村子前方，有一个宽阔的广场。'])
Z(z[13])
Z([3,'陈荣火走过去，远远看到一个光着上半身的大汉，正站在广场上巡视。那大汉身前，三十多个七八岁到十几岁的半大孩子，正在那大汉的呵斥下，一板一眼地打着一套拳法。'])
Z(z[13])
Z([3,'这套拳法在那些太小的孩子身上体现不出来什么，但是那些半大的孩子打起这套拳法来，却虎虎生风，仿佛凶兽出世，气势十足。'])
Z(z[13])
Z([3,'哪怕他也能够看出，那些孩子打的拳法，绝对跟地星自己见过的许多架子货不同。'])
Z(z[13])
Z([3,'这绝对是一门极强的拳法，能够开碑裂石，是真正的杀人拳法。'])
Z(z[13])
Z([3,'随着越来越近，他甚至能够看到，有些大点的孩子一掌落下，竟然都能在地上吹起一片尘土来。'])
Z(z[13])
Z([3,'他们修炼的这是什么拳法，我能学吗？'])
Z(z[13])
Z([3,'什么是修炼者，修炼者就是和练武一样打拳吗？'])
Z(z[13])
Z([3,'还有我如果学习这门拳法，要多久能够成为正式修炼者？'])
Z(z[13])
Z([3,'一个个念头从陈荣火心中浮现，他分出一丝意识，落在了脑海里的古书上。'])
Z(z[13])
Z([3,'不知道是不是因为古书与他彻底融合在了一起的缘故，现在的他已经可以一心二用。'])
Z(z[13])
Z([3,'也就是说他可以一边用意识观看古书，一边做其他的事情。'])
Z(z[13])
Z([3,'【猛虎炼心拳（残）：众神世界广为流传的学徒级大众拳法。'])
Z(z[13])
Z([3,'修炼此拳最快之人，曾在三年内成为正式武者。'])
Z(z[13])
Z([3,'众神世界大多数人练的都是残缺版猛虎炼心拳，只有少部分势力掌握完整版的此拳。'])
Z(z[13])
Z([3,'此拳完整版为上品学徒级拳法。'])
Z(z[13])
Z([3,'资质相同的人修炼此拳，修炼完整版的速度，会比修炼残缺般的速度快三倍。】'])
Z(z[13])
Z([3,'正式武者？'])
Z(z[13])
Z([3,'所谓的修炼者，就是单指武者吗？'])
Z(z[13])
Z([3,'当用古书的鉴定能力，鉴定出广场上那些孩子所修的拳法之后，陈荣火心中一动。'])
Z(z[13])
Z([3,'众神世界，是有神灵存在的世界。'])
Z(z[13])
Z([3,'如果单纯修炼武道，会有作用吗？'])
Z(z[13])
Z([3,'又或者，修炼到后期，强大的武者，也可以伐神？'])
Z(z[13])
Z([3,'一个个念头，自他心中涌出，只是使用古书推演这些东西，需要消耗能量，现在古书只有两点能量残余，这是他的底牌，不敢乱用。'])
Z(z[13])
Z([3,'“这位公子不知来自哪里，到我下河村有河贵干？”'])
Z(z[13])
Z([3,'就在陈荣火浮想联翩之时，下河村广场边上的一棵大树下，一个蹲在地上望着广场上的孩子们的老头，忽然站起，快步迎上来，对来到广场前的他询问道。'])
Z(z[13])
Z([3,'老头脸上皱纹密布，身材干瘦，看起来至少已有七十岁。'])
Z(z[13])
Z([3,'他看着陈荣火，尤其是浑浊的目光落在陈蓉火身上的衣服上，似是有道道精光闪动。'])
Z(z[13])
Z([3,'虽然陈荣火的穿着与他所知的所有人都格格不入，但是看陈荣火身上衣物布料之精细，却不是谁都能穿得起的。'])
Z(z[13])
Z([3,'听到声音，陈荣火回过头，目光落在老头身上，并下意识使用了古书的鉴定能力。'])
Z(z[13])
Z([3,'【黄铁生：下河村村长，初阶大地武者。'])
Z(z[13])
Z([3,'身有暗伤，剩余寿命一年。'])
Z(z[13])
Z([3,'同时其也是古老的术士家族传人。'])
Z(z[13])
Z([3,'但是千年过去，他早已经遗忘了祖先的荣光。】'])
Z(z[13])
Z([3,'术士，这又是什么？'])
Z(z[13])
Z([3,'难道是另一条修炼之路吗？'])
Z(z[13])
Z(z[30])
Z(z[13])
Z([3,'如果不是情况不允许，他早已经使用古书的能力，彻底搞清楚修炼者到底是怎样一群人了。'])
Z(z[13])
Z([3,'这么想着，他嘴上则连忙道：“大爷你好，我从很远的地方来，走得累了，想要在村子里歇歇，讨几口水喝，不知可否？”'])
Z(z[13])
Z([3,'这是他一早就准备好的说辞。'])
Z(z[13])
Z([3,'至于讨完水之后，要怎么融入这个村子，就只能随机应变了。'])
Z(z[13])
Z([3,'“当然可以，公子远来是客，若不嫌弃，可以先到我家里歇一歇。”'])
Z(z[13])
Z([3,'听陈荣火这么说，老头立刻笑容可掬道：“我是下河村的村长，姓黄，村里的老人都叫我老黄，公子你也可以这么叫我。”'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/book-mall/book-mall.wxml','./pages/bookrack/bookrack.wxml','./pages/classify/classify.wxml','./pages/comment/comment.wxml','./pages/detail/detail.wxml','./pages/find/find.wxml','./pages/idea/idea.wxml','./pages/mine/mine.wxml','./pages/section/section.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_mz(z,'image',['mode',-1,'class',5,'src',1],[],e,s,gg)
_(oD,fE)
var cF=_mz(z,'input',['disabled',-1,'class',7,'placeholder',1,'placeholderClass',2,'type',3,'value',4],[],e,s,gg)
_(oD,cF)
_(xC,oD)
_(oB,xC)
var hG=_n('view')
_rz(z,hG,'class',12,e,s,gg)
var oH=_mz(z,'swiper',['circular',-1,'autoplay',13,'bindtap',1,'class',2,'data-event-opts',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var cI=_n('swiper-item')
var oJ=_n('view')
_rz(z,oJ,'class',22,e,s,gg)
var lK=_mz(z,'image',['class',23,'mode',1,'src',2],[],e,s,gg)
_(oJ,lK)
_(cI,oJ)
_(oH,cI)
var aL=_n('swiper-item')
var tM=_n('view')
_rz(z,tM,'class',26,e,s,gg)
var eN=_mz(z,'image',['class',27,'mode',1,'src',2],[],e,s,gg)
_(tM,eN)
_(aL,tM)
_(oH,aL)
_(hG,oH)
var bO=_n('view')
_rz(z,bO,'class',30,e,s,gg)
var oP=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var xQ=_mz(z,'image',['mode',-1,'class',34,'src',1],[],e,s,gg)
_(oP,xQ)
var oR=_n('view')
_rz(z,oR,'class',36,e,s,gg)
var fS=_oz(z,37,e,s,gg)
_(oR,fS)
_(oP,oR)
_(bO,oP)
var cT=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],e,s,gg)
var hU=_mz(z,'image',['mode',-1,'class',41,'src',1],[],e,s,gg)
_(cT,hU)
var oV=_n('view')
_rz(z,oV,'class',43,e,s,gg)
var cW=_oz(z,44,e,s,gg)
_(oV,cW)
_(cT,oV)
_(bO,cT)
var oX=_mz(z,'view',['bindtap',45,'class',1,'data-event-opts',2],[],e,s,gg)
var lY=_mz(z,'image',['mode',-1,'class',48,'src',1],[],e,s,gg)
_(oX,lY)
var aZ=_n('view')
_rz(z,aZ,'class',50,e,s,gg)
var t1=_oz(z,51,e,s,gg)
_(aZ,t1)
_(oX,aZ)
_(bO,oX)
var e2=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],e,s,gg)
var b3=_mz(z,'image',['mode',-1,'class',55,'src',1],[],e,s,gg)
_(e2,b3)
var o4=_n('view')
_rz(z,o4,'class',57,e,s,gg)
var x5=_oz(z,58,e,s,gg)
_(o4,x5)
_(e2,o4)
_(bO,e2)
_(hG,bO)
_(oB,hG)
var o6=_n('view')
_rz(z,o6,'class',59,e,s,gg)
var f7=_n('view')
_rz(z,f7,'class',60,e,s,gg)
var c8=_n('text')
_rz(z,c8,'class',61,e,s,gg)
var h9=_oz(z,62,e,s,gg)
_(c8,h9)
_(f7,c8)
var o0=_mz(z,'view',['bindtap',63,'class',1,'data-event-opts',2],[],e,s,gg)
var cAB=_oz(z,66,e,s,gg)
_(o0,cAB)
var oBB=_mz(z,'image',['mode',-1,'class',67,'src',1],[],e,s,gg)
_(o0,oBB)
_(f7,o0)
_(o6,f7)
var lCB=_v()
_(o6,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],eFB,tEB,gg)
var oJB=_mz(z,'image',['class',76,'mode',1,'src',2],[],eFB,tEB,gg)
_(xIB,oJB)
var fKB=_n('view')
_rz(z,fKB,'class',79,eFB,tEB,gg)
var cLB=_n('view')
_rz(z,cLB,'class',80,eFB,tEB,gg)
var hMB=_oz(z,81,eFB,tEB,gg)
_(cLB,hMB)
_(fKB,cLB)
var oNB=_n('view')
_rz(z,oNB,'class',82,eFB,tEB,gg)
var cOB=_oz(z,83,eFB,tEB,gg)
_(oNB,cOB)
_(fKB,oNB)
var oPB=_n('view')
_rz(z,oPB,'class',84,eFB,tEB,gg)
var lQB=_oz(z,85,eFB,tEB,gg)
_(oPB,lQB)
_(fKB,oPB)
_(xIB,fKB)
_(bGB,xIB)
return bGB
}
lCB.wxXCkey=2
_2z(z,71,aDB,e,s,gg,lCB,'s','i','i')
_(oB,o6)
var aRB=_n('view')
_rz(z,aRB,'class',86,e,s,gg)
var tSB=_n('view')
_rz(z,tSB,'class',87,e,s,gg)
var eTB=_n('text')
_rz(z,eTB,'class',88,e,s,gg)
var bUB=_oz(z,89,e,s,gg)
_(eTB,bUB)
_(tSB,eTB)
var oVB=_mz(z,'view',['bindtap',90,'class',1,'data-event-opts',2],[],e,s,gg)
var xWB=_oz(z,93,e,s,gg)
_(oVB,xWB)
var oXB=_mz(z,'image',['class',94,'mode',1,'src',2],[],e,s,gg)
_(oVB,oXB)
_(tSB,oVB)
_(aRB,tSB)
var fYB=_v()
_(aRB,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var l5B=_mz(z,'view',['bindtap',101,'class',1,'data-event-opts',2],[],o2B,h1B,gg)
var a6B=_n('view')
_rz(z,a6B,'class',104,o2B,h1B,gg)
_(l5B,a6B)
var t7B=_n('view')
_rz(z,t7B,'class',105,o2B,h1B,gg)
var e8B=_mz(z,'image',['class',106,'mode',1,'src',2],[],o2B,h1B,gg)
_(t7B,e8B)
var b9B=_n('view')
_rz(z,b9B,'class',109,o2B,h1B,gg)
var o0B=_n('view')
_rz(z,o0B,'class',110,o2B,h1B,gg)
var xAC=_n('view')
_rz(z,xAC,'class',111,o2B,h1B,gg)
var oBC=_n('view')
_rz(z,oBC,'class',112,o2B,h1B,gg)
var fCC=_oz(z,113,o2B,h1B,gg)
_(oBC,fCC)
_(xAC,oBC)
var cDC=_n('view')
_rz(z,cDC,'class',114,o2B,h1B,gg)
var hEC=_oz(z,115,o2B,h1B,gg)
_(cDC,hEC)
_(xAC,cDC)
_(o0B,xAC)
var oFC=_mz(z,'image',['class',116,'mode',1,'src',2],[],o2B,h1B,gg)
_(o0B,oFC)
_(b9B,o0B)
var cGC=_n('view')
_rz(z,cGC,'class',119,o2B,h1B,gg)
var oHC=_oz(z,120,o2B,h1B,gg)
_(cGC,oHC)
_(b9B,cGC)
_(t7B,b9B)
_(l5B,t7B)
_(c3B,l5B)
return c3B
}
fYB.wxXCkey=2
_2z(z,99,cZB,e,s,gg,fYB,'s','i','i')
_(oB,aRB)
var lIC=_n('view')
_rz(z,lIC,'class',121,e,s,gg)
var aJC=_n('view')
_rz(z,aJC,'class',122,e,s,gg)
var tKC=_n('text')
_rz(z,tKC,'class',123,e,s,gg)
var eLC=_oz(z,124,e,s,gg)
_(tKC,eLC)
_(aJC,tKC)
var bMC=_mz(z,'view',['bindtap',125,'class',1,'data-event-opts',2],[],e,s,gg)
var oNC=_oz(z,128,e,s,gg)
_(bMC,oNC)
var xOC=_mz(z,'image',['class',129,'mode',1,'src',2],[],e,s,gg)
_(bMC,xOC)
_(aJC,bMC)
_(lIC,aJC)
var oPC=_n('view')
_rz(z,oPC,'class',132,e,s,gg)
var fQC=_v()
_(oPC,fQC)
var cRC=function(oTC,hSC,cUC,gg){
var lWC=_mz(z,'view',['bindtap',137,'class',1,'data-event-opts',2],[],oTC,hSC,gg)
var aXC=_n('view')
_rz(z,aXC,'class',140,oTC,hSC,gg)
var tYC=_n('view')
_rz(z,tYC,'class',141,oTC,hSC,gg)
var eZC=_n('view')
_rz(z,eZC,'class',142,oTC,hSC,gg)
var b1C=_oz(z,143,oTC,hSC,gg)
_(eZC,b1C)
_(tYC,eZC)
var o2C=_n('view')
_rz(z,o2C,'class',144,oTC,hSC,gg)
var x3C=_oz(z,145,oTC,hSC,gg)
_(o2C,x3C)
_(tYC,o2C)
_(aXC,tYC)
var o4C=_mz(z,'image',['class',146,'mode',1,'src',2],[],oTC,hSC,gg)
_(aXC,o4C)
_(lWC,aXC)
_(cUC,lWC)
return cUC
}
fQC.wxXCkey=2
_2z(z,135,cRC,e,s,gg,fQC,'s','i','i')
_(lIC,oPC)
_(oB,lIC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var c6C=_n('view')
_rz(z,c6C,'class',0,e,s,gg)
var h7C=_n('view')
_rz(z,h7C,'class',1,e,s,gg)
var o8C=_n('view')
_rz(z,o8C,'class',2,e,s,gg)
_(h7C,o8C)
var c9C=_n('view')
_rz(z,c9C,'class',3,e,s,gg)
var o0C=_n('view')
_rz(z,o0C,'class',4,e,s,gg)
var lAD=_oz(z,5,e,s,gg)
_(o0C,lAD)
_(c9C,o0C)
var aBD=_n('view')
_rz(z,aBD,'class',6,e,s,gg)
var tCD=_mz(z,'image',['mode',-1,'bindtap',7,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(aBD,tCD)
var eDD=_mz(z,'image',['mode',-1,'class',12,'src',1,'style',2],[],e,s,gg)
_(aBD,eDD)
_(c9C,aBD)
_(h7C,c9C)
_(c6C,h7C)
var bED=_n('view')
_rz(z,bED,'class',15,e,s,gg)
_(c6C,bED)
var oFD=_n('view')
_rz(z,oFD,'class',16,e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',17,e,s,gg)
var oHD=_n('view')
_(xGD,oHD)
var fID=_v()
_(xGD,fID)
var cJD=function(oLD,hKD,cMD,gg){
var lOD=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],oLD,hKD,gg)
var aPD=_n('view')
_rz(z,aPD,'style',25,oLD,hKD,gg)
var tQD=_mz(z,'image',['class',26,'mode',1,'src',2],[],oLD,hKD,gg)
_(aPD,tQD)
var eRD=_n('view')
_rz(z,eRD,'class',29,oLD,hKD,gg)
var bSD=_oz(z,30,oLD,hKD,gg)
_(eRD,bSD)
_(aPD,eRD)
_(lOD,aPD)
var oTD=_n('view')
_rz(z,oTD,'class',31,oLD,hKD,gg)
var xUD=_oz(z,32,oLD,hKD,gg)
_(oTD,xUD)
_(lOD,oTD)
_(cMD,lOD)
return cMD
}
fID.wxXCkey=2
_2z(z,20,cJD,e,s,gg,fID,'item','key','key')
var oVD=_n('view')
_rz(z,oVD,'class',33,e,s,gg)
var fWD=_n('view')
_rz(z,fWD,'class',34,e,s,gg)
var cXD=_mz(z,'image',['mode',-1,'class',35,'src',1],[],e,s,gg)
_(fWD,cXD)
_(oVD,fWD)
_(xGD,oVD)
_(oFD,xGD)
_(c6C,oFD)
_(r,c6C)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oZD=_n('view')
_rz(z,oZD,'class',0,e,s,gg)
var c1D=_n('view')
_rz(z,c1D,'class',1,e,s,gg)
var o2D=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var l3D=_mz(z,'image',['mode',-1,'class',5,'src',1],[],e,s,gg)
_(o2D,l3D)
var a4D=_mz(z,'input',['disabled',-1,'class',7,'placeholder',1,'placeholderClass',2,'type',3,'value',4],[],e,s,gg)
_(o2D,a4D)
_(c1D,o2D)
_(oZD,c1D)
var t5D=_n('view')
_rz(z,t5D,'class',12,e,s,gg)
var e6D=_v()
_(t5D,e6D)
var b7D=function(x9D,o8D,o0D,gg){
var cBE=_n('view')
_rz(z,cBE,'class',17,x9D,o8D,gg)
var hCE=_n('view')
_rz(z,hCE,'class',18,x9D,o8D,gg)
var oDE=_n('view')
_rz(z,oDE,'class',19,x9D,o8D,gg)
var cEE=_n('view')
_rz(z,cEE,'class',20,x9D,o8D,gg)
var oFE=_oz(z,21,x9D,o8D,gg)
_(cEE,oFE)
_(oDE,cEE)
var lGE=_n('view')
_rz(z,lGE,'class',22,x9D,o8D,gg)
var aHE=_oz(z,23,x9D,o8D,gg)
_(lGE,aHE)
_(oDE,lGE)
_(hCE,oDE)
var tIE=_mz(z,'image',['class',24,'mode',1,'src',2],[],x9D,o8D,gg)
_(hCE,tIE)
_(cBE,hCE)
_(o0D,cBE)
return o0D
}
e6D.wxXCkey=2
_2z(z,15,b7D,e,s,gg,e6D,'s','i','i')
_(oZD,t5D)
_(r,oZD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var bKE=_n('view')
_rz(z,bKE,'class',0,e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',1,e,s,gg)
var xME=_v()
_(oLE,xME)
var oNE=function(cPE,fOE,hQE,gg){
var cSE=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],cPE,fOE,gg)
var oTE=_n('view')
_rz(z,oTE,'class',9,cPE,fOE,gg)
var lUE=_n('view')
_rz(z,lUE,'class',10,cPE,fOE,gg)
var aVE=_oz(z,11,cPE,fOE,gg)
_(lUE,aVE)
_(oTE,lUE)
var tWE=_n('view')
_rz(z,tWE,'class',12,cPE,fOE,gg)
var eXE=_oz(z,13,cPE,fOE,gg)
_(tWE,eXE)
_(oTE,tWE)
var bYE=_n('view')
_rz(z,bYE,'class',14,cPE,fOE,gg)
var oZE=_n('view')
_rz(z,oZE,'class',15,cPE,fOE,gg)
var x1E=_n('text')
_rz(z,x1E,'class',16,cPE,fOE,gg)
var o2E=_oz(z,17,cPE,fOE,gg)
_(x1E,o2E)
_(oZE,x1E)
var f3E=_v()
_(oZE,f3E)
var c4E=function(o6E,h5E,c7E,gg){
var l9E=_mz(z,'image',['mode',-1,'class',22,'src',1],[],o6E,h5E,gg)
_(c7E,l9E)
return c7E
}
f3E.wxXCkey=2
_2z(z,20,c4E,cPE,fOE,gg,f3E,'s','i','i')
var a0E=_mz(z,'image',['mode',-1,'class',24,'src',1],[],cPE,fOE,gg)
_(oZE,a0E)
_(bYE,oZE)
var tAF=_n('view')
_rz(z,tAF,'class',26,cPE,fOE,gg)
var eBF=_mz(z,'image',['mode',-1,'class',27,'src',1],[],cPE,fOE,gg)
_(tAF,eBF)
var bCF=_oz(z,29,cPE,fOE,gg)
_(tAF,bCF)
_(bYE,tAF)
_(oTE,bYE)
_(cSE,oTE)
_(hQE,cSE)
return hQE
}
xME.wxXCkey=2
_2z(z,4,oNE,e,s,gg,xME,'s','i','i')
_(bKE,oLE)
var oDF=_n('view')
_rz(z,oDF,'class',30,e,s,gg)
var xEF=_n('view')
_rz(z,xEF,'class',31,e,s,gg)
var oFF=_mz(z,'input',['bindinput',32,'class',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5],[],e,s,gg)
_(xEF,oFF)
_(oDF,xEF)
var fGF=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],e,s,gg)
var cHF=_oz(z,41,e,s,gg)
_(fGF,cHF)
_(oDF,fGF)
_(bKE,oDF)
_(r,bKE)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oJF=_n('view')
_rz(z,oJF,'class',0,e,s,gg)
var oLF=_n('view')
_rz(z,oLF,'class',1,e,s,gg)
var lMF=_n('view')
_rz(z,lMF,'class',2,e,s,gg)
var aNF=_mz(z,'image',['class',3,'mode',1,'src',2],[],e,s,gg)
_(lMF,aNF)
var tOF=_n('view')
_rz(z,tOF,'class',6,e,s,gg)
var ePF=_n('view')
_rz(z,ePF,'class',7,e,s,gg)
var bQF=_oz(z,8,e,s,gg)
_(ePF,bQF)
_(tOF,ePF)
var oRF=_n('view')
_rz(z,oRF,'class',9,e,s,gg)
var xSF=_oz(z,10,e,s,gg)
_(oRF,xSF)
_(tOF,oRF)
var oTF=_n('view')
_rz(z,oTF,'class',11,e,s,gg)
var fUF=_oz(z,12,e,s,gg)
_(oTF,fUF)
_(tOF,oTF)
var cVF=_n('view')
_rz(z,cVF,'class',13,e,s,gg)
var hWF=_v()
_(cVF,hWF)
var oXF=function(oZF,cYF,l1F,gg){
var t3F=_mz(z,'image',['lazyLoad',-1,'class',18,'src',1],[],oZF,cYF,gg)
_(l1F,t3F)
return l1F
}
hWF.wxXCkey=2
_2z(z,16,oXF,e,s,gg,hWF,'s','i','i')
var e4F=_n('text')
_rz(z,e4F,'class',20,e,s,gg)
var b5F=_oz(z,21,e,s,gg)
_(e4F,b5F)
_(cVF,e4F)
_(tOF,cVF)
_(lMF,tOF)
_(oLF,lMF)
var o6F=_n('view')
_rz(z,o6F,'class',22,e,s,gg)
var x7F=_v()
_(o6F,x7F)
var o8F=function(c0F,f9F,hAG,gg){
var cCG=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],c0F,f9F,gg)
var oDG=_mz(z,'image',['mode',-1,'class',30,'src',1],[],c0F,f9F,gg)
_(cCG,oDG)
var lEG=_oz(z,32,c0F,f9F,gg)
_(cCG,lEG)
_(hAG,cCG)
return hAG
}
x7F.wxXCkey=2
_2z(z,25,o8F,e,s,gg,x7F,'s','i','i')
_(oLF,o6F)
var aFG=_n('view')
_rz(z,aFG,'class',33,e,s,gg)
var tGG=_n('view')
_rz(z,tGG,'class',34,e,s,gg)
var eHG=_n('text')
_rz(z,eHG,'class',35,e,s,gg)
var bIG=_oz(z,36,e,s,gg)
_(eHG,bIG)
_(tGG,eHG)
_(aFG,tGG)
var oJG=_n('view')
_rz(z,oJG,'class',37,e,s,gg)
var xKG=_oz(z,38,e,s,gg)
_(oJG,xKG)
_(aFG,oJG)
_(oLF,aFG)
var oLG=_n('view')
_rz(z,oLG,'class',39,e,s,gg)
var fMG=_n('view')
_rz(z,fMG,'class',40,e,s,gg)
var cNG=_n('text')
_rz(z,cNG,'class',41,e,s,gg)
var hOG=_oz(z,42,e,s,gg)
_(cNG,hOG)
_(fMG,cNG)
var oPG=_mz(z,'view',['bindtap',43,'class',1,'data-event-opts',2],[],e,s,gg)
var cQG=_oz(z,46,e,s,gg)
_(oPG,cQG)
var oRG=_mz(z,'image',['class',47,'mode',1,'src',2],[],e,s,gg)
_(oPG,oRG)
_(fMG,oPG)
_(oLG,fMG)
var lSG=_n('view')
_rz(z,lSG,'class',50,e,s,gg)
var aTG=_n('view')
_rz(z,aTG,'class',51,e,s,gg)
var tUG=_n('view')
_rz(z,tUG,'class',52,e,s,gg)
var eVG=_oz(z,53,e,s,gg)
_(tUG,eVG)
_(aTG,tUG)
var bWG=_n('view')
_rz(z,bWG,'class',54,e,s,gg)
var oXG=_oz(z,55,e,s,gg)
_(bWG,oXG)
_(aTG,bWG)
var xYG=_n('view')
_rz(z,xYG,'class',56,e,s,gg)
var oZG=_n('view')
_rz(z,oZG,'class',57,e,s,gg)
var f1G=_n('text')
_rz(z,f1G,'class',58,e,s,gg)
var c2G=_oz(z,59,e,s,gg)
_(f1G,c2G)
_(oZG,f1G)
var h3G=_v()
_(oZG,h3G)
var o4G=function(o6G,c5G,l7G,gg){
var t9G=_mz(z,'image',['mode',-1,'class',64,'src',1],[],o6G,c5G,gg)
_(l7G,t9G)
return l7G
}
h3G.wxXCkey=2
_2z(z,62,o4G,e,s,gg,h3G,'s','i','i')
var e0G=_mz(z,'image',['mode',-1,'class',66,'src',1],[],e,s,gg)
_(oZG,e0G)
_(xYG,oZG)
var bAH=_n('view')
_rz(z,bAH,'class',68,e,s,gg)
var oBH=_mz(z,'image',['mode',-1,'class',69,'src',1],[],e,s,gg)
_(bAH,oBH)
var xCH=_oz(z,71,e,s,gg)
_(bAH,xCH)
_(xYG,bAH)
_(aTG,xYG)
_(lSG,aTG)
_(oLG,lSG)
_(oLF,oLG)
_(oJF,oLF)
var oDH=_n('view')
_rz(z,oDH,'class',72,e,s,gg)
var fEH=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],e,s,gg)
var cFH=_oz(z,76,e,s,gg)
_(fEH,cFH)
_(oDH,fEH)
var hGH=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2],[],e,s,gg)
var oHH=_oz(z,80,e,s,gg)
_(hGH,oHH)
_(oDH,hGH)
_(oJF,oDH)
var cKF=_v()
_(oJF,cKF)
if(_oz(z,81,e,s,gg)){cKF.wxVkey=1
var cIH=_n('view')
_rz(z,cIH,'class',82,e,s,gg)
var oJH=_mz(z,'view',['bindtap',83,'class',1,'data-event-opts',2],[],e,s,gg)
var lKH=_oz(z,86,e,s,gg)
_(oJH,lKH)
_(cIH,oJH)
var aLH=_mz(z,'view',['bindtap',87,'class',1,'data-event-opts',2],[],e,s,gg)
var tMH=_mz(z,'image',['mode',-1,'class',90,'src',1],[],e,s,gg)
_(aLH,tMH)
var eNH=_mz(z,'image',['mode',-1,'class',92,'src',1],[],e,s,gg)
_(aLH,eNH)
var bOH=_mz(z,'image',['mode',-1,'class',94,'src',1],[],e,s,gg)
_(aLH,bOH)
var oPH=_mz(z,'image',['mode',-1,'class',96,'src',1],[],e,s,gg)
_(aLH,oPH)
_(cIH,aLH)
var xQH=_n('view')
_rz(z,xQH,'class',98,e,s,gg)
var oRH=_mz(z,'button',['bindtap',99,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var fSH=_oz(z,103,e,s,gg)
_(oRH,fSH)
_(xQH,oRH)
_(cIH,xQH)
_(cKF,cIH)
}
cKF.wxXCkey=1
_(r,oJF)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hUH=_n('view')
_rz(z,hUH,'class',0,e,s,gg)
var oVH=_n('view')
_rz(z,oVH,'class',1,e,s,gg)
var cWH=_n('view')
_rz(z,cWH,'class',2,e,s,gg)
_(oVH,cWH)
var oXH=_n('view')
_rz(z,oXH,'class',3,e,s,gg)
var lYH=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var aZH=_mz(z,'image',['mode',-1,'class',7,'src',1],[],e,s,gg)
_(lYH,aZH)
var t1H=_mz(z,'input',['disabled',-1,'class',9,'placeholder',1,'placeholderClass',2,'type',3,'value',4],[],e,s,gg)
_(lYH,t1H)
_(oXH,lYH)
var e2H=_mz(z,'button',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var b3H=_oz(z,17,e,s,gg)
_(e2H,b3H)
_(oXH,e2H)
_(oVH,oXH)
_(hUH,oVH)
var o4H=_n('view')
_rz(z,o4H,'class',18,e,s,gg)
_(hUH,o4H)
var x5H=_n('view')
_rz(z,x5H,'class',19,e,s,gg)
var o6H=_mz(z,'swiper',['circular',-1,'autoplay',20,'bindtap',1,'class',2,'data-event-opts',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var f7H=_n('swiper-item')
var c8H=_n('view')
_rz(z,c8H,'class',29,e,s,gg)
var h9H=_mz(z,'image',['class',30,'mode',1,'src',2],[],e,s,gg)
_(c8H,h9H)
_(f7H,c8H)
_(o6H,f7H)
var o0H=_n('swiper-item')
var cAI=_n('view')
_rz(z,cAI,'class',33,e,s,gg)
var oBI=_mz(z,'image',['class',34,'mode',1,'src',2],[],e,s,gg)
_(cAI,oBI)
_(o0H,cAI)
_(o6H,o0H)
_(x5H,o6H)
var lCI=_n('view')
_rz(z,lCI,'class',37,e,s,gg)
var aDI=_n('view')
_rz(z,aDI,'class',38,e,s,gg)
var tEI=_n('text')
_rz(z,tEI,'class',39,e,s,gg)
var eFI=_oz(z,40,e,s,gg)
_(tEI,eFI)
_(aDI,tEI)
var bGI=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var oHI=_oz(z,44,e,s,gg)
_(bGI,oHI)
var xII=_mz(z,'image',['class',45,'mode',1,'src',2],[],e,s,gg)
_(bGI,xII)
_(aDI,bGI)
_(lCI,aDI)
var oJI=_v()
_(lCI,oJI)
var fKI=function(hMI,cLI,oNI,gg){
var oPI=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],hMI,cLI,gg)
var lQI=_mz(z,'image',['class',55,'mode',1,'src',2],[],hMI,cLI,gg)
_(oPI,lQI)
var aRI=_n('view')
_rz(z,aRI,'class',58,hMI,cLI,gg)
var tSI=_n('view')
_rz(z,tSI,'class',59,hMI,cLI,gg)
var eTI=_oz(z,60,hMI,cLI,gg)
_(tSI,eTI)
_(aRI,tSI)
var bUI=_n('view')
_rz(z,bUI,'class',61,hMI,cLI,gg)
var oVI=_oz(z,62,hMI,cLI,gg)
_(bUI,oVI)
_(aRI,bUI)
var xWI=_n('view')
_rz(z,xWI,'class',63,hMI,cLI,gg)
var oXI=_mz(z,'image',['lazyLoad',-1,'class',64,'mode',1,'src',2],[],hMI,cLI,gg)
_(xWI,oXI)
var fYI=_mz(z,'image',['lazyLoad',-1,'class',67,'mode',1,'src',2],[],hMI,cLI,gg)
_(xWI,fYI)
var cZI=_mz(z,'image',['lazyLoad',-1,'class',70,'mode',1,'src',2],[],hMI,cLI,gg)
_(xWI,cZI)
var h1I=_oz(z,73,hMI,cLI,gg)
_(xWI,h1I)
_(aRI,xWI)
_(oPI,aRI)
_(oNI,oPI)
return oNI
}
oJI.wxXCkey=2
_2z(z,50,fKI,e,s,gg,oJI,'s','i','i')
_(x5H,lCI)
_(hUH,x5H)
_(r,hUH)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var c3I=_n('view')
_rz(z,c3I,'class',0,e,s,gg)
var o4I=_oz(z,1,e,s,gg)
_(c3I,o4I)
_(r,c3I)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var a6I=_n('view')
_rz(z,a6I,'class',0,e,s,gg)
var t7I=_n('view')
_rz(z,t7I,'class',1,e,s,gg)
var e8I=_n('view')
_rz(z,e8I,'class',2,e,s,gg)
_(t7I,e8I)
var b9I=_n('view')
_rz(z,b9I,'class',3,e,s,gg)
var o0I=_oz(z,4,e,s,gg)
_(b9I,o0I)
var xAJ=_mz(z,'image',['mode',-1,'bindtap',5,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(b9I,xAJ)
_(t7I,b9I)
_(a6I,t7I)
var oBJ=_n('view')
_rz(z,oBJ,'class',9,e,s,gg)
_(a6I,oBJ)
var fCJ=_n('view')
_rz(z,fCJ,'class',10,e,s,gg)
var cDJ=_n('view')
_rz(z,cDJ,'class',11,e,s,gg)
var hEJ=_mz(z,'image',['class',12,'mode',1,'src',2],[],e,s,gg)
_(cDJ,hEJ)
var oFJ=_n('view')
_rz(z,oFJ,'class',15,e,s,gg)
var cGJ=_n('view')
_rz(z,cGJ,'class',16,e,s,gg)
var oHJ=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var lIJ=_oz(z,20,e,s,gg)
_(oHJ,lIJ)
_(cGJ,oHJ)
var aJJ=_n('view')
_rz(z,aJJ,'class',21,e,s,gg)
var tKJ=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],e,s,gg)
var eLJ=_oz(z,25,e,s,gg)
_(tKJ,eLJ)
_(aJJ,tKJ)
_(cGJ,aJJ)
_(oFJ,cGJ)
var bMJ=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],e,s,gg)
var oNJ=_oz(z,29,e,s,gg)
_(bMJ,oNJ)
_(oFJ,bMJ)
_(cDJ,oFJ)
_(fCJ,cDJ)
var xOJ=_n('view')
_rz(z,xOJ,'class',30,e,s,gg)
var oPJ=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var fQJ=_n('view')
_rz(z,fQJ,'class',34,e,s,gg)
var cRJ=_mz(z,'image',['mode',-1,'class',35,'src',1],[],e,s,gg)
_(fQJ,cRJ)
var hSJ=_oz(z,37,e,s,gg)
_(fQJ,hSJ)
_(oPJ,fQJ)
var oTJ=_n('view')
_rz(z,oTJ,'class',38,e,s,gg)
var cUJ=_n('view')
_rz(z,cUJ,'class',39,e,s,gg)
_(oTJ,cUJ)
var oVJ=_n('view')
_rz(z,oVJ,'class',40,e,s,gg)
var lWJ=_oz(z,41,e,s,gg)
_(oVJ,lWJ)
_(oTJ,oVJ)
_(oPJ,oTJ)
_(xOJ,oPJ)
var aXJ=_mz(z,'view',['bindtap',42,'class',1,'data-event-opts',2],[],e,s,gg)
var tYJ=_n('view')
_rz(z,tYJ,'class',45,e,s,gg)
var eZJ=_mz(z,'image',['mode',-1,'class',46,'src',1],[],e,s,gg)
_(tYJ,eZJ)
var b1J=_oz(z,48,e,s,gg)
_(tYJ,b1J)
_(aXJ,tYJ)
var o2J=_n('view')
_rz(z,o2J,'class',49,e,s,gg)
var x3J=_n('view')
_rz(z,x3J,'class',50,e,s,gg)
var o4J=_oz(z,51,e,s,gg)
_(x3J,o4J)
_(o2J,x3J)
var f5J=_n('view')
_rz(z,f5J,'class',52,e,s,gg)
var c6J=_oz(z,53,e,s,gg)
_(f5J,c6J)
_(o2J,f5J)
_(aXJ,o2J)
_(xOJ,aXJ)
var h7J=_mz(z,'view',['bindtap',54,'class',1,'data-event-opts',2],[],e,s,gg)
var o8J=_n('view')
_rz(z,o8J,'class',57,e,s,gg)
var c9J=_mz(z,'image',['mode',-1,'class',58,'src',1],[],e,s,gg)
_(o8J,c9J)
var o0J=_oz(z,60,e,s,gg)
_(o8J,o0J)
_(h7J,o8J)
var lAK=_n('view')
_rz(z,lAK,'class',61,e,s,gg)
var aBK=_n('view')
_rz(z,aBK,'class',62,e,s,gg)
var tCK=_oz(z,63,e,s,gg)
_(aBK,tCK)
_(lAK,aBK)
var eDK=_n('view')
_rz(z,eDK,'class',64,e,s,gg)
var bEK=_oz(z,65,e,s,gg)
_(eDK,bEK)
_(lAK,eDK)
_(h7J,lAK)
_(xOJ,h7J)
var oFK=_mz(z,'view',['bindtap',66,'class',1,'data-event-opts',2],[],e,s,gg)
var xGK=_n('view')
_rz(z,xGK,'class',69,e,s,gg)
var oHK=_mz(z,'image',['mode',-1,'class',70,'src',1],[],e,s,gg)
_(xGK,oHK)
var fIK=_oz(z,72,e,s,gg)
_(xGK,fIK)
_(oFK,xGK)
var cJK=_n('view')
_rz(z,cJK,'class',73,e,s,gg)
var hKK=_n('view')
_rz(z,hKK,'class',74,e,s,gg)
var oLK=_oz(z,75,e,s,gg)
_(hKK,oLK)
_(cJK,hKK)
var cMK=_n('view')
_rz(z,cMK,'class',76,e,s,gg)
var oNK=_oz(z,77,e,s,gg)
_(cMK,oNK)
_(cJK,cMK)
_(oFK,cJK)
_(xOJ,oFK)
var lOK=_mz(z,'view',['bindtap',78,'class',1,'data-event-opts',2],[],e,s,gg)
var aPK=_n('view')
_rz(z,aPK,'class',81,e,s,gg)
var tQK=_mz(z,'image',['mode',-1,'class',82,'src',1],[],e,s,gg)
_(aPK,tQK)
var eRK=_oz(z,84,e,s,gg)
_(aPK,eRK)
_(lOK,aPK)
var bSK=_n('view')
_rz(z,bSK,'class',85,e,s,gg)
var oTK=_n('view')
_rz(z,oTK,'class',86,e,s,gg)
var xUK=_oz(z,87,e,s,gg)
_(oTK,xUK)
_(bSK,oTK)
var oVK=_n('view')
_rz(z,oVK,'class',88,e,s,gg)
var fWK=_oz(z,89,e,s,gg)
_(oVK,fWK)
_(bSK,oVK)
_(lOK,bSK)
_(xOJ,lOK)
var cXK=_mz(z,'view',['bindtap',90,'class',1,'data-event-opts',2],[],e,s,gg)
var hYK=_n('view')
_rz(z,hYK,'class',93,e,s,gg)
var oZK=_mz(z,'image',['mode',-1,'class',94,'src',1],[],e,s,gg)
_(hYK,oZK)
var c1K=_oz(z,96,e,s,gg)
_(hYK,c1K)
_(cXK,hYK)
var o2K=_n('view')
_rz(z,o2K,'class',97,e,s,gg)
var l3K=_n('view')
_rz(z,l3K,'class',98,e,s,gg)
var a4K=_oz(z,99,e,s,gg)
_(l3K,a4K)
_(o2K,l3K)
var t5K=_n('view')
_rz(z,t5K,'class',100,e,s,gg)
var e6K=_oz(z,101,e,s,gg)
_(t5K,e6K)
_(o2K,t5K)
_(cXK,o2K)
_(xOJ,cXK)
var b7K=_mz(z,'view',['bindtap',102,'class',1,'data-event-opts',2],[],e,s,gg)
var o8K=_n('view')
_rz(z,o8K,'class',105,e,s,gg)
var x9K=_mz(z,'image',['mode',-1,'class',106,'src',1],[],e,s,gg)
_(o8K,x9K)
var o0K=_oz(z,108,e,s,gg)
_(o8K,o0K)
_(b7K,o8K)
var fAL=_n('view')
_rz(z,fAL,'class',109,e,s,gg)
var cBL=_n('view')
_rz(z,cBL,'class',110,e,s,gg)
var hCL=_oz(z,111,e,s,gg)
_(cBL,hCL)
_(fAL,cBL)
var oDL=_n('view')
_rz(z,oDL,'class',112,e,s,gg)
var cEL=_oz(z,113,e,s,gg)
_(oDL,cEL)
var oFL=_n('text')
_rz(z,oFL,'class',114,e,s,gg)
var lGL=_oz(z,115,e,s,gg)
_(oFL,lGL)
_(oDL,oFL)
var aHL=_oz(z,116,e,s,gg)
_(oDL,aHL)
_(fAL,oDL)
_(b7K,fAL)
_(xOJ,b7K)
_(fCJ,xOJ)
_(a6I,fCJ)
_(r,a6I)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var eJL=_n('view')
_rz(z,eJL,'class',0,e,s,gg)
var bKL=_n('view')
_rz(z,bKL,'class',1,e,s,gg)
var oLL=_n('view')
_rz(z,oLL,'class',2,e,s,gg)
_(bKL,oLL)
var xML=_n('view')
_rz(z,xML,'class',3,e,s,gg)
var oNL=_oz(z,4,e,s,gg)
_(xML,oNL)
_(bKL,xML)
_(eJL,bKL)
var fOL=_n('view')
_rz(z,fOL,'class',5,e,s,gg)
_(eJL,fOL)
var cPL=_n('view')
_rz(z,cPL,'class',6,e,s,gg)
var hQL=_mz(z,'scroll-view',['scrollY',-1,'class',7],[],e,s,gg)
var oRL=_n('view')
_rz(z,oRL,'class',8,e,s,gg)
var cSL=_mz(z,'view',['class',9,'data-chapter-id',1],[],e,s,gg)
var oTL=_n('view')
_rz(z,oTL,'class',11,e,s,gg)
var lUL=_oz(z,12,e,s,gg)
_(oTL,lUL)
_(cSL,oTL)
var aVL=_n('view')
_rz(z,aVL,'class',13,e,s,gg)
var tWL=_oz(z,14,e,s,gg)
_(aVL,tWL)
_(cSL,aVL)
var eXL=_n('view')
_rz(z,eXL,'class',15,e,s,gg)
var bYL=_oz(z,16,e,s,gg)
_(eXL,bYL)
_(cSL,eXL)
var oZL=_n('view')
_rz(z,oZL,'class',17,e,s,gg)
var x1L=_oz(z,18,e,s,gg)
_(oZL,x1L)
_(cSL,oZL)
var o2L=_n('view')
_rz(z,o2L,'class',19,e,s,gg)
var f3L=_oz(z,20,e,s,gg)
_(o2L,f3L)
_(cSL,o2L)
var c4L=_n('view')
_rz(z,c4L,'class',21,e,s,gg)
var h5L=_oz(z,22,e,s,gg)
_(c4L,h5L)
_(cSL,c4L)
var o6L=_n('view')
_rz(z,o6L,'class',23,e,s,gg)
var c7L=_oz(z,24,e,s,gg)
_(o6L,c7L)
_(cSL,o6L)
var o8L=_n('view')
_rz(z,o8L,'class',25,e,s,gg)
var l9L=_oz(z,26,e,s,gg)
_(o8L,l9L)
_(cSL,o8L)
var a0L=_n('view')
_rz(z,a0L,'class',27,e,s,gg)
var tAM=_oz(z,28,e,s,gg)
_(a0L,tAM)
_(cSL,a0L)
var eBM=_n('view')
_rz(z,eBM,'class',29,e,s,gg)
var bCM=_oz(z,30,e,s,gg)
_(eBM,bCM)
_(cSL,eBM)
var oDM=_n('view')
_rz(z,oDM,'class',31,e,s,gg)
var xEM=_oz(z,32,e,s,gg)
_(oDM,xEM)
_(cSL,oDM)
var oFM=_n('view')
_rz(z,oFM,'class',33,e,s,gg)
var fGM=_oz(z,34,e,s,gg)
_(oFM,fGM)
_(cSL,oFM)
var cHM=_n('view')
_rz(z,cHM,'class',35,e,s,gg)
var hIM=_oz(z,36,e,s,gg)
_(cHM,hIM)
_(cSL,cHM)
var oJM=_n('view')
_rz(z,oJM,'class',37,e,s,gg)
var cKM=_oz(z,38,e,s,gg)
_(oJM,cKM)
_(cSL,oJM)
var oLM=_n('view')
_rz(z,oLM,'class',39,e,s,gg)
var lMM=_oz(z,40,e,s,gg)
_(oLM,lMM)
_(cSL,oLM)
var aNM=_n('view')
_rz(z,aNM,'class',41,e,s,gg)
var tOM=_oz(z,42,e,s,gg)
_(aNM,tOM)
_(cSL,aNM)
var ePM=_n('view')
_rz(z,ePM,'class',43,e,s,gg)
var bQM=_oz(z,44,e,s,gg)
_(ePM,bQM)
_(cSL,ePM)
var oRM=_n('view')
_rz(z,oRM,'class',45,e,s,gg)
var xSM=_oz(z,46,e,s,gg)
_(oRM,xSM)
_(cSL,oRM)
var oTM=_n('view')
_rz(z,oTM,'class',47,e,s,gg)
var fUM=_oz(z,48,e,s,gg)
_(oTM,fUM)
_(cSL,oTM)
var cVM=_n('view')
_rz(z,cVM,'class',49,e,s,gg)
var hWM=_oz(z,50,e,s,gg)
_(cVM,hWM)
_(cSL,cVM)
var oXM=_n('view')
_rz(z,oXM,'class',51,e,s,gg)
var cYM=_oz(z,52,e,s,gg)
_(oXM,cYM)
_(cSL,oXM)
var oZM=_n('view')
_rz(z,oZM,'class',53,e,s,gg)
var l1M=_oz(z,54,e,s,gg)
_(oZM,l1M)
_(cSL,oZM)
var a2M=_n('view')
_rz(z,a2M,'class',55,e,s,gg)
var t3M=_oz(z,56,e,s,gg)
_(a2M,t3M)
_(cSL,a2M)
var e4M=_n('view')
_rz(z,e4M,'class',57,e,s,gg)
var b5M=_oz(z,58,e,s,gg)
_(e4M,b5M)
_(cSL,e4M)
var o6M=_n('view')
_rz(z,o6M,'class',59,e,s,gg)
var x7M=_oz(z,60,e,s,gg)
_(o6M,x7M)
_(cSL,o6M)
var o8M=_n('view')
_rz(z,o8M,'class',61,e,s,gg)
var f9M=_oz(z,62,e,s,gg)
_(o8M,f9M)
_(cSL,o8M)
var c0M=_n('view')
_rz(z,c0M,'class',63,e,s,gg)
var hAN=_oz(z,64,e,s,gg)
_(c0M,hAN)
_(cSL,c0M)
var oBN=_n('view')
_rz(z,oBN,'class',65,e,s,gg)
var cCN=_oz(z,66,e,s,gg)
_(oBN,cCN)
_(cSL,oBN)
var oDN=_n('view')
_rz(z,oDN,'class',67,e,s,gg)
var lEN=_oz(z,68,e,s,gg)
_(oDN,lEN)
_(cSL,oDN)
var aFN=_n('view')
_rz(z,aFN,'class',69,e,s,gg)
var tGN=_oz(z,70,e,s,gg)
_(aFN,tGN)
_(cSL,aFN)
var eHN=_n('view')
_rz(z,eHN,'class',71,e,s,gg)
var bIN=_oz(z,72,e,s,gg)
_(eHN,bIN)
_(cSL,eHN)
var oJN=_n('view')
_rz(z,oJN,'class',73,e,s,gg)
var xKN=_oz(z,74,e,s,gg)
_(oJN,xKN)
_(cSL,oJN)
var oLN=_n('view')
_rz(z,oLN,'class',75,e,s,gg)
var fMN=_oz(z,76,e,s,gg)
_(oLN,fMN)
_(cSL,oLN)
var cNN=_n('view')
_rz(z,cNN,'class',77,e,s,gg)
var hON=_oz(z,78,e,s,gg)
_(cNN,hON)
_(cSL,cNN)
var oPN=_n('view')
_rz(z,oPN,'class',79,e,s,gg)
var cQN=_oz(z,80,e,s,gg)
_(oPN,cQN)
_(cSL,oPN)
var oRN=_n('view')
_rz(z,oRN,'class',81,e,s,gg)
var lSN=_oz(z,82,e,s,gg)
_(oRN,lSN)
_(cSL,oRN)
var aTN=_n('view')
_rz(z,aTN,'class',83,e,s,gg)
var tUN=_oz(z,84,e,s,gg)
_(aTN,tUN)
_(cSL,aTN)
var eVN=_n('view')
_rz(z,eVN,'class',85,e,s,gg)
var bWN=_oz(z,86,e,s,gg)
_(eVN,bWN)
_(cSL,eVN)
var oXN=_n('view')
_rz(z,oXN,'class',87,e,s,gg)
var xYN=_oz(z,88,e,s,gg)
_(oXN,xYN)
_(cSL,oXN)
var oZN=_n('view')
_rz(z,oZN,'class',89,e,s,gg)
var f1N=_oz(z,90,e,s,gg)
_(oZN,f1N)
_(cSL,oZN)
var c2N=_n('view')
_rz(z,c2N,'class',91,e,s,gg)
var h3N=_oz(z,92,e,s,gg)
_(c2N,h3N)
_(cSL,c2N)
var o4N=_n('view')
_rz(z,o4N,'class',93,e,s,gg)
var c5N=_oz(z,94,e,s,gg)
_(o4N,c5N)
_(cSL,o4N)
var o6N=_n('view')
_rz(z,o6N,'class',95,e,s,gg)
var l7N=_oz(z,96,e,s,gg)
_(o6N,l7N)
_(cSL,o6N)
var a8N=_n('view')
_rz(z,a8N,'class',97,e,s,gg)
var t9N=_oz(z,98,e,s,gg)
_(a8N,t9N)
_(cSL,a8N)
var e0N=_n('view')
_rz(z,e0N,'class',99,e,s,gg)
var bAO=_oz(z,100,e,s,gg)
_(e0N,bAO)
_(cSL,e0N)
var oBO=_n('view')
_rz(z,oBO,'class',101,e,s,gg)
var xCO=_oz(z,102,e,s,gg)
_(oBO,xCO)
_(cSL,oBO)
var oDO=_n('view')
_rz(z,oDO,'class',103,e,s,gg)
var fEO=_oz(z,104,e,s,gg)
_(oDO,fEO)
_(cSL,oDO)
var cFO=_n('view')
_rz(z,cFO,'class',105,e,s,gg)
var hGO=_oz(z,106,e,s,gg)
_(cFO,hGO)
_(cSL,cFO)
var oHO=_n('view')
_rz(z,oHO,'class',107,e,s,gg)
var cIO=_oz(z,108,e,s,gg)
_(oHO,cIO)
_(cSL,oHO)
var oJO=_n('view')
_rz(z,oJO,'class',109,e,s,gg)
var lKO=_oz(z,110,e,s,gg)
_(oJO,lKO)
_(cSL,oJO)
var aLO=_n('view')
_rz(z,aLO,'class',111,e,s,gg)
var tMO=_oz(z,112,e,s,gg)
_(aLO,tMO)
_(cSL,aLO)
var eNO=_n('view')
_rz(z,eNO,'class',113,e,s,gg)
var bOO=_oz(z,114,e,s,gg)
_(eNO,bOO)
_(cSL,eNO)
var oPO=_n('view')
_rz(z,oPO,'class',115,e,s,gg)
var xQO=_oz(z,116,e,s,gg)
_(oPO,xQO)
_(cSL,oPO)
var oRO=_n('view')
_rz(z,oRO,'class',117,e,s,gg)
var fSO=_oz(z,118,e,s,gg)
_(oRO,fSO)
_(cSL,oRO)
var cTO=_n('view')
_rz(z,cTO,'class',119,e,s,gg)
var hUO=_oz(z,120,e,s,gg)
_(cTO,hUO)
_(cSL,cTO)
var oVO=_n('view')
_rz(z,oVO,'class',121,e,s,gg)
var cWO=_oz(z,122,e,s,gg)
_(oVO,cWO)
_(cSL,oVO)
var oXO=_n('view')
_rz(z,oXO,'class',123,e,s,gg)
var lYO=_oz(z,124,e,s,gg)
_(oXO,lYO)
_(cSL,oXO)
var aZO=_n('view')
_rz(z,aZO,'class',125,e,s,gg)
var t1O=_oz(z,126,e,s,gg)
_(aZO,t1O)
_(cSL,aZO)
var e2O=_n('view')
_rz(z,e2O,'class',127,e,s,gg)
var b3O=_oz(z,128,e,s,gg)
_(e2O,b3O)
_(cSL,e2O)
var o4O=_n('view')
_rz(z,o4O,'class',129,e,s,gg)
var x5O=_oz(z,130,e,s,gg)
_(o4O,x5O)
_(cSL,o4O)
var o6O=_n('view')
_rz(z,o6O,'class',131,e,s,gg)
var f7O=_oz(z,132,e,s,gg)
_(o6O,f7O)
_(cSL,o6O)
var c8O=_n('view')
_rz(z,c8O,'class',133,e,s,gg)
var h9O=_oz(z,134,e,s,gg)
_(c8O,h9O)
_(cSL,c8O)
var o0O=_n('view')
_rz(z,o0O,'class',135,e,s,gg)
var cAP=_oz(z,136,e,s,gg)
_(o0O,cAP)
_(cSL,o0O)
var oBP=_n('view')
_rz(z,oBP,'class',137,e,s,gg)
var lCP=_oz(z,138,e,s,gg)
_(oBP,lCP)
_(cSL,oBP)
var aDP=_n('view')
_rz(z,aDP,'class',139,e,s,gg)
var tEP=_oz(z,140,e,s,gg)
_(aDP,tEP)
_(cSL,aDP)
var eFP=_n('view')
_rz(z,eFP,'class',141,e,s,gg)
var bGP=_oz(z,142,e,s,gg)
_(eFP,bGP)
_(cSL,eFP)
var oHP=_n('view')
_rz(z,oHP,'class',143,e,s,gg)
var xIP=_oz(z,144,e,s,gg)
_(oHP,xIP)
_(cSL,oHP)
var oJP=_n('view')
_rz(z,oJP,'class',145,e,s,gg)
var fKP=_oz(z,146,e,s,gg)
_(oJP,fKP)
_(cSL,oJP)
var cLP=_n('view')
_rz(z,cLP,'class',147,e,s,gg)
var hMP=_oz(z,148,e,s,gg)
_(cLP,hMP)
_(cSL,cLP)
var oNP=_n('view')
_rz(z,oNP,'class',149,e,s,gg)
var cOP=_oz(z,150,e,s,gg)
_(oNP,cOP)
_(cSL,oNP)
var oPP=_n('view')
_rz(z,oPP,'class',151,e,s,gg)
var lQP=_oz(z,152,e,s,gg)
_(oPP,lQP)
_(cSL,oPP)
var aRP=_n('view')
_rz(z,aRP,'class',153,e,s,gg)
var tSP=_oz(z,154,e,s,gg)
_(aRP,tSP)
_(cSL,aRP)
var eTP=_n('view')
_rz(z,eTP,'class',155,e,s,gg)
var bUP=_oz(z,156,e,s,gg)
_(eTP,bUP)
_(cSL,eTP)
var oVP=_n('view')
_rz(z,oVP,'class',157,e,s,gg)
var xWP=_oz(z,158,e,s,gg)
_(oVP,xWP)
_(cSL,oVP)
var oXP=_n('view')
_rz(z,oXP,'class',159,e,s,gg)
var fYP=_oz(z,160,e,s,gg)
_(oXP,fYP)
_(cSL,oXP)
var cZP=_n('view')
_rz(z,cZP,'class',161,e,s,gg)
var h1P=_oz(z,162,e,s,gg)
_(cZP,h1P)
_(cSL,cZP)
var o2P=_n('view')
_rz(z,o2P,'class',163,e,s,gg)
var c3P=_oz(z,164,e,s,gg)
_(o2P,c3P)
_(cSL,o2P)
var o4P=_n('view')
_rz(z,o4P,'class',165,e,s,gg)
var l5P=_oz(z,166,e,s,gg)
_(o4P,l5P)
_(cSL,o4P)
var a6P=_n('view')
_rz(z,a6P,'class',167,e,s,gg)
var t7P=_oz(z,168,e,s,gg)
_(a6P,t7P)
_(cSL,a6P)
var e8P=_n('view')
_rz(z,e8P,'class',169,e,s,gg)
var b9P=_oz(z,170,e,s,gg)
_(e8P,b9P)
_(cSL,e8P)
var o0P=_n('view')
_rz(z,o0P,'class',171,e,s,gg)
var xAQ=_oz(z,172,e,s,gg)
_(o0P,xAQ)
_(cSL,o0P)
_(oRL,cSL)
_(hQL,oRL)
_(cPL,hQL)
_(eJL,cPL)
_(r,eJL)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["body, wx-uni-page{ background-color: var(--bg-color); color: var(--font-color); font-size: var(--f-size-2); height: 100%; --f-size-1:",[0,24],"; --f-size-2:",[0,28],"; --f-size-3:",[0,32],"; --f-size-4:",[0,36],"; --f-size-5:",[0,40],"; --f-size-6:",[0,44],"; --c-txt-1:#FFFFFF; --c-txt-2:#95A1A6; --c-txt-3:#cdced0; --c-bg-1:#000000; --c-bg-2:#7E7F94; --c-bg-3:#0b0c21; --pad-lr:",[0,32],"; --h-head:",[0,96],"; --c-input-holder:#696a7f; --bg-color: #fff; --co-color: #5ACC93; --yy-color: #F3F3F3; --li-color: #EAFFF8; --font-color: #333; }\nwx-uni-button, wx-button{ margin: 0; padding: 0; color: var(--c-txt-1); background-color: var(--c-bg-1); }\nwx-uni-button:after, wx-button:after{ border: none; width: 100%; height: 100%; }\n.",[1],"button-hover{ color: inherit; background-color: inherit; }\nwx-uni-image, wx-uni-image\x3e.",[1],"_img, .",[1],"_img{ vertical-align: middle; }\n.",[1],"l-lay-gray{ background-color: #C0C0C0; }\n.",[1],"l-status{ width: 100%; height: var(--status-bar-height); background-color: transparent; }\n.",[1],"l-clear-both:after{ content: \x27 \x27; display: block; width: 0; height: 0; clear: both; zoom: 1; }\n.",[1],"content { position: relative; height: 100%; }\n.",[1],"l-fixed{ position: fixed; width: 100%; z-index: 999; top: 0; background-color: var(--co-color); box-shadow: 0 2px 2px 0 rgba(0,0,0,.1); }\n.",[1],"l-placeholder{ width: 100%; height: calc(var(--status-bar-height) + var(--h-head)); }\n.",[1],"l-head{ padding: 0 ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: var(--h-head); }\n.",[1],"l-search{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: ",[0,16]," ",[0,26],"; margin-right: ",[0,16],"; border-radius: ",[0,32],"; background-color: #222338; }\n.",[1],"l-icon-search{ width: ",[0,36],"; height: ",[0,36],"; }\n.",[1],"l-search-input{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: 0 ",[0,12],"; }\n.",[1],"l-holder{ color: var(--c-input-holder); }\n.",[1],"l-body{ padding: 0 var(--pad-lr); }\n.",[1],"l-swiper{ margin: ",[0,36]," 0 0; height: ",[0,248],"; }\n.",[1],"l-swiper-item{ height: 80%; overflow: hidden; border-radius: ",[0,26],"; }\n.",[1],"l-carousel-img{ width: 100%; height: 100%; }\n.",[1],"l-icon-more{ width: ",[0,30],"; vertical-align: middle; margin-left: ",[0,12],"; }\n.",[1],"l-content{ overflow-x: hidden; overflow-y: scroll; width: 100%; height: calc(100% - var(--status-bar-height) - var(--h-head)); }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/book-mall/book-mall.wxss']=setCssToHead([".",[1],"l-body-tab { display: -webkit-box; display: -webkit-flex; display: flex; margin: ",[0,20]," 0 0; -webkit-box-align: center; -webkit-align-items: center; align-items: center; white-space: nowrap; -webkit-justify-content: space-around; justify-content: space-around; }\n.",[1],"l-tab-item-img { margin-bottom: ",[0,10],"; }\n.",[1],"l-tab-item-img-3, .",[1],"l-tab-item-img-1 { width: ",[0,60],"; height: ",[0,58],"; }\n.",[1],"l-tab-item-img-2 { width: ",[0,52],"; height: ",[0,56],"; }\n.",[1],"l-tab-item-img-4 { width: ",[0,54],"; height: ",[0,54],"; }\n.",[1],"l-tab-item-value { text-align: center; font-size: ",[0,26],"; color: var(--c-txt-2); }\n.",[1],"l-view { padding: ",[0,40]," var(--pad-lr); border-bottom: ",[0,1]," solid #222337; }\n.",[1],"l-view-not-border { padding-bottom: 0; border-bottom: none; }\n.",[1],"l-h3 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-h3-title { font: bold var(--f-size-5) normal; }\n.",[1],"l-h3-more { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; color: var(--c-bg-2); }\n.",[1],"l-icon-refresh { width: ",[0,33],"; height: ",[0,25],"; margin-left: ",[0,12],"; }\n.",[1],"l-icon-dot { width: ",[0,30],"; margin-top: ",[0,10],"; }\n.",[1],"l-dl { margin-top: ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; height: ",[0,224],"; }\n.",[1],"l-dt { width: ",[0,160],"; height: 100%; border-radius: ",[0,10],"; margin-right: ",[0,24],"; }\n.",[1],"l-dd { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-title { color: var(--c-txt-3); font: var(--f-size-3) normal; }\n.",[1],"l-dd-content, .",[1],"l-dd-footer { color: var(--c-txt-2); font: var(--f-size-2)/var(--f-size-4) normal; }\n.",[1],"l-dd-view-footer, .",[1],"l-dd-content { width: 100%; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }\n.",[1],"l-dd-view-footer { color: #868DAB; font-size: var(--f-size-1); -webkit-line-clamp: 2; }\n.",[1],"l-dd-content { -webkit-line-clamp: 3; }\n.",[1],"l-dd-footer { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"l-dd-img { width: ",[0,40],"; height: ",[0,40],"; border-radius: 50%; margin-right: ",[0,6],"; }\n.",[1],"l-dl-view { position: relative; height: ",[0,282],"; margin-top: ",[0,32],"; }\n.",[1],"l-dl-bg { height: ",[0,250],"; background: rgba(34, 35, 55, 1); box-shadow: 0px 30px 60px 0px rgba(17, 21, 26, 0.1); border-radius: ",[0,20],"; position: absolute; top: ",[0,32],"; left: 0; width: 100%; }\n.",[1],"l-dl-content { position: relative; z-index: 1; display: -webkit-box; display: -webkit-flex; display: flex; padding: 0 ",[0,48],"; }\n.",[1],"l-dt-view { width: ",[0,168],"; height: ",[0,250],"; border-radius: ",[0,10],"; margin-right: ",[0,30],"; }\n.",[1],"l-dd-view { width: calc(100% - ",[0,198],"); padding: ",[0,62]," 0 ",[0,14],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-view-content { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-view-title { width: calc(100% - ",[0,62],"); border-bottom: ",[0,1]," solid #5D637C; }\n.",[1],"l-dd-view-ta, .",[1],"l-dd-view-tb { width: 100%; overflow: hidden; white-space: normal; text-overflow: ellipsis; }\n.",[1],"l-dd-view-ta { font: bold var(--f-size-3) normal; }\n.",[1],"l-dd-view-tb { color: #5D637C; padding: ",[0,14]," 0 ",[0,25],"; font-size: var(--f-size-1); }\n.",[1],"l-list-classify { padding: ",[0,32]," 0 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-list-item { width: ",[0,330],"; height: ",[0,160],"; background-color: #F5F7F9; border-radius: ",[0,16],"; margin-bottom: ",[0,24],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"l-item_view { width: calc(100% - ",[0,64],"); height: ",[0,122],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-item__value-title { font-size: var(--f-size-2); color: #2B3133; margin-bottom: ",[0,12],"; }\n.",[1],"l-item__value-sub { font-size: var(--f-size-1); color: #95A1A6; }\n.",[1],"l-img-classify { width: ",[0,98],"; height: 100%; }\n",],undefined,{path:"./pages/book-mall/book-mall.wxss"});    
__wxAppCode__['pages/book-mall/book-mall.wxml']=$gwx('./pages/book-mall/book-mall.wxml');

__wxAppCode__['pages/bookrack/bookrack.wxss']=setCssToHead([".",[1],"l-body { padding: var(--pad-lr) 0 var(--pad-lr) var(--pad-lr); }\n.",[1],"l-ul { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding-bottom: ",[0,32],"; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"l-add, .",[1],"l-li { width: 28%; height: ",[0,392],"; margin-right: 5%; margin-bottom: ",[0,32],"; }\n.",[1],"l-li { text-align: center; }\n.",[1],"l-add-view, .",[1],"l-li-img { width: 100%; height: ",[0,300],"; border-radius: ",[0,10],"; margin-bottom: ",[0,8],"; }\n.",[1],"l-add-view { box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: flex; border: ",[0,6]," solid rgba(126, 127, 148, 1); -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"l-icon-add { width: ",[0,36],"; height: ",[0,36],"; }\n.",[1],"l-li-txt { padding: 0 ",[0,10],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"book-head { -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"book-title { color: #fff; font-size: var(--f-size-3); }\n.",[1],"book-menu { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"book-new { position: absolute; top: ",[0,-8],"; right: ",[0,-30],"; background-color: #da0000; color: #fff; font-size: ",[0,8],"; padding: 0 ",[0,20],"; -webkit-transform: rotate(45deg); transform: rotate(45deg); height: ",[0,50],"; line-height: ",[0,65],"; }\n",],undefined,{path:"./pages/bookrack/bookrack.wxss"});    
__wxAppCode__['pages/bookrack/bookrack.wxml']=$gwx('./pages/bookrack/bookrack.wxml');

__wxAppCode__['pages/classify/classify.wxss']=setCssToHead([".",[1],"l-body { padding: var(--pad-lr); display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-list-item { width: ",[0,330],"; height: ",[0,160],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; background-color: #F5F7F9; border-radius: ",[0,16],"; margin-bottom: ",[0,24],"; }\n.",[1],"l-item_view { width: calc(100% - ",[0,64],"); height: ",[0,122],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-item__value-title { font-size: var(--f-size-2); color: #2B3133; margin-bottom: ",[0,12],"; }\n.",[1],"l-item__value-sub { font-size: var(--f-size-1); color: #95A1A6; }\n.",[1],"l-img-classify { width: ",[0,98],"; height: 100%; }\n",],undefined,{path:"./pages/classify/classify.wxss"});    
__wxAppCode__['pages/classify/classify.wxml']=$gwx('./pages/classify/classify.wxml');

__wxAppCode__['pages/comment/comment.wxss']=setCssToHead([".",[1],"content { padding-bottom: ",[0,108],"; }\n.",[1],"l-publish { position: fixed; bottom: 0; left: 0; padding: 0 var(--pad-lr); width: calc(100% - var(--pad-lr) - var(--pad-lr)); height: ",[0,98],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; background-color: #373A49; }\n.",[1],"l-form { width: ",[0,600],"; height: ",[0,80],"; background: rgba(8, 9, 32, 1); border-radius: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"l-input { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: 0 var(--pad-lr); }\n.",[1],"l-publish-btn { margin-left: ",[0,20],"; }\n.",[1],"l-list-content { background-color: rgba(245, 247, 249, 0.2); border-radius: ",[0,16],"; padding: ",[0,35]," ",[0,32],"; margin-top: ",[0,32],"; }\n.",[1],"l-list-c-foot-l-name { margin-right: ",[0,20],"; }\n.",[1],"l-list-c-head { font-size: var(--f-size-3); padding-bottom: ",[0,25],"; }\n.",[1],"l-list-c-body { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; color: var(--c-txt-2); font-size: var(--f-size-1); margin-bottom: ",[0,35],"; }\n.",[1],"l-list-c-foot { color: var(--c-txt-2); font-size: var(--f-size-1); display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-list-view { padding-top: ",[0,40],"; color: var(--c-bg-2); }\n.",[1],"l-icon-like, .",[1],"l-icon-star-blank { width: ",[0,22],"; height: ",[0,20],"; margin-right: ",[0,4],"; }\n.",[1],"l-icon-like { margin-right: ",[0,12],"; }\n",],undefined,{path:"./pages/comment/comment.wxss"});    
__wxAppCode__['pages/comment/comment.wxml']=$gwx('./pages/comment/comment.wxml');

__wxAppCode__['pages/detail/detail.wxss']=setCssToHead([".",[1],"content { padding-bottom: ",[0,108],"; }\n.",[1],"l-body-fixed { position: fixed; bottom: 0; left: 0; height: ",[0,98],"; display: -webkit-box; display: -webkit-flex; display: flex; width: calc(100% - var(--pad-lr) - var(--pad-lr)); padding: 0 var(--pad-lr); -webkit-box-align: center; -webkit-align-items: center; align-items: center; white-space: nowrap; background-color: #373a49; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-look-btn { width: 30%; background-color: var(--c-txt-2); }\n.",[1],"l-buy-btn { width: 55%; background-color: #0068B7; }\n.",[1],"l-handle-btn { font-size: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: flex; border-radius: ",[0,40],"; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: ",[0,80],"; }\n.",[1],"l-dl { margin-top: ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; height: ",[0,320],"; }\n.",[1],"l-dt { width: ",[0,216],"; height: 100%; border-radius: ",[0,6],"; margin-right: ",[0,24],"; }\n.",[1],"l-dd { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; padding-bottom: ",[0,12],"; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-title { font: bold var(--f-size-5) normal; }\n.",[1],"l-dd-sub { color: var(--c-txt-2); font: var(--f-size-2)/var(--f-size-4) normal; }\n.",[1],"l-dd-content { width: 100%; color: #868DAB; font: ",[0,26]," normal; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }\n.",[1],"l-dd-footer { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"l-dd-view-footer { width: 100%; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; -webkit-line-clamp: 2; }\n.",[1],"l-dd-img { width: ",[0,40],"; height: ",[0,40],"; border-radius: 50%; margin-right: ",[0,6],"; }\n.",[1],"l-icon-star { width: ",[0,30],"; height: ",[0,28],"; margin-right: ",[0,4],"; }\n.",[1],"l-dd-grade { color: #F9174D; margin-left: ",[0,28],"; font-size: var(--f-size-5); }\n.",[1],"l-icon-share { margin-right: ",[0,18],"; }\n.",[1],"l-icon-share-1 { width: ",[0,29],"; height: ",[0,28],"; }\n.",[1],"l-icon-share-2 { width: ",[0,25],"; height: ",[0,27],"; }\n.",[1],"l-icon-share-3 { width: ",[0,27],"; height: ",[0,22],"; }\n.",[1],"l-icon-share-4 { width: ",[0,30],"; height: ",[0,24],"; }\n.",[1],"l-body-tab, .",[1],"l-body-select { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-body-tab { padding: ",[0,40]," 0 ",[0,12],"; }\n.",[1],"l-list { padding-top: ",[0,40],"; }\n.",[1],"l-h3 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-h3-title { font: bold var(--f-size-4) normal; }\n.",[1],"l-h3-more { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; color: var(--c-bg-2); }\n.",[1],"l-list-view { padding-top: ",[0,40],"; color: var(--c-bg-2); }\n.",[1],"l-icon-like, .",[1],"l-icon-star-blank { width: ",[0,22],"; height: ",[0,20],"; margin-right: ",[0,4],"; }\n.",[1],"l-icon-like { margin-right: ",[0,12],"; }\n.",[1],"l-list-content { background-color: rgba(245, 247, 249, 0.2); border-radius: ",[0,16],"; padding: ",[0,35]," ",[0,32],"; margin-top: ",[0,32],"; }\n.",[1],"l-list-c-foot-l-name { margin-right: ",[0,20],"; }\n.",[1],"l-list-c-head { font-size: var(--f-size-3); padding-bottom: ",[0,25],"; }\n.",[1],"l-list-c-body { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; color: var(--c-txt-2); font-size: var(--f-size-1); margin-bottom: ",[0,35],"; }\n.",[1],"l-list-c-foot { color: var(--c-txt-2); font-size: var(--f-size-1); display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-share { position: fixed; bottom: 0; left: 0; width: calc(100% - var(--pad-lr) - var(--pad-lr)); padding: ",[0,32]," var(--pad-lr); z-index: 999; background-color: #080932; }\n.",[1],"l-icon-share-list { width: ",[0,130],"; height: ",[0,130],"; }\n.",[1],"l-share-img { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-justify-content: space-around; justify-content: space-around; }\n.",[1],"l-close { text-align: right; margin-bottom: ",[0,27],"; }\n.",[1],"l-share-btn { padding: ",[0,56]," ",[0,70]," 0; }\n.",[1],"l-share-botton { border-radius: ",[0,40],"; }\n",],undefined,{path:"./pages/detail/detail.wxss"});    
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/find/find.wxss']=setCssToHead([".",[1],"l-nav-bookrack { font-size: ",[0,30],"; }\n.",[1],"l-main { padding-bottom: ",[0,32],"; }\n.",[1],"l-h3 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-h3-title { font: bold var(--f-size-5) normal; }\n.",[1],"l-h3-more { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; color: var(--c-bg-2); }\n.",[1],"l-dl { margin-top: ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; height: ",[0,224],"; }\n.",[1],"l-dt { width: ",[0,160],"; height: 100%; border-radius: ",[0,10],"; margin-right: ",[0,24],"; }\n.",[1],"l-dd { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-title { color: var(--c-txt-3); font: var(--f-size-3) normal; }\n.",[1],"l-dd-content, .",[1],"l-dd-footer { color: var(--c-txt-2); font: var(--f-size-2)/var(--f-size-4) normal; }\n.",[1],"l-dd-content { width: 100%; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }\n.",[1],"l-dd-footer { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"l-dd-view-footer { width: 100%; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; -webkit-line-clamp: 2; }\n.",[1],"l-dd-img { width: ",[0,40],"; height: ",[0,40],"; border-radius: 50%; margin-right: ",[0,6],"; }\n",],undefined,{path:"./pages/find/find.wxss"});    
__wxAppCode__['pages/find/find.wxml']=$gwx('./pages/find/find.wxml');

__wxAppCode__['pages/idea/idea.wxss']=setCssToHead([".",[1],"content { width: 100%; height: 60vh; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-size: ",[0,50],"; }\n",],undefined,{path:"./pages/idea/idea.wxss"});    
__wxAppCode__['pages/idea/idea.wxml']=$gwx('./pages/idea/idea.wxml');

__wxAppCode__['pages/mine/mine.wxss']=setCssToHead([".",[1],"l-head { font: bold var(--f-size-5) norml; }\n.",[1],"l-head-title { line-height: var(--h-head); position: relative; padding: 0 var(--pad-lr); text-align: center; font-size: var(--f-size-3); }\n.",[1],"l-icon-setting { width: ",[0,36],"; height: ",[0,36],"; position: absolute; top: 50%; right: var(--pad-lr); -webkit-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"l-body { padding: var(--pad-lr); }\n.",[1],"l-body-head { width: 100%; height: ",[0,150],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-head-img { width: ",[0,150],"; height: 100%; border-radius: 50%; margin-right: ",[0,35],"; }\n.",[1],"l-head-intr { display: -webkit-box; display: -webkit-flex; display: flex; height: 100%; width: calc(100% - ",[0,185],"); -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding-top: ",[0,10],"; }\n.",[1],"l-head-user { width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; height: var(--f-size-6); line-height: var(--f-size-6); white-space: nowrap; }\n.",[1],"l-head-username { max-width: 60%; margin-right: 10%; font: bold var(--f-size-6)/var(--f-size-6) normal; }\n.",[1],"l-head-city { width: 30%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-align-self: flex-end; align-self: flex-end; font: var(--f-size-2)/var(--f-size-2) normal; color: var(--c-txt-2); }\n.",[1],"l-head-city-txt { width: 100%; }\n.",[1],"l-head-city-txt, .",[1],"l-head-username { overflow: hidden; text-overflow: ellipsis; }\n.",[1],"l-head-intr-txt { width: 100%; font-size: ",[0,26],"; color: var(--c-txt-2); display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"l-ul { padding: ",[0,120]," 0 0; }\n.",[1],"l-li { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; margin-bottom: ",[0,52],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-li-left { display: -webkit-box; display: -webkit-flex; display: flex; color: var(--c-txt-2); -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"l-li-right { text-align: right; }\n.",[1],"l-li-right-value { color: #515d61; font-size: ",[0,30],"; }\n.",[1],"l-li-right-label { color: #C1C1C1; font-size: var(--f-size-1); }\n.",[1],"l-icon-mine { margin-right: ",[0,30],"; }\n.",[1],"l-icon-mine-7, .",[1],"l-icon-mine-1 { width: ",[0,38],"; height: ",[0,30],"; }\n.",[1],"l-icon-mine-3, .",[1],"l-icon-mine-2 { width: ",[0,34],"; height: ",[0,30],"; }\n.",[1],"l-icon-mine-4 { width: ",[0,32],"; height: ",[0,30],"; }\n.",[1],"l-icon-mine-5 { width: ",[0,36],"; height: ",[0,36],"; }\n.",[1],"l-icon-mine-6 { width: ",[0,38],"; height: ",[0,26],"; }\n.",[1],"l-li-right-label-color { color: #FF9800; }\n",],undefined,{path:"./pages/mine/mine.wxss"});    
__wxAppCode__['pages/mine/mine.wxml']=$gwx('./pages/mine/mine.wxml');

__wxAppCode__['pages/section/section.wxss']=setCssToHead([".",[1],"l-body { padding: ",[0,32],"; font-size: ",[0,30],"; color: #D1D1D6; line-height: ",[0,50],"; }\n.",[1],"_h3 { font-size: ",[0,50],"; margin-bottom: ",[0,20],"; }\n",],undefined,{path:"./pages/section/section.wxss"});    
__wxAppCode__['pages/section/section.wxml']=$gwx('./pages/section/section.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
