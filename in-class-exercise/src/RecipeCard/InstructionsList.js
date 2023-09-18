import React from 'react'

function InstructionsList(props) {
    const { instructions } = props;
    return (
      <div>
        <div className='title-1'>Instructions</div>
        <ol>
          {instructions.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ol>
      </div>
    );
}

export default InstructionsList
