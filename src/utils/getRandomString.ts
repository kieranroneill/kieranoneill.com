export default function getRandomString(length: number = 5): string {
  const possibleCharacters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let text: string = '';

  for (let i: number = 0; i < length; i++) {
    text += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }

  return text;
}
