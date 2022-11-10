import React from "react";
export default function About(props) {
    // const [myStyle , setMyStyle] = useState( {
    //     color:'white',
    //     backgroundColor: 'black'
    // })
    // const [btntext,setBtnText]=useState ("Enabale light Mode")
    let myStyle={
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor : props.mode==='dark'?'#042743':'white',
    }
    
 
  return (
    <div className="conatiner" style={myStyle}>
      <h2 className="my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>About us </h2>
      <div className="accordion" id="accordionExample" style={myStyle} >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapased" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Browser Compaitable</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils.</strong>   The TextUtils class is a tool class that comes with the system, which contains some static methods. It is a collection method class that handles some common tools related to Text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong >Analayze your text</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            I found the CharSequence class while reading the source code. So here is a brief introduction, this type, I have seen it many times, but I don't know much about it. It is an interface that describes the structure of strings. This interface implements some commonly used String, StringBuffer, StringBuilder, etc., so the representation of Text in the TextUtils class generally uses CharSequence.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>Free To use</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Get the length of the string public int length();

Get the character at the specified index public char charAt(int index);

Intercept the string in the start-end phase: public CharSequence subSequence(int start,int end)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
