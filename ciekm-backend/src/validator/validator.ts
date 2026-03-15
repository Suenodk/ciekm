export class Validator {
    static stringIsNullOrWhitespace(value: string): boolean {
        if (!value || value.trim() === "") {
            return true;
        }

        return false;
    }
}
