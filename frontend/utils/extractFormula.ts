export function extractFormula(text: string) {

 const match = text.match(/\$\$([\s\S]*?)\$\$/)

 if (match) {
  return match[1]
 }

 return ""

}