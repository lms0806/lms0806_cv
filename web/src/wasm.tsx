import init, { add, greet } from "../../web/src/wasm/main"

let initialized = false;

export async function initWasm() {
    if (!initialized) {
        await init();
        initialized = true;
    }
}

export { add, greet };