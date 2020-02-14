## Compiler result
```
$ npm run compile

[11:10:10 AM] File change detected. Starting incremental compilation...

demo-children-lion-core.ts:11:20 - error TS2339: Property 'children' does not exist on type 'DemoChildren'.

11         ${[...this.children]}
                      ~~~~~~~~

[11:10:10 AM] Found 1 error. Watching for file changes.
```

However, note the compiler doesn't warn you on [`demo-children-lit-element.ts`](demo-children-lit-element.ts) which has exactly the same code except `LitElement` is imported from `lit-element` instead of `@lion/core`, **WHY**?