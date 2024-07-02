const $effekt = {  };

const $getOp = "get_1185";

const $putOp = "put_1656";

class Tuple2_212 {
  constructor(first_215, second_216) {
    this.__tag = 0;
    this.first_215 = first_215;
    this.second_216 = second_216;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple2",
      __data: [this.first_215, this.second_216]
    };
  }
  __equals(other1773) {
    if (!other1773) return false;
    if (this.__tag !== other1773.__tag) return false;
    if (this.first_215 !== other1773.first_215) return false;
    if (this.second_216 !== other1773.second_216) return false;
    return true;
  }
}

class Tuple3_217 {
  constructor(first_221, second_222, third_223) {
    this.__tag = 0;
    this.first_221 = first_221;
    this.second_222 = second_222;
    this.third_223 = third_223;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple3",
      __data: [this.first_221, this.second_222, this.third_223]
    };
  }
  __equals(other1774) {
    if (!other1774) return false;
    if (this.__tag !== other1774.__tag) return false;
    if (this.first_221 !== other1774.first_221) return false;
    if (this.second_222 !== other1774.second_222) return false;
    if (this.third_223 !== other1774.third_223) return false;
    return true;
  }
}

class Tuple4_224 {
  constructor(first_229, second_230, third_231, fourth_232) {
    this.__tag = 0;
    this.first_229 = first_229;
    this.second_230 = second_230;
    this.third_231 = third_231;
    this.fourth_232 = fourth_232;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple4",
      __data: [this.first_229, this.second_230, this.third_231, this.fourth_232]
    };
  }
  __equals(other1775) {
    if (!other1775) return false;
    if (this.__tag !== other1775.__tag) return false;
    if (this.first_229 !== other1775.first_229) return false;
    if (this.second_230 !== other1775.second_230) return false;
    if (this.third_231 !== other1775.third_231) return false;
    if (this.fourth_232 !== other1775.fourth_232) return false;
    return true;
  }
}

class Tuple5_233 {
  constructor(first_239, second_240, third_241, fourth_242, fifth_243) {
    this.__tag = 0;
    this.first_239 = first_239;
    this.second_240 = second_240;
    this.third_241 = third_241;
    this.fourth_242 = fourth_242;
    this.fifth_243 = fifth_243;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple5",
      __data: [this.first_239, this.second_240, this.third_241, this.fourth_242, this.fifth_243]
    };
  }
  __equals(other1776) {
    if (!other1776) return false;
    if (this.__tag !== other1776.__tag) return false;
    if (this.first_239 !== other1776.first_239) return false;
    if (this.second_240 !== other1776.second_240) return false;
    if (this.third_241 !== other1776.third_241) return false;
    if (this.fourth_242 !== other1776.fourth_242) return false;
    if (this.fifth_243 !== other1776.fifth_243) return false;
    return true;
  }
}

class Tuple6_244 {
  constructor(first_251, second_252, third_253, fourth_254, fifth_255, sixth_256) {
    this.__tag = 0;
    this.first_251 = first_251;
    this.second_252 = second_252;
    this.third_253 = third_253;
    this.fourth_254 = fourth_254;
    this.fifth_255 = fifth_255;
    this.sixth_256 = sixth_256;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple6",
      __data: [this.first_251, this.second_252, this.third_253, this.fourth_254, this.fifth_255, this.sixth_256]
    };
  }
  __equals(other1777) {
    if (!other1777) return false;
    if (this.__tag !== other1777.__tag) return false;
    if (this.first_251 !== other1777.first_251) return false;
    if (this.second_252 !== other1777.second_252) return false;
    if (this.third_253 !== other1777.third_253) return false;
    if (this.fourth_254 !== other1777.fourth_254) return false;
    if (this.fifth_255 !== other1777.fifth_255) return false;
    if (this.sixth_256 !== other1777.sixth_256) return false;
    return true;
  }
}

class RuntimeError_260 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "RuntimeError", __data: [] };
  }
  __equals(other1778) {
    if (!other1778) return false;
    if (this.__tag !== other1778.__tag) return false;
    return true;
  }
}

