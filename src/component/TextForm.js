import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("upper case was clicked" + text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Successfully converted to Upper case","success")
    }
    const handleLoClick =()=>{
        console.log("upper case was clicked" + text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Successfully converted to lower case","success")
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text has been cleared","success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("The translation of your text is ","success")
        }
        const handlecopy = ()=>{
        console.log("i am copy ")
        var text = document.getElementById("MyBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been copied" , "success")
      }
    
    const handleOnchange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
  return (
            <>
                <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}id>    
                    <h3>{props.heading}  </h3>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}}id="MyBox" rows="8"></textarea>
                </div>
             
               <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
               <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
               <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>  
               <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
               <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>  
                    </div>
                    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                        <h3>your text summary</h3>
                        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes Read</p>
                        <h2>Preview</h2>
                        <p>{text.length>0?text:"Enter Something in the Textbox to preview it here"}</p>
                    </div>
                    </>
                )
}
