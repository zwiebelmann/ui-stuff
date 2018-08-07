export default function convertToBoolean(input: string): boolean | null {
    try {
        return JSON.parse(input);
    }
    catch (e) {
        return null;
    }
}