class None_415 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "None", __data: [] };
  }
  __equals(other1779) {
    if (!other1779) return false;
    if (this.__tag !== other1779.__tag) return false;
    return true;
  }
}

class Some_416 {
  constructor(value_418) {
    this.__tag = 1;
    this.value_418 = value_418;
  }
  __reflect() {
    return { __tag: 1, __name: "Some", __data: [this.value_418] };
  }
  __equals(other1780) {
    if (!other1780) return false;
    if (this.__tag !== other1780.__tag) return false;
    if (this.value_418 !== other1780.value_418) return false;
    return true;
  }
}

class EmptyList_633 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "EmptyList", __data: [] };
  }
  __equals(other1781) {
    if (!other1781) return false;
    if (this.__tag !== other1781.__tag) return false;
    return true;
  }
}

class OutOfBounds_634 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "OutOfBounds", __data: [] };
  }
  __equals(other1782) {
    if (!other1782) return false;
    if (this.__tag !== other1782.__tag) return false;
    return true;
  }
}

class Nil_635 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "Nil", __data: [] };
  }
  __equals(other1783) {
    if (!other1783) return false;
    if (this.__tag !== other1783.__tag) return false;
    return true;
  }
}

class Cons_636 {
  constructor(head_639, tail_640) {
    this.__tag = 1;
    this.head_639 = head_639;
    this.tail_640 = tail_640;
  }
  __reflect() {
    return {
      __tag: 1,
      __name: "Cons",
      __data: [this.head_639, this.tail_640]
    };
  }
  __equals(other1784) {
    if (!other1784) return false;
    if (this.__tag !== other1784.__tag) return false;
    if (this.head_639 !== other1784.head_639) return false;
    if (this.tail_640 !== other1784.tail_640) return false;
    return true;
  }
}

