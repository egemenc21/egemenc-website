'use client'
import ReactTyped from "react-typed";

function TypedTitle({typedStrings} : {typedStrings : string[]}) {
  return (
    <ReactTyped
            strings={typedStrings}
            typeSpeed={80}
            backSpeed={80}
            loop={true}
          />
  )
}

export default TypedTitle;