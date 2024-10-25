export function add(numbers: string): number {
    if (numbers === "") return 0;

    const delimiterRegex = /^\/\/(.+?)\n/;
    const match = numbers.match(delimiterRegex);
    
    let numString = numbers;

    if (match) {
        const customDelimiter = match[1]; 

        numString = numbers.replace(delimiterRegex, '');
        return addWithCustomDelimiter(numString, customDelimiter);
    }


    return addWithDefaultDelimiters(numbers);
}

function addWithCustomDelimiter(numbers: string, customDelimiter: string): number {

    const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const delimiters = [escapedDelimiter, '\n'];
    const delimiterPattern = new RegExp(`(${delimiters.join('|')})`);

    const numArray = numbers.split(delimiterPattern).map(Number).filter(num => !isNaN(num));

 
    checkForNegatives(numArray);
    
    return numArray.reduce((sum, num) => sum + num, 0);
}

function addWithDefaultDelimiters(numbers: string): number {
    const numArray = numbers.split(/[\n,]+/).map(Number).filter(num => !isNaN(num));

    checkForNegatives(numArray);
    
    return numArray.reduce((sum, num) => sum + num, 0);
}

function checkForNegatives(numArray: number[]): void {
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(","));
    }
}














  

  