const $runtime = (function() {

  // Common Runtime
  // --------------

  // Regions
  // TODO maybe use weak refs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
  function Cell(init) {
    var _value = init;
    const cell = ({
      backup: function() {
        var _backup = _value
        var cell = this;
        return () => { _value = _backup; return cell }
      }
    });
    // $getOp and $putOp are auto generated from the compiler
    cell[$getOp] = function() {
      return _value
    };
    cell[$putOp] = function(v) {
      _value = v;
      return $effekt.unit;
    };
    return cell
  }

  function Arena() {
    return {
      fields: [], // Array[Cell],
      fresh: function(init) {
        const cell = Cell(init)
        this.fields.push(cell)
        return cell;
      },
      backup: function() {
        return this.fields.map(c => c.backup())
      },
      restore: function(backup) {
        this.fields = backup.map(c => c());
        return this
      }
    }
  }

  const global = {
    fresh: function(init) { return Cell(init) },
    backup: function() {},
    restore: function(_) {}
  }

  // Lists / Pairs
  function Cons(head, tail) {
    return { head: head, tail: tail }
  }
  const Nil = null

  // reverseOnto[A, B, C](init: Frames[A, B], tail: Stack[B, C]): Stack[A, C]
  function reverseOnto(init, tail) {
    let rest = init;
    let result = tail;
    while (rest !== Nil) {
      result = Cons(rest.head, result)
      rest = rest.tail
    }
    return result
  }

  let _prompt = 2;

  // Monadic Style Runtime
  // ---------------------

  const toplevel = 1;

  // Result -- Trampoline
  function Step(c, k) {
    return { isStep: true, c: c, k: k }
  }
  function trampoline(r) {
    var res = r
    while (res !== null && res !== undefined && res.isStep) {
      res = res.c.apply(res.k)
    }
    return res
  }

  // Frame = A => Control[B]

  // Metacontinuations / Stacks
  // (frames: List<Frame>, fields: [Cell], prompt: Int, tail: Stack) -> Stack
  function Stack(frames, arena, prompt, tail) {
    return { frames: frames, arena: arena, prompt: prompt, tail: tail }
  }
  function SubStack(frames, arena, backup, prompt, tail) {
    return { frames: frames, arena: arena, backup: backup, prompt: prompt, tail: tail }
  }
  const EmptyStack = null;

  // (stack: Stack<A, B>, a: A) -> Step<B>
  function apply(stack, a) {
    var s = stack;
    while (true) {
      if (s === EmptyStack) return a;
      const fs = s.frames;
      if (fs === Nil) { s = s.tail; continue }
      const result = fs.head(a);
      s.frames = fs.tail;
      return Step(result, s)
    }
  }

  // (subcont: Stack, stack: Stack) -> Stack
  function pushSubcont(subcont, stack) {
    var sub = subcont;
    var s = stack;

    while (sub !== EmptyStack) {
      s = Stack(sub.frames, sub.arena.restore(sub.backup), sub.prompt, s)
      sub = sub.tail
    }
    return s;
  }

  function flatMap(stack, f) {
    if (stack === EmptyStack) { return Stack(Cons(f, Nil), Arena(), null, stack) }
    var fs = stack.frames
    // it should be safe to mutate the frames field, since they are copied in the subcont
    stack.frames = Cons(f, fs)
    return stack
  }

  function splitAt(stack, p) {
    var sub = EmptyStack;
    var s = stack;

    while (s !== EmptyStack) {
      const currentPrompt = s.prompt;
      sub = SubStack(s.frames, s.arena, s.arena.backup(), currentPrompt, sub);
      s = s.tail;
      if (currentPrompt === p) { return Cons(sub, s) }
    }
    throw ("Prompt " + p + " not found")
  }

  function allocateInto(stack, p, cell) {
    var s = stack;

    while (s !== EmptyStack) {
      const currentPrompt = s.prompt
      if (currentPrompt === p) {
        return s.fields.push(cell);
      } else {
        s = s.tail
      }
    }
    throw ("Prompt " + p + " not found")
  }

  function withState(init, f) {
    return Control(k => {
      const cell = k.arena.fresh(init)
      return Step(f(cell), k)
    })
  }

  function withRegion(prog) {
    return Control(k => {
      return Step(prog(k.arena), k)
    })
  }

  function withStateIn(prompt, init, f) {
    const cell = Cell(init)

    if (prompt === toplevel) {
      return f(cell)
    } else {
      return Control(k => {
        allocateInto(k, prompt, cell);
        return Step(f(cell), k)
      })
    }
  }

  // Delimited Control
  function Control(apply) {
    const self = {
      apply: apply,
      run: () => trampoline(Step(self, Stack(Nil, global, toplevel, EmptyStack))),
      then: f => Control(k => Step(self, flatMap(k, f))),
      state: f => self.then(init => withState(init, f))
    }
    return self
  }

  const pure = a => Control(k => apply(k, a))

  const delayed = a => Control(k => apply(k, a()))

  const shift = (p, f) => Control(k => {
    const split = splitAt(k, p)
    const localCont = a => Control(k =>
      Step(pure(a), pushSubcont(split.head, k)))
    return Step(f(localCont), split.tail)
  })

  const callcc = f => Control(k => {
    return f(a => trampoline(apply(k, a)))
  })

  const abort = Control(k => $effekt.unit)


  const capture = f => {
    // [abort; f
    const action = () => f($effekt.unit).then(() => abort)
    return shift(toplevel)(k =>
      k({
        shouldRun: false,
        cont : () => k({ shouldRun: true, cont: action })
      })).then(a => a.shouldRun ? a.cont() : $effekt.pure(a.cont))
  }

  //const reset = (p, c => Control(k => Step(c, Stack(Nil, Arena(), p, k)))

  function handleMonadic(body) {
    const p = _prompt++;
    return Control(k => Step(body(p), Stack(Nil, Arena(), p, k)))
  }

  // Direct Style Runtime
  // --------------------

  // sealed trait Resumption[A, R]
  // case class Empty[A]() extends Resumption[A, A]
  // case class Segment[A, B, C](head: Stack[B, C], prompt: Prompt, tail: Resumption[A, B]) extends Resumption[A, C]
  class Segment {
    constructor(frames, prompt, region, backup, tail) {
      this.frames = frames;
      this.prompt = prompt;
      this.region = region;
      this.backup = backup;
      this.tail = tail;
    }
  }
  const Empty = null;

  // TODO maybe inline later to save native frames
  function handleOrRethrow(prompt, s, rest) {
    if (!(s instanceof Suspension)) throw s;

    const region = currentRegion
    const k = new Segment(reverseOnto(s.frames, rest), prompt, region, region.backup(), s.cont)
    if (s.prompt === prompt)  {
      return s.body((value) => rewind(k, () => value))
    } else {
      throw new Suspension(s.prompt, s.body, Nil, k)
    }
  }

  function rewind(k, thunk) {
    if (k === Empty) {
      return thunk()
    } else {
      const prompt = k.prompt;
      const region = k.region;
      let rest = k.frames // the pure frames

      // The trampoline
      try {
        enterRegion(region);
        region.restore(k.backup);

        let curr = rewind(k.tail, thunk)
        while (rest !== Nil) {
          const f = rest.head
          rest = rest.tail
          curr = f(curr)
        }
        return curr
      } catch (s) {
        return handleOrRethrow(prompt, s, rest)
      } finally {
        leaveRegion()
      }
    }
  }


  // case class Suspend[A, X, Y, R](
  //   body: Continuation[A, R] => R,
  //   prompt: Prompt,
  //   pure: Frames[X, Y],
  //   cont: Resumption[A, X]
  // )
  class Suspension {
    constructor(p, body, frames, cont) {
      this.prompt = p;
      this.body = body;
      this.frames = frames;
      this.cont = cont;
    }
  }

  // initially the toplevel region.
  let currentRegion = global

  // a stack of regions
  let regions = []

  function enterRegion(r) {
    regions.push(currentRegion)
    currentRegion = r
    return r
  }

  function leaveRegion() {
    const leftRegion = currentRegion
    currentRegion = regions.pop()
    return leftRegion
  }

  return {
    // Common API
    // -----------
    constructor: (_, tag) => function() {
      return { __tag: tag, __data: Array.from(arguments) }
    },

    hole: function() { throw "Implementation missing" },

    // Monadic API
    // -----------
    pure: pure,
    callcc: callcc,
    capture: capture,
    delayed: delayed,
    handleMonadic: handleMonadic,
    ref: Cell,
    state: withState,
    shift: shift,
    _if: (c, thn, els) => c ? thn() : els(),
    withRegion: withRegion,


    // Direct style API
    // ----------------
    fresh: function(init) {
      return currentRegion.fresh(init)
    },

    freshPrompt: function() { return ++_prompt; },

    suspend: function(prompt, body) {
      _stacksize = 0;
      throw new Suspension(prompt, body, Nil, Empty)
    },
    suspend_bidirectional: function(prompt, caps, body) {
      throw new Suspension(prompt, body, Cons(thunk => thunk.apply(null, caps), Nil), Empty)
    },

    // suspension: the raised exception.
    push: function(suspension, frame) {
      if (!(suspension instanceof Suspension)) throw suspension;
      // Assuming `suspension` is a value or variable you want to return
      throw new Suspension(suspension.prompt, suspension.body,
        Cons(frame, suspension.frames), suspension.cont);
    },

    handle: function(prompt, s) {
      return handleOrRethrow(prompt, s, Nil)
    },

    freshRegion: function() {
      return enterRegion(new Arena)
    },

    leaveRegion: leaveRegion,

    global: global
  }
})()

Object.assign($effekt, $runtime);


function show$impl(obj) {
  if (!!obj && !!obj.__reflect) {
    const meta = obj.__reflect()
    return meta.__name + "(" + meta.__data.map(show$impl).join(", ") + ")"
  }
  else if (!!obj && obj.__unit) {
    return "()";
  } else {
    return "" + obj;
  }
}

function equals$impl(obj1, obj2) {
  if (!!obj1.__equals) {
    return obj1.__equals(obj2)
  } else {
    return (obj1.__unit && obj2.__unit) || (obj1 === obj2);
  }
}

function println$impl(obj) {
  //return $effekt.delayed(() => { console.log(show(obj)); return $effekt.unit; });
  console.log(show$impl(obj)); return $effekt.unit;
}

$effekt.unit = { __unit: true }

function main_1771() {
  const tmp1191_1772 = println$impl("Hello world!");
  return $effekt.pure(tmp1191_1772);
}

module.exports = { main: () => main_1771().run() };