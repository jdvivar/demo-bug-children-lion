## Compiler result
```
$ npm run compile

[4:44:16 PM] File change detected. Starting incremental compilation...

demo-children-extended.ts:5:17 - error TS2339: Property 'children' does not exist on type 'DemoChildren'.

5     return this.children
                  ~~~~~~~~

[4:44:17 PM] Found 1 error. Watching for file changes.
```

However, note the compiler doesn't warn you on [`demo-children-lit-element.ts`](demo-children-lit-element.ts) which has exactly the same code except `LitElement` is imported from `lit-element` instead of `lit-element`, **WHY**?