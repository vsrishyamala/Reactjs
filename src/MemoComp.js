import  React from 'react';

function MemoComp(props)
{
    console.log(" Memo component console")
    return(
        <div>
            inside Memo function {props.days}
        </div>
    )
}
export default React.memo(MemoComp)