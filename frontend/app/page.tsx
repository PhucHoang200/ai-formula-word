"use client"

import {useState} from "react"
import FormulaPreview from "../components/FormulaPreview"
import {extractFormula} from "../utils/extractFormula"

export default function Page(){

 const [text,setText] = useState("")
 const [formula,setFormula] = useState("")

 const preview = ()=>{

  const f = extractFormula(text)

  setFormula(f)

 }

 const convert = async ()=>{

  const res = await fetch(
   process.env.NEXT_PUBLIC_API_URL + "/convert",
   {
    method:"POST",
    headers:{
     "Content-Type":"application/json"
    },
    body:JSON.stringify({text})
   }
  )

  if(!res.ok){
   alert("Convert failed")
   return
  }

  const blob = await res.blob()

  const url = window.URL.createObjectURL(blob)

  const a = document.createElement("a")

  a.href = url
  a.download = "formula.docx"

  a.click()

 }

 return (

 <div style={{padding:40}}>

  <h1>AI Formula → Word Converter</h1>

  <textarea
   style={{width:"100%",height:200}}
   value={text}
   onChange={(e)=>setText(e.target.value)}
  />

  <div style={{marginTop:20}}>

   <button onClick={preview}>
    Preview
   </button>

   <button
    style={{marginLeft:10}}
    onClick={convert}
   >
    Convert to Word
   </button>

  </div>

  <div style={{marginTop:30}}>

   <FormulaPreview formula={formula}/>

  </div>

 </div>

 )

}