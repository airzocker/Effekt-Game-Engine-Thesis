const $effekt = {  };

const $getOp = "get_2786";

const $putOp = "put_2787";

class Less_299 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "Less", __data: [] };
  }
  __equals(other3909) {
    if (!other3909) return false;
    if (!($effekt.equals(this.__tag, other3909.__tag))) return false;
    return true;
  }
}

class Equal_300 {
  constructor() {
    this.__tag = 1;
  }
  __reflect() {
    return { __tag: 1, __name: "Equal", __data: [] };
  }
  __equals(other3910) {
    if (!other3910) return false;
    if (!($effekt.equals(this.__tag, other3910.__tag))) return false;
    return true;
  }
}

class Greater_301 {
  constructor() {
    this.__tag = 2;
  }
  __reflect() {
    return { __tag: 2, __name: "Greater", __data: [] };
  }
  __equals(other3911) {
    if (!other3911) return false;
    if (!($effekt.equals(this.__tag, other3911.__tag))) return false;
    return true;
  }
}

class Tuple2_303 {
  constructor(first_306, second_307) {
    this.__tag = 0;
    this.first_306 = first_306;
    this.second_307 = second_307;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple2",
      __data: [this.first_306, this.second_307]
    };
  }
  __equals(other3912) {
    if (!other3912) return false;
    if (!($effekt.equals(this.__tag, other3912.__tag))) return false;
    if (!($effekt.equals(this.first_306, other3912.first_306))) return false;
    if (!($effekt.equals(this.second_307, other3912.second_307))) return false;
    return true;
  }
}

class Tuple3_308 {
  constructor(first_312, second_313, third_314) {
    this.__tag = 0;
    this.first_312 = first_312;
    this.second_313 = second_313;
    this.third_314 = third_314;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple3",
      __data: [this.first_312, this.second_313, this.third_314]
    };
  }
  __equals(other3913) {
    if (!other3913) return false;
    if (!($effekt.equals(this.__tag, other3913.__tag))) return false;
    if (!($effekt.equals(this.first_312, other3913.first_312))) return false;
    if (!($effekt.equals(this.second_313, other3913.second_313))) return false;
    if (!($effekt.equals(this.third_314, other3913.third_314))) return false;
    return true;
  }
}

class Tuple4_315 {
  constructor(first_320, second_321, third_322, fourth_323) {
    this.__tag = 0;
    this.first_320 = first_320;
    this.second_321 = second_321;
    this.third_322 = third_322;
    this.fourth_323 = fourth_323;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple4",
      __data: [this.first_320, this.second_321, this.third_322, this.fourth_323]
    };
  }
  __equals(other3914) {
    if (!other3914) return false;
    if (!($effekt.equals(this.__tag, other3914.__tag))) return false;
    if (!($effekt.equals(this.first_320, other3914.first_320))) return false;
    if (!($effekt.equals(this.second_321, other3914.second_321))) return false;
    if (!($effekt.equals(this.third_322, other3914.third_322))) return false;
    if (!($effekt.equals(this.fourth_323, other3914.fourth_323))) return false;
    return true;
  }
}

class Tuple5_324 {
  constructor(first_330, second_331, third_332, fourth_333, fifth_334) {
    this.__tag = 0;
    this.first_330 = first_330;
    this.second_331 = second_331;
    this.third_332 = third_332;
    this.fourth_333 = fourth_333;
    this.fifth_334 = fifth_334;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple5",
      __data: [this.first_330, this.second_331, this.third_332, this.fourth_333, this.fifth_334]
    };
  }
  __equals(other3915) {
    if (!other3915) return false;
    if (!($effekt.equals(this.__tag, other3915.__tag))) return false;
    if (!($effekt.equals(this.first_330, other3915.first_330))) return false;
    if (!($effekt.equals(this.second_331, other3915.second_331))) return false;
    if (!($effekt.equals(this.third_332, other3915.third_332))) return false;
    if (!($effekt.equals(this.fourth_333, other3915.fourth_333))) return false;
    if (!($effekt.equals(this.fifth_334, other3915.fifth_334))) return false;
    return true;
  }
}

