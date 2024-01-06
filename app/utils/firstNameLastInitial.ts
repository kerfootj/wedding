/**
 * From a full name parse out the first name and last initial.
 * @param name - A full name i.e. "FirstName LastName"
 * @returns a string containing the first name and last initial
 */
export function firstNameLastInitial(name: string): string {
    const [firstName, lastName] = name.split(' ');
    const lastInitial = lastName.charAt(0);

    return `${firstName} ${lastInitial}.`;
}
