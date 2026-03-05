"use client"

import {BlockMath} from "react-katex"
import "katex/dist/katex.min.css"

export default function FormulaPreview({
 formula
}:{formula:string}){

 if(!formula){
  return null
 }

 return (

  <div style={{padding:"20px",border:"1px solid #ccc"}}>
   <BlockMath math={formula}/>
  </div>

 )
}