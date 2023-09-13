const snarkjs = require("snarkjs");

async function runSnarkJSExample() {
  try {
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      { in: 10 },
      "../build/poseidon_hasher_js/poseidon_hasher.wasm",
      "../circuit_0000.zkey"
    );
    console.log("Public Signals:", publicSignals);
    console.log("Proof:", proof);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

runSnarkJSExample();
