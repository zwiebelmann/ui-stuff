export default function <key, value>(original: Map<key, value>) {
    const clone = new Map<key, value>();

    original.forEach((item, identifier) => {
        clone.set(identifier, item);
    });
    
    return clone;
}