function add2(a: number | string, b: number | string): number | string | undefined {
    if (typeof a === "number" && typeof b === "number") return a + b
    if (typeof a === "string" && typeof b === "string") return a + b
    else return undefined
}
// Logra que esta funcion tambien concatene strings