class Tuple6_335 {
  constructor(first_342, second_343, third_344, fourth_345, fifth_346, sixth_347) {
    this.__tag = 0;
    this.first_342 = first_342;
    this.second_343 = second_343;
    this.third_344 = third_344;
    this.fourth_345 = fourth_345;
    this.fifth_346 = fifth_346;
    this.sixth_347 = sixth_347;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple6",
      __data: [this.first_342, this.second_343, this.third_344, this.fourth_345, this.fifth_346, this.sixth_347]
    };
  }
  __equals(other3916) {
    if (!other3916) return false;
    if (!($effekt.equals(this.__tag, other3916.__tag))) return false;
    if (!($effekt.equals(this.first_342, other3916.first_342))) return false;
    if (!($effekt.equals(this.second_343, other3916.second_343))) return false;
    if (!($effekt.equals(this.third_344, other3916.third_344))) return false;
    if (!($effekt.equals(this.fourth_345, other3916.fourth_345))) return false;
    if (!($effekt.equals(this.fifth_346, other3916.fifth_346))) return false;
    if (!($effekt.equals(this.sixth_347, other3916.sixth_347))) return false;
    return true;
  }
}

class MissingValue_535 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "MissingValue", __data: [] };
  }
  __equals(other3917) {
    if (!other3917) return false;
    if (!($effekt.equals(this.__tag, other3917.__tag))) return false;
    return true;
  }
}

class OutOfBounds_536 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "OutOfBounds", __data: [] };
  }
  __equals(other3918) {
    if (!other3918) return false;
    if (!($effekt.equals(this.__tag, other3918.__tag))) return false;
    return true;
  }
}

class RuntimeError_537 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "RuntimeError", __data: [] };
  }
  __equals(other3919) {
    if (!other3919) return false;
    if (!($effekt.equals(this.__tag, other3919.__tag))) return false;
    return true;
  }
}

class WrongFormat_538 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "WrongFormat", __data: [] };
  }
  __equals(other3920) {
    if (!other3920) return false;
    if (!($effekt.equals(this.__tag, other3920.__tag))) return false;
    return true;
  }
}

class on_555 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "on", __data: [] };
  }
  __equals(other3921) {
    if (!other3921) return false;
    if (!($effekt.equals(this.__tag, other3921.__tag))) return false;
    return true;
  }
}

class None_742 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "None", __data: [] };
  }
  __equals(other3922) {
    if (!other3922) return false;
    if (!($effekt.equals(this.__tag, other3922.__tag))) return false;
    return true;
  }
}

class Some_743 {
  constructor(value_745) {
    this.__tag = 1;
    this.value_745 = value_745;
  }
  __reflect() {
    return { __tag: 1, __name: "Some", __data: [this.value_745] };
  }
  __equals(other3923) {
    if (!other3923) return false;
    if (!($effekt.equals(this.__tag, other3923.__tag))) return false;
    if (!($effekt.equals(this.value_745, other3923.value_745))) return false;
    return true;
  }
}

class Nil_1060 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "Nil", __data: [] };
  }
  __equals(other3924) {
    if (!other3924) return false;
    if (!($effekt.equals(this.__tag, other3924.__tag))) return false;
    return true;
  }
}

class Cons_1061 {
  constructor(head_1064, tail_1065) {
    this.__tag = 1;
    this.head_1064 = head_1064;
    this.tail_1065 = tail_1065;
  }
  __reflect() {
    return {
      __tag: 1,
      __name: "Cons",
      __data: [this.head_1064, this.tail_1065]
    };
  }
  __equals(other3925) {
    if (!other3925) return false;
    if (!($effekt.equals(this.__tag, other3925.__tag))) return false;
    if (!($effekt.equals(this.head_1064, other3925.head_1064))) return false;
    if (!($effekt.equals(this.tail_1065, other3925.tail_1065))) return false;
    return true;
  }
}

class Error_1791 {
  constructor(exception_1794, msg_1795) {
    this.__tag = 0;
    this.exception_1794 = exception_1794;
    this.msg_1795 = msg_1795;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Error",
      __data: [this.exception_1794, this.msg_1795]
    };
  }
  __equals(other3926) {
    if (!other3926) return false;
    if (!($effekt.equals(this.__tag, other3926.__tag))) return false;
    if (!($effekt.equals(this.exception_1794, other3926.exception_1794))) return false;
    if (!($effekt.equals(this.msg_1795, other3926.msg_1795))) return false;
    return true;
  }
}

class Success_1796 {
  constructor(a_1798) {
    this.__tag = 1;
    this.a_1798 = a_1798;
  }
  __reflect() {
    return { __tag: 1, __name: "Success", __data: [this.a_1798] };
  }
  __equals(other3927) {
    if (!other3927) return false;
    if (!($effekt.equals(this.__tag, other3927.__tag))) return false;
    if (!($effekt.equals(this.a_1798, other3927.a_1798))) return false;
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


$effekt.show = function(obj) {
  if (!!obj && !!obj.__reflect) {
    const meta = obj.__reflect()
    return meta.__name + "(" + meta.__data.map($effekt.show).join(", ") + ")"
  }
  else if (!!obj && obj.__unit) {
    return "()";
  } else {
    return "" + obj;
  }
}

$effekt.equals = function(obj1, obj2) {
  if (!!obj1.__equals) {
    return obj1.__equals(obj2)
  } else {
    return (obj1.__unit && obj2.__unit) || (obj1 === obj2);
  }
}

function compare$prim(n1, n2) {
  if (n1 == n2) { return 0; }
  else if (n1 > n2) { return 1; }
  else { return -1; }
}

$effekt.compare = function(obj1, obj2) {
  if ($effekt.equals(obj1, obj2)) { return 0; }

  if (!!obj1 && !!obj2) {
    if (!!obj1.__reflect && !!obj2.__reflect) {
      const tagOrdering = compare$prim(obj1.__tag, obj2.__tag)
      if (tagOrdering != 0) { return tagOrdering; }

      const meta1 = obj1.__reflect().__data
      const meta2 = obj2.__reflect().__data

      const lengthOrdering = compare$prim(meta1.length, meta2.length)
      if (lengthOrdering != 0) { return lengthOrdering; }

      for (let i = 0; i < meta1.length; i++) {
        const contentOrdering = $effekt.compare(meta1[i], meta2[i])
        if (contentOrdering != 0) { return contentOrdering; }
      }

      return 0;
    }
  }

  return compare$prim(obj1, obj2);
}

$effekt.println = function println$impl(str) {
  console.log(str); return $effekt.unit;
}

$effekt.unit = { __unit: true }


function array$set(arr, index, value) {
  arr[index] = value;
  return $effekt.unit
}



function set$impl(ref, value) {
  ref.value = value;
  return $effekt.unit;
}




function setFillStyle(context, color) {
   context.fillStyle = color;
}



function main_2699() {
  const canvas4_3888 = document.getElementById('myCanvas');
  const ctx5_3889 = (canvas4_3888).getContext('2d');
  return $effekt.handleMonadic((p3928) => {
    const Context$capability6_3894 = {
      fillStyle_2713: (color7_3897) => {
        return $effekt.shift(p3928, (resume8_3896) => {
          const _9_3899 = setFillStyle(ctx5_3889, color7_3897);
          return resume8_3896(42);
        });
      },
      fillRect_2718: (x10_3901, y11_3902, width12_3903, height13_3904) => {
        return $effekt.shift(p3928, (resume14_3900) => {
          const _15_3905 = (ctx5_3889).fillRect(x10_3901, y11_3902, width12_3903, height13_3904);
          return resume14_3900($effekt.unit);
        });
      }
    };
    return Context$capability6_3894.fillStyle_2713("blue").then((_333_3908) =>
      Context$capability6_3894.fillRect_2718(50, 50, 200, 100));
  });
}

(typeof module != "undefined" && module !== null ? module : {}).exports = $main = {
  main: () => main_2699().run()
};