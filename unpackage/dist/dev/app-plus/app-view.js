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
Z([3,'__e'])
Z([3,'uni-icons data-v-282df730'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[7],[3,'size']],[1,'px']]],[1,';']]])
Z([a,[[6],[[7],[3,'icons']],[[7],[3,'type']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar data-v-1f6a78ce'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content data-v-1f6a78ce']],[[2,'?:'],[[7],[3,'fixed']],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'shadow']],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--border'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'data-v-1f6a78ce'])
Z([3,'14d68f28-1'])
Z([3,'uni-navbar__header uni-navbar__content_view data-v-1f6a78ce'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']]])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view data-v-1f6a78ce'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z([3,'uni-navbar__content_view data-v-1f6a78ce'])
Z(z[4])
Z(z[5])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'14d68f28-2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([[4],[[5],[[5],[1,'uni-navbar-btn-text uni-navbar__content_view data-v-1f6a78ce']],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'leftIcon']],[3,'length']]],[1,'uni-navbar-btn-icon-left'],[1,'']]]])
Z(z[5])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[1,'14px']],[1,';']]])
Z([a,[[7],[3,'leftText']]])
Z([3,'left'])
Z([3,'uni-navbar__header-container uni-navbar__content_view data-v-1f6a78ce'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z([3,'uni-navbar__header-container-inner uni-navbar__content_view data-v-1f6a78ce'])
Z([3,'uni-nav-bar-text data-v-1f6a78ce'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([a,[[7],[3,'title']]])
Z(z[9])
Z([[4],[[5],[[5],[1,'uni-navbar__header-btns uni-navbar__content_view data-v-1f6a78ce']],[[2,'?:'],[[6],[[7],[3,'title']],[3,'length']],[1,'uni-navbar__header-btns-right'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[13])
Z(z[4])
Z(z[5])
Z(z[16])
Z(z[17])
Z([[7],[3,'rightIcon']])
Z([3,'14d68f28-3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'uni-navbar-btn-text uni-navbar__content_view data-v-1f6a78ce'])
Z([3,'uni-nav-bar-right-text data-v-1f6a78ce'])
Z([a,[[7],[3,'rightText']]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z([3,'uni-navbar__placeholder data-v-1f6a78ce'])
Z(z[3])
Z(z[4])
Z(z[5])
Z([3,'14d68f28-4'])
Z([3,'uni-navbar__placeholder-view data-v-1f6a78ce'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-status-bar data-v-02afb5d4'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'statusBarHeight']]],[1,';']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
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
Z(z[7])
Z([3,'l-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([3,'l-body l-ul'])
Z([3,'key'])
Z([3,'item'])
Z([1,20])
Z(z[22])
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
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'没有想法'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-icons/uni-icons.wxml','./components/uni-nav-bar/uni-nav-bar.wxml','./components/uni-status-bar/uni-status-bar.wxml','./pages/book-mall/book-mall.wxml','./pages/bookrack/bookrack.wxml','./pages/classify/classify.wxml','./pages/comment/comment.wxml','./pages/detail/detail.wxml','./pages/find/find.wxml','./pages/idea/idea.wxml','./pages/mine/mine.wxml','./pages/section/section.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'text',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
var xC=_oz(z,4,e,s,gg)
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var fE=_n('view')
_rz(z,fE,'class',0,e,s,gg)
var hG=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,3,e,s,gg)){oH.wxVkey=1
var cI=_mz(z,'uni-status-bar',['bind:__l',4,'class',1,'vueId',2],[],e,s,gg)
_(oH,cI)
}
var oJ=_mz(z,'view',['class',7,'style',1],[],e,s,gg)
var lK=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,12,e,s,gg)){aL.wxVkey=1
var eN=_n('view')
_rz(z,eN,'class',13,e,s,gg)
var bO=_mz(z,'uni-icons',['bind:__l',14,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(eN,bO)
_(aL,eN)
}
var tM=_v()
_(lK,tM)
if(_oz(z,20,e,s,gg)){tM.wxVkey=1
var oP=_n('view')
_rz(z,oP,'class',21,e,s,gg)
var xQ=_mz(z,'text',['class',22,'style',1],[],e,s,gg)
var oR=_oz(z,24,e,s,gg)
_(xQ,oR)
_(oP,xQ)
_(tM,oP)
}
var fS=_n('slot')
_rz(z,fS,'name',25,e,s,gg)
_(lK,fS)
aL.wxXCkey=1
aL.wxXCkey=3
tM.wxXCkey=1
_(oJ,lK)
var cT=_n('view')
_rz(z,cT,'class',26,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,27,e,s,gg)){hU.wxVkey=1
var oV=_n('view')
_rz(z,oV,'class',28,e,s,gg)
var cW=_mz(z,'text',['class',29,'style',1],[],e,s,gg)
var oX=_oz(z,31,e,s,gg)
_(cW,oX)
_(oV,cW)
_(hU,oV)
}
var lY=_n('slot')
_(cT,lY)
hU.wxXCkey=1
_(oJ,cT)
var aZ=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,35,e,s,gg)){t1.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',36,e,s,gg)
var o4=_mz(z,'uni-icons',['bind:__l',37,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(b3,o4)
_(t1,b3)
}
var e2=_v()
_(aZ,e2)
if(_oz(z,43,e,s,gg)){e2.wxVkey=1
var x5=_n('view')
_rz(z,x5,'class',44,e,s,gg)
var o6=_n('text')
_rz(z,o6,'class',45,e,s,gg)
var f7=_oz(z,46,e,s,gg)
_(o6,f7)
_(x5,o6)
_(e2,x5)
}
var c8=_n('slot')
_rz(z,c8,'name',47,e,s,gg)
_(aZ,c8)
t1.wxXCkey=1
t1.wxXCkey=3
e2.wxXCkey=1
_(oJ,aZ)
_(hG,oJ)
oH.wxXCkey=1
oH.wxXCkey=3
_(fE,hG)
var cF=_v()
_(fE,cF)
if(_oz(z,48,e,s,gg)){cF.wxVkey=1
var h9=_n('view')
_rz(z,h9,'class',49,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,50,e,s,gg)){o0.wxVkey=1
var cAB=_mz(z,'uni-status-bar',['bind:__l',51,'class',1,'vueId',2],[],e,s,gg)
_(o0,cAB)
}
var oBB=_n('view')
_rz(z,oBB,'class',54,e,s,gg)
_(h9,oBB)
o0.wxXCkey=1
o0.wxXCkey=3
_(cF,h9)
}
cF.wxXCkey=1
cF.wxXCkey=3
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aDB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tEB=_n('slot')
_(aDB,tEB)
_(r,aDB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var bGB=_n('view')
_rz(z,bGB,'class',0,e,s,gg)
var oHB=_n('view')
_rz(z,oHB,'class',1,e,s,gg)
var xIB=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var oJB=_mz(z,'image',['mode',-1,'class',5,'src',1],[],e,s,gg)
_(xIB,oJB)
var fKB=_mz(z,'input',['disabled',-1,'class',7,'placeholder',1,'placeholderClass',2,'type',3,'value',4],[],e,s,gg)
_(xIB,fKB)
_(oHB,xIB)
_(bGB,oHB)
var cLB=_n('view')
_rz(z,cLB,'class',12,e,s,gg)
var hMB=_mz(z,'swiper',['circular',-1,'autoplay',13,'bindtap',1,'class',2,'data-event-opts',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var oNB=_n('swiper-item')
var cOB=_n('view')
_rz(z,cOB,'class',22,e,s,gg)
var oPB=_mz(z,'image',['class',23,'mode',1,'src',2],[],e,s,gg)
_(cOB,oPB)
_(oNB,cOB)
_(hMB,oNB)
var lQB=_n('swiper-item')
var aRB=_n('view')
_rz(z,aRB,'class',26,e,s,gg)
var tSB=_mz(z,'image',['class',27,'mode',1,'src',2],[],e,s,gg)
_(aRB,tSB)
_(lQB,aRB)
_(hMB,lQB)
_(cLB,hMB)
var eTB=_n('view')
_rz(z,eTB,'class',30,e,s,gg)
var bUB=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var oVB=_mz(z,'image',['mode',-1,'class',34,'src',1],[],e,s,gg)
_(bUB,oVB)
var xWB=_n('view')
_rz(z,xWB,'class',36,e,s,gg)
var oXB=_oz(z,37,e,s,gg)
_(xWB,oXB)
_(bUB,xWB)
_(eTB,bUB)
var fYB=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],e,s,gg)
var cZB=_mz(z,'image',['mode',-1,'class',41,'src',1],[],e,s,gg)
_(fYB,cZB)
var h1B=_n('view')
_rz(z,h1B,'class',43,e,s,gg)
var o2B=_oz(z,44,e,s,gg)
_(h1B,o2B)
_(fYB,h1B)
_(eTB,fYB)
var c3B=_mz(z,'view',['bindtap',45,'class',1,'data-event-opts',2],[],e,s,gg)
var o4B=_mz(z,'image',['mode',-1,'class',48,'src',1],[],e,s,gg)
_(c3B,o4B)
var l5B=_n('view')
_rz(z,l5B,'class',50,e,s,gg)
var a6B=_oz(z,51,e,s,gg)
_(l5B,a6B)
_(c3B,l5B)
_(eTB,c3B)
var t7B=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],e,s,gg)
var e8B=_mz(z,'image',['mode',-1,'class',55,'src',1],[],e,s,gg)
_(t7B,e8B)
var b9B=_n('view')
_rz(z,b9B,'class',57,e,s,gg)
var o0B=_oz(z,58,e,s,gg)
_(b9B,o0B)
_(t7B,b9B)
_(eTB,t7B)
_(cLB,eTB)
_(bGB,cLB)
var xAC=_n('view')
_rz(z,xAC,'class',59,e,s,gg)
var oBC=_n('view')
_rz(z,oBC,'class',60,e,s,gg)
var fCC=_n('text')
_rz(z,fCC,'class',61,e,s,gg)
var cDC=_oz(z,62,e,s,gg)
_(fCC,cDC)
_(oBC,fCC)
var hEC=_mz(z,'view',['bindtap',63,'class',1,'data-event-opts',2],[],e,s,gg)
var oFC=_oz(z,66,e,s,gg)
_(hEC,oFC)
var cGC=_mz(z,'image',['mode',-1,'class',67,'src',1],[],e,s,gg)
_(hEC,cGC)
_(oBC,hEC)
_(xAC,oBC)
var oHC=_v()
_(xAC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],tKC,aJC,gg)
var xOC=_mz(z,'image',['class',76,'mode',1,'src',2],[],tKC,aJC,gg)
_(oNC,xOC)
var oPC=_n('view')
_rz(z,oPC,'class',79,tKC,aJC,gg)
var fQC=_n('view')
_rz(z,fQC,'class',80,tKC,aJC,gg)
var cRC=_oz(z,81,tKC,aJC,gg)
_(fQC,cRC)
_(oPC,fQC)
var hSC=_n('view')
_rz(z,hSC,'class',82,tKC,aJC,gg)
var oTC=_oz(z,83,tKC,aJC,gg)
_(hSC,oTC)
_(oPC,hSC)
var cUC=_n('view')
_rz(z,cUC,'class',84,tKC,aJC,gg)
var oVC=_oz(z,85,tKC,aJC,gg)
_(cUC,oVC)
_(oPC,cUC)
_(oNC,oPC)
_(eLC,oNC)
return eLC
}
oHC.wxXCkey=2
_2z(z,71,lIC,e,s,gg,oHC,'s','i','i')
_(bGB,xAC)
var lWC=_n('view')
_rz(z,lWC,'class',86,e,s,gg)
var aXC=_n('view')
_rz(z,aXC,'class',87,e,s,gg)
var tYC=_n('text')
_rz(z,tYC,'class',88,e,s,gg)
var eZC=_oz(z,89,e,s,gg)
_(tYC,eZC)
_(aXC,tYC)
var b1C=_mz(z,'view',['bindtap',90,'class',1,'data-event-opts',2],[],e,s,gg)
var o2C=_oz(z,93,e,s,gg)
_(b1C,o2C)
var x3C=_mz(z,'image',['class',94,'mode',1,'src',2],[],e,s,gg)
_(b1C,x3C)
_(aXC,b1C)
_(lWC,aXC)
var o4C=_v()
_(lWC,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_mz(z,'view',['bindtap',101,'class',1,'data-event-opts',2],[],h7C,c6C,gg)
var lAD=_n('view')
_rz(z,lAD,'class',104,h7C,c6C,gg)
_(o0C,lAD)
var aBD=_n('view')
_rz(z,aBD,'class',105,h7C,c6C,gg)
var tCD=_mz(z,'image',['class',106,'mode',1,'src',2],[],h7C,c6C,gg)
_(aBD,tCD)
var eDD=_n('view')
_rz(z,eDD,'class',109,h7C,c6C,gg)
var bED=_n('view')
_rz(z,bED,'class',110,h7C,c6C,gg)
var oFD=_n('view')
_rz(z,oFD,'class',111,h7C,c6C,gg)
var xGD=_n('view')
_rz(z,xGD,'class',112,h7C,c6C,gg)
var oHD=_oz(z,113,h7C,c6C,gg)
_(xGD,oHD)
_(oFD,xGD)
var fID=_n('view')
_rz(z,fID,'class',114,h7C,c6C,gg)
var cJD=_oz(z,115,h7C,c6C,gg)
_(fID,cJD)
_(oFD,fID)
_(bED,oFD)
var hKD=_mz(z,'image',['class',116,'mode',1,'src',2],[],h7C,c6C,gg)
_(bED,hKD)
_(eDD,bED)
var oLD=_n('view')
_rz(z,oLD,'class',119,h7C,c6C,gg)
var cMD=_oz(z,120,h7C,c6C,gg)
_(oLD,cMD)
_(eDD,oLD)
_(aBD,eDD)
_(o0C,aBD)
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=2
_2z(z,99,f5C,e,s,gg,o4C,'s','i','i')
_(bGB,lWC)
var oND=_n('view')
_rz(z,oND,'class',121,e,s,gg)
var lOD=_n('view')
_rz(z,lOD,'class',122,e,s,gg)
var aPD=_n('text')
_rz(z,aPD,'class',123,e,s,gg)
var tQD=_oz(z,124,e,s,gg)
_(aPD,tQD)
_(lOD,aPD)
var eRD=_mz(z,'view',['bindtap',125,'class',1,'data-event-opts',2],[],e,s,gg)
var bSD=_oz(z,128,e,s,gg)
_(eRD,bSD)
var oTD=_mz(z,'image',['class',129,'mode',1,'src',2],[],e,s,gg)
_(eRD,oTD)
_(lOD,eRD)
_(oND,lOD)
var xUD=_n('view')
_rz(z,xUD,'class',132,e,s,gg)
var oVD=_v()
_(xUD,oVD)
var fWD=function(hYD,cXD,oZD,gg){
var o2D=_mz(z,'view',['bindtap',137,'class',1,'data-event-opts',2],[],hYD,cXD,gg)
var l3D=_n('view')
_rz(z,l3D,'class',140,hYD,cXD,gg)
var a4D=_n('view')
_rz(z,a4D,'class',141,hYD,cXD,gg)
var t5D=_n('view')
_rz(z,t5D,'class',142,hYD,cXD,gg)
var e6D=_oz(z,143,hYD,cXD,gg)
_(t5D,e6D)
_(a4D,t5D)
var b7D=_n('view')
_rz(z,b7D,'class',144,hYD,cXD,gg)
var o8D=_oz(z,145,hYD,cXD,gg)
_(b7D,o8D)
_(a4D,b7D)
_(l3D,a4D)
var x9D=_mz(z,'image',['class',146,'mode',1,'src',2],[],hYD,cXD,gg)
_(l3D,x9D)
_(o2D,l3D)
_(oZD,o2D)
return oZD
}
oVD.wxXCkey=2
_2z(z,135,fWD,e,s,gg,oVD,'s','i','i')
_(oND,xUD)
_(bGB,oND)
_(r,bGB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var fAE=_n('view')
_rz(z,fAE,'class',0,e,s,gg)
var cBE=_n('view')
_rz(z,cBE,'class',1,e,s,gg)
var hCE=_n('view')
_rz(z,hCE,'class',2,e,s,gg)
_(cBE,hCE)
var oDE=_n('view')
_rz(z,oDE,'class',3,e,s,gg)
var cEE=_n('view')
_rz(z,cEE,'class',4,e,s,gg)
var oFE=_oz(z,5,e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
var lGE=_n('view')
_rz(z,lGE,'class',6,e,s,gg)
var aHE=_mz(z,'image',['mode',-1,'bindtap',7,'class',1,'data-event-opts',2,'src',3,'style',4],[],e,s,gg)
_(lGE,aHE)
var tIE=_mz(z,'image',['mode',-1,'class',12,'src',1,'style',2],[],e,s,gg)
_(lGE,tIE)
_(oDE,lGE)
_(cBE,oDE)
_(fAE,cBE)
var eJE=_n('view')
_rz(z,eJE,'class',15,e,s,gg)
_(fAE,eJE)
var bKE=_mz(z,'scroll-view',['bindscroll',16,'class',1,'data-event-opts',2,'scrollTop',3,'scrollY',4],[],e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',21,e,s,gg)
var xME=_n('view')
_(oLE,xME)
var oNE=_v()
_(oLE,oNE)
var fOE=function(hQE,cPE,oRE,gg){
var oTE=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],hQE,cPE,gg)
var lUE=_n('view')
_rz(z,lUE,'style',29,hQE,cPE,gg)
var aVE=_mz(z,'image',['class',30,'mode',1,'src',2],[],hQE,cPE,gg)
_(lUE,aVE)
var tWE=_n('view')
_rz(z,tWE,'class',33,hQE,cPE,gg)
var eXE=_oz(z,34,hQE,cPE,gg)
_(tWE,eXE)
_(lUE,tWE)
_(oTE,lUE)
var bYE=_n('view')
_rz(z,bYE,'class',35,hQE,cPE,gg)
var oZE=_oz(z,36,hQE,cPE,gg)
_(bYE,oZE)
_(oTE,bYE)
_(oRE,oTE)
return oRE
}
oNE.wxXCkey=2
_2z(z,24,fOE,e,s,gg,oNE,'item','key','key')
var x1E=_n('view')
_rz(z,x1E,'class',37,e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'class',38,e,s,gg)
var f3E=_mz(z,'image',['mode',-1,'class',39,'src',1],[],e,s,gg)
_(o2E,f3E)
_(x1E,o2E)
_(oLE,x1E)
_(bKE,oLE)
_(fAE,bKE)
_(r,fAE)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var h5E=_n('view')
_rz(z,h5E,'class',0,e,s,gg)
var o6E=_n('view')
_rz(z,o6E,'class',1,e,s,gg)
var c7E=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var o8E=_mz(z,'image',['mode',-1,'class',5,'src',1],[],e,s,gg)
_(c7E,o8E)
var l9E=_mz(z,'input',['disabled',-1,'class',7,'placeholder',1,'placeholderClass',2,'type',3,'value',4],[],e,s,gg)
_(c7E,l9E)
_(o6E,c7E)
_(h5E,o6E)
var a0E=_n('view')
_rz(z,a0E,'class',12,e,s,gg)
var tAF=_v()
_(a0E,tAF)
var eBF=function(oDF,bCF,xEF,gg){
var fGF=_n('view')
_rz(z,fGF,'class',17,oDF,bCF,gg)
var cHF=_n('view')
_rz(z,cHF,'class',18,oDF,bCF,gg)
var hIF=_n('view')
_rz(z,hIF,'class',19,oDF,bCF,gg)
var oJF=_n('view')
_rz(z,oJF,'class',20,oDF,bCF,gg)
var cKF=_oz(z,21,oDF,bCF,gg)
_(oJF,cKF)
_(hIF,oJF)
var oLF=_n('view')
_rz(z,oLF,'class',22,oDF,bCF,gg)
var lMF=_oz(z,23,oDF,bCF,gg)
_(oLF,lMF)
_(hIF,oLF)
_(cHF,hIF)
var aNF=_mz(z,'image',['class',24,'mode',1,'src',2],[],oDF,bCF,gg)
_(cHF,aNF)
_(fGF,cHF)
_(xEF,fGF)
return xEF
}
tAF.wxXCkey=2
_2z(z,15,eBF,e,s,gg,tAF,'s','i','i')
_(h5E,a0E)
_(r,h5E)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var ePF=_n('view')
_rz(z,ePF,'class',0,e,s,gg)
var bQF=_n('view')
_rz(z,bQF,'class',1,e,s,gg)
var oRF=_v()
_(bQF,oRF)
var xSF=function(fUF,oTF,cVF,gg){
var oXF=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],fUF,oTF,gg)
var cYF=_n('view')
_rz(z,cYF,'class',9,fUF,oTF,gg)
var oZF=_n('view')
_rz(z,oZF,'class',10,fUF,oTF,gg)
var l1F=_oz(z,11,fUF,oTF,gg)
_(oZF,l1F)
_(cYF,oZF)
var a2F=_n('view')
_rz(z,a2F,'class',12,fUF,oTF,gg)
var t3F=_oz(z,13,fUF,oTF,gg)
_(a2F,t3F)
_(cYF,a2F)
var e4F=_n('view')
_rz(z,e4F,'class',14,fUF,oTF,gg)
var b5F=_n('view')
_rz(z,b5F,'class',15,fUF,oTF,gg)
var o6F=_n('text')
_rz(z,o6F,'class',16,fUF,oTF,gg)
var x7F=_oz(z,17,fUF,oTF,gg)
_(o6F,x7F)
_(b5F,o6F)
var o8F=_v()
_(b5F,o8F)
var f9F=function(hAG,c0F,oBG,gg){
var oDG=_mz(z,'image',['mode',-1,'class',22,'src',1],[],hAG,c0F,gg)
_(oBG,oDG)
return oBG
}
o8F.wxXCkey=2
_2z(z,20,f9F,fUF,oTF,gg,o8F,'s','i','i')
var lEG=_mz(z,'image',['mode',-1,'class',24,'src',1],[],fUF,oTF,gg)
_(b5F,lEG)
_(e4F,b5F)
var aFG=_n('view')
_rz(z,aFG,'class',26,fUF,oTF,gg)
var tGG=_mz(z,'image',['mode',-1,'class',27,'src',1],[],fUF,oTF,gg)
_(aFG,tGG)
var eHG=_oz(z,29,fUF,oTF,gg)
_(aFG,eHG)
_(e4F,aFG)
_(cYF,e4F)
_(oXF,cYF)
_(cVF,oXF)
return cVF
}
oRF.wxXCkey=2
_2z(z,4,xSF,e,s,gg,oRF,'s','i','i')
_(ePF,bQF)
var bIG=_n('view')
_rz(z,bIG,'class',30,e,s,gg)
var oJG=_n('view')
_rz(z,oJG,'class',31,e,s,gg)
var xKG=_mz(z,'input',['bindinput',32,'class',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5],[],e,s,gg)
_(oJG,xKG)
_(bIG,oJG)
var oLG=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],e,s,gg)
var fMG=_oz(z,41,e,s,gg)
_(oLG,fMG)
_(bIG,oLG)
_(ePF,bIG)
_(r,ePF)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var hOG=_n('view')
_rz(z,hOG,'class',0,e,s,gg)
var cQG=_n('view')
_rz(z,cQG,'class',1,e,s,gg)
var oRG=_n('view')
_rz(z,oRG,'class',2,e,s,gg)
var lSG=_mz(z,'image',['class',3,'mode',1,'src',2],[],e,s,gg)
_(oRG,lSG)
var aTG=_n('view')
_rz(z,aTG,'class',6,e,s,gg)
var tUG=_n('view')
_rz(z,tUG,'class',7,e,s,gg)
var eVG=_oz(z,8,e,s,gg)
_(tUG,eVG)
_(aTG,tUG)
var bWG=_n('view')
_rz(z,bWG,'class',9,e,s,gg)
var oXG=_oz(z,10,e,s,gg)
_(bWG,oXG)
_(aTG,bWG)
var xYG=_n('view')
_rz(z,xYG,'class',11,e,s,gg)
var oZG=_oz(z,12,e,s,gg)
_(xYG,oZG)
_(aTG,xYG)
var f1G=_n('view')
_rz(z,f1G,'class',13,e,s,gg)
var c2G=_v()
_(f1G,c2G)
var h3G=function(c5G,o4G,o6G,gg){
var a8G=_mz(z,'image',['lazyLoad',-1,'class',18,'src',1],[],c5G,o4G,gg)
_(o6G,a8G)
return o6G
}
c2G.wxXCkey=2
_2z(z,16,h3G,e,s,gg,c2G,'s','i','i')
var t9G=_n('text')
_rz(z,t9G,'class',20,e,s,gg)
var e0G=_oz(z,21,e,s,gg)
_(t9G,e0G)
_(f1G,t9G)
_(aTG,f1G)
_(oRG,aTG)
_(cQG,oRG)
var bAH=_n('view')
_rz(z,bAH,'class',22,e,s,gg)
var oBH=_v()
_(bAH,oBH)
var xCH=function(fEH,oDH,cFH,gg){
var oHH=_mz(z,'view',['bindtap',27,'class',1,'data-event-opts',2],[],fEH,oDH,gg)
var cIH=_mz(z,'image',['mode',-1,'class',30,'src',1],[],fEH,oDH,gg)
_(oHH,cIH)
var oJH=_oz(z,32,fEH,oDH,gg)
_(oHH,oJH)
_(cFH,oHH)
return cFH
}
oBH.wxXCkey=2
_2z(z,25,xCH,e,s,gg,oBH,'s','i','i')
_(cQG,bAH)
var lKH=_n('view')
_rz(z,lKH,'class',33,e,s,gg)
var aLH=_n('view')
_rz(z,aLH,'class',34,e,s,gg)
var tMH=_n('text')
_rz(z,tMH,'class',35,e,s,gg)
var eNH=_oz(z,36,e,s,gg)
_(tMH,eNH)
_(aLH,tMH)
_(lKH,aLH)
var bOH=_n('view')
_rz(z,bOH,'class',37,e,s,gg)
var oPH=_oz(z,38,e,s,gg)
_(bOH,oPH)
_(lKH,bOH)
_(cQG,lKH)
var xQH=_n('view')
_rz(z,xQH,'class',39,e,s,gg)
var oRH=_n('view')
_rz(z,oRH,'class',40,e,s,gg)
var fSH=_n('text')
_rz(z,fSH,'class',41,e,s,gg)
var cTH=_oz(z,42,e,s,gg)
_(fSH,cTH)
_(oRH,fSH)
var hUH=_mz(z,'view',['bindtap',43,'class',1,'data-event-opts',2],[],e,s,gg)
var oVH=_oz(z,46,e,s,gg)
_(hUH,oVH)
var cWH=_mz(z,'image',['class',47,'mode',1,'src',2],[],e,s,gg)
_(hUH,cWH)
_(oRH,hUH)
_(xQH,oRH)
var oXH=_n('view')
_rz(z,oXH,'class',50,e,s,gg)
var lYH=_n('view')
_rz(z,lYH,'class',51,e,s,gg)
var aZH=_n('view')
_rz(z,aZH,'class',52,e,s,gg)
var t1H=_oz(z,53,e,s,gg)
_(aZH,t1H)
_(lYH,aZH)
var e2H=_n('view')
_rz(z,e2H,'class',54,e,s,gg)
var b3H=_oz(z,55,e,s,gg)
_(e2H,b3H)
_(lYH,e2H)
var o4H=_n('view')
_rz(z,o4H,'class',56,e,s,gg)
var x5H=_n('view')
_rz(z,x5H,'class',57,e,s,gg)
var o6H=_n('text')
_rz(z,o6H,'class',58,e,s,gg)
var f7H=_oz(z,59,e,s,gg)
_(o6H,f7H)
_(x5H,o6H)
var c8H=_v()
_(x5H,c8H)
var h9H=function(cAI,o0H,oBI,gg){
var aDI=_mz(z,'image',['mode',-1,'class',64,'src',1],[],cAI,o0H,gg)
_(oBI,aDI)
return oBI
}
c8H.wxXCkey=2
_2z(z,62,h9H,e,s,gg,c8H,'s','i','i')
var tEI=_mz(z,'image',['mode',-1,'class',66,'src',1],[],e,s,gg)
_(x5H,tEI)
_(o4H,x5H)
var eFI=_n('view')
_rz(z,eFI,'class',68,e,s,gg)
var bGI=_mz(z,'image',['mode',-1,'class',69,'src',1],[],e,s,gg)
_(eFI,bGI)
var oHI=_oz(z,71,e,s,gg)
_(eFI,oHI)
_(o4H,eFI)
_(lYH,o4H)
_(oXH,lYH)
_(xQH,oXH)
_(cQG,xQH)
_(hOG,cQG)
var xII=_n('view')
_rz(z,xII,'class',72,e,s,gg)
var oJI=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],e,s,gg)
var fKI=_oz(z,76,e,s,gg)
_(oJI,fKI)
_(xII,oJI)
var cLI=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2],[],e,s,gg)
var hMI=_oz(z,80,e,s,gg)
_(cLI,hMI)
_(xII,cLI)
_(hOG,xII)
var oPG=_v()
_(hOG,oPG)
if(_oz(z,81,e,s,gg)){oPG.wxVkey=1
var oNI=_n('view')
_rz(z,oNI,'class',82,e,s,gg)
var cOI=_mz(z,'view',['bindtap',83,'class',1,'data-event-opts',2],[],e,s,gg)
var oPI=_oz(z,86,e,s,gg)
_(cOI,oPI)
_(oNI,cOI)
var lQI=_mz(z,'view',['bindtap',87,'class',1,'data-event-opts',2],[],e,s,gg)
var aRI=_mz(z,'image',['mode',-1,'class',90,'src',1],[],e,s,gg)
_(lQI,aRI)
var tSI=_mz(z,'image',['mode',-1,'class',92,'src',1],[],e,s,gg)
_(lQI,tSI)
var eTI=_mz(z,'image',['mode',-1,'class',94,'src',1],[],e,s,gg)
_(lQI,eTI)
var bUI=_mz(z,'image',['mode',-1,'class',96,'src',1],[],e,s,gg)
_(lQI,bUI)
_(oNI,lQI)
var oVI=_n('view')
_rz(z,oVI,'class',98,e,s,gg)
var xWI=_mz(z,'button',['bindtap',99,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var oXI=_oz(z,103,e,s,gg)
_(xWI,oXI)
_(oVI,xWI)
_(oNI,oVI)
_(oPG,oNI)
}
oPG.wxXCkey=1
_(r,hOG)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cZI=_n('view')
_rz(z,cZI,'class',0,e,s,gg)
var h1I=_n('view')
_rz(z,h1I,'class',1,e,s,gg)
var o2I=_n('view')
_rz(z,o2I,'class',2,e,s,gg)
_(h1I,o2I)
var c3I=_n('view')
_rz(z,c3I,'class',3,e,s,gg)
var o4I=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var l5I=_mz(z,'image',['mode',-1,'class',7,'src',1],[],e,s,gg)
_(o4I,l5I)
var a6I=_mz(z,'input',['disabled',-1,'class',9,'placeholder',1,'placeholderClass',2,'type',3,'value',4],[],e,s,gg)
_(o4I,a6I)
_(c3I,o4I)
var t7I=_mz(z,'button',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var e8I=_oz(z,17,e,s,gg)
_(t7I,e8I)
_(c3I,t7I)
_(h1I,c3I)
_(cZI,h1I)
var b9I=_n('view')
_rz(z,b9I,'class',18,e,s,gg)
_(cZI,b9I)
var o0I=_n('view')
_rz(z,o0I,'class',19,e,s,gg)
var xAJ=_mz(z,'swiper',['circular',-1,'autoplay',20,'bindtap',1,'class',2,'data-event-opts',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var oBJ=_n('swiper-item')
var fCJ=_n('view')
_rz(z,fCJ,'class',29,e,s,gg)
var cDJ=_mz(z,'image',['class',30,'mode',1,'src',2],[],e,s,gg)
_(fCJ,cDJ)
_(oBJ,fCJ)
_(xAJ,oBJ)
var hEJ=_n('swiper-item')
var oFJ=_n('view')
_rz(z,oFJ,'class',33,e,s,gg)
var cGJ=_mz(z,'image',['class',34,'mode',1,'src',2],[],e,s,gg)
_(oFJ,cGJ)
_(hEJ,oFJ)
_(xAJ,hEJ)
_(o0I,xAJ)
var oHJ=_n('view')
_rz(z,oHJ,'class',37,e,s,gg)
var lIJ=_n('view')
_rz(z,lIJ,'class',38,e,s,gg)
var aJJ=_n('text')
_rz(z,aJJ,'class',39,e,s,gg)
var tKJ=_oz(z,40,e,s,gg)
_(aJJ,tKJ)
_(lIJ,aJJ)
var eLJ=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var bMJ=_oz(z,44,e,s,gg)
_(eLJ,bMJ)
var oNJ=_mz(z,'image',['class',45,'mode',1,'src',2],[],e,s,gg)
_(eLJ,oNJ)
_(lIJ,eLJ)
_(oHJ,lIJ)
var xOJ=_v()
_(oHJ,xOJ)
var oPJ=function(cRJ,fQJ,hSJ,gg){
var cUJ=_mz(z,'view',['bindtap',52,'class',1,'data-event-opts',2],[],cRJ,fQJ,gg)
var oVJ=_mz(z,'image',['class',55,'mode',1,'src',2],[],cRJ,fQJ,gg)
_(cUJ,oVJ)
var lWJ=_n('view')
_rz(z,lWJ,'class',58,cRJ,fQJ,gg)
var aXJ=_n('view')
_rz(z,aXJ,'class',59,cRJ,fQJ,gg)
var tYJ=_oz(z,60,cRJ,fQJ,gg)
_(aXJ,tYJ)
_(lWJ,aXJ)
var eZJ=_n('view')
_rz(z,eZJ,'class',61,cRJ,fQJ,gg)
var b1J=_oz(z,62,cRJ,fQJ,gg)
_(eZJ,b1J)
_(lWJ,eZJ)
var o2J=_n('view')
_rz(z,o2J,'class',63,cRJ,fQJ,gg)
var x3J=_mz(z,'image',['lazyLoad',-1,'class',64,'mode',1,'src',2],[],cRJ,fQJ,gg)
_(o2J,x3J)
var o4J=_mz(z,'image',['lazyLoad',-1,'class',67,'mode',1,'src',2],[],cRJ,fQJ,gg)
_(o2J,o4J)
var f5J=_mz(z,'image',['lazyLoad',-1,'class',70,'mode',1,'src',2],[],cRJ,fQJ,gg)
_(o2J,f5J)
var c6J=_oz(z,73,cRJ,fQJ,gg)
_(o2J,c6J)
_(lWJ,o2J)
_(cUJ,lWJ)
_(hSJ,cUJ)
return hSJ
}
xOJ.wxXCkey=2
_2z(z,50,oPJ,e,s,gg,xOJ,'s','i','i')
_(o0I,oHJ)
_(cZI,o0I)
_(r,cZI)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o8J=_n('view')
_rz(z,o8J,'class',0,e,s,gg)
var c9J=_oz(z,1,e,s,gg)
_(o8J,c9J)
_(r,o8J)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lAK=_n('view')
_rz(z,lAK,'class',0,e,s,gg)
var aBK=_n('view')
_rz(z,aBK,'class',1,e,s,gg)
var tCK=_n('view')
_rz(z,tCK,'class',2,e,s,gg)
_(aBK,tCK)
var eDK=_n('view')
_rz(z,eDK,'class',3,e,s,gg)
var bEK=_oz(z,4,e,s,gg)
_(eDK,bEK)
var oFK=_mz(z,'image',['mode',-1,'bindtap',5,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(eDK,oFK)
_(aBK,eDK)
_(lAK,aBK)
var xGK=_n('view')
_rz(z,xGK,'class',9,e,s,gg)
_(lAK,xGK)
var oHK=_n('view')
_rz(z,oHK,'class',10,e,s,gg)
var fIK=_n('view')
_rz(z,fIK,'class',11,e,s,gg)
var cJK=_mz(z,'image',['class',12,'mode',1,'src',2],[],e,s,gg)
_(fIK,cJK)
var hKK=_n('view')
_rz(z,hKK,'class',15,e,s,gg)
var oLK=_n('view')
_rz(z,oLK,'class',16,e,s,gg)
var cMK=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var oNK=_oz(z,20,e,s,gg)
_(cMK,oNK)
_(oLK,cMK)
var lOK=_n('view')
_rz(z,lOK,'class',21,e,s,gg)
var aPK=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],e,s,gg)
var tQK=_oz(z,25,e,s,gg)
_(aPK,tQK)
_(lOK,aPK)
_(oLK,lOK)
_(hKK,oLK)
var eRK=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],e,s,gg)
var bSK=_oz(z,29,e,s,gg)
_(eRK,bSK)
_(hKK,eRK)
_(fIK,hKK)
_(oHK,fIK)
var oTK=_n('view')
_rz(z,oTK,'class',30,e,s,gg)
var xUK=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var oVK=_n('view')
_rz(z,oVK,'class',34,e,s,gg)
var fWK=_mz(z,'image',['mode',-1,'class',35,'src',1],[],e,s,gg)
_(oVK,fWK)
var cXK=_oz(z,37,e,s,gg)
_(oVK,cXK)
_(xUK,oVK)
var hYK=_n('view')
_rz(z,hYK,'class',38,e,s,gg)
var oZK=_n('view')
_rz(z,oZK,'class',39,e,s,gg)
_(hYK,oZK)
var c1K=_n('view')
_rz(z,c1K,'class',40,e,s,gg)
var o2K=_oz(z,41,e,s,gg)
_(c1K,o2K)
_(hYK,c1K)
_(xUK,hYK)
_(oTK,xUK)
var l3K=_mz(z,'view',['bindtap',42,'class',1,'data-event-opts',2],[],e,s,gg)
var a4K=_n('view')
_rz(z,a4K,'class',45,e,s,gg)
var t5K=_mz(z,'image',['mode',-1,'class',46,'src',1],[],e,s,gg)
_(a4K,t5K)
var e6K=_oz(z,48,e,s,gg)
_(a4K,e6K)
_(l3K,a4K)
var b7K=_n('view')
_rz(z,b7K,'class',49,e,s,gg)
var o8K=_n('view')
_rz(z,o8K,'class',50,e,s,gg)
var x9K=_oz(z,51,e,s,gg)
_(o8K,x9K)
_(b7K,o8K)
var o0K=_n('view')
_rz(z,o0K,'class',52,e,s,gg)
var fAL=_oz(z,53,e,s,gg)
_(o0K,fAL)
_(b7K,o0K)
_(l3K,b7K)
_(oTK,l3K)
var cBL=_mz(z,'view',['bindtap',54,'class',1,'data-event-opts',2],[],e,s,gg)
var hCL=_n('view')
_rz(z,hCL,'class',57,e,s,gg)
var oDL=_mz(z,'image',['mode',-1,'class',58,'src',1],[],e,s,gg)
_(hCL,oDL)
var cEL=_oz(z,60,e,s,gg)
_(hCL,cEL)
_(cBL,hCL)
var oFL=_n('view')
_rz(z,oFL,'class',61,e,s,gg)
var lGL=_n('view')
_rz(z,lGL,'class',62,e,s,gg)
var aHL=_oz(z,63,e,s,gg)
_(lGL,aHL)
_(oFL,lGL)
var tIL=_n('view')
_rz(z,tIL,'class',64,e,s,gg)
var eJL=_oz(z,65,e,s,gg)
_(tIL,eJL)
_(oFL,tIL)
_(cBL,oFL)
_(oTK,cBL)
var bKL=_mz(z,'view',['bindtap',66,'class',1,'data-event-opts',2],[],e,s,gg)
var oLL=_n('view')
_rz(z,oLL,'class',69,e,s,gg)
var xML=_mz(z,'image',['mode',-1,'class',70,'src',1],[],e,s,gg)
_(oLL,xML)
var oNL=_oz(z,72,e,s,gg)
_(oLL,oNL)
_(bKL,oLL)
var fOL=_n('view')
_rz(z,fOL,'class',73,e,s,gg)
var cPL=_n('view')
_rz(z,cPL,'class',74,e,s,gg)
var hQL=_oz(z,75,e,s,gg)
_(cPL,hQL)
_(fOL,cPL)
var oRL=_n('view')
_rz(z,oRL,'class',76,e,s,gg)
var cSL=_oz(z,77,e,s,gg)
_(oRL,cSL)
_(fOL,oRL)
_(bKL,fOL)
_(oTK,bKL)
var oTL=_mz(z,'view',['bindtap',78,'class',1,'data-event-opts',2],[],e,s,gg)
var lUL=_n('view')
_rz(z,lUL,'class',81,e,s,gg)
var aVL=_mz(z,'image',['mode',-1,'class',82,'src',1],[],e,s,gg)
_(lUL,aVL)
var tWL=_oz(z,84,e,s,gg)
_(lUL,tWL)
_(oTL,lUL)
var eXL=_n('view')
_rz(z,eXL,'class',85,e,s,gg)
var bYL=_n('view')
_rz(z,bYL,'class',86,e,s,gg)
var oZL=_oz(z,87,e,s,gg)
_(bYL,oZL)
_(eXL,bYL)
var x1L=_n('view')
_rz(z,x1L,'class',88,e,s,gg)
var o2L=_oz(z,89,e,s,gg)
_(x1L,o2L)
_(eXL,x1L)
_(oTL,eXL)
_(oTK,oTL)
var f3L=_mz(z,'view',['bindtap',90,'class',1,'data-event-opts',2],[],e,s,gg)
var c4L=_n('view')
_rz(z,c4L,'class',93,e,s,gg)
var h5L=_mz(z,'image',['mode',-1,'class',94,'src',1],[],e,s,gg)
_(c4L,h5L)
var o6L=_oz(z,96,e,s,gg)
_(c4L,o6L)
_(f3L,c4L)
var c7L=_n('view')
_rz(z,c7L,'class',97,e,s,gg)
var o8L=_n('view')
_rz(z,o8L,'class',98,e,s,gg)
var l9L=_oz(z,99,e,s,gg)
_(o8L,l9L)
_(c7L,o8L)
var a0L=_n('view')
_rz(z,a0L,'class',100,e,s,gg)
var tAM=_oz(z,101,e,s,gg)
_(a0L,tAM)
_(c7L,a0L)
_(f3L,c7L)
_(oTK,f3L)
var eBM=_mz(z,'view',['bindtap',102,'class',1,'data-event-opts',2],[],e,s,gg)
var bCM=_n('view')
_rz(z,bCM,'class',105,e,s,gg)
var oDM=_mz(z,'image',['mode',-1,'class',106,'src',1],[],e,s,gg)
_(bCM,oDM)
var xEM=_oz(z,108,e,s,gg)
_(bCM,xEM)
_(eBM,bCM)
var oFM=_n('view')
_rz(z,oFM,'class',109,e,s,gg)
var fGM=_n('view')
_rz(z,fGM,'class',110,e,s,gg)
var cHM=_oz(z,111,e,s,gg)
_(fGM,cHM)
_(oFM,fGM)
var hIM=_n('view')
_rz(z,hIM,'class',112,e,s,gg)
var oJM=_oz(z,113,e,s,gg)
_(hIM,oJM)
var cKM=_n('text')
_rz(z,cKM,'class',114,e,s,gg)
var oLM=_oz(z,115,e,s,gg)
_(cKM,oLM)
_(hIM,cKM)
var lMM=_oz(z,116,e,s,gg)
_(hIM,lMM)
_(oFM,hIM)
_(eBM,oFM)
_(oTK,eBM)
_(oHK,oTK)
_(lAK,oHK)
_(r,lAK)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var tOM=_n('view')
_rz(z,tOM,'class',0,e,s,gg)
var ePM=_n('view')
_rz(z,ePM,'class',1,e,s,gg)
var bQM=_n('view')
_rz(z,bQM,'class',2,e,s,gg)
_(ePM,bQM)
var oRM=_n('view')
_rz(z,oRM,'class',3,e,s,gg)
var xSM=_oz(z,4,e,s,gg)
_(oRM,xSM)
_(ePM,oRM)
_(tOM,ePM)
var oTM=_n('view')
_rz(z,oTM,'class',5,e,s,gg)
_(tOM,oTM)
var fUM=_n('view')
_rz(z,fUM,'class',6,e,s,gg)
var cVM=_mz(z,'scroll-view',['scrollY',-1,'class',7],[],e,s,gg)
var hWM=_n('view')
_rz(z,hWM,'class',8,e,s,gg)
var oXM=_mz(z,'view',['class',9,'data-chapter-id',1],[],e,s,gg)
var cYM=_n('view')
_rz(z,cYM,'class',11,e,s,gg)
var oZM=_oz(z,12,e,s,gg)
_(cYM,oZM)
_(oXM,cYM)
var l1M=_n('view')
_rz(z,l1M,'class',13,e,s,gg)
var a2M=_oz(z,14,e,s,gg)
_(l1M,a2M)
_(oXM,l1M)
var t3M=_n('view')
_rz(z,t3M,'class',15,e,s,gg)
var e4M=_oz(z,16,e,s,gg)
_(t3M,e4M)
_(oXM,t3M)
var b5M=_n('view')
_rz(z,b5M,'class',17,e,s,gg)
var o6M=_oz(z,18,e,s,gg)
_(b5M,o6M)
_(oXM,b5M)
var x7M=_n('view')
_rz(z,x7M,'class',19,e,s,gg)
var o8M=_oz(z,20,e,s,gg)
_(x7M,o8M)
_(oXM,x7M)
var f9M=_n('view')
_rz(z,f9M,'class',21,e,s,gg)
var c0M=_oz(z,22,e,s,gg)
_(f9M,c0M)
_(oXM,f9M)
var hAN=_n('view')
_rz(z,hAN,'class',23,e,s,gg)
var oBN=_oz(z,24,e,s,gg)
_(hAN,oBN)
_(oXM,hAN)
var cCN=_n('view')
_rz(z,cCN,'class',25,e,s,gg)
var oDN=_oz(z,26,e,s,gg)
_(cCN,oDN)
_(oXM,cCN)
var lEN=_n('view')
_rz(z,lEN,'class',27,e,s,gg)
var aFN=_oz(z,28,e,s,gg)
_(lEN,aFN)
_(oXM,lEN)
var tGN=_n('view')
_rz(z,tGN,'class',29,e,s,gg)
var eHN=_oz(z,30,e,s,gg)
_(tGN,eHN)
_(oXM,tGN)
var bIN=_n('view')
_rz(z,bIN,'class',31,e,s,gg)
var oJN=_oz(z,32,e,s,gg)
_(bIN,oJN)
_(oXM,bIN)
var xKN=_n('view')
_rz(z,xKN,'class',33,e,s,gg)
var oLN=_oz(z,34,e,s,gg)
_(xKN,oLN)
_(oXM,xKN)
var fMN=_n('view')
_rz(z,fMN,'class',35,e,s,gg)
var cNN=_oz(z,36,e,s,gg)
_(fMN,cNN)
_(oXM,fMN)
var hON=_n('view')
_rz(z,hON,'class',37,e,s,gg)
var oPN=_oz(z,38,e,s,gg)
_(hON,oPN)
_(oXM,hON)
var cQN=_n('view')
_rz(z,cQN,'class',39,e,s,gg)
var oRN=_oz(z,40,e,s,gg)
_(cQN,oRN)
_(oXM,cQN)
var lSN=_n('view')
_rz(z,lSN,'class',41,e,s,gg)
var aTN=_oz(z,42,e,s,gg)
_(lSN,aTN)
_(oXM,lSN)
var tUN=_n('view')
_rz(z,tUN,'class',43,e,s,gg)
var eVN=_oz(z,44,e,s,gg)
_(tUN,eVN)
_(oXM,tUN)
var bWN=_n('view')
_rz(z,bWN,'class',45,e,s,gg)
var oXN=_oz(z,46,e,s,gg)
_(bWN,oXN)
_(oXM,bWN)
var xYN=_n('view')
_rz(z,xYN,'class',47,e,s,gg)
var oZN=_oz(z,48,e,s,gg)
_(xYN,oZN)
_(oXM,xYN)
var f1N=_n('view')
_rz(z,f1N,'class',49,e,s,gg)
var c2N=_oz(z,50,e,s,gg)
_(f1N,c2N)
_(oXM,f1N)
var h3N=_n('view')
_rz(z,h3N,'class',51,e,s,gg)
var o4N=_oz(z,52,e,s,gg)
_(h3N,o4N)
_(oXM,h3N)
var c5N=_n('view')
_rz(z,c5N,'class',53,e,s,gg)
var o6N=_oz(z,54,e,s,gg)
_(c5N,o6N)
_(oXM,c5N)
var l7N=_n('view')
_rz(z,l7N,'class',55,e,s,gg)
var a8N=_oz(z,56,e,s,gg)
_(l7N,a8N)
_(oXM,l7N)
var t9N=_n('view')
_rz(z,t9N,'class',57,e,s,gg)
var e0N=_oz(z,58,e,s,gg)
_(t9N,e0N)
_(oXM,t9N)
var bAO=_n('view')
_rz(z,bAO,'class',59,e,s,gg)
var oBO=_oz(z,60,e,s,gg)
_(bAO,oBO)
_(oXM,bAO)
var xCO=_n('view')
_rz(z,xCO,'class',61,e,s,gg)
var oDO=_oz(z,62,e,s,gg)
_(xCO,oDO)
_(oXM,xCO)
var fEO=_n('view')
_rz(z,fEO,'class',63,e,s,gg)
var cFO=_oz(z,64,e,s,gg)
_(fEO,cFO)
_(oXM,fEO)
var hGO=_n('view')
_rz(z,hGO,'class',65,e,s,gg)
var oHO=_oz(z,66,e,s,gg)
_(hGO,oHO)
_(oXM,hGO)
var cIO=_n('view')
_rz(z,cIO,'class',67,e,s,gg)
var oJO=_oz(z,68,e,s,gg)
_(cIO,oJO)
_(oXM,cIO)
var lKO=_n('view')
_rz(z,lKO,'class',69,e,s,gg)
var aLO=_oz(z,70,e,s,gg)
_(lKO,aLO)
_(oXM,lKO)
var tMO=_n('view')
_rz(z,tMO,'class',71,e,s,gg)
var eNO=_oz(z,72,e,s,gg)
_(tMO,eNO)
_(oXM,tMO)
var bOO=_n('view')
_rz(z,bOO,'class',73,e,s,gg)
var oPO=_oz(z,74,e,s,gg)
_(bOO,oPO)
_(oXM,bOO)
var xQO=_n('view')
_rz(z,xQO,'class',75,e,s,gg)
var oRO=_oz(z,76,e,s,gg)
_(xQO,oRO)
_(oXM,xQO)
var fSO=_n('view')
_rz(z,fSO,'class',77,e,s,gg)
var cTO=_oz(z,78,e,s,gg)
_(fSO,cTO)
_(oXM,fSO)
var hUO=_n('view')
_rz(z,hUO,'class',79,e,s,gg)
var oVO=_oz(z,80,e,s,gg)
_(hUO,oVO)
_(oXM,hUO)
var cWO=_n('view')
_rz(z,cWO,'class',81,e,s,gg)
var oXO=_oz(z,82,e,s,gg)
_(cWO,oXO)
_(oXM,cWO)
var lYO=_n('view')
_rz(z,lYO,'class',83,e,s,gg)
var aZO=_oz(z,84,e,s,gg)
_(lYO,aZO)
_(oXM,lYO)
var t1O=_n('view')
_rz(z,t1O,'class',85,e,s,gg)
var e2O=_oz(z,86,e,s,gg)
_(t1O,e2O)
_(oXM,t1O)
var b3O=_n('view')
_rz(z,b3O,'class',87,e,s,gg)
var o4O=_oz(z,88,e,s,gg)
_(b3O,o4O)
_(oXM,b3O)
var x5O=_n('view')
_rz(z,x5O,'class',89,e,s,gg)
var o6O=_oz(z,90,e,s,gg)
_(x5O,o6O)
_(oXM,x5O)
var f7O=_n('view')
_rz(z,f7O,'class',91,e,s,gg)
var c8O=_oz(z,92,e,s,gg)
_(f7O,c8O)
_(oXM,f7O)
var h9O=_n('view')
_rz(z,h9O,'class',93,e,s,gg)
var o0O=_oz(z,94,e,s,gg)
_(h9O,o0O)
_(oXM,h9O)
var cAP=_n('view')
_rz(z,cAP,'class',95,e,s,gg)
var oBP=_oz(z,96,e,s,gg)
_(cAP,oBP)
_(oXM,cAP)
var lCP=_n('view')
_rz(z,lCP,'class',97,e,s,gg)
var aDP=_oz(z,98,e,s,gg)
_(lCP,aDP)
_(oXM,lCP)
var tEP=_n('view')
_rz(z,tEP,'class',99,e,s,gg)
var eFP=_oz(z,100,e,s,gg)
_(tEP,eFP)
_(oXM,tEP)
var bGP=_n('view')
_rz(z,bGP,'class',101,e,s,gg)
var oHP=_oz(z,102,e,s,gg)
_(bGP,oHP)
_(oXM,bGP)
var xIP=_n('view')
_rz(z,xIP,'class',103,e,s,gg)
var oJP=_oz(z,104,e,s,gg)
_(xIP,oJP)
_(oXM,xIP)
var fKP=_n('view')
_rz(z,fKP,'class',105,e,s,gg)
var cLP=_oz(z,106,e,s,gg)
_(fKP,cLP)
_(oXM,fKP)
var hMP=_n('view')
_rz(z,hMP,'class',107,e,s,gg)
var oNP=_oz(z,108,e,s,gg)
_(hMP,oNP)
_(oXM,hMP)
var cOP=_n('view')
_rz(z,cOP,'class',109,e,s,gg)
var oPP=_oz(z,110,e,s,gg)
_(cOP,oPP)
_(oXM,cOP)
var lQP=_n('view')
_rz(z,lQP,'class',111,e,s,gg)
var aRP=_oz(z,112,e,s,gg)
_(lQP,aRP)
_(oXM,lQP)
var tSP=_n('view')
_rz(z,tSP,'class',113,e,s,gg)
var eTP=_oz(z,114,e,s,gg)
_(tSP,eTP)
_(oXM,tSP)
var bUP=_n('view')
_rz(z,bUP,'class',115,e,s,gg)
var oVP=_oz(z,116,e,s,gg)
_(bUP,oVP)
_(oXM,bUP)
var xWP=_n('view')
_rz(z,xWP,'class',117,e,s,gg)
var oXP=_oz(z,118,e,s,gg)
_(xWP,oXP)
_(oXM,xWP)
var fYP=_n('view')
_rz(z,fYP,'class',119,e,s,gg)
var cZP=_oz(z,120,e,s,gg)
_(fYP,cZP)
_(oXM,fYP)
var h1P=_n('view')
_rz(z,h1P,'class',121,e,s,gg)
var o2P=_oz(z,122,e,s,gg)
_(h1P,o2P)
_(oXM,h1P)
var c3P=_n('view')
_rz(z,c3P,'class',123,e,s,gg)
var o4P=_oz(z,124,e,s,gg)
_(c3P,o4P)
_(oXM,c3P)
var l5P=_n('view')
_rz(z,l5P,'class',125,e,s,gg)
var a6P=_oz(z,126,e,s,gg)
_(l5P,a6P)
_(oXM,l5P)
var t7P=_n('view')
_rz(z,t7P,'class',127,e,s,gg)
var e8P=_oz(z,128,e,s,gg)
_(t7P,e8P)
_(oXM,t7P)
var b9P=_n('view')
_rz(z,b9P,'class',129,e,s,gg)
var o0P=_oz(z,130,e,s,gg)
_(b9P,o0P)
_(oXM,b9P)
var xAQ=_n('view')
_rz(z,xAQ,'class',131,e,s,gg)
var oBQ=_oz(z,132,e,s,gg)
_(xAQ,oBQ)
_(oXM,xAQ)
var fCQ=_n('view')
_rz(z,fCQ,'class',133,e,s,gg)
var cDQ=_oz(z,134,e,s,gg)
_(fCQ,cDQ)
_(oXM,fCQ)
var hEQ=_n('view')
_rz(z,hEQ,'class',135,e,s,gg)
var oFQ=_oz(z,136,e,s,gg)
_(hEQ,oFQ)
_(oXM,hEQ)
var cGQ=_n('view')
_rz(z,cGQ,'class',137,e,s,gg)
var oHQ=_oz(z,138,e,s,gg)
_(cGQ,oHQ)
_(oXM,cGQ)
var lIQ=_n('view')
_rz(z,lIQ,'class',139,e,s,gg)
var aJQ=_oz(z,140,e,s,gg)
_(lIQ,aJQ)
_(oXM,lIQ)
var tKQ=_n('view')
_rz(z,tKQ,'class',141,e,s,gg)
var eLQ=_oz(z,142,e,s,gg)
_(tKQ,eLQ)
_(oXM,tKQ)
var bMQ=_n('view')
_rz(z,bMQ,'class',143,e,s,gg)
var oNQ=_oz(z,144,e,s,gg)
_(bMQ,oNQ)
_(oXM,bMQ)
var xOQ=_n('view')
_rz(z,xOQ,'class',145,e,s,gg)
var oPQ=_oz(z,146,e,s,gg)
_(xOQ,oPQ)
_(oXM,xOQ)
var fQQ=_n('view')
_rz(z,fQQ,'class',147,e,s,gg)
var cRQ=_oz(z,148,e,s,gg)
_(fQQ,cRQ)
_(oXM,fQQ)
var hSQ=_n('view')
_rz(z,hSQ,'class',149,e,s,gg)
var oTQ=_oz(z,150,e,s,gg)
_(hSQ,oTQ)
_(oXM,hSQ)
var cUQ=_n('view')
_rz(z,cUQ,'class',151,e,s,gg)
var oVQ=_oz(z,152,e,s,gg)
_(cUQ,oVQ)
_(oXM,cUQ)
var lWQ=_n('view')
_rz(z,lWQ,'class',153,e,s,gg)
var aXQ=_oz(z,154,e,s,gg)
_(lWQ,aXQ)
_(oXM,lWQ)
var tYQ=_n('view')
_rz(z,tYQ,'class',155,e,s,gg)
var eZQ=_oz(z,156,e,s,gg)
_(tYQ,eZQ)
_(oXM,tYQ)
var b1Q=_n('view')
_rz(z,b1Q,'class',157,e,s,gg)
var o2Q=_oz(z,158,e,s,gg)
_(b1Q,o2Q)
_(oXM,b1Q)
var x3Q=_n('view')
_rz(z,x3Q,'class',159,e,s,gg)
var o4Q=_oz(z,160,e,s,gg)
_(x3Q,o4Q)
_(oXM,x3Q)
var f5Q=_n('view')
_rz(z,f5Q,'class',161,e,s,gg)
var c6Q=_oz(z,162,e,s,gg)
_(f5Q,c6Q)
_(oXM,f5Q)
var h7Q=_n('view')
_rz(z,h7Q,'class',163,e,s,gg)
var o8Q=_oz(z,164,e,s,gg)
_(h7Q,o8Q)
_(oXM,h7Q)
var c9Q=_n('view')
_rz(z,c9Q,'class',165,e,s,gg)
var o0Q=_oz(z,166,e,s,gg)
_(c9Q,o0Q)
_(oXM,c9Q)
var lAR=_n('view')
_rz(z,lAR,'class',167,e,s,gg)
var aBR=_oz(z,168,e,s,gg)
_(lAR,aBR)
_(oXM,lAR)
var tCR=_n('view')
_rz(z,tCR,'class',169,e,s,gg)
var eDR=_oz(z,170,e,s,gg)
_(tCR,eDR)
_(oXM,tCR)
var bER=_n('view')
_rz(z,bER,'class',171,e,s,gg)
var oFR=_oz(z,172,e,s,gg)
_(bER,oFR)
_(oXM,bER)
_(hWM,oXM)
_(cVM,hWM)
_(fUM,cVM)
_(tOM,fUM)
_(r,tOM)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
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
var _C= [[[2,1],],["body, wx-uni-page{ background-color: var(--bg-color); color: var(--font-color); font-size: var(--f-size-2); height: 100%; --f-size-1:",[0,24],"; --f-size-2:",[0,28],"; --f-size-3:",[0,32],"; --f-size-4:",[0,36],"; --f-size-5:",[0,40],"; --f-size-6:",[0,44],"; --c-txt-1:#FFFFFF; --c-txt-2:#95A1A6; --c-txt-3:#cdced0; --c-bg-1:#000000; --c-bg-2:#7E7F94; --c-bg-3:#0b0c21; --pad-lr:",[0,32],"; --h-head:44px; --c-input-holder:#696a7f; --bg-color: #fff; --co-color: #5ACC93; --yy-color: #F3F3F3; --li-color: #EAFFF8; --font-color: #333; }\nwx-uni-button, wx-button{ margin: 0; padding: 0; color: var(--c-txt-1); background-color: var(--c-bg-1); }\nwx-uni-button:after, wx-button:after{ border: none; width: 100%; height: 100%; }\n.",[1],"button-hover{ color: inherit; background-color: inherit; }\nwx-uni-image, wx-uni-image\x3e.",[1],"_img, .",[1],"_img{ vertical-align: middle; }\n.",[1],"l-lay-gray{ background-color: #C0C0C0; }\n.",[1],"l-status{ width: 100%; height: var(--status-bar-height); background-color: transparent; }\n.",[1],"l-clear-both:after{ content: \x27 \x27; display: block; width: 0; height: 0; clear: both; zoom: 1; }\n.",[1],"content { position: relative; height: 100%; }\n.",[1],"l-fixed{ position: fixed; width: 100%; z-index: 999; top: 0; background-color: var(--co-color); box-shadow: 0 2px 2px 0 rgba(0,0,0,.1); }\n.",[1],"l-placeholder{ width: 100%; height: calc(var(--status-bar-height) + var(--h-head)); }\n.",[1],"l-head{ padding: 0 ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: var(--h-head); }\n.",[1],"l-search{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: ",[0,16]," ",[0,26],"; margin-right: ",[0,16],"; border-radius: ",[0,32],"; background-color: #222338; }\n.",[1],"l-icon-search{ width: ",[0,36],"; height: ",[0,36],"; }\n.",[1],"l-search-input{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: 0 ",[0,12],"; }\n.",[1],"l-holder{ color: var(--c-input-holder); }\n.",[1],"l-body{ padding: 0 var(--pad-lr); }\n.",[1],"l-swiper{ margin: ",[0,36]," 0 0; height: ",[0,248],"; }\n.",[1],"l-swiper-item{ height: 80%; overflow: hidden; border-radius: ",[0,26],"; }\n.",[1],"l-carousel-img{ width: 100%; height: 100%; }\n.",[1],"l-icon-more{ width: ",[0,30],"; vertical-align: middle; margin-left: ",[0,12],"; }\n.",[1],"l-content{ overflow: hidden; width: 100%; height: calc(100% - var(--status-bar-height) - var(--h-head)); }\n",],];
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

__wxAppCode__['components/uni-icons/uni-icons.wxss']=setCssToHead(["@font-face { font-family: uniicons; src: url(\x27data:font/truetype;charset\x3dutf-8;base64,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AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMHdW5pMDAwMAdjb250YWN0BnBlcnNvbglwZXJzb25hZGQNY29udGFjdGZpbGxlZAxwZXJzb25maWxsZWQPcGVyc29uYWRkZmlsbGVkBXBob25lBWVtYWlsCmNoYXRidWJibGUJY2hhdGJveGVzC3Bob25lZmlsbGVkC2VtYWlsZmlsbGVkEGNoYXRidWJibGVmaWxsZWQPY2hhdGJveGVzZmlsbGVkBXdlaWJvBndlaXhpbgtwZW5neW91cXVhbgRjaGF0AnFxCHZpZGVvY2FtBmNhbWVyYQNtaWMIbG9jYXRpb24JbWljZmlsbGVkDmxvY2F0aW9uZmlsbGVkBm1pY29mZgVpbWFnZQNtYXAHY29tcG9zZQV0cmFzaAZ1cGxvYWQIZG93bmxvYWQFY2xvc2UEcmVkbwR1bmRvB3JlZnJlc2gEc3Rhcgt3aGl0ZWNpcmNsZQVjbGVhcg1yZWZyZXNoZmlsbGVkCnN0YXJmaWxsZWQKcGx1c2ZpbGxlZAttaW51c2ZpbGxlZAxjaXJjbGVmaWxsZWQOY2hlY2tib3hmaWxsZWQKY2xvc2VlbXB0eQxyZWZyZXNoZW1wdHkGcmVsb2FkCHN0YXJoYWxmDHNwaW5uZXJjeWNsZQZzZWFyY2gJcGx1c2VtcHR5B2ZvcndhcmQEYmFjaw5jaGVja21hcmtlbXB0eQRob21lCG5hdmlnYXRlBGdlYXIKcGFwZXJwbGFuZQRpbmZvBGhlbHAGbG9ja2VkBG1vcmUEZmxhZwpob21lZmlsbGVkCmdlYXJmaWxsZWQKaW5mb2ZpbGxlZApoZWxwZmlsbGVkCm1vcmVmaWxsZWQIc2V0dGluZ3MEbGlzdARiYXJzBGxvb3AJcGFwZXJjbGlwCWV5ZWZpbGxlZAx1cHdhcmRzYXJyb3cOZG93bndhcmRzYXJyb3cObGVmdHdhcmRzYXJyb3cPcmlnaHR3YXJkc2Fycm93C2Fycm93dGhpbnVwDWFycm93dGhpbmRvd24NYXJyb3d0aGlubGVmdA5hcnJvd3RoaW5yaWdodAhwdWxsZG93bgVzb3VuZARzaG9wBHNjYW4KdW5kb2ZpbGxlZApyZWRvZmlsbGVkDGNhbWVyYWZpbGxlZApjYXJ0ZmlsbGVkBGNhcnQIY2hlY2tib3gRc21hbGxjaXJjbGVmaWxsZWQOZXllc2xhc2hmaWxsZWQIZXllc2xhc2gDZXllCmZsYWdmaWxsZWQVaGFuZHRodW1ic2Rvd25fZmlsbGVkDmhhbmR0aHVtYnNkb3duEmhhbmR0aHVtYnN1cGZpbGxlZAtoZWFydGZpbGxlZAxoYW5kdGh1bWJzdXAOYmxhY2toZWFydHN1aXQKY2hhdGZpbGxlZA5tYWlsb3BlbmZpbGxlZAhtYWlsb3Blbgxsb2NrZWRmaWxsZWQJbWFwZmlsbGVkBm1hcHBpbg1tYXBwaW5lbGxpcHNlC3NtYWxsY2lyY2xlEHBhcGVycGxhbmVmaWxsZWQLaW1hZ2VmaWxsZWQMaW1hZ2VzZmlsbGVkBmltYWdlcw5uYXZpZ2F0ZWZpbGxlZA5taWNzbGFzaGZpbGxlZAtzb3VuZGZpbGxlZA5kb3dubG9hZGZpbGxlZA52aWRlb2NhbWZpbGxlZAx1cGxvYWRmaWxsZWQKaGVhZHBob25lcwt0cmFzaGZpbGxlZA1jbG91ZGRvd25sb2FkEWNsb3VkdXBsb2FkZmlsbGVkC2Nsb3VkdXBsb2FkE2Nsb3VkZG93bmxvYWRmaWxsZWQHdW5pMDAwOQAAAAAB//8AAgABAAAADAAAABYAAAACAAEAAQCFAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANoxE3MAAAAA2jSpUA\x3d\x3d\x27) format(\x27truetype\x27); }\n.",[1],"uni-icons.",[1],"data-v-282df730 { font-family: uniicons; text-decoration: none; text-align: center; }\n",],undefined,{path:"./components/uni-icons/uni-icons.wxss"});    
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-nav-bar/uni-nav-bar.wxss']=setCssToHead([".",[1],"uni-nav-bar-text.",[1],"data-v-1f6a78ce { font-size: ",[0,34],"; }\n.",[1],"uni-nav-bar-right-text.",[1],"data-v-1f6a78ce { font-size: ",[0,28],"; }\n.",[1],"uni-navbar__content.",[1],"data-v-1f6a78ce { position: relative; background-color: #ffffff; overflow: hidden; }\n.",[1],"uni-navbar__content_view.",[1],"data-v-1f6a78ce { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; }\n.",[1],"uni-navbar__header.",[1],"data-v-1f6a78ce { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; height: 44px; line-height: 44px; font-size: 16px; }\n.",[1],"uni-navbar__header-btns.",[1],"data-v-1f6a78ce { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; flex-wrap: nowrap; width: ",[0,120],"; padding: 0 6px; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-navbar__header-btns-left.",[1],"data-v-1f6a78ce { display: -webkit-box; display: -webkit-flex; display: flex; width: ",[0,150],"; -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; }\n.",[1],"uni-navbar__header-btns-right.",[1],"data-v-1f6a78ce { display: -webkit-box; display: -webkit-flex; display: flex; width: ",[0,150],"; padding-right: ",[0,30],"; -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; }\n.",[1],"uni-navbar__header-container.",[1],"data-v-1f6a78ce { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"uni-navbar__header-container-inner.",[1],"data-v-1f6a78ce { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; font-size: ",[0,28],"; }\n.",[1],"uni-navbar__placeholder-view.",[1],"data-v-1f6a78ce { height: 44px; }\n.",[1],"uni-navbar--fixed.",[1],"data-v-1f6a78ce { position: fixed; z-index: 998; }\n.",[1],"uni-navbar--shadow.",[1],"data-v-1f6a78ce { box-shadow: 0 1px 6px #ccc; }\n.",[1],"uni-navbar--border.",[1],"data-v-1f6a78ce { border-bottom-width: ",[0,1],"; border-bottom-style: solid; border-bottom-color: #e5e5e5; }\n",],undefined,{path:"./components/uni-nav-bar/uni-nav-bar.wxss"});    
__wxAppCode__['components/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./components/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['components/uni-status-bar/uni-status-bar.wxss']=setCssToHead([".",[1],"uni-status-bar.",[1],"data-v-02afb5d4 { width: ",[0,750],"; height: 20px; }\n",],undefined,{path:"./components/uni-status-bar/uni-status-bar.wxss"});    
__wxAppCode__['components/uni-status-bar/uni-status-bar.wxml']=$gwx('./components/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['pages/book-mall/book-mall.wxss']=setCssToHead([".",[1],"l-body-tab { display: -webkit-box; display: -webkit-flex; display: flex; margin: ",[0,20]," 0 0; -webkit-box-align: center; -webkit-align-items: center; align-items: center; white-space: nowrap; -webkit-justify-content: space-around; justify-content: space-around; }\n.",[1],"l-tab-item-img { margin-bottom: ",[0,10],"; }\n.",[1],"l-tab-item-img-3, .",[1],"l-tab-item-img-1 { width: ",[0,60],"; height: ",[0,58],"; }\n.",[1],"l-tab-item-img-2 { width: ",[0,52],"; height: ",[0,56],"; }\n.",[1],"l-tab-item-img-4 { width: ",[0,54],"; height: ",[0,54],"; }\n.",[1],"l-tab-item-value { text-align: center; font-size: ",[0,26],"; color: var(--c-txt-2); }\n.",[1],"l-view { padding: ",[0,40]," var(--pad-lr); border-bottom: ",[0,1]," solid #222337; }\n.",[1],"l-view-not-border { padding-bottom: 0; border-bottom: none; }\n.",[1],"l-h3 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-h3-title { font: bold var(--f-size-5) normal; }\n.",[1],"l-h3-more { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; color: var(--c-bg-2); }\n.",[1],"l-icon-refresh { width: ",[0,33],"; height: ",[0,25],"; margin-left: ",[0,12],"; }\n.",[1],"l-icon-dot { width: ",[0,30],"; margin-top: ",[0,10],"; }\n.",[1],"l-dl { margin-top: ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; height: ",[0,224],"; }\n.",[1],"l-dt { width: ",[0,160],"; height: 100%; border-radius: ",[0,10],"; margin-right: ",[0,24],"; }\n.",[1],"l-dd { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-title { color: var(--c-txt-3); font: var(--f-size-3) normal; }\n.",[1],"l-dd-content, .",[1],"l-dd-footer { color: var(--c-txt-2); font: var(--f-size-2)/var(--f-size-4) normal; }\n.",[1],"l-dd-view-footer, .",[1],"l-dd-content { width: 100%; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }\n.",[1],"l-dd-view-footer { color: #868DAB; font-size: var(--f-size-1); -webkit-line-clamp: 2; }\n.",[1],"l-dd-content { -webkit-line-clamp: 3; }\n.",[1],"l-dd-footer { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"l-dd-img { width: ",[0,40],"; height: ",[0,40],"; border-radius: 50%; margin-right: ",[0,6],"; }\n.",[1],"l-dl-view { position: relative; height: ",[0,282],"; margin-top: ",[0,32],"; }\n.",[1],"l-dl-bg { height: ",[0,250],"; background: rgba(34, 35, 55, 1); box-shadow: 0px 30px 60px 0px rgba(17, 21, 26, 0.1); border-radius: ",[0,20],"; position: absolute; top: ",[0,32],"; left: 0; width: 100%; }\n.",[1],"l-dl-content { position: relative; z-index: 1; display: -webkit-box; display: -webkit-flex; display: flex; padding: 0 ",[0,48],"; }\n.",[1],"l-dt-view { width: ",[0,168],"; height: ",[0,250],"; border-radius: ",[0,10],"; margin-right: ",[0,30],"; }\n.",[1],"l-dd-view { width: calc(100% - ",[0,198],"); padding: ",[0,62]," 0 ",[0,14],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-view-content { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-dd-view-title { width: calc(100% - ",[0,62],"); border-bottom: ",[0,1]," solid #5D637C; }\n.",[1],"l-dd-view-ta, .",[1],"l-dd-view-tb { width: 100%; overflow: hidden; white-space: normal; text-overflow: ellipsis; }\n.",[1],"l-dd-view-ta { font: bold var(--f-size-3) normal; }\n.",[1],"l-dd-view-tb { color: #5D637C; padding: ",[0,14]," 0 ",[0,25],"; font-size: var(--f-size-1); }\n.",[1],"l-list-classify { padding: ",[0,32]," 0 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-list-item { width: ",[0,330],"; height: ",[0,160],"; background-color: #F5F7F9; border-radius: ",[0,16],"; margin-bottom: ",[0,24],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"l-item_view { width: calc(100% - ",[0,64],"); height: ",[0,122],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"l-item__value-title { font-size: var(--f-size-2); color: #2B3133; margin-bottom: ",[0,12],"; }\n.",[1],"l-item__value-sub { font-size: var(--f-size-1); color: #95A1A6; }\n.",[1],"l-img-classify { width: ",[0,98],"; height: 100%; }\n",],undefined,{path:"./pages/book-mall/book-mall.wxss"});    
__wxAppCode__['pages/book-mall/book-mall.wxml']=$gwx('./pages/book-mall/book-mall.wxml');

__wxAppCode__['pages/bookrack/bookrack.wxss']=setCssToHead([".",[1],"l-body { padding: var(--pad-lr) 0 var(--pad-lr) var(--pad-lr); }\n.",[1],"l-ul { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding-bottom: ",[0,32],"; -webkit-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"l-add, .",[1],"l-li { width: 28%; height: ",[0,392],"; margin-right: 5%; margin-bottom: ",[0,32],"; }\n.",[1],"l-li { text-align: center; }\n.",[1],"l-add-view, .",[1],"l-li-img { width: 100%; height: ",[0,300],"; border-radius: ",[0,10],"; margin-bottom: ",[0,8],"; }\n.",[1],"l-add-view { box-sizing: border-box; display: -webkit-box; display: -webkit-flex; display: flex; border: ",[0,6]," solid rgba(126, 127, 148, 1); -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"l-icon-add { width: ",[0,36],"; height: ",[0,36],"; }\n.",[1],"l-li-txt { padding: 0 ",[0,10],"; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }\n.",[1],"book-head { -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"book-title { margin-left: 5px; color: #fff; font-size: var(--f-size-3); }\n.",[1],"book-menu { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"book-new { position: absolute; top: ",[0,-20],"; right: ",[0,-30],"; background-color: #da0000; color: #fff; font-size: ",[0,8],"; padding: 0 ",[0,20],"; -webkit-transform: rotate(45deg); transform: rotate(45deg); height: ",[0,50],"; line-height: ",[0,75],"; }\n",],undefined,{path:"./pages/bookrack/bookrack.wxss"});    
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
