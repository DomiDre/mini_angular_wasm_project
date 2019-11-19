/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  import('toy-rust-wasm')
  .then(module => {
    const result = module.add(data.a, data.b);
    postMessage(result);
  });